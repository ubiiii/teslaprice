const data = {
    data1: `
        <div class="data-content">
            <div class="image-container" data-submodel-key="modelS">
                <img src="./images/Model S/tesla model S 2.png" alt="Model S image">
                <p>Model S</p>
            </div>
            <div class="image-container" data-submodel-key="modelSPlaid">
                <img src="./images/Model S/tesla model S 7.png" alt="Model S Plaid image">
                <p>Model S Plaid</p>
            </div>
        </div>
    `,
    data2: `
        <div class="data-content">
            <div class="image-container" data-submodel-key="model3Performance">
                <img src="./images/Model 3/Model 3 Performance.png" alt="Model 3 Performance">
                <p>Model 3 Performance</p>
            </div>
            <div class="image-container" data-submodel-key="longRangeAWD">
                <img src="./images/Model 3/Long Range AWD.jpg" alt="Long Range AWD">
                <p>Long Range AWD</p>
            </div>
            <div class="image-container" data-submodel-key="longRangeRWD">
                <img src="./images/Model 3/Long Range RWD.jpg" alt="Long Range RWD">
                <p>Long Range RWD</p>
            </div>
            <div class="image-container" data-submodel-key="model3RWD">
                <img src="./images/Model 3/Model 3 RWD.jpg" alt="Model 3 RWD">
                <p>Model 3 RWD</p>
            </div>
        </div>
    `,
    data3: `
        <div class="data-content">
            <div class="image-container" data-submodel-key="modelX">
                <img src="./images/Model X/Model X 2.png" alt="Model X">
                <p>Model X</p>
            </div>
            <div class="image-container" data-submodel-key="modelXPlaid">
                <img src="./images/Model X/Model X Plaid.jpg" alt="Model X Plaid">
                <p>Model X Plaid</p>
            </div>
        </div>
    `,
    data4: `
        <div class="data-content">
            <div class="image-container" data-submodel-key="modelYPerformance">
                <img src="./images/Model Y/Model Y Performance.jpg" alt="Model Y Performance">
                <p>Model Y Performance</p>
            </div>
            <div class="image-container" data-submodel-key="modelYLongRangeAWD">
                <img src="./images/Model Y/Model Y Long Range AWD.jpg" alt="Model Y Long Range AWD">
                <p>Model Y Long Range AWD</p>
            </div>
            <div class="image-container" data-submodel-key="modelYLongRangeRWD">
                <img src="./images/Model Y/Model Y Long Range RWD.jpg" alt="Model Y Long Range RWD">
                <p>Model Y Long Range RWD</p>
            </div>
        </div>
    `,
};

