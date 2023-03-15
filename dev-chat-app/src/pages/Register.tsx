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
                <input type='file' />
                <button>Sign up</button>
            </form>
            <p>Already have an account? Login</p>
        </div>
    </div>
  )
}

export default Register