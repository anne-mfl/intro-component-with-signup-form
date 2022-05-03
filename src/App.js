import './App.css';
import { useState } from 'react';

function App() {

  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [firstNameError, setFirstNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!firstName) {
      setFirstNameError('First Name cannot be empty')
    } else {
      setFirstNameError('')
    }

    if (!lastName) {
      setLastNameError('Last Name cannot be empty')
    } else {
      setLastNameError('')
    }

    if (!email || !email.match(validRegex)) {
      setEmailError('This is not a valid email')
    } else {
      setEmailError('')
    }

    if (!password) {
      setPasswordError('Password cannot be empty')
    } else {
      setPasswordError('')
    }

    if (firstName && lastName && email.match(validRegex) && password) setSuccessMessage('You are successfully enrolled')
  }


  return (
    <div className="App">
      <div className='wallpaper'>

        <div className='section-wrapper'>
          <section>
            <h1>Learn to code by watching others</h1>
            <p> See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
              but understanding how developers think is invaluable.</p>
          </section>

          <section>
            <div>
              <h3>Try it free 7 days <span className='lighter'>then $20/mo. thereafter</span></h3>

              <form onSubmit={handleSubmit}>
                <input type='text' placeholder='First Name'
                  onChange={(e) => setFirstName(e.target.value)}
                  className={firstNameError && 'errorBorder'}
                ></input>
                {firstNameError && <img src='../icon-error.svg'></img>}
                <p>{firstNameError}</p>

                <input type='text' placeholder='Last Name'
                  onChange={(e) => setLastName(e.target.value)}
                  className={lastNameError && 'errorBorder'}
                ></input>
                {lastNameError && <img src='../icon-error.svg'></img>}
                <p>{lastNameError}</p>

                <input type='text' placeholder='Email Address'
                  onChange={(e) => setEmail(e.target.value)}
                  className={emailError && 'errorBorder'}
                ></input>
                {emailError && <img src='../icon-error.svg'></img>}
                <p>{emailError}</p>

                <input type='password' placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                  className={passwordError && 'errorBorder'}
                ></input>
                {passwordError && <img src='../icon-error.svg'></img>}
                <p>{passwordError}</p>

                <button >CLAIM YOUR FREE TRIAL</button>
                <h5>{successMessage}</h5>

                <h4>By clicking the button, you are agreeing to our <a href='/'>Terms and Services</a></h4>
              </form>
            </div>
          </section>
        </div>

        <footer>
          <p class="attribution">
            Challenge by <a href="https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1/hub/intro-component-with-signup-form-BkVddNaHq" target="_blank">Frontend Mentor</a>.
            Coded by <a href="https://www.frontendmentor.io/profile/anne-mfl">Anne</a>.
          </p>
        </footer>
      </div>


    </div>
  );
}

export default App;
