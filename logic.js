const data = {
    model_s: {
        name: "Model S",
        sub_models: {
            model_s: {
                name: "Model S",
                prices: [75000, 78000, 79000],
                years: [2020, 2021, 2022],
                features: "Feature list for Model S",
                images: ["images/model_s1.png", "images/model_s2.png"]
            },
            plaid: {
                name: "Model S Plaid",
                prices: [120000, 125000, 130000],
                years: [2020, 2021, 2022],
                features: "Feature list for Model S Plaid",
                images: ["images/model_s_plaid1.png", "images/model_s_plaid2.png"]
            }
        }
    },
    model_3: {
        name: "Model 3",
        sub_models: {
            performance: {
                name: "Model 3 Performance",
                prices: [50000, 52000, 54000],
                years: [2020, 2021, 2022],
                features: "Feature list for Model 3 Performance",
                images: ["images/model_3_performance1.png", "images/model_3_performance2.png"]
            },
            long_range_awd: {
                name: "Model 3 Long Range AWD",
                prices: [48000, 50000, 52000],
                years: [2020, 2021, 2022],
                features: "Feature list for Model 3 Long Range AWD",
                images: ["images/model_3_long_range_awd1.png", "images/model_3_long_range_awd2.png"]
            },
            long_range_rwd: {
                name: "Model 3 Long Range RWD",
                prices: [46000, 48000, 50000],
                years: [2020, 2021, 2022],
                features: "Feature list for Model 3 Long Range RWD",
                images: ["images/model_3_long_range_rwd1.png", "images/model_3_long_range_rwd2.png"]
            },
            rwd: {
                name: "Model 3 RWD",
                prices: [40000, 42000, 44000],
                years: [2020, 2021, 2022],
                features: "Feature list for Model 3 RWD",
                images: ["images/model_3_rwd1.png", "images/model_3_rwd2.png"]
            }
        }
    },
    model_x: {
        name: "Model X",
        sub_models: {
            plaid: {
                name: "Model X Plaid",
                prices: [115000, 120000, 125000],
                years: [2020, 2021, 2022],
                features: "Feature list for Model X Plaid",
                images: ["images/model_x_plaid1.png", "images/model_x_plaid2.png"]
            },
            model_x: {
                name: "Model X",
                prices: [90000, 95000, 98000],
                years: [2020, 2021, 2022],
                features: "Feature list for Model X",
                images: ["images/model_x1.png", "images/model_x2.png"]
            }
        }
    },
    model_y: {
        name: "Model Y",
        sub_models: {
            performance: {
                name: "Model Y Performance",
                prices: [60000, 62000, 64000],
                years: [2020, 2021, 2022],
                features: "Feature list for Model Y Performance",
                images: ["images/model_y_performance1.png", "images/model_y_performance2.png"]
            },
            long_range_awd: {
                name: "Model Y Long Range AWD",
                prices: [58000, 60000, 62000],
                years: [2020, 2021, 2022],
                features: "Feature list for Model Y Long Range AWD",
                images: ["images/model_y_long_range_awd1.png", "images/model_y_long_range_awd2.png"]
            },
            long_range_rwd: {
                name: "Model Y Long Range RWD",
                prices: [55000, 57000, 59000],
                years: [2020, 2021, 2022],
                features: "Feature list for Model Y Long Range RWD",
                images: ["images/model_y_long_range_rwd1.png", "images/model_y_long_range_rwd2.png"]
            }
        }
    }
};

