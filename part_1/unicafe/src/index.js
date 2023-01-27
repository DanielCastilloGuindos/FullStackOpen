import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Button } from './Button'

const POINTS = {
  GOOD: +1,
  NEUTRAL: 0,
  BAD: -1,
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood( good +1 );

  const handleNeutralClick = () => setNeutral( neutral +1 );

  const handleBadClick = () => setBad( bad +1 );

  const getTotalPoints = () => good + neutral + bad;

  const getAverage = () => (good / getTotalPoints()) - (bad / getTotalPoints());

  const getPositiveRate = () => good * 100 / getTotalPoints()


  return (
    <div>
      <h1>Give feedback</h1>

      <section>
        <Button handleClick={ handleGoodClick } text='Good' />
        <Button handleClick={ handleNeutralClick } text='Neutral' />
        <Button handleClick={ handleBadClick } text='Bad' />
      </section>

      <section>
        <h3>Stadistics</h3>
        <p>Good: { good }</p>
        <p>Neutral: { neutral }</p>
        <p>Bad: { bad }</p>
        <p>All: { getTotalPoints() }</p>
        <p>Average: { getAverage() || 0 }</p>
        <p>Positive: { getPositiveRate() || 0  }%</p>
      </section>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)