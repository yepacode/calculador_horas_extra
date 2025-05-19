const ChartConfig = {
    colors: {
        "HO": "#4cc9f0",
        "HED": "#4895ef",
        "HEN": "#3f37c9"
    },
    
    createHoursChart: function(ctx, data) {
        return new Chart(ctx, {
            type: 'doughnut',
            data: {
            },
            options: {
            }
        });
    }
};