// Configuración de gráficos
const ChartConfig = {
    colors: {
        "HO": "#4cc9f0",
        "HED": "#4895ef",
        "HEN": "#3f37c9"
    },
    
    createHoursChart: function(ctx, data) {
        // Configuración del gráfico
        return new Chart(ctx, {
            type: 'doughnut',
            data: {
                // Configuración de datos
            },
            options: {
                // Opciones del gráfico
            }
        });
    }
};