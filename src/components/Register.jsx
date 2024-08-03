import { useState } from "react"
import axios from 'axios'

const Register = () => {

    const [registerForm, setRegisterForn] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        checkPassword: ""
    })
    const [message, setMessage] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target
        setRegisterForn(prevVal => {
            return {
                ...prevVal,
                [name]: value
            }
        }
        )
    }

    
    // COMPLETE REGISTER CHECKS//
    // COMPLETE REGISTER CHECKS//
    // COMPLETE REGISTER CHECKS//
    // COMPLETE REGISTER CHECKS//
    const handleClick = () => {
        if (registerForm.email === "" || registerForm.firstName === "" || registerForm.lastName === "" || registerForm.password === "" || registerForm.checkPassword === "" ) {
            setMessage("Please fill in all fields")
        } else if (registerForm.checkPassword !== registerForm.password) {
            setMessage("Please make sure the password fields match")
        } else {
            axios.get("127")
        }
    }

    return (
        <div className='landing__card register__card'>
            <p>Register</p>
            <p style={{ color: "red" }}>{message}</p> 
            <label>Email</label>
            <input type="text" onChange={handleChange} name="email" value={registerForm.email} ></input>
            <label>First Name</label>
            <input type="text" onChange={handleChange} name="firstName" value={registerForm.firstName}></input>
            <label>Last Name</label>
            <input type="text" onChange={handleChange} name="lastName" value={registerForm.lastName}></input>
            <label>Password</label>
            <input type="password" onChange={handleChange} name="password" value={registerForm.password}></input>
            <label>Repeat Password</label>
            <input type="password" onChange={handleChange} name="checkPassword" value={registerForm.checkPassword}></input>
            <button className='landing__btn' onClick={handleClick}>Submit</button>
        </div>
    )
}

export default Register