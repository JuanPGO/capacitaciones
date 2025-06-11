// vanilla JavaScript

// Recuperamos el botón

// se crea una variable a la que se le asigna el elemento del documento con el identificador button

const button = document.querySelectorAll('button')

// al hacer click en el botón, tenemos que ejecutar una función.

button.addEventListener('click', function () {
    // recuperar la id del atributo del HTML
    const id = button.getAttribute('data-id')

    // llamar a un servicio para actualizar si me gusta
    // toggleLike(id)

    if (button.classList.contains('liked')) {
        button.classList.remove('liked')
        button.innerText = 'Me gusta'
    } else {
        button.classList.add('liked')
        button.innerText = 'Quitar me gusta'
    }
})

//! CUANDO SE DEBEN USAR VARIOS ELEMENTOS
// const buttons = document.querySelectorAll('button')

// // al hacer click en el botón, tenemos que ejecutar una función.

// buttons.forEach(button => {
//     button.addEventListener('click', function () {
//         // recuperar la id del atributo del HTML
//         const id = button.getAttribute('data-id')

//         // llamar a un servicio para actualizar si me gusta
//         // toggleLike(id)

//         if (button.classList.contains('liked')) {
//             button.classList.remove('liked')
//             button.innerText = 'Me gusta'
//         } else {
//             button.classList.add('liked')
//             button.innerText = 'Quitar me gusta'
//         }
//     })
// });

