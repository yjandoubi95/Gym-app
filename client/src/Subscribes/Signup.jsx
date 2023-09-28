import React from 'react'

const Signup = (props) => {
  return (
    <div className='signsing'>
        <div class="container">
        <div class="card">
            <a class="singup">Sign Up</a>
            <div class="inputBox1">
                <input type="text" required="required"/>
                <span class="user">Email</span>
            </div>

            <div class="inputBox">
                <input type="text" required="required"/>
                <span>Username</span>
            </div>

            <div class="inputBox">
                <input type="password" required="required"/>
                <span>Password</span>
            </div>

            <button class="enter" onClick={(e)=>{
                e.preventDefault()
                props.changeView('login')
            }} >Enter</button>

        </div>
    </div>
    </div>
  )
}

export default Signup