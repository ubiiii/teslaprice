// Data for each model (example data)
const graphdata = {
    model1: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        values: [1200, 1500, 1800, 1700, 2000, 2200, 2100]
    },
    model2: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        values: [1100, 1400, 1700, 1600, 1900, 2100, 2000]
    },
    model3: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        values: [1300, 1600, 1900, 1800, 2100, 2300, 2200]
    }
};

// Function to create chart
function createChart(ctx, labels, dataValues) {
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Price History',
                data: dataValues,
                borderColor: '#007bff',
                backgroundColor: 'rgba(0, 123, 255, 0.2)',
                borderWidth: 2,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    enabled: true
                }
            }
        }
    });
}

// Function to show selected model's chart
function showModel(model) {
    // Hide all charts
    document.querySelectorAll('.graph-container').forEach(container => container.style.display = 'none');
    
    // Show selected model's chart
    document.getElementById(`${model}-graph`).style.display = 'block';
    
    // Create chart for the selected model
    const ctx = document.getElementById(`${model}-chart`).getContext('2d');
    createChart(ctx, graphdata[model].labels, graphdata[model].values);
}

// Initialize the first model
showModel('model1');
