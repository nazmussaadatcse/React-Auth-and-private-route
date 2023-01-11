import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { user, signInWithGoogle } = useFirebase();
    return (
        <div>
            {
                user?.uid
                    ?
                    <h2>Hello, '{user.displayName}' You are logged In!</h2>
                    :
                    <div>
                        <h2>Please Login</h2>
                        <div style={{ margin: '20px' }}>
                            <button onClick={signInWithGoogle}>Google Sign In</button>
                        </div>
                        <form action="">
                            <input type="email"
                                placeholder='your email' />
                            <br />
                            <input type="password" placeholder='password' />
                            <br />
                            <input type="submit" value="Login" />
                        </form>
                    </div>
            }

        </div>
    );
};

export default Login;