const submodelData = {
    model_s: {
        section1: 'Model S Features and Details',
        section2: '<img src="images/model_s1.png" alt="Model S"/> <img src="images/model_s2.png" alt="Model S"/>'
    },
    plaid: {
        section1: 'Model S Plaid Features and Details',
        section2: '<img src="images/model_s_plaid1.png" alt="Model S Plaid"/> <img src="images/model_s_plaid2.png" alt="Model S Plaid"/>'
    },
    performance: {
        section1: 'Model 3 Performance Features and Details',
        section2: '<img src="images/model_3_performance1.png" alt="Model 3 Performance"/> <img src="images/model_3_performance2.png" alt="Model 3 Performance"/>'
    },
    long_range_awd: {
        section1: 'Model 3 Long Range AWD Features and Details',
        section2: '<img src="images/model_3_long_range_awd1.png" alt="Model 3 Long Range AWD"/> <img src="images/model_3_long_range_awd2.png" alt="Model 3 Long Range AWD"/>'
    },
    long_range_rwd: {
        section1: 'Model 3 Long Range RWD Features and Details',
        section2: '<img src="images/model_3_long_range_rwd1.png" alt="Model 3 Long Range RWD"/> <img src="images/model_3_long_range_rwd2.png" alt="Model 3 Long Range RWD"/>'
    },
    rwd: {
        section1: 'Model 3 RWD Features and Details',
        section2: '<img src="images/model_3_rwd1.png" alt="Model 3 RWD"/> <img src="images/model_3_rwd2.png" alt="Model 3 RWD"/>'
    },
    model_x: {
        section1: 'Model X Features and Details',
        section2: '<img src="images/model_x1.png" alt="Model X"/> <img src="images/model_x2.png" alt="Model X"/>'
    },
    model_y_performance: {
        section1: 'Model Y Performance Features and Details',
        section2: '<img src="images/model_y_performance1.png" alt="Model Y Performance"/> <img src="images/model_y_performance2.png" alt="Model Y Performance"/>'
    },
    long_range_awd_y: {
        section1: 'Model Y Long Range AWD Features and Details',
        section2: '<img src="images/model_y_long_range_awd1.png" alt="Model Y Long Range AWD"/> <img src="images/model_y_long_range_awd2.png" alt="Model Y Long Range AWD"/>'
    },
    long_range_rwd_y: {
        section1: 'Model Y Long Range RWD Features and Details',
        section2: '<img src="images/model_y_long_range_rwd1.png" alt="Model Y Long Range RWD"/> <img src="images/model_y_long_range_rwd2.png" alt="Model Y Long Range RWD"/>'
    }
};

function showData(dataKey) {
    const displayElement = document.getElementById('data-display');
    displayElement.innerHTML = ''; // Clear previous content

    // Generate HTML for the selected model
    const model = data[dataKey];
    const subModels = model.sub_models;

    for (const key in subModels) {
        const subModel = subModels[key];
        const img = document.createElement('img');
        img.src = `images/${key}.png`; // Ensure image names match
        img.alt = subModel.name;
        img.className = 'image-container';
        img.setAttribute('data-submodel-key', key);
        displayElement.appendChild(img);
    }

    // Add event listeners to the newly added elements
    document.querySelectorAll('.image-container').forEach(function(container) {
        container.addEventListener('click', function() {
            const submodelKey = this.getAttribute('data-submodel-key');
            showSubmodelData(submodelKey);
        });
    });

    // Display the default sub-model data
    const defaultSubmodelKey = Object.keys(subModels)[0];
    showSubmodelData(defaultSubmodelKey);
}

function showSubmodelData(submodelKey) {
    const tab1 = document.getElementById('tab1');
    const tab2 = document.getElementById('tab2');
    const thirdContainer = document.getElementById('third-container');
    const chartCanvas = document.getElementById('priceChart');

    // Display features and images
    tab1.innerHTML = submodelData[submodelKey]?.section1 || 'No data available';
    tab2.innerHTML = submodelData[submodelKey]?.section2 || 'No data available';

    // Generate chart data
    const subModel = data[Object.keys(data)[0]].sub_models[submodelKey];
    const prices = subModel.prices;
    const years = subModel.years;

    if (chartCanvas) {
        createChart(chartCanvas, years, prices);
    }
}

