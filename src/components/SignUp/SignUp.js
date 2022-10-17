import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const [error,setError] = useState(null);

    const handlerSubmit = (event) => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value; 
        console.log(email,password,confirm)

        if(password.length < 6){
            setError('Please provide at least 6 character!!')
            return;
        }
        if(password !== confirm){
            setError('Please provide a valid Password !!')
            return;
        }

        createUser(email,password)
        .then( result => {
            const user = result.user;
            console.log(user)
        })
        .catch( error => console.log(error))
    }

    return (
        <div className='form-container'>
        <h2 className='form-title'>Sign Up</h2>
        <form onSubmit={handlerSubmit}>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" required />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" required />
            </div>
            <div className="form-control">
                <label htmlFor="confirm">Confirm Password</label>
                <input type="password" name="confirm" required />
            </div>
            <p>
                {error}
            </p>
            <input className='btn-submit' type="submit" value="Sign Up" />
        </form>
        <p>Already Have an Account <Link to='/login'>Login</Link></p>
        <p className='text-error'>{}</p>
    </div>
    );
};

export default SignUp;