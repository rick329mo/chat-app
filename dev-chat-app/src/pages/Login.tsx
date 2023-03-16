function Login() {
    return (
      <div className='formContainer'>
          <div className='formWrapper'>
              <span className='logo'>RapidChat</span>
              <span className='title'>Login</span>
              <form action="">
                  <input type='email' placeholder='email'/>
                  <input type='password' placeholder='password'/>
                  <button>Sign in</button>
              </form>
              <p>Don't have an account? Sign up</p>
          </div>
      </div>
    )
  }
  
  export default Login