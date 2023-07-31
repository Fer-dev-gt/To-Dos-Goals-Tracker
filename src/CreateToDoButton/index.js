import './CreateToDoButton.css';
import { useContext } from 'react';
import { ToDoContext } from '../ToDoContext';
import worm from './worm.png';
import cube from './cube.png';

function CreateToDoButton({ setOpenModal }) {
  // const {setOpenModal, openModal} = useContext(ToDoContext);
  return(    
    <>                                           
    <button className='CreateToDoButton'
      onClick={
        (event) => {
          setOpenModal(state => !state)
          console.log('le diste click')
          console.log(event)
          console.log(event.target)
        }
      }
    >+</button>
     <img className="worm1" src={worm} alt="TaskBudy"/>
     <img className="cube1" src={cube} alt="TaskBudy"/>
     <img className="worm2" src={worm} alt="TaskBudy"/>
     <img className="cube2" src={cube} alt="TaskBudy"/>
    </>
  );
}


export { CreateToDoButton };