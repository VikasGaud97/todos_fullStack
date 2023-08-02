import "./input.css"

const InputLink = () => {
return(  
<div className="container">
<form >
     <input className="ok_input" type='text' placeholder="check it" ></input>
     <button  className='update'><i class="fa-solid fa-arrow-up-from-bracket"></i></button>
     <span className='cross' ><i class="fa-regular fa-circle-xmark"></i></span>
<span className='pen' ><i className="fas fa-pen-to-square" ></i></span>
<span className='trash' ><i className="fas fa-trash"></i></span>
   </form> 
 
</div> )
};



export default InputLink