function createChart(canvas, years, prices) {
    new Chart(canvas, {
        type: 'line',
        data: {
            labels: years,
            datasets: [{
                label: 'Price History',
                data: prices,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Initial call
document.addEventListener('DOMContentLoaded', function() {
    showData('model_s'); // Show default data for Model S
});


function showData(dataKey) {
    const displayElement = document.getElementById('data-display');
    if (!displayElement) {
        console.error('Element with ID "data-display" not found.');
        return; // Exit the function if the element is not found
    }

    displayElement.innerHTML = ''; // Clear previous content

    const model = data[dataKey];
    if (!model) {
        console.error(`No data found for key: ${dataKey}`);
        return; // Exit the function if the model data is not found
    }

    const subModels = model.sub_models;
    
    for (const key in subModels) {
        const subModel = subModels[key];
        const img = document.createElement('img');
        img.src = `images/${key}.png`; // Ensure image names match
        img.alt = subModel.name;
        img.className = 'image-container';
        img.setAttribute('data-submodel-key', key);
        displayElement.appendChild(img);
    }

    // Add event listeners to the newly added elements
    document.querySelectorAll('.image-container').forEach(function(container) {
        container.addEventListener('click', function() {
            const submodelKey = this.getAttribute('data-submodel-key');
            showSubmodelData(submodelKey);
        });
    });

    const defaultSubmodelKey = getDefaultSubmodelKey(dataKey);
    if (defaultSubmodelKey) {
        showSubmodelData(defaultSubmodelKey);
    }
}



// testscript.js

function showSubModels(modelKey) {
    const subModels = data[modelKey].sub_models;
    const dataDisplay = document.getElementById('data-display');
    
    dataDisplay.innerHTML = ''; // Clear previous content

    for (const key in subModels) {
        const subModel = subModels[key];
        const img = document.createElement('img');
        img.src = `images/${key}.png`; // Ensure image names match
        img.alt = subModel.name;
        img.className = 'image-container';
        img.setAttribute('data-submodel-key', key);
        dataDisplay.appendChild(img);
    }

    document.querySelectorAll('.image-container').forEach(function(container) {
        container.addEventListener('click', function() {
            const submodelKey = this.getAttribute('data-submodel-key');
            showSubmodelData(submodelKey);
        });
    });
}

function showSubmodelData(submodelKey) {
    const tabContent = document.querySelectorAll('.tabcontent');
    tabContent.forEach(tab => tab.style.display = 'none');

    const subModelData = submodelData[submodelKey];
    if (subModelData) {
        document.getElementById('features').innerHTML = subModelData.section1;
        document.getElementById('car-images').innerHTML = subModelData.section2;
        openTab(null, 'price-features'); // Open the default tab
    }
}

function openTab(evt, tabName) {
    const tabcontent = document.querySelectorAll('.tabcontent');
    tabcontent.forEach(tab => tab.style.display = 'none');

    const tablinks = document.querySelectorAll('.tablink');
    tablinks.forEach(tab => tab.className = tab.className.replace(' active', ''));

    document.getElementById(tabName).style.display = 'block';

    if (evt) {
        evt.currentTarget.className += ' active';
    }
}

// Set default tab
document.addEventListener('DOMContentLoaded', function() {
    openTab(null, 'price-features');
});


document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('priceChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line', // or 'bar', 'pie', etc.
        data: {
            labels: [2020, 2021, 2022], // Example labels
            datasets: [{
                label: 'Price History',
                data: [75000, 78000, 79000], // Example data
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1,
                animation: {
                    duration: 3000,
                    onProgress: function(animation) {
                        const chartInstance = animation.chart;
                        const chartData = chartInstance.data.datasets[0];
                        const meta = chartInstance.getDatasetMeta(0);
                        const totalSteps = animation.numSteps;
                        const step = animation.currentStep;
                        chartData.data = chartData.data.map((value, index) => {
                            if (index <= Math.floor((step / totalSteps) * chartData.data.length)) {
                                return pricesData["Model 3"].prices[index];
                            }
                            return null;
                        });
                        chartInstance.update();
                    }
                }
                
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
