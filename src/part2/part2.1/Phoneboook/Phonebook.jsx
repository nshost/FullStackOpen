import { useState , useEffect } from "react";
import Filter from "./Filter";
import axios from 'axios';
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import Notifications from "./Notifications";
const Baseurl ='http://localhost:3001/persons';
const Phonebook = () => {
  const [person, setperson] = useState([])
    const hook = () => {
      axios
        .get(Baseurl)
        .then(response => {
          setperson(response.data)
        })
    }
    useEffect(hook, [])
    
  const [name, setname] = useState("");
  const [newNumber ,setnewNumber] = useState('');
  const [filterQuery,setFilterQuery] = useState('');
  const handleChange = setValue => e => setValue(e.target.value);
  
  
  // Function to handle adding or updating a person
  const handleNewPerson = (e) => { 
    e.preventDefault(); // Prevent the default form submission behavior
    
    // Find an existing person with the same name in the list of persons
    const existingPerson = person.find((per) => per.name === name);
    
    if (existingPerson) { // If an existing person with the same name is found
      // Create an updated person object with the new phone number
      const updatedPerson = { ...existingPerson, number: newNumber };
      
      // Display a confirmation message to the user
      const msg = `Update ${existingPerson.name}'s phone number to ${newNumber}?`;
      const confirmUpdate = window.confirm(msg); // Show a confirmation dialog to the user
      
      if (confirmUpdate) { // If the user confirms the update
        axios
          .put(`${Baseurl}/${existingPerson.id}`, updatedPerson) // Send a PUT request to update the person's information on the server
          .then(() => {
            // Update the local state with the updated person information
            const updatedPersons = person.map((per) =>
              per.id === existingPerson.id ? updatedPerson : per
            );
            setperson(updatedPersons); // Update the state with the new person data
          })
          .catch((error) => {
            console.error("Error updating person:", error); // Handle errors if the update fails
          });
      }
    } else { // If no existing person with the same name is found
      const newPerson = { name: name, number: newNumber }; // Create a new person object
      setperson(person.concat(newPerson)); // Add the new person to the local state
  
      axios
        .post(Baseurl, newPerson) // Send a POST request to add the new person on the server
        .then((response) => {
          console.log(response); // Log the server response if successful
        })
        .catch((error) => {
          console.error("Error adding new person:", error); // Handle errors if adding the new person fails
        });
    }
  
    setname(""); // Clear the input field for the person's name
    setnewNumber(""); // Clear the input field for the person's phone number
  };
  //Funtion to handle Delete Name
  const deleteName = (id) => { // Accept the id as an argument
    const personToDelete = person.find((per) => per.id === id);
    if (!personToDelete) {
      alert("Person not found.");
      return;
    }
  
    const msg = `Delete ${personToDelete.name}?`;
    const confirmDelete = window.confirm(msg);
  
    if (confirmDelete) {
      axios
        .delete(`${Baseurl}/${id}`)
        .then(() => {
          // Remove the deleted person from the state
          const updatedPersons = person.filter((per) => per.id !== id);
          setperson(updatedPersons);
        })
        .catch((error) => {
          console.error("Error deleting person:", error);
        });
    }
  };
  
  
  return (
    <div>
      <h1>Phonebook</h1>
      <Notifications/>
      <Filter query={filterQuery} handleChange={handleChange(setFilterQuery)}/>
      <h1>add a New</h1>
      <PersonForm name={name} number={newNumber} handleChangeName={handleChange(setname)} handleChangeNumber={handleChange(setnewNumber)} handleAddPerson={handleNewPerson}/>
      <h2>Numbers</h2>
      <Persons persons={person} query={filterQuery} name={person.name} handleDelete={deleteName} />
    </div>

  );
};

export default Phonebook;
