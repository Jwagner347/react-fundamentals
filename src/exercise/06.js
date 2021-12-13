// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {useRef} from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   const val = event.target.elements[0].value
  //   console.log('val is: ', val);
  //   onSubmitUsername(val)
  // }

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
        <input ref={inputEl} id="myId" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
