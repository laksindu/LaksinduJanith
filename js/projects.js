// Projects data
const projectsData = [
    {
        id: 1,
        title: "Universal ir iot remort",
        category: "iot",
        image: "ir3.png",
        description: "An IoT-enabled universal IR remote that captures and replays IR signals for seamless control of any IR device.",
        technologies: ["iot","Home Automation"],
        github: "#",
        demo: "#",
        gallery: [
            "https://laksindu.github.io/Laksindu_Janith/resized_image.png",
            "https://laksindu.github.io/Laksindu_Janith/dashboard.jpeg",
            "ir3.png",
        ],
        detailDescription: "This IoT-enabled universal IR remote is built using a microcontroller, IR receiver, and IR transmitter. It captures the infrared signals from any standard remote control and stores them in memory for future use. Once recorded, these signals can be replayed through the IR transmitter to control a wide range of devices such as TVs, air conditioners, or audio systems. The system connects to Wi-Fi, allowing remote control through a web interface or mobile app. This project demonstrates how everyday IR devices can be integrated into smart home systems using simple IoT components and programming techniques.\n\nKey features:\n- Capture and store IR signals from any remote control\n- Replay stored signals to control devices\n- Wi-Fi connectivity for remote access\n- User-friendly web interface for managing devices\n- Mobile app integration for on-the-go control\n- Customizable settings for each device\n- Secure access with user authentication\n- Compact design for easy installation"
    },
    {
        id: 2,
        title: "UnoJoy Game Controller",
        category: "arduino",
        image: "game2.png",
        description: "An Arduino Uno-powered joystick controller for seamless, customizable gameplay.",
        technologies: ["Arduino","HMI"],
        github: "https://drive.google.com/drive/folders/1D9ta3iOdcs4SiAyZFP3yhVOpM5BdCph2",
        demo: "#",
        gallery: [
            "https://laksindu.github.io/Laksindu_Janith/game1.jpeg",
            "https://laksindu.github.io/Laksindu_Janith/game3.png",
            "game2.png",
        ],
        detailDescription: "This UnoJoy game controller is built using an Arduino Uno, two joysticks, and four buttons, allowing it to function as a custom gamepad. The Arduino Uno is programmed to emulate a USB game controller using the UnoJoy firmware, making it compatible with various games and applications. Each joystick provides precise analog input for movement or aiming, while the buttons can be mapped to different in-game actions. This project showcases how an Arduino can be transformed into a plug-and-play gaming device with simple components and coding."
    },
    {
        id: 3,
        title: "Smart extension cord",
        category: "iot",
        image: "alexasmart.png",
        description: "An ESP32-powered smart extension for remote switch control, integrated with Alexa for voice commands.",
        technologies: ["iot","Home Automation"],
        github: "#",
        demo: "#",
        gallery: [
            "https://content.instructables.com/F9D/CNRY/LBDNVMRH/F9DCNRYLBDNVMRH.png?auto=webp&fit=bounds&frame=1&height=1024&width=1024auto=webp&frame=1&height=150",
            "https://laksindu.github.io/Laksindu_Janith/alexasmart.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd2qYQP12MUtGJz9EA549ehqkoGtb_n4Bx-w&s",
        ],
        detailDescription: "This Smart Extension is built using an ESP32, enabling seamless control of two switches via Alexa integration. The ESP32 is programmed to connect with Alexa, allowing users to control connected devices with simple voice commands. This project showcases how an ESP32 can be leveraged to create a smart home solution, with the flexibility to manage switches remotely through an easy-to-use voice assistant interface. By combining IoT technology with Alexa, this project offers a simple and effective way to automate home appliances and elevate user convenience.\n\nKey features:\n- Control two switches remotely via Alexa\n- ESP32 microcontroller for Wi-Fi connectivity\n- User-friendly voice commands for device management\n- Compact design for easy installation\n- Customizable settings for each switch\n- Secure access with user authentication\n- Integration with other smart home devices"
    },
    {
        id: 4,
        title: "Movie Flix",
        category: "web",
        image: "movieflix.png",
        description: "A modern e-commerce platform with product catalog, shopping cart, user authentication, and payment processing.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "MongoDB"],
        github: "#",
        demo: "https://laksindu.github.io/MovieFlix/",
    },
    {
        id: 5,
        title: "Rc camera rover",
        category: "arduino",
        image: "https://laksindu.github.io/Laksindu_Janith/ChatGPT%20Image%20Apr%203,%202025,%2008_12_35%20PM.png",
        description: "An Arduino-powered RC camera rover with remote navigation and live streaming.",
        technologies: ["Arduino", "Robotic"],
        github: "https://drive.google.com/drive/folders/1D9ta3iOdcs4SiAyZFP3yhVOpM5BdCph2",
        demo: "#",
        gallery: [
            "https://images.pexels.com/photos/9068396/pexels-photo-9068396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/8579946/pexels-photo-8579946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/3846115/pexels-photo-3846115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        detailDescription: "This RC Camera Rover is a versatile remote-controlled vehicle equipped with live video streaming capabilities. Built on the Arduino platform, it allows you to navigate and explore environments remotely while streaming real-time video feedback<br>The project features a robust chassis design with high-torque motors for all-terrain capabilities, controlled through an L293D motor driver shield and Arduino UNO board. The camera module provides a first-person view that can be accessed wirelessly from your smartphone or computer.<br>Perfect for hobbyists, educational purposes, or even home security applications, this project demonstrates the integration of robotics, electronics, and communication technologies."
    },
    {
        id: 6,
        title: "Movee game",
        category: "web",
        image: "moveegame.png",
        description: "Our platform is completely free to download any games without any issus.",
        technologies: ["HTML5", "CSS3", "JavaScript", "cloudDB"],
        github: "#",
        demo: "https://laksindu.github.io/Movee-/game.html",
    },
    {
        id: 7,
        title: "Arduino CNC Printer",
        category: "arduino",
        image: "https://laksindu.github.io/Laksindu_Janith/cnc_main1.jpg",
        description: "An Arduino CNC printer for automated engraving and precision cutting.",
        technologies: ["Arduino", "Servos", "3D Printing"],
        github: "https://drive.google.com/file/d/16gQJ80UIHA3pMdQbnkqIop8q-KNJT3Rb/view",
        gallery: [
            "https://laksindu.github.io/Laksindu_Janith/cnc.jpeg",
            "https://laksindu.github.io/Laksindu_Janith/cnc3.jpeg",
            "https://laksindu.github.io/Laksindu_Janith/cnc_main1.jpg",
        ],
        detailDescription: "This CNC machine is powered by using two stepper motors and one servo motor. That is, it acts across the X, Y, and Z axes. All of these motors are activated using the L293D motor drive shield and Arduino UNO board.<br>If we want to draw a character through this CNC machine, its G-code must be obtained. The Inkscape software has been used for this. Also, the Arduino program sets the CNC machine to work, and a processing program is used to run the G-code."
    },
    {
        id: 8,
        title: "Mini Wifi jammer",
        category: "iot",
        image: "jammer.png",
        description: "A mini DIY WiFi jammer that disrupts wireless signals within a limited range.",
        technologies: ["iot","Networking"],
        github: "https://drive.google.com/file/d/1H-mPAyESH29VI5ZmjlRecf993arkYhNS/view?usp=drive_link",
        demo: "#",
        gallery: [
            "https://laksindu.github.io/Laksindu_Janith/jammer.png",
            "https://laksindu.github.io/Laksindu_Janith/esp8266_deauther.png",
            "https://home-cdn.reolink.us/wp-content/uploads/2024/09/how-to-prevent-wifi-jamming.jpg",
        ],
        detailDescription: "This mini DIY WiFi jammer is built using an ESP-01, enabling controlled disruption of WiFi signals within a limited range. The ESP-01 is programmed to send deauthentication packets, interfering with network connections in its vicinity. This project demonstrates how an ESP-01 can be used for security testing and network analysis, showcasing its ability to manipulate wireless signals with simple coding and hardware. By leveraging IoT technology, this device provides insight into WiFi vulnerabilities and network management techniques."
    },
    {
        id: 9,
        title: "Movee",
        category: "web",
        image: "moveelogo.png",
        description: "Movee was created with a simple purpose: to make music accessible to everyone",
        technologies: ["HTML5", "CSS3", "JavaScript", "cloudflare"],
        github: "#",
        demo: "https://laksindu.github.io/Movee-/",
    },
        {
        id: 10,
        title: "Pythagoras Calculator",
        category: "web",
        image: "pthagaros.png",
        description: "A powerful tool designed for quick and accurate Pythagorean calculations.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        github: "#",
        demo: "https://laksindu.github.io/pythagorastheorem/",
    },
        {
        id: 11,
        title: "Arduino Bluetooth car",
        category: "arduino",
        image: "https://laksindu.github.io/Laksindu_Janith/bluetooth.png",
        description: "An Arduino-powered Bluetooth car with wireless control via a mobile app.",
        technologies: ["Arduino", "Robotic", "Bluetooth"],
        github: "#",
        demo: "#",
        gallery: [
            "https://laksindu.github.io/Laksindu_Janith/bluetooth.png",
            "https://laksindu.github.io/Laksindu_Janith/blu3.jpeg",
            "https://images.sftcdn.net/images/t_app-cover-s,f_auto/p/4e2b2251-80eb-4e9b-8a72-1dc68041c662/3712855545/bluetooth-rc-car-screenshot",
        ],
        detailDescription: "This Arduino Bluetooth car is built using an Arduino Uno, an HC-05 Bluetooth module, a motor driver, and a rechargeable battery, allowing it to be controlled wirelessly via a smartphone or Bluetooth-enabled device. The Arduino Uno processes commands received from a mobile app and translates them into movement, enabling precise control over speed and direction. The motor driver powers the motors, ensuring smooth acceleration and braking. This project demonstrates how an Arduino can be used to create a fun and interactive robotic vehicle with simple components and coding."
    },
            {
        id: 12,
        title: "anonymous chat webapp",
        category: "web",
        image: "ano.png",
        description: "A real-time anonymous chat app with room-based messaging, optional usernames, and Firebase backend for instant communication.",
        technologies: ["HTML5","JavaScript","Firebase"],
        github: "#",
        demo: "https://laksindu.github.io/pythagorastheorem/",
    }
    
];

// Function to populate projects
function populateProjects(category = 'all') {
    const projectsGrid = document.querySelector('.projects-grid');
    
    // Clear existing projects
    projectsGrid.innerHTML = '';
    
    // Filter projects based on category
    const filteredProjects = category === 'all' 
        ? projectsData 
        : projectsData.filter(project => project.category === category);
    
    // Create project cards
    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-id', project.id);
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-category">${getCategoryName(project.category)}</div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" class="project-link" title="View Code"><i class="fa-brands fa-google-drive"></i></a>
                    ${project.category === 'web' ? `<a href="${project.demo}" class="project-link" title="Live Demo"><i class="fas fa-external-link-alt"></i></a>` : ''}
                    ${project.category !== 'web' ? `<a href="#" class="project-link view-details" title="View Details"><i class="fas fa-info-circle"></i></a>` : ''}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
    
    // Add event listeners to view details buttons
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const projectCard = this.closest('.project-card');
            const projectId = parseInt(projectCard.getAttribute('data-id'));
            openProjectModal(projectId);
        });
    });
}

