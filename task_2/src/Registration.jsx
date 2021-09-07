import React, {useState} from 'react';
import { FIELD_REQUIRED_ERROR, regexCheck, NAME_CONTAIN_ERROR, PASSWORD_LENGTH_ERROR } from "./constants";
import classes from './Registration.module.css';

const Registration = ({ handleRegister }) => {
    const [registration, setRegistration] = useState({
        fullname: '',
        email: '',
        password: ''
    })

    const validate = (registration) => {
        const errorsDescription = [];
        const { fullname, email, password } = registration;
        if (!fullname || !email || !password) {
            errorsDescription.push(FIELD_REQUIRED_ERROR);
        }
        if (!regexCheck.test(fullname)) {
            errorsDescription.push(NAME_CONTAIN_ERROR);
        }
        if (password.length < 8) {
            errorsDescription.push(PASSWORD_LENGTH_ERROR);
        }
        return errorsDescription.join(' ');
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setRegistration({
            ...registration,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const error = validate(registration);
        if (error) {
            alert(error);
        } else {
            handleRegister(registration);
        }
    }

    return (
        <form onSubmit={handleSubmit} className={classes.authorization}>
            <h2 className={classes.authorization__title}>Register</h2>
            <div className={classes.form__group}>
                <label htmlFor="fullname">Full Name:</label>
                <input
                    type="fullname" name="fullname"
                    className="form-control" onChange={handleChange}
                    value={registration.name}
                />
            </div>
            <div className={classes.form__group}>
                <label htmlFor="email">E-Mail:</label>
                <input
                    type="email" name="email"
                    className="form-control" onChange={handleChange}
                    value={registration.email}
                />
            </div>
            <div className={classes.form__group}>
                <label htmlFor="password">Password:</label>
                <input
                    type="password" name="password"
                    className="form-control" onChange={handleChange}
                    value={registration.password}
                />
            </div>
            <button className={classes.authorization__button} type="submit">Sign Up</button>
        </form>
    );
};

export default Registration;
