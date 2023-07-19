import logo from './platzi.webp';
import './App.css';

function App() {                                          // Esto es un Componente de React, por convención se escriben con mayuscula
  return (                                                // Esto es lo que retorna nuestro Componente, son sus elementos internos, NO ES UN COMPONENTE, lo de abajo NO ES HTML, es JSX una sintaxis que facilita la lectura de código y luego se reenderiza a HTML clásico
    <div className="App">     
      <TodoItem />                                         
      <TodoItem />
      <TodoItem />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hey! It's time to learn some React
        </a>
      </header>
    </div>
  );
}


// Creamos un nuevo Componente de React, este lo vamos a insertar en el Componente App
function TodoItem() {
  return(                                               // Creamos nuestra estructura JSX
    <li>
      <span>V</span>
      <p>Cry with the 'Llorona'</p>
      <span>X</span>
    </li>
  );
}
export default App;
