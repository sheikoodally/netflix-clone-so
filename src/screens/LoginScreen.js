import React, { useState } from 'react';
import './LoginScreen.css'
import SignInScreen from './SignInScreen';


function LoginScreen() {
    const [signIn, setSignin] = useState(false);

    return (
        <div className="loginScreen">
            <div className="loginScreen_background">
                <img 
                    className="loginScreen_logo"
                    src="https://i1.wp.com/freepngimages.com/wp-content/uploads/2016/10/netflix-logo.png?fit=895%2C559" 
                    alt=""
                />
                <button 
                    onClick = {() => setSignin(!signIn)}
                    className="loginScreen_button"
                >
                    Sign In
                </button>
                <div className="loginScreen_gradient"/>
            </div>

            <div className="loginScreen_body">
                {signIn ? ( <SignInScreen/> ) : (
                    <>
                    <h1>Unlimited films, TV programs and more.</h1>
                    <h2>Watch anywhere. Cancel at anytime</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                

                    <div className="loginScreen_input">
                        <form>
                            <input 
                                type='email' 
                                placeholder='Email Address'
                            />
                            <button 
                                onClick={() => setSignin(true)}
                                className="loginScreen_getStarted"
                            >
                                Get Started
                            </button>
                        </form>
                    </div>
                </>
                )}
            </div>
        </div>
    )
}

export default LoginScreen
