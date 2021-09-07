import React, {useState} from 'react';

const Registration = ({ handleRegister }) => {
    const [registration, setRegistration] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setRegistration({
            ...registration,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegister(registration);
    }

    return (
        <form onSubmit={handleSubmit} className="authorization">
            <h2 className="authorization__title">Register</h2>
            <input className="authorization__input" onChange={handleChange} value={registration.name} name="name" type="name" capture="Email"
                   minLength="2" required/>
            <input className="authorization__input" onChange={handleChange} value={registration.email} name="email" type="email" placeholder="Email"
                   minLength="2" required/>
            <input className="authorization__input" onChange={handleChange} value={registration.password} name="password" type="password" placeholder="Пароль"
                   minLength="4" required/>
            <button className="authorization__button" type="submit">Sign Up</button>
        </form>
    );
};

export default Registration;
