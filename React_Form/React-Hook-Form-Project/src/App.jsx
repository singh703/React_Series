import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

// Create a function of Submit data
  function onSubmit(data) {
    console.log("Submitting the form", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="">First Name: </label>
        <input 
        className={error.firstName ? 'input-error' : ""}
        {...register('firstName',
        { 
        required: true,
        minLength:{value:3, message:'Min Len atleast 3'},
        maxLength:{value:6, message:"max Length atmost 6"}
        })} />
        {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
      </div>
      <br/>
      <div>
        <label htmlFor="">Middle Name: </label>
        <input {...register('middleName')} />
      </div>
      <br/>
      <div>
        <label>Last Name: </label>
        <input 
        className={'errors.firstName ? 'input-error' : ""}
        {...register('lastName', {
        pattern: {
          value: /^[A-Za-z]+$/i ,
          message:"Last Name is not as per the rules"
        })}/>
        {errors.lastName && <p className='error-msg'>{errors.lastName.
        message</p>}
      </div>
      <br/>
      <input type="Submit" disabled={isSubmitting}/>
      value-{isSubmitting ? "Submitting" : "Submit"}
    </form>
  )
}

export default App
