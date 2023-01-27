import { useEffect, useState } from "react";
import { Anecdote } from "./Anecdote";

export const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({});
	const [favFactIndex, setFavFactIndex] = useState(null);

  const handleRandomAnecdote = () => {
    setSelected( getRandomIndex() );
  }

  const getRandomIndex = () => {
    let randomIndex = Math.floor(Math.random() * anecdotes.length);

    return (randomIndex !== selected)
      ? randomIndex
      : getRandomIndex();
  }

  const handleSubmitVote = ( index ) => {
		return () => {
			const newVotes = { ...votes };
      newVotes[index] = (newVotes[index] || 0 ) +1; 
      setVotes( newVotes );
    }
  }

	useEffect(() => {
		const votesEntries = Object.entries(votes);
		let maxVotes = 0;
		let newFavIndex = favFactIndex;

		votesEntries.map(function ([index, voteNumber]) {
			if (voteNumber <= maxVotes) return;

			maxVotes = voteNumber;
			newFavIndex = index;
		});

		if (newFavIndex !== favFactIndex)
			setFavFactIndex(newFavIndex)
	}, [votes]);

  return (
    <div>
			<h3>Anecdote of the day</h3>
			<Anecdote text={anecdotes[selected]} votes={votes[selected]} />

      <button onClick={handleSubmitVote(selected)}>Vote</button>
      <button onClick={handleRandomAnecdote}>Nex anecdote</button>

			<h3>Anecdote with most votes</h3>
			{favFactIndex
				? <Anecdote text={anecdotes[favFactIndex]} votes={votes[favFactIndex]} />
				: <p>There is currently no favorite anecdote</p>}
    </div>
  )
}