document.addEventListener('DOMContentLoaded', function() {
    // 1. Configuración de la Gráfica de Disponibilidad (Chart.js)
    const ctx = document.getElementById('availabilityChart').getContext('2d');
    
    const availabilityData = {
        labels: ['Habitación Individual', 'Habitación Doble', 'Suite', 'Suite de Lujo', 'Suite Familiar'],
        datasets: [{
            label: 'Unidades Disponibles',
            data: [12, 19, 3, 5, 2],
            backgroundColor: 'rgba(37, 99, 235, 0.6)', // Azul primario con transparencia
            borderColor: 'rgba(37, 99, 235, 1)',
            borderWidth: 1
        }]
    };

    const config = {
        type: 'bar',
        data: availabilityData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 20,
                    title: {
                        display: true,
                        text: 'Unidades Disponibles',
                        font: {
                            size: 10
                        }
                    }
                },
                x: {
                    ticks: {
                        font: {
                            size: 10
                        },
                        maxRotation: 45,
                        minRotation: 45
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    };

    const availabilityChart = new Chart(ctx, config);

    // 2. Manejo del Formulario de Reserva
    const reservationForm = document.getElementById('reservationForm');

    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Obtener valores
        const checkin = document.getElementById('checkin').value;
        const checkout = document.getElementById('checkout').value;
        const guestName = document.getElementById('guestName').value;
        const contact = document.getElementById('contact').value;

        // Validación básica de fechas
        if (new Date(checkin) >= new Date(checkout)) {
            alert('Error: La fecha de salida debe ser posterior a la fecha de entrada.');
            return;
        }

        // Simulación de envío/consulta
        console.log('Consultando disponibilidad para:', {
            checkin,
            checkout,
            guestName,
            contact
        });

        alert(`¡Gracias ${guestName}! Estamos consultando disponibilidad para tu estancia del ${checkin} al ${checkout}. Te contactaremos en ${contact}.`);
        
        // Opcional: Limpiar formulario
        // reservationForm.reset();
    });

    // 3. Botones de "Reservar" en las tarjetas
    const reserveButtons = document.querySelectorAll('.btn-secondary');
    reserveButtons.forEach(button => {
        button.addEventListener('click', function() {
            const roomName = this.closest('.room-info').querySelector('h3').innerText;
            alert(`Has seleccionado la ${roomName}. Por favor, completa el formulario de arriba para continuar.`);
            
            // Scroll suave hacia el formulario
            document.getElementById('reservationForm').scrollIntoView({ behavior: 'smooth' });
        });
    });
});
