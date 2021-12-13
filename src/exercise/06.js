// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {useRef} from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null)

  // 🐨 add a submit event handler here (`handleSubmit`).
  const handleChange = (event) => {
    const value = event.target.value
    const isValid = value === value.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }

  const inputEl = useRef(null);

  const onButtonClick = () => {
    const val = inputEl.current.value
    console.log('val in onButtonClick:', val)
    onSubmitUsername(val)
  }

  return (
    <form onSubmit={onButtonClick}>
      <div>
        <label htmlFor="myId">Username:</label>
        <input onChange={handleChange} ref={inputEl} id="myId" type="text" />
      </div>
        {!!error && (<div role="alert">{error}</div>)}
      <button disabled={!error ? false : true } type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
