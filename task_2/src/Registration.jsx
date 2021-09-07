import React, {useState} from 'react';

const Registration = () => {
    const [registration, setRegistration] = useState({
        name: '',
        email: '',
        password: ''
    })

    return (
        <form onSubmit={handleSubmit} className="authorization">
            <h2 className="authorization__title">Регистрация</h2>
            <input className="authorization__input" onChange={handleChange} value={registration.email} name="email" type="email" placeholder="Email"
                   minLength="2" required/>
            <input className="authorization__input" onChange={handleChange} value={registration.password} name="password" type="password" placeholder="Пароль"
                   minLength="4" required/>
            <button className="authorization__button" type="submit">Зарегистрироваться</button>
            <p className="authorization__text">
                Уже зарегистрированы? <Link to='/sign-in' className="authorization__link">Войти</Link>
            </p>
        </form>
    );
};

export default Registration;
