import ReactDOM from "https://esm.sh/react-dom@19.1.0/client"
import React from "https://esm.sh/react@19.1.0"

const appDomElement = document.getElementById('app')

const root = ReactDOM.createRoot(appDomElement)
// const button = React.createElement('button', null, 'Me gusta')
const button = React.createElement('button', {'data-id': 123}, 'Button 1')
const button2 = React.createElement('button', {'data-id': 123}, 'Button 2')
const button3 = React.createElement('button', {'data-id': 123}, 'Button 3')

// root.render('<button>Me gusta</button') //! no funciona rendirizar html

// forma correcta
// root.render('button')

// para envolver un arreglo
// const div = React.createElement('div', null [button,button2,button3])

// root.render('div')

//! para envolver sin div. para evitar crear niveles innecesarios en el html
const fragmento = React.createElement(React.Fragment, null [button,button2,button3])

root.render('div')

//todo ---------------------------------------------

// Usando jsx se puede cambiar de esta sintaxis
    // const button = React.createElement('button',{"data.id": 123}, 'Button 1')
    // const button2 = React.createElement('button', {"data-id": 456}, 'Button 2')
    // const button3 = React.createElement('Button',{"data-id": 789}, 'Button 3')

    // const app = React.createElement(React.Fragment, null, [button,  button2, button3])

// a esta sintaxis unando el jsx
    {/* <React.Fragment>
        <button data-id='123'>Button 1</button>
        <button data-id='456'>Button 2</button>
        <button data-id='789'>Button 3</button>
    </React.Fragment> */}

// Ejemplo
    //     const button = React.createElement('button', {"data-id": 123}, 'button 1')
    //  Es igual a escribir
    //     const buttonJSX = <button data-id="123">Button 1</button>