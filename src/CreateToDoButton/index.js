import './CreateToDoButton.css';

function CreateToDoButton() {
  return(                                               
    <button className='CreateToDoButton'
      onClick={
        (event) => {
          console.log('le diste click')
          console.log(event)
          console.log(event.target)
        }
      }
    >+</button>
  );
}


export { CreateToDoButton };