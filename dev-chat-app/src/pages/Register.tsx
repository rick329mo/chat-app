import Add from "../assets/add-image.png"

function Register() {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>RapidChat</span>
            <span className='title'>Register</span>
            <form action="">
                <input type='text' placeholder='user name'/>
                <input type='email' placeholder='email'/>
                <input type='password' placeholder='password'/>
                <input style={{display: "none"}} type='file' id="file"/>
                <label htmlFor="file">
                  <img src={Add} alt="add image icon" />
                  <span>Add an avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>Already have an account? Login</p>
        </div>
    </div>
  )
}

export default Register