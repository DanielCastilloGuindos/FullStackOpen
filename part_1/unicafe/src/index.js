import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Button } from './Button'
import { Statistics } from './Statistics'

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

  const getPositiveRate = () => good * 100 / getTotalPoints();

  const stats = {
    good:     good,
    neutral:  neutral,
    bad:      bad,
    all:      getTotalPoints(),
    average:  getAverage() || 0,
    positive: `${getPositiveRate() || 0}%`
  }

  return (
    <div>
      <h1>Give feedback</h1>

      <section>
        <Button handleClick={ handleGoodClick } text='Good' />
        <Button handleClick={ handleNeutralClick } text='Neutral' />
        <Button handleClick={ handleBadClick } text='Bad' />
      </section>

      <Statistics stats={ stats } />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)