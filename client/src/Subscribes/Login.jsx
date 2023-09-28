import React from 'react'

const Login = (props) => {
  return (
    <div>
<div class="login-box">
  <p>Login</p>
  <form>
    <div class="user-box">
      <input required="" name="" type="text"/>
      <label>Email</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="password"/>
      <label>Password</label>
    </div>
    <a href="#" onClick={(e)=>{
      e.preventDefault()
      props.changeView('home')
    }}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
  <p>Don't have an account? <a href="" class="a2" onClick={(e)=>{
    e.preventDefault()
    props.changeView('signUp')
  }} >Sign up!</a></p>
</div>
    </div>
  )
}

export default Login