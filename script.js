document.addEventListener('DOMContentLoaded', function() {
    // Iniciar movimiento automático continuo
    startMovingAutomatically();

    // Hacer que la mascota sea arrastrable
    const petContainer = document.querySelector('.pet-container');
    let isDragging = false;
    let offsetX, offsetY;

    petContainer.addEventListener('mousedown', startDrag);
    petContainer.addEventListener('mousemove', drag);
    petContainer.addEventListener('mouseup', endDrag);
    petContainer.addEventListener('mouseleave', endDrag);

    function startDrag(e) {
        isDragging = true;
        offsetX = e.clientX - petContainer.getBoundingClientRect().left;
        offsetY = e.clientY - petContainer.getBoundingClientRect().top;
    }

    function drag(e) {
        if (isDragging) {
            let x = e.clientX - offsetX;
            let y = e.clientY - offsetY;

            // Ajustar para que el centro de la mascota no esté fuera de los límites de la ventana
            x = Math.min(Math.max(x, 0), window.innerWidth - petContainer.offsetWidth);
            y = Math.min(Math.max(y, 0), window.innerHeight - petContainer.offsetHeight);

            petContainer.style.left = `${x}px`;
            petContainer.style.top = `${y}px`;
        }
    }

    function endDrag() {
        isDragging = false;
    }

    // Función para movimiento automático continuo
    function startMovingAutomatically() {
        const pet = document.querySelector('.pet');
        let angle = 0;
        let radius = 100; // Radio del movimiento, ajustable según sea necesario

        setInterval(() => {
            const centerX = window.innerWidth / 2 - pet.offsetWidth / 2;
            const centerY = window.innerHeight / 2 - pet.offsetHeight / 2;

            // Calcular la posición en función del ángulo y el radio
            const x = centerX + Math.sin(angle) * radius;
            const y = centerY + Math.cos(angle) * radius;

            pet.style.left = `${x}px`;
            pet.style.top = `${y}px`;

            // Incrementar el ángulo para el siguiente paso
            angle += 0.05; // Ajusta la velocidad de movimiento
        }, 100); // Ajusta el intervalo según sea necesario
    }
});