const submodelData = {
    modelS: {
        section1: `<h2>Model S</h2>   
                    <div class="car-info-container">
                        <div class="car-picture">
                            <img src="./images/Model S/tesla model S 2.png" alt="Tesla Model S" class="big-car-image">
                        </div>
                        <div class="car-launch-date">
                            <p>Launch Date: <span>June 22, 2012</span></p>
                        </div>
                        <div class="car-price-history">
                        <br>
                            <h2> graph will be shown here <h2>
                            <div id="tab-price-features" class="tab-content">
                                    <canvas id="priceChart"> space for graph with data</canvas>
                             </div>
                        </div>
                        <div>
                                    <div class="containerfet">
                                        <h1>Tesla Model S Features</h1>
                                        <div class="features">
                                            <div class="feature">
                                                <h2>Performance</h2>
                                                <ul>
                                                    <li>Long Range: Up to 405 miles (652 km) of range on a single charge</li>
                                                    <li>Acceleration: 0-60 mph (0-100 km/h) in as fast as 1.99 seconds (Plaid version)</li>
                                                    <li>Top Speed: Up to 200 mph (322 km/h) (Plaid version)</li>
                                                </ul>
                                            </div>
                                            <div class="feature">
                                                <h2>Interior</h2>
                                                <ul>
                                                    <li>Premium Cabin: Luxurious materials including leather and wood trims</li>
                                                    <li>Large Touchscreen: 17-inch central touchscreen for controls</li>
                                                    <li>Dual Motor All-Wheel Drive: Enhanced traction and stability</li>
                                                </ul>
                                            </div>
                                            <div class="feature">
                                                <h2>Technology</h2>
                                                <ul>
                                                    <li>Autopilot: Adaptive cruise control, lane-keeping assist, and automatic lane changes</li>
                                                    <li>Full Self-Driving (FSD): Optional package with advanced features</li>
                                                    <li>Over-the-Air Updates: Regular software updates</li>
                                                </ul>
                                            </div>
                                            <div class="feature">
                                                <h2>Safety</h2>
                                                <ul>
                                                    <li>Active Safety Features: Automatic emergency braking, collision warning, blind-spot monitoring</li>
                                                    <li>5-Star Safety Rating: High safety ratings from NHTSA</li>
                                                </ul>
                                            </div>
                                            <div class="feature">
                                                <h2>Convenience</h2>
                                                <ul>
                                                    <li>Supercharging Network: Access to Tesla's fast-charging network</li>
                                                    <li>Keyless Entry: Key fob or smartphone app access</li>
                                                    <li>Panoramic Glass Roof: Spacious and airy interior</li>
                                                </ul>
                                            </div>
                                            <div class="feature">
                                                <h2>Design</h2>
                                                <ul>
                                                    <li>Aerodynamic Design: Sleek and low-profile</li>
                                                    <li>LED Lighting: Modern LED headlights and taillights</li>
                                                </ul>
                                            </div>
                                            <div class="feature">
                                                <h2>Storage</h2>
                                                <ul>
                                                    <li>Frunk (Front Trunk): Additional storage space</li>
                                                    <li>Rear Cargo Space: Ample trunk space with a flat loading floor</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                    </div>            
        
        `,
        section2: `

                    <div class="car-images-container">
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 1.png" alt="Car 1">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 3.png" alt="Car 2">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 4.png" alt="Car 3">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 5.png" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 6.png" alt="Car 6">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 8.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 9.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 10.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 11.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 12.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 13.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 14.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 15.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 16.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 17.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 18.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 19.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 20.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 21.png" alt="Car 4">
                        </div>
                    </div>
     
        `,
    },
    modelSPlaid: {
        section1: `<h2>Model S Plaid</h2>   
                    <div class="car-info-container">
                        <div class="car-picture">
                            <img src="./images/Model S/tesla model S 7.png" alt="Tesla Model S Plaid" class="big-car-image">
                        </div>
                        <div class="car-launch-date">
                            <p>Launch Date: <span>June 22, 2012</span></p>
                        </div>
                        <div class="car-price-history">
                        <br>
                            <h2> graph will be shown here <h2>
                            <div id="tab-price-features" class="tab-content">
                                    <canvas id="priceChart"> space for graph with data</canvas>
                             </div>
                        </div>
                    <div>
                                    <div class="containerfet">
                                        <h1>Tesla Model S Plaid Features</h1>
                                        <div class="features">
                                            <div class="feature">
                                                <h2>Performance</h2>
                                                <ul>
                                                    <li>Acceleration: 0-60 mph (0-100 km/h) in under 2 seconds</li>
                                                    <li>Top Speed: Approximately 200 mph (322 km/h)</li>
                                                    <li>Range: Around 396 miles (637 km) on a single charge</li>
                                                    <li>Powertrain: Tri-motor all-wheel drive with torque vectoring</li>
                                                    <li>Handling: Advanced air suspension with adaptive damping</li>
                                                </ul>
                                            </div>
                                            <div class="feature">
                                                <h2>Exterior</h2>
                                                <ul>
                                                    <li>Design: Sleek and aerodynamic with a low profile</li>
                                                    <li>Wheels: 21-inch wheels with a distinctive design</li>
                                                    <li>Lights: LED headlights and taillights with a unique light bar across the rear</li>
                                                </ul>
                                            </div>
                                            <div class="feature">
                                                <h2>Interior</h2>
                                                <ul>
                                                    <li>Seating: Premium leather seats with heating and ventilation, seating for up to five passengers</li>
                                                    <li>Dashboard: Large 17-inch touchscreen display in landscape orientation</li>
                                                    <li>Steering Wheel: Yoke-style steering wheel with integrated controls</li>
                                                </ul>
                                            </div>
                                            <div class="feature">
                                                <h2>Technology</h2>
                                                <ul>
                                                    <li>Autopilot: Adaptive cruise control, lane-keeping assist, and automatic lane changes</li>
                                                    <li>Full Self-Driving (FSD): Optional package with additional advanced features</li>
                                                    <li>Infotainment System: High-performance computer with streaming services, games, and web browser</li>
                                                    <li>Over-the-Air Updates: Regular software updates for continuous improvement</li>
                                                </ul>
                                            </div>
                                            <div class="feature">
                                                <h2>Safety</h2>
                                                <ul>
                                                    <li>Cameras: Multiple cameras providing 360-degree visibility and support for Autopilot features</li>
                                                    <li>Sensors: Radar and ultrasonic sensors for collision avoidance and parking assistance</li>
                                                    <li>Safety Ratings: High safety ratings with strong crash test results</li>
                                                </ul>
                                            </div>
                                            <div class="feature">
                                                <h2>Comfort and Convenience</h2>
                                                <ul>
                                                    <li>Climate Control: Advanced air conditioning system with HEPA filter</li>
                                                    <li>Storage: Front trunk (frunk) and rear trunk for ample cargo space</li>
                                                    <li>Connectivity: Over-the-air updates and smartphone integration</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                            </div>
                    </div>            
        
        `,
        section2: `
                    <div class="car-images-container">
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 1.png" alt="Car 1">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 3.png" alt="Car 2">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 4.png" alt="Car 3">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 5.png" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 6.png" alt="Car 6">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 8.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 9.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 10.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 11.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 12.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 13.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 14.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 15.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 16.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 17.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 18.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 19.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 20.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model S/tesla model S 21.png" alt="Car 4">
                        </div>
                    </div>
     
        `,
    },
    model3Performance: {
        section1: `
                    <h2>Model 3 Performance</h2>   
                    <div class="car-info-container">
                        <div class="car-picture">
                            <img src="./images/Model 3/Model 3 Performance.png" alt="Model 3 Performance" class="big-car-image">
                        </div>
                        <div class="car-launch-date">
                            <p>Launch Date: <span>August, 2017</span></p>
                        </div>
                        <div class="car-price-history">
                        <br>
                            <h2> graph will be shown here <h2>
                            <div id="tab-price-features" class="tab-content">
                                    <canvas id="priceChart"> space for graph with data</canvas>
                             </div>
                        </div>
                    <div>
                        <div class="containerfet">
                            <h1>Tesla Model 3 Performance Features</h1>
                            <div class="features">
                                <div class="feature">
                                    <h2>Performance</h2>
                                    <ul>
                                        <li>Acceleration: 0-60 mph (0-100 km/h) in 3.1 seconds</li>
                                        <li>Top Speed: Approximately 162 mph (261 km/h)</li>
                                        <li>Range: Up to 315 miles (507 km) on a single charge</li>
                                        <li>Powertrain: Dual-motor all-wheel drive with high-performance capabilities</li>
                                        <li>Handling: Performance brakes and sports suspension for enhanced driving dynamics</li>
                                    </ul>
                                </div>
                                <div class="feature">
                                    <h2>Exterior</h2>
                                    <ul>
                                        <li>Design: Sleek, aerodynamic profile with a minimalist aesthetic</li>
                                        <li>Wheels: 20-inch wheels with a unique performance design</li>
                                        <li>Lights: LED headlights and taillights with a streamlined appearance</li>
                                    </ul>
                                </div>
                                <div class="feature">
                                    <h2>Interior</h2>
                                    <ul>
                                        <li>Seating: Premium seats with adjustable options and high-quality materials</li>
                                        <li>Dashboard: 15-inch central touchscreen display for controls and infotainment</li>
                                        <li>Steering Wheel: Traditional steering wheel with integrated controls</li>
                                    </ul>
                                </div>
                                <div class="feature">
                                    <h2>Technology</h2>
                                    <ul>
                                        <li>Autopilot: Advanced driver assistance features including adaptive cruise control and lane-keeping</li>
                                        <li>Full Self-Driving (FSD): Optional package offering additional advanced capabilities</li>
                                        <li>Infotainment System: Access to streaming services, navigation, and web browsing</li>
                                        <li>Over-the-Air Updates: Regular software updates to enhance features and performance</li>
                                    </ul>
                                </div>
                                <div class="feature">
                                    <h2>Safety</h2>
                                    <ul>
                                        <li>Cameras: Comprehensive camera system providing 360-degree visibility</li>
                                        <li>Sensors: Radar and ultrasonic sensors for collision avoidance and parking assistance</li>
                                        <li>Safety Ratings: Strong safety ratings with multiple safety features</li>
                                    </ul>
                                </div>
                                <div class="feature">
                                    <h2>Comfort and Convenience</h2>
                                    <ul>
                                        <li>Climate Control: Advanced climate control system with a HEPA filter for clean air</li>
                                        <li>Storage: Front trunk (frunk) and rear trunk for practical cargo space</li>
                                        <li>Connectivity: Smartphone integration and over-the-air updates for continuous improvement</li>
                                    </ul>
                                </div>
                            </div>
                        </div> `,
        section2: `
                    <div class="car-images-container">
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 1.jpg" alt="Car 1">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 2.jpg" alt="Car 2">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 3.jpg" alt="Car 3">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 4.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 5.jpg" alt="Car 5">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 6.jpg" alt="Car 6">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 7.jpg" alt="Car 7">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 8.jpg" alt="Car 8">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 9.jpg" alt="Car 9">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 10.jpg" alt="Car 10">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 11.jpg" alt="Car 11">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 12.jpg" alt="Car 12">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 14.jpg" alt="Car 14">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 15.jpg" alt="Car 15">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 16.jpg" alt="Car 16">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 17.jpg" alt="Car 17">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 18.jpg" alt="Car 18">
                        </div>
                    </div> `,
    },
    longRangeAWD: {
        section1: `<h2>Model 3 Long Range AWD</h2>   
                    <div class="car-info-container">
                        <div class="car-picture">
                            <img src="./images/Model 3/Long Range AWD.jpg" alt="Model 3 long Range AWD" class="big-car-image">
                        </div>
                        <div class="car-launch-date">
                            <p>Launch Date: <span>August, 2017</span></p>
                        </div>
                        <div class="car-price-history">
                        <br>
                            <h2> graph will be shown here <h2>
                            <div id="tab-price-features" class="tab-content">
                                    <canvas id="priceChart"> space for graph with data</canvas>
                             </div>
                        </div>
                    <div>
                    <div class="containerfet">
                        <h1>Tesla Model 3 Long Range AWD Features</h1>
                        <div class="features">
                            <div class="feature">
                                <h2>Performance</h2>
                                <ul>
                                    <li>Acceleration: 0-60 mph (0-100 km/h) in 4.2 seconds</li>
                                    <li>Top Speed: Approximately 145 mph (233 km/h)</li>
                                    <li>Range: Up to 358 miles (576 km) on a single charge</li>
                                    <li>Powertrain: Dual-motor all-wheel drive for balanced power and efficiency</li>
                                    <li>Handling: Standard brakes and suspension with responsive steering</li>
                                </ul>
                            </div>
                            <div class="feature">
                                <h2>Exterior</h2>
                                <ul>
                                    <li>Design: Streamlined, minimalist design with excellent aerodynamics</li>
                                    <li>Wheels: 18-inch or optional 19-inch wheels with an elegant design</li>
                                    <li>Lights: LED headlights and taillights with a modern look</li>
                                </ul>
                            </div>
                            <div class="feature">
                                <h2>Interior</h2>
                                <ul>
                                    <li>Seating: Comfortable, supportive seats with premium materials</li>
                                    <li>Dashboard: 15-inch central touchscreen display for easy access to controls and information</li>
                                    <li>Steering Wheel: Traditional steering wheel with multi-function controls</li>
                                </ul>
                            </div>
                            <div class="feature">
                                <h2>Technology</h2>
                                <ul>
                                    <li>Autopilot: Includes features like adaptive cruise control, lane-keeping, and traffic-aware cruise control</li>
                                    <li>Full Self-Driving (FSD): Available as an optional upgrade with advanced features</li>
                                    <li>Infotainment System: Central touchscreen with navigation, streaming services, and games</li>
                                    <li>Over-the-Air Updates: Regular software updates to enhance vehicle performance and features</li>
                                </ul>
                            </div>
                            <div class="feature">
                                <h2>Safety</h2>
                                <ul>
                                    <li>Cameras: Full suite of cameras providing 360-degree visibility and assistance for Autopilot</li>
                                    <li>Sensors: Equipped with radar and ultrasonic sensors for parking, collision avoidance, and more</li>
                                    <li>Safety Ratings: Excellent safety ratings with advanced crash protection</li>
                                </ul>
                            </div>
                            <div class="feature">
                                <h2>Comfort and Convenience</h2>
                                <ul>
                                    <li>Climate Control: Dual-zone automatic climate control with HEPA air filtration</li>
                                    <li>Storage: Ample cargo space with front and rear trunks (frunk and trunk)</li>
                                    <li>Connectivity: Smartphone app for remote control, navigation, and media access</li>
                                </ul>
                            </div>
                        </div>
                    </div> `,
        section2: `
                    <div class="car-images-container">
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 1.jpg" alt="Car 1">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 2.jpg" alt="Car 2">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 3.jpg" alt="Car 3">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 4.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 5.jpg" alt="Car 5">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 6.jpg" alt="Car 6">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 7.jpg" alt="Car 7">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 8.jpg" alt="Car 8">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 9.jpg" alt="Car 9">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 10.jpg" alt="Car 10">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 11.jpg" alt="Car 11">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 12.jpg" alt="Car 12">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 14.jpg" alt="Car 14">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 15.jpg" alt="Car 15">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 16.jpg" alt="Car 16">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 17.jpg" alt="Car 17">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 18.jpg" alt="Car 18">
                        </div>
                    </div> `,
    },
    longRangeRWD: {
        section1: `<h2>Model 3 Long Range RWD</h2>   
                    <div class="car-info-container">
                        <div class="car-picture">
                            <img src="./images/Model 3/Long Range RWD.jpg" alt="Model 3 long Range RWD" class="big-car-image">
                        </div>
                        <div class="car-launch-date">
                            <p>Launch Date: <span>August, 2017</span></p>
                        </div>
                        <div class="car-price-history">
                        <br>
                            <h2> graph will be shown here <h2>
                            <div id="tab-price-features" class="tab-content">
                                    <canvas id="priceChart"> space for graph with data</canvas>
                             </div>
                        </div>
                    <div>
                            <div class="containerfet">
                                <h1>Tesla Model 3 Long Range RWD Features</h1>
                                <div class="features">
                                    <div class="feature">
                                        <h2>Performance</h2>
                                        <ul>
                                            <li>Acceleration: 0-60 mph (0-100 km/h) in 4.2 seconds</li>
                                            <li>Top Speed: Approximately 145 mph (233 km/h)</li>
                                            <li>Range: Up to 358 miles (576 km) on a single charge</li>
                                            <li>Powertrain: Rear-wheel drive with a long-range battery for extended efficiency</li>
                                            <li>Handling: Standard suspension with responsive steering</li>
                                        </ul>
                                    </div>
                                    <div class="feature">
                                        <h2>Exterior</h2>
                                        <ul>
                                            <li>Design: Streamlined, minimalist design with a focus on aerodynamics</li>
                                            <li>Wheels: 18-inch wheels with an elegant design</li>
                                            <li>Lights: LED headlights and taillights with a modern look</li>
                                        </ul>
                                    </div>
                                    <div class="feature">
                                        <h2>Interior</h2>
                                        <ul>
                                            <li>Seating: Comfortable seats with premium materials and adjustable options</li>
                                            <li>Dashboard: 15-inch central touchscreen display for controls and infotainment</li>
                                            <li>Steering Wheel: Traditional steering wheel with integrated controls</li>
                                        </ul>
                                    </div>
                                    <div class="feature">
                                        <h2>Technology</h2>
                                        <ul>
                                            <li>Autopilot: Includes adaptive cruise control, lane-keeping assist, and traffic-aware cruise control</li>
                                            <li>Full Self-Driving (FSD): Optional upgrade with advanced features</li>
                                            <li>Infotainment System: Central touchscreen with navigation, streaming services, and entertainment</li>
                                            <li>Over-the-Air Updates: Regular updates for performance and feature enhancements</li>
                                        </ul>
                                    </div>
                                    <div class="feature">
                                        <h2>Safety</h2>
                                        <ul>
                                            <li>Cameras: Comprehensive camera system providing 360-degree visibility and Autopilot support</li>
                                            <li>Sensors: Equipped with radar and ultrasonic sensors for collision avoidance and parking assistance</li>
                                            <li>Safety Ratings: Excellent safety ratings with advanced crash protection</li>
                                        </ul>
                                    </div>
                                    <div class="feature">
                                        <h2>Comfort and Convenience</h2>
                                        <ul>
                                            <li>Climate Control: Dual-zone automatic climate control with HEPA air filtration</li>
                                            <li>Storage: Ample cargo space with front and rear trunks (frunk and trunk)</li>
                                            <li>Connectivity: Smartphone integration and remote control via the Tesla app</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            `,
        section2: `
                    <div class="car-images-container">
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 1.jpg" alt="Car 1">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 2.jpg" alt="Car 2">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 3.jpg" alt="Car 3">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 4.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 5.jpg" alt="Car 5">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 6.jpg" alt="Car 6">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 7.jpg" alt="Car 7">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 8.jpg" alt="Car 8">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 9.jpg" alt="Car 9">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 10.jpg" alt="Car 10">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 11.jpg" alt="Car 11">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 12.jpg" alt="Car 12">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 14.jpg" alt="Car 14">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 15.jpg" alt="Car 15">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 16.jpg" alt="Car 16">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 17.jpg" alt="Car 17">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 18.jpg" alt="Car 18">
                        </div>
                    </div> `,
    },
    model3RWD: {
        section1: `
                    <h2>Model 3 RWD</h2>   
                    <div class="car-info-container">
                        <div class="car-picture">
                            <img src="./images/Model 3/Model 3 RWD.jpg" alt="Model 3 RWD" class="big-car-image">
                        </div>
                        <div class="car-launch-date">
                            <p>Launch Date: <span>August, 2017</span></p>
                        </div>
                        <div class="car-price-history">
                        <br>
                            <h2> graph will be shown here <h2>
                            <div id="tab-price-features" class="tab-content">
                                    <canvas id="priceChart"> space for graph with data</canvas>
                             </div>
                        </div>
                    <div>

                        <div class="containerfet">
                            <h1>Tesla Model 3 RWD Features</h1>
                            <div class="features">
                                <div class="feature">
                                    <h2>Performance</h2>
                                    <ul>
                                        <li>Acceleration: 0-60 mph (0-100 km/h) in 5.8 seconds</li>
                                        <li>Top Speed: Approximately 140 mph (225 km/h)</li>
                                        <li>Range: Up to 272 miles (438 km) on a single charge</li>
                                        <li>Powertrain: Rear-wheel drive with a standard battery pack for balanced performance</li>
                                        <li>Handling: Standard suspension with precise steering</li>
                                    </ul>
                                </div>
                                <div class="feature">
                                    <h2>Exterior</h2>
                                    <ul>
                                        <li>Design: Sleek, minimalist design with an aerodynamic profile</li>
                                        <li>Wheels: 18-inch wheels with a simple, elegant design</li>
                                        <li>Lights: LED headlights and taillights for a modern look</li>
                                    </ul>
                                </div>
                                <div class="feature">
                                    <h2>Interior</h2>
                                    <ul>
                                        <li>Seating: Comfortable seats with high-quality materials and basic adjustments</li>
                                        <li>Dashboard: 15-inch central touchscreen display for all controls and infotainment</li>
                                        <li>Steering Wheel: Traditional steering wheel with integrated controls</li>
                                    </ul>
                                </div>
                                <div class="feature">
                                    <h2>Technology</h2>
                                    <ul>
                                        <li>Autopilot: Includes basic driver assistance features like adaptive cruise control and lane-keeping assist</li>
                                        <li>Full Self-Driving (FSD): Available as an optional upgrade with additional advanced features</li>
                                        <li>Infotainment System: Central touchscreen providing navigation, media access, and entertainment options</li>
                                        <li>Over-the-Air Updates: Regular updates to improve features and performance</li>
                                    </ul>
                                </div>
                                <div class="feature">
                                    <h2>Safety</h2>
                                    <ul>
                                        <li>Cameras: Equipped with a camera system for enhanced visibility and driver assistance</li>
                                        <li>Sensors: Radar and ultrasonic sensors for collision avoidance and parking help</li>
                                        <li>Safety Ratings: Strong safety ratings with comprehensive safety features</li>
                                    </ul>
                                </div>
                                <div class="feature">
                                    <h2>Comfort and Convenience</h2>
                                    <ul>
                                        <li>Climate Control: Automatic climate control system for comfort</li>
                                        <li>Storage: Practical cargo space with a front trunk (frunk) and rear trunk</li>
                                        <li>Connectivity: Integration with the Tesla app for remote control and monitoring</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

        `,
        section2: `
                    <div class="car-images-container">
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 1.jpg" alt="Car 1">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 2.jpg" alt="Car 2">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 3.jpg" alt="Car 3">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 4.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 5.jpg" alt="Car 5">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 6.jpg" alt="Car 6">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 7.jpg" alt="Car 7">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 8.jpg" alt="Car 8">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 9.jpg" alt="Car 9">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 10.jpg" alt="Car 10">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 11.jpg" alt="Car 11">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 12.jpg" alt="Car 12">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 14.jpg" alt="Car 14">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 15.jpg" alt="Car 15">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 16.jpg" alt="Car 16">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 17.jpg" alt="Car 17">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model 3/Model 3 18.jpg" alt="Car 18">
                        </div>
                    </div> `,
    },
    modelX: {
        section1: `
                    <h2>Model X </h2>   
                    <div class="car-info-container">
                        <div class="car-picture">
                            <img src="./images/Model X/Model X 2.png" alt="Model X" class="big-car-image">
                        </div>
                        <div class="car-launch-date">
                            <p>Launch Date: <span>September , 2015</span></p>
                        </div>
                        <div class="car-price-history">
                        <br>
                            <h2> graph will be shown here <h2>
                            <div id="tab-price-features" class="tab-content">
                                    <canvas id="priceChart"> space for graph with data</canvas>
                             </div>
                        </div>
                    <div>
                        <div class="containerfet">
                                <h1>Tesla Model X Features</h1>
                                <div class="features">
                                    <div class="feature">
                                        <h2>Performance</h2>
                                        <ul>
                                            <li>Acceleration: 0-60 mph (0-100 km/h) in 3.8 seconds</li>
                                            <li>Top Speed: Approximately 155 mph (250 km/h)</li>
                                            <li>Range: Up to 348 miles (560 km) on a single charge</li>
                                            <li>Powertrain: Dual-motor all-wheel drive for powerful performance</li>
                                            <li>Handling: Adaptive air suspension for a smooth ride</li>
                                        </ul>
                                    </div>
                                    <div class="feature">
                                        <h2>Exterior</h2>
                                        <ul>
                                            <li>Design: Bold, aerodynamic design with Falcon Wing doors</li>
                                            <li>Wheels: 20-inch wheels standard, 22-inch wheels available</li>
                                            <li>Lights: LED headlights and taillights with a distinctive look</li>
                                        </ul>
                                    </div>
                                    <div class="feature">
                                        <h2>Interior</h2>
                                        <ul>
                                            <li>Seating: Luxurious seating for up to seven passengers with high-quality materials</li>
                                            <li>Dashboard: 17-inch central touchscreen display for controls and infotainment</li>
                                            <li>Steering Wheel: Traditional steering wheel with integrated controls</li>
                                        </ul>
                                    </div>
                                    <div class="feature">
                                        <h2>Technology</h2>
                                        <ul>
                                            <li>Autopilot: Includes advanced driver assistance features like adaptive cruise control and lane-keeping</li>
                                            <li>Full Self-Driving (FSD): Optional package with additional advanced capabilities</li>
                                            <li>Infotainment System: High-performance computer with access to streaming services and games</li>
                                            <li>Over-the-Air Updates: Regular updates to enhance vehicle performance and features</li>
                                        </ul>
                                    </div>
                                    <div class="feature">
                                        <h2>Safety</h2>
                                        <ul>
                                            <li>Cameras: Full camera suite providing 360-degree visibility and support for Autopilot</li>
                                            <li>Sensors: Radar and ultrasonic sensors for collision avoidance and parking assistance</li>
                                            <li>Safety Ratings: Excellent safety ratings with comprehensive safety features</li>
                                        </ul>
                                    </div>
                                    <div class="feature">
                                        <h2>Comfort and Convenience</h2>
                                        <ul>
                                            <li>Climate Control: Advanced climate control system with HEPA air filtration</li>
                                            <li>Storage: Spacious cargo areas with front and rear trunks</li>
                                            <li>Connectivity: Smartphone integration and remote control via the Tesla app</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


            `,
        section2: `
            <div class="car-images-container">
                        <div class="car-image">
                            <img src="./images/Model X/Model X 2.png" alt="Car 1">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model X/Model X 3.jpg" alt="Car 2">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model X/Model X 4.jpg" alt="Car 3">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model X/Model X 5.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model X/Model X 6.jpg" alt="Car 5">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model X/Model X 7.jpg" alt="Car 6">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model X/Model X 8.jpg" alt="Car 7">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model X/Model X 9.jpg" alt="Car 8">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model X/Model X 10.jpg" alt="Car 9">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model X/Model X 11.jpg" alt="Car 10">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model X/Model X 13.jpg" alt="Car 11">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model X/Model X 14.jpg" alt="Car 12">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model X/Model X 15.jpg" alt="Car 14">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model X/Model X 16.jpg" alt="Car 15">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model X/Model X 17.jpg" alt="Car 16">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model X/Model X 18.jpg" alt="Car 17">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model X/Model X 19.jpg" alt="Car 18">
                        </div>
                    </div> `,
    },
    modelXPlaid: {
        section1: `<h2>Model X Plaid </h2>   
                    <div class="car-info-container">
                        <div class="car-picture">
                            <img src="./images/Model X/Model X Plaid.jpg" alt="Model X Plaid" class="big-car-image">
                        </div>
                        <div class="car-launch-date">
                            <p>Launch Date: <span>September , 2015</span></p>
                        </div>
                        <div class="car-price-history">
                        <br>
                            <h2> graph will be shown here <h2>
                            <div id="tab-price-features" class="tab-content">
                                    <canvas id="priceChart"> space for graph with data</canvas>
                             </div>
                        </div>
                    <div>
                        <div class="containerfet">
                            <h1>Tesla Model X Plaid Features</h1>
                            <div class="features">
                                <div class="feature">
                                    <h2>Performance</h2>
                                    <ul>
                                        <li>Acceleration: 0-60 mph (0-100 km/h) in 2.5 seconds</li>
                                        <li>Top Speed: Approximately 163 mph (262 km/h)</li>
                                        <li>Range: Up to 333 miles (536 km) on a single charge</li>
                                        <li>Powertrain: Tri-motor all-wheel drive for maximum performance</li>
                                        <li>Handling: Advanced air suspension with performance-tuned settings</li>
                                    </ul>
                                </div>
                                <div class="feature">
                                    <h2>Exterior</h2>
                                    <ul>
                                        <li>Design: Sleek, high-performance design with distinctive Falcon Wing doors</li>
                                        <li>Wheels: 22-inch wheels with a unique performance design</li>
                                        <li>Lights: LED headlights and taillights with an advanced lighting system</li>
                                    </ul>
                                </div>
                                <div class="feature">
                                    <h2>Interior</h2>
                                    <ul>
                                        <li>Seating: Premium seating for up to seven passengers with high-quality materials and advanced features</li>
                                        <li>Dashboard: 17-inch central touchscreen display with advanced controls and infotainment</li>
                                        <li>Steering Wheel: Yoke-style steering wheel with integrated controls for a futuristic feel</li>
                                    </ul>
                                </div>
                                <div class="feature">
                                    <h2>Technology</h2>
                                    <ul>
                                        <li>Autopilot: Includes the latest Autopilot features for enhanced driving assistance</li>
                                        <li>Full Self-Driving (FSD): Optional package offering advanced autonomous driving features</li>
                                        <li>Infotainment System: High-performance computer with extensive streaming services, games, and a web browser</li>
                                        <li>Over-the-Air Updates: Regular updates to improve vehicle functionality and performance</li>
                                    </ul>
                                </div>
                                <div class="feature">
                                    <h2>Safety</h2>
                                    <ul>
                                        <li>Cameras: Extensive camera system for comprehensive visibility and Autopilot support</li>
                                        <li>Sensors: Advanced radar and ultrasonic sensors for enhanced safety and parking assistance</li>
                                        <li>Safety Ratings: Exceptional safety ratings with advanced safety technologies</li>
                                    </ul>
                                </div>
                                <div class="feature">
                                    <h2>Comfort and Convenience</h2>
                                    <ul>
                                        <li>Climate Control: High-efficiency climate control system with HEPA air filter for clean air</li>
                                        <li>Storage: Generous cargo space with large front and rear trunks</li>
                                        <li>Connectivity: Integrated smartphone app for remote control and monitoring</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                            `,
        section2: `<div class="car-images-container">
                        <div class="car-image">
                            <img src="./images/Model X/Model X 2.png" alt="Car 1">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model X/Model X 3.jpg" alt="Car 2">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model X/Model X 4.jpg" alt="Car 3">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model X/Model X 5.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model X/Model X 6.jpg" alt="Car 5">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model X/Model X 7.jpg" alt="Car 6">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model X/Model X 8.jpg" alt="Car 7">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model X/Model X 9.jpg" alt="Car 8">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model X/Model X 10.jpg" alt="Car 9">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model X/Model X 11.jpg" alt="Car 10">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model X/Model X 13.jpg" alt="Car 11">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model X/Model X 14.jpg" alt="Car 12">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model X/Model X 15.jpg" alt="Car 14">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model X/Model X 16.jpg" alt="Car 15">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model X/Model X 17.jpg" alt="Car 16">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model X/Model X 18.jpg" alt="Car 17">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model X/Model X 19.jpg" alt="Car 18">
                        </div>
                    </div> `,
    },
    modelYPerformance: {
        section1: `<h2>Model Y </h2>   
                    <div class="car-info-container">
                        <div class="car-picture">
                            <img src="./images/Model Y/Model Y Performance.jpg" alt="Model Y" class="big-car-image">
                        </div>
                        <div class="car-launch-date">
                            <p>Launch Date: <span>March, 2019</span></p>
                        </div>
                        <div class="car-price-history">
                        <br>
                            <h2> graph will be shown here <h2>
                            <div id="tab-price-features" class="tab-content">
                                    <canvas id="priceChart"> space for graph with data</canvas>
                             </div>
                        </div>
                    <div>
                            <div class="containerfet">
                                <h1>Tesla Model Y Performance Features</h1>
                                <div class="features">
                                    <div class="feature">
                                        <h2>Performance</h2>
                                        <ul>
                                            <li>Acceleration: 0-60 mph (0-100 km/h) in 3.5 seconds</li>
                                            <li>Top Speed: Approximately 155 mph (250 km/h)</li>
                                            <li>Range: Up to 303 miles (488 km) on a single charge</li>
                                            <li>Powertrain: Dual-motor all-wheel drive for maximum acceleration and stability</li>
                                            <li>Handling: Lowered suspension for improved handling and performance</li>
                                        </ul>
                                    </div>
                                    <div class="feature">
                                        <h2>Exterior</h2>
                                        <ul>
                                            <li>Design: Sporty, aerodynamic design with a performance-oriented look</li>
                                            <li>Wheels: 21-inch Überturbine wheels for enhanced grip and style</li>
                                            <li>Lights: LED headlights and taillights with modern styling</li>
                                        </ul>
                                    </div>
                                    <div class="feature">
                                        <h2>Interior</h2>
                                        <ul>
                                            <li>Seating: Premium seating for five passengers with sporty, high-quality materials</li>
                                            <li>Dashboard: 15-inch central touchscreen display for controls and infotainment</li>
                                            <li>Steering Wheel: Standard steering wheel with integrated controls</li>
                                        </ul>
                                    </div>
                                    <div class="feature">
                                        <h2>Technology</h2>
                                        <ul>
                                            <li>Autopilot: Includes advanced driver assistance features like adaptive cruise control and lane-keeping</li>
                                            <li>Full Self-Driving (FSD): Available as an optional upgrade with additional features</li>
                                            <li>Infotainment System: Central touchscreen providing navigation, media access, and entertainment options</li>
                                            <li>Over-the-Air Updates: Regular updates to improve features and performance</li>
                                        </ul>
                                    </div>
                                    <div class="feature">
                                        <h2>Safety</h2>
                                        <ul>
                                            <li>Cameras: Equipped with a full camera suite for 360-degree visibility and Autopilot support</li>
                                            <li>Sensors: Radar and ultrasonic sensors for collision avoidance and parking assistance</li>
                                            <li>Safety Ratings: High safety ratings with comprehensive safety features</li>
                                        </ul>
                                    </div>
                                    <div class="feature">
                                        <h2>Comfort and Convenience</h2>
                                        <ul>
                                            <li>Climate Control: Automatic climate control system with dual-zone temperature settings</li>
                                            <li>Storage: Ample cargo space with a front trunk (frunk) and rear cargo area</li>
                                            <li>Connectivity: Tesla app integration for remote control and monitoring</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>                    `,

        section2: `<div class="car-images-container">
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 2.jpg" alt="Car 2">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 3.jpg" alt="Car 3">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 4.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 5.jpg" alt="Car 5">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 6.jpg" alt="Car 6">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 7.jpg" alt="Car 7">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 8.jpg" alt="Car 8">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 9.jpg" alt="Car 9">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 17.jpg" alt="Car 10">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 11.jpg" alt="Car 11">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 12.jpg" alt="Car 12">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 13.jpg" alt="Car 14">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 14.jpg" alt="Car 15">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 15.jpg" alt="Car 16">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 16.jpg" alt="Car 17">
                        </div>
                    </div> `,
    },
    modelYLongRangeAWD: {
        section1: `<h2>Model Y Long Range AWD </h2>   
                    <div class="car-info-container">
                        <div class="car-picture">
                            <img src="./images/Model Y/Model Y Long Range AWD.jpg" alt="Model Y LongRangeAWD" class="big-car-image">
                        </div>
                        <div class="car-launch-date">
                            <p>Launch Date: <span>March, 2019</span></p>
                        </div>
                        <div class="car-price-history">
                        <br>
                            <h2> graph will be shown here <h2>
                            <div id="tab-price-features" class="tab-content">
                                    <canvas id="priceChart"> space for graph with data</canvas>
                             </div>
                        </div>
                    <div>
                        <div class="containerfet">
                            <h1>Tesla Model Y Long Range AWD Features</h1>
                            <div class="features">
                                <div class="feature">
                                    <h2>Performance</h2>
                                    <ul>
                                        <li>Acceleration: 0-60 mph (0-100 km/h) in 4.8 seconds</li>
                                        <li>Top Speed: Approximately 135 mph (217 km/h)</li>
                                        <li>Range: Up to 330 miles (531 km) on a single charge</li>
                                        <li>Powertrain: Dual-motor all-wheel drive for balanced performance and traction</li>
                                        <li>Handling: Adaptive suspension for a comfortable ride</li>
                                    </ul>
                                </div>
                                <div class="feature">
                                    <h2>Exterior</h2>
                                    <ul>
                                        <li>Design: Streamlined design with a focus on efficiency</li>
                                        <li>Wheels: 19-inch Gemini wheels with an option to upgrade to 20-inch Induction wheels</li>
                                        <li>Lights: LED headlights and taillights for a modern aesthetic</li>
                                    </ul>
                                </div>
                                <div class="feature">
                                    <h2>Interior</h2>
                                    <ul>
                                        <li>Seating: Spacious seating for five or seven passengers with high-quality materials</li>
                                        <li>Dashboard: 15-inch central touchscreen display for controls and infotainment</li>
                                        <li>Steering Wheel: Standard steering wheel with integrated controls</li>
                                    </ul>
                                </div>
                                <div class="feature">
                                    <h2>Technology</h2>
                                    <ul>
                                        <li>Autopilot: Advanced driver assistance features including adaptive cruise control and lane-keeping assist</li>
                                        <li>Full Self-Driving (FSD): Optional package with enhanced autonomous features</li>
                                        <li>Infotainment System: Comprehensive infotainment options including streaming and games</li>
                                        <li>Over-the-Air Updates: Regular updates to improve vehicle features and performance</li>
                                    </ul>
                                </div>
                                <div class="feature">
                                    <h2>Safety</h2>
                                    <ul>
                                        <li>Cameras: 360-degree camera system for full visibility and Autopilot support</li>
                                        <li>Sensors: Advanced sensors for collision avoidance and parking assistance</li>
                                        <li>Safety Ratings: High safety ratings with multiple safety features</li>
                                    </ul>
                                </div>
                                <div class="feature">
                                    <h2>Comfort and Convenience</h2>
                                    <ul>
                                        <li>Climate Control: Dual-zone automatic climate control for optimal comfort</li>
                                        <li>Storage: Versatile cargo space with a front trunk and spacious rear cargo area</li>
                                        <li>Connectivity: Full integration with the Tesla app for remote control and monitoring</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    `,

        section2: `<div class="car-images-container">
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 2.jpg" alt="Car 2">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 3.jpg" alt="Car 3">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 4.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 5.jpg" alt="Car 5">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 6.jpg" alt="Car 6">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 7.jpg" alt="Car 7">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 8.jpg" alt="Car 8">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 9.jpg" alt="Car 9">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 17.jpg" alt="Car 10">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 11.jpg" alt="Car 11">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 12.jpg" alt="Car 12">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 13.jpg" alt="Car 14">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 14.jpg" alt="Car 15">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 15.jpg" alt="Car 16">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 16.jpg" alt="Car 17">
                        </div>
                    </div>`,
    },
    modelYLongRangeRWD: {
        section1: `<h2>Model Y Long Range RWD </h2>   
                    <div class="car-info-container">
                        <div class="car-picture">
                            <img src="./images/Model Y/Model Y Long Range RWD.jpg" alt="Model Y LongRangeRWD" class="big-car-image">
                        </div>
                        <div class="car-launch-date">
                            <p>Launch Date: <span>March, 2019</span></p>
                        </div>
                        <div class="car-price-history">
                        <br>
                            <h2> graph will be shown here <h2>
                            <div id="tab-price-features" class="tab-content">
                                    <canvas id="priceChart"> space for graph with data</canvas>
                             </div>
                        </div>
                    <div>
                    <div class="containerfet">
                            <h1>Tesla Model Y RWD Features</h1>
                            <div class="features">
                                <div class="feature">
                                    <h2>Performance</h2>
                                    <ul>
                                        <li>Acceleration: 0-60 mph (0-100 km/h) in 6.6 seconds</li>
                                        <li>Top Speed: Approximately 135 mph (217 km/h)</li>
                                        <li>Range: Up to 260 miles (418 km) on a single charge</li>
                                        <li>Powertrain: Rear-wheel drive with a single motor for efficient performance</li>
                                        <li>Handling: Standard suspension for a smooth ride</li>
                                    </ul>
                                </div>
                                <div class="feature">
                                    <h2>Exterior</h2>
                                    <ul>
                                        <li>Design: Clean, minimalist design with an aerodynamic profile</li>
                                        <li>Wheels: 19-inch Gemini wheels as standard</li>
                                        <li>Lights: LED headlights and taillights with a modern design</li>
                                    </ul>
                                </div>
                                <div class="feature">
                                    <h2>Interior</h2>
                                    <ul>
                                        <li>Seating: Comfortable seating for five passengers with premium materials</li>
                                        <li>Dashboard: 15-inch central touchscreen for vehicle controls and infotainment</li>
                                        <li>Steering Wheel: Standard steering wheel with integrated controls</li>
                                    </ul>
                                </div>
                                <div class="feature">
                                    <h2>Technology</h2>
                                    <ul>
                                        <li>Autopilot: Standard Autopilot features including adaptive cruise control and lane-keeping assist</li>
                                        <li>Full Self-Driving (FSD): Available as an optional upgrade with additional capabilities</li>
                                        <li>Infotainment System: Integrated touchscreen with navigation, streaming, and more</li>
                                        <li>Over-the-Air Updates: Software updates delivered regularly to enhance features</li>
                                    </ul>
                                </div>
                                <div class="feature">
                                    <h2>Safety</h2>
                                    <ul>
                                        <li>Cameras: Full camera suite providing 360-degree visibility and support for Autopilot</li>
                                        <li>Sensors: Radar and ultrasonic sensors for enhanced safety and parking assistance</li>
                                        <li>Safety Ratings: Excellent safety ratings with comprehensive safety features</li>
                                    </ul>
                                </div>
                                <div class="feature">
                                    <h2>Comfort and Convenience</h2>
                                    <ul>
                                        <li>Climate Control: Automatic climate control with dual-zone settings</li>
                                        <li>Storage: Generous cargo space with both front and rear trunks</li>
                                        <li>Connectivity: Tesla app for remote access and vehicle monitoring</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    
                    `,
        section2: `<div class="car-images-container">
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 2.jpg" alt="Car 2">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 3.jpg" alt="Car 3">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 4.jpg" alt="Car 4">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 5.jpg" alt="Car 5">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 6.jpg" alt="Car 6">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 7.jpg" alt="Car 7">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 8.jpg" alt="Car 8">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 9.jpg" alt="Car 9">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 17.jpg" alt="Car 10">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 11.jpg" alt="Car 11">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 12.jpg" alt="Car 12">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 13.jpg" alt="Car 14">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 14.jpg" alt="Car 15">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 15.jpg" alt="Car 16">
                        </div>
                        <div class="car-image">
                            <img src="./images/Model Y/Model Y 16.jpg" alt="Car 17">
                        </div>
                    </div>`,
    },
};


