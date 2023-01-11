import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h2>Home</h2>
            <p>User: {user? user.displayName : 'No body'}</p>
        </div>
    );
};

export default Home;