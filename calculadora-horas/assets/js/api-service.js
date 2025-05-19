// Servicio para manejar llamadas a la API
const ApiService = {
    calculateHours: function(formData) {
        return $.ajax({
            url: 'https://falconcloud.co/site_srv10_ph/site/api/qserv.php/13465-770721',
            type: 'POST',
            data: JSON.stringify(formData),
            contentType: 'application/json'
        });
    }
};