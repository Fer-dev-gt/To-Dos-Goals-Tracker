import { ReactComponent as CheckSVG} from '../ToDoIcon/check.svg';
import { ReactComponent as DeleteSVG} from '../ToDoIcon/delete.svg';
import './ToDoIcon.css';

const iconTypes = {                                                               // Buena forma de hacer condicionales con varias opciones al crear un Objeto
  "check": (color) => <CheckSVG className='Icon-svg' fill={color}/>,
  "delete": (color) => <DeleteSVG className='Icon-svg' fill={color}/>
}


function ToDoIcon({ type, color, onClick }) {
  return (
    <span
      className={`Icon-container Icon-container-${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}


export { ToDoIcon };