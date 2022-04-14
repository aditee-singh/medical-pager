import React, { useState } from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios'
import signinImage from '../assets/signup.jpeg'

const cookies = new Cookies()

const initialState = {
  fullName: '',
  username: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
  avatarURL: '',
}

const Auth = () => {
  const [form, setForm] = useState(initialState)
  const [isSignUp, setIsSignUp] = useState(true)
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { username, password, phoneNumber, avatarURL } = form

    //const URL = 'http://localhost:5000/auth'
    const URL = 'https://aditee-medical-pager-backend.herokuapp.com/auth'

    const {
      data: { token, userId, hashedPassword, fullName },
    } = await axios.post(`${URL}/${isSignUp ? 'signup' : 'login'}`, {
      username,
      fullName: form.fullName,
      phoneNumber,
      password,
      avatarURL,
    })

    cookies.set('token', token)
    cookies.set('username', username)
    cookies.set('fullName', fullName)
    cookies.set('userId', userId)

    if (isSignUp) {
      cookies.set('phoneNumber', phoneNumber)
      cookies.set('hashedPassword', hashedPassword)
      cookies.set('avatarURL', avatarURL)
    }

    window.location.reload()
  }
  const switchMode = () => {
    setIsSignUp(!isSignUp)
  }
  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignUp ? 'Sign Up' : 'Sign In'}</p>
          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="fullName">Full Name</label>
                <input
                  name="fullName"
                  placeholder="Full Name"
                  type="text"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="username">Username</label>
              <input
                name="username"
                placeholder="Username"
                type="text"
                onChange={handleChange}
                required
              />
            </div>
            {isSignUp && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  name="phoneNumber"
                  placeholder="Phone Number"
                  type="text"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            {isSignUp && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="avatarURL">Avatar URL</label>
                <input
                  name="avatarURL"
                  placeholder="Avatar URL"
                  type="text"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="password"> Password</label>
              <input
                name="password"
                placeholder="password"
                type="password"
                onChange={handleChange}
                required
              />
            </div>
            {isSignUp && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  type="password"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_button">
              <button>{isSignUp ? 'Sign Up' : 'Sign In'}</button>
            </div>
          </form>
          <div className="auth__form-container_fields-account">
            <p>
              {isSignUp
                ? 'Already Have an account ? '
                : "Don't have an account ?"}
              <span onClick={switchMode}>
                {isSignUp ? ' Sign In' : ' Sign Up'}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="auth__form-container_image">
        <img src={signinImage} alt="sign in" />
      </div>
    </div>
  )
}

export default Auth
