// Creamos un nuevo Componente de React, este lo vamos a insertar en el Componente App
function ToDoItem(props) {                                        // Vamos a aplicar las propiedades que vienen de 'props' para desplegar la información correspondiente a cada Componente iterado
  return(                                                         // Creamos nuestra estructura JSX
    <li>
      <span>V {props.completed}</span>
      <p>{props.text}</p>
      <span>X</span>
    </li>
  );
}

export { ToDoItem };