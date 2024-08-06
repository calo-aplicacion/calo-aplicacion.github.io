document.addEventListener('DOMContentLoaded', function() {
    console.log('Caló Landing Page cargada');

    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario
        console.log('Formulario enviado');
        alert('Gracias por contactarnos. Te responderemos pronto.');
        form.reset();
    });
});