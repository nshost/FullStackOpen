const Persons = ({ persons, query, handleDelete }) => {
  return (
    <>
      {persons
        .filter((person) => person && person.name && person.name.toLowerCase().includes(query))
        .map((person) => (
          <div key={person.name}>
            <span>
              {person.name} {person.number}
            </span>{" "}
            <button onClick={() => handleDelete(person.id)}>delete</button>{" "}
            <br />
          </div>
        ))}
    </>
  );
};


export default Persons