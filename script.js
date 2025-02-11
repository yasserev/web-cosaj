document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;

            if (name && email && message) {
                // In a real-world scenario, you would send this data to a backend
                alert('Gracias por su mensaje. Nos pondremos en contacto pronto.');
                this.reset();
            } else {
                alert('Por favor, complete todos los campos obligatorios.');
            }
        });
    }

    // Optional: Add active state to navigation
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Gráfico de Productividad
    const ctx = document.getElementById('productivityChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Perú', 'Brasil', 'Chile', 'Colombia', 'Argentina'],
                datasets: [{
                    label: 'Productividad Laboral (USD/hora)',
                    data: [15, 22, 25, 18, 20],
                    backgroundColor: [
                        'rgba(0, 86, 179, 0.7)',   // Azul para Perú
                        'rgba(0, 86, 179, 0.5)',   // Otros países más claros
                        'rgba(0, 86, 179, 0.5)',
                        'rgba(0, 86, 179, 0.5)',
                        'rgba(0, 86, 179, 0.5)'
                    ],
                    borderColor: 'rgba(0, 86, 179, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Comparativo de Productividad Laboral en Latinoamérica'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'USD por hora trabajada'
                        }
                    }
                }
            }
        });
    }

    // Menú de hamburguesa
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinksMenu = navMenu.querySelectorAll('a');

    hamburgerMenu.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    navLinksMenu.forEach(link => {
        link.addEventListener('click', function() {
            hamburgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});