// Data for each model (example data)
const graphdata = {
    modelS: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        values: [1200, 1500, 1800, 1700, 2000, 2200, 2100]
    },
    modelSPlaid: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        values: [1100, 1400, 1700, 1600, 1900, 2100, 2000]
    },
    model3: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        values: [1300, 1600, 1900, 1800, 2100, 2300, 2200]
    }
};


function showData(dataKey) {
    const displayElement = document.getElementById('data-display');
    displayElement.innerHTML = data[dataKey];

    // Add event listeners to the newly added elements
    document.querySelectorAll('.image-container').forEach(function(container) {
        container.addEventListener('click', function() {
            const submodelKey = this.getAttribute('data-submodel-key');
            showSubmodelData(submodelKey);
        });
    });

    // Show the default sub-model data for the selected model
    const defaultSubmodelKey = getDefaultSubmodelKey(dataKey);
    if (defaultSubmodelKey) {
        showSubmodelData(defaultSubmodelKey);
    }
}

function showSubmodelData(submodelKey) {
    document.getElementById('tab1').innerHTML = submodelData[submodelKey].section1;
    document.getElementById('tab2').querySelector('.image-gallery').innerHTML = submodelData[submodelKey].section2;
    document.getElementById('third-container').style.display = 'block';
}

function openTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(function(tab) {
        tab.style.display = 'none';
    });
    document.getElementById(tabId).style.display = 'block';
}

function getDefaultSubmodelKey(dataKey) {
    const defaultSubmodels = {
        data1: 'modelS',           // Default sub-model for Model S
        data2: 'model3Performance', // Default sub-model for Model 3
        data3: 'modelX',           // Default sub-model for Model X
        data4: 'modelYPerformance', // Default sub-model for Model Y
    };
    return defaultSubmodels[dataKey] || null;
}

// Initialize with the first data set
window.onload = function() {
    showData('data1'); // Replace with the default data set as needed
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

document.querySelectorAll('.submodel-selector').forEach(selector => {
    selector.addEventListener('click', (e) => {
        const selectedSubModel = e.target.dataset.submodel;
        createChart(selectedSubModel);
    });
});



// JavaScript to handle the image modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-image');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.close');

    images.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'flex';
            modalImg.src = this.src;
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
