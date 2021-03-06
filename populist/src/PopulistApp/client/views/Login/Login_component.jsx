import React from 'react'

const Login = ({loginWithGoogle, loginWithFacebook}) => (

  <div className="log-block">
    <div className="log-centered">
        <img src="/assets/images/log-logo.png" />
        <p>Sign up to save lists, leave feedback and create your own lists</p>
        <div className="log-btns">
        	<a href="#" className onClick={loginWithFacebook}><img src="/assets/images/log-facebook.png" /></a>
        	<a href="#" className onClick={loginWithGoogle}><img src="/assets/images/gplus-signin.png" /></a>
        </div>
    </div>
  </div>
 
);

export default Login;