import React, { useState } from "react";

const Anecdotes = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [Selected, setSelected] = useState(0);
  const [Votes, setVotes] = useState([ 0, 0, 0, 0, 0, 0, 0, 0]);
  //Handling Votes for ancedotes
  const handleVotes = () => {
    const votesCopy = [...Votes];
    votesCopy[Selected] += 1;
    setVotes(votesCopy);
  };
  //find the higher voted note
  const highnote = Math.max(...Votes);
  
  // set a value with the correct anecdote based on the index of the value with the most votes
  const winningAnecdote = anecdotes[Votes.indexOf(highnote)];

  // to generate new/random anecdotes from given array by clicking on next
  const handleRandomNxt = () => {
    let randomVal = Math.floor(Math.random(Selected) * anecdotes.length);
    setSelected(randomVal);
  };
  return (
    <div>
      <h1>Anecdotes of the Day</h1>
      <p> {anecdotes[Selected]}</p>
      <p>Has {Votes[Selected]} Vote</p>
      <button onClick={handleVotes}>Vote</button>
      <button onClick={handleRandomNxt}>Next Anecdote</button>
      <h1>Most Voted Anecdotes</h1>
      <p>{winningAnecdote}</p>
    </div>
  );
};

export default Anecdotes;
