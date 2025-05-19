$(document).ready(function() {
    let hoursChart = null;
    
    $('#hoursForm').on('submit', function(e) {
        e.preventDefault();
        
        $('#spinner').show();
        $('#noResultsSection').hide();
        $('#resultsSection').hide();
        
        const attendanceIn = $('#attendanceIn').val();
        const attendanceOut = $('#attendanceOut').val();
        
        const concepts = [
            {
                id: "HO",
                name: "HO",
                start: $('#HO-start').val(),
                end: $('#HO-end').val()
            },
            {
                id: "HED",
                name: "HED",
                start: $('#HED-start').val(),
                end: $('#HED-end').val()
            },
            {
                id: "HEN",
                name: "HEN",
                start: $('#HEN-start').val(),
                end: $('#HEN-end').val()
            }
        ];
        
        const payload = {
            attendanceIn: attendanceIn,
            attendanceOut: attendanceOut,
            concepts: concepts
        };
        
        $.ajax({
            url: 'https://falconcloud.co/site_srv10_ph/site/api/qserv.php/13465-770721',
            type: 'POST',
            data: JSON.stringify(payload),
            contentType: 'application/json',
            success: function(response) {
                $('#spinner').hide();
                displayResults(response);
            },
            error: function(xhr, status, error) {
                $('#spinner').hide();
                alert('Error al calcular las horas. Por favor, intente nuevamente.');
                console.error('Error:', error);
            }
        });
    });
    
    function displayResults(data) {
        $('#noResultsSection').hide();
        $('#resultsSection').show();
        
        $('#results-container').empty();
        
        const typeInfo = {
            "HO": { icon: "fa-business-time", color: "#0d6efd", desc: "Horas Ordinarias" },
            "HED": { icon: "fa-sun", color: "#198754", desc: "Horas Extras Diurnas" },
            "HEN": { icon: "fa-moon", color: "#6610f2", desc: "Horas Extras Nocturnas" }
        };
        
        for (const key in data) {
            if (typeInfo[key]) {
                const html = `
                    <div class="result-item result-item-${key.toLowerCase()}">
                        <div class="result-icon">
                            <i class="fas ${typeInfo[key].icon}" style="color: ${typeInfo[key].color}"></i>
                        </div>
                        <div>
                            <h5 class="mb-0">${typeInfo[key].desc} (${key})</h5>
                            <p class="mb-0 fw-bold">${data[key]} horas</p>
                        </div>
                    </div>
                `;
                
                $('#results-container').append(html);
            }
        }
        
        createChart(data);
    }
    
    function createChart(data) {
        const ctx = document.getElementById('hoursChart').getContext('2d');
        
        const labels = [];
        const values = [];
        const colors = [];
        
        const colorMap = {
            "HO": "#0d6efd",
            "HED": "#198754",
            "HEN": "#6610f2"
        };
        
        for (const key of ["HO", "HED", "HEN"]) {
            if (data[key] !== undefined) {
                labels.push(key);
                values.push(data[key]);
                colors.push(colorMap[key]);
            }
        }
        
        if (hoursChart) {
            hoursChart.destroy();
        }
        
        hoursChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: values,
                    backgroundColor: colors,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + context.raw + ' horas';
                            }
                        }
                    }
                }
            }
        });
    }
});