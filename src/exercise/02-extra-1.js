// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function Greeting({initialName = ''}) {
  //This will make the window.localStorage.getItem run only once in every re-render
  const [name, setName] = React.useState(
    () => window.localStorage.getItem('name') || initialName,
  )

  function handleChange(event) {
    setName(event.target.value)
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
