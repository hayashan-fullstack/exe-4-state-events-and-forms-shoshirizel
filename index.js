import React, { useState } from 'react'
import ReactDOM from "react-dom";
const Line=(props)=>{
  return(
  <div>
     <h3>{props.line.name}:{props.line.phone}</h3>
  </div>

  )
}
const Print=(props)=>{
  return(
      props.persons.map(line =><Line  line={line}/>)
  )
}
const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' ,
  phone:'12345678'}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')

  const addPerson =(event) =>{
    event.preventDefault();
    console.log("button clicked")
    const personObject={name: newName,
    phone: newPhone}
    setPersons(persons.concat(personObject))
  }
  const handleName=(event)=>{
    setNewName(event.target.value)
  }
  const handlePhone=(event)=>{
    setNewPhone(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          {/* name: <input /> */}
        </div>
        <div>
          <form onSubmit={addPerson}>
            name:<input value={newName} onChange={handleName}/>
            phone:<input value={newPhone} onChange={handlePhone}/>
            <button type="submit">add</button>
          </form>
        </div>
      </form>
      <h2>Numbers</h2>
      <Print persons={persons}/>
    </div>
  )
}

// export default App
ReactDOM.render(<App />, document.getElementById("root") );