// Helper function to get category name
function getCategoryName(category) {
    switch(category) {
        case 'iot':
            return 'IoT';
        case 'arduino':
            return 'Arduino';
        case 'web':
            return 'Web';
        default:
            return category;
    }
}

// Function to open project modal
function openProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    const modal = document.getElementById('project-modal');
    const modalBody = modal.querySelector('.modal-body');
    
    modalBody.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="modal-image">
        <h2 class="modal-title">${project.title}</h2>
        <p class="modal-description">${project.detailDescription}</p>
        
        <h3>Technologies Used</h3>
        <div class="project-tech">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        
        <h3>Project Gallery</h3>
        <div class="project-gallery">
            ${project.gallery.map(img => `
                <div class="gallery-item">
                    <img src="${img}" alt="${project.title} Gallery Image">
                </div>
            `).join('')}
        </div>
        
        <div class="project-links" style="margin-top: 20px;">
            <a href="${project.github}" class="btn btn-primary" style="margin-right: 10px;">
                <i class="fab fa-github"></i> View Code
            </a>
            <a href="${project.demo}" class="btn btn-secondary">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
        </div>
    `;
    
    modal.style.display = 'block';
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
}

// Function to close project modal
function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.style.display = 'none';
    
    // Re-enable body scrolling
    document.body.style.overflow = 'auto';
}

// Initialize projects when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Populate projects on initial load
    populateProjects();
    
    // Add event listeners to filter buttons
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get selected category
            const category = this.getAttribute('data-filter');
            
            // Filter projects
            populateProjects(category);
        });
    });
    
    // Add event listener to close modal
    document.querySelector('.modal-close').addEventListener('click', closeProjectModal);
    
    // Close modal when clicking outside of modal content
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('project-modal');
        if (event.target === modal) {
            closeProjectModal();
        }
    });
    
    // Close modal on escape key
    window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeProjectModal();
        }
    });
});