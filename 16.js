/*document.getElementById('credito').addEventListener('input', function (e) {
    let input = e.target;
    let value = input.value.replace(/\s+/g, ''); // Eliminar todos los espacios
    
    let formattedValue = '';

    // Agregar espacios cada cuatro caracteres
    for (let i = 0; i < value.length; i += 4) {
        if (i > 0) {
            formattedValue += ' ';
        }
        formattedValue += value.substring(i, i + 4);
    }

    input.value = formattedValue;
});*/

document.getElementById('credito').addEventListener('input', function (e) {
    let input = e.target;
    let value = input.value.replace(/\D/g, ''); // Eliminar todos los caracteres no numéricos
    
    let formattedValue = '';

    // Agregar espacios cada cuatro caracteres
    for (let i = 0; i < value.length; i += 4) {
        if (i > 0) {
            formattedValue += ' ';
        }
        formattedValue += value.substring(i, i + 4);
    }

    input.value = formattedValue;
});



document.getElementById('fecha').addEventListener('input', function (e) {
    let input = e.target;
    let value = input.value.replace(/\D/g, ''); // Eliminar todos los caracteres no numéricos
    let formattedValue = '';

    if (value.length >= 2) {
        formattedValue = value.substring(0, 2) + '/';
        if (value.length > 2) {
            formattedValue += value.substring(2, 4);
        }
    } else {
        formattedValue = value;
    }

    input.value = formattedValue;
});

document.querySelector('.toggle-password').addEventListener('click', function (e) {
    let input = document.getElementById('password');
    if (input.type === 'password') {
        input.type = 'text';
        e.target.textContent = '🙈'; // Cambia el ícono a un ojo cerrado
    } else {
        input.type = 'password';
        e.target.textContent = '👁️'; // Cambia el ícono a un ojo abierto
    }
});

