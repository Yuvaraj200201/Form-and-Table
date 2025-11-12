import '../index.css';

const Form = ({formData, editIndex, handleFormDataChange, handleSubmit}) => {
  
  return (
    <div className='form-container'>
    <h1 className='head'>Form and Table</h1>
    <form className='form' onSubmit={handleSubmit}>
        <input className='name' type="text" placeholder='Name'
        value={formData.name}
        onChange={(e) => {
          const {value} = e.target 
          handleFormDataChange("name", value);
        }}
        required
        />
        <br />
        <input className='email' type="email" placeholder='Email'
        value={formData.email}
        onChange={(e) => {
          const {value} = e.target
          handleFormDataChange("email", value);
        }}
        required
        /> 
        <br />
        <button className='btn' type='submit'>
          {editIndex === null? "Add":"Update"}
        </button>
    </form>
    </div>
  )
}

export default Form