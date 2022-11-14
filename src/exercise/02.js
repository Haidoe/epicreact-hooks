// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function Greeting({initialName = ''}) {
  initialName = window.localStorage.getItem('name') ?? initialName
  const [name, setName] = React.useState(initialName)

  function handleChange(event) {
    setName(event.target.value)
    console.log('SET', name)
  }

  React.useEffect(() => {
    window.localStorage.setItem('name', name)
  })

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialname="Heids" />
}

export default App
