import React from 'react'
import ReactDOM from 'react-dom'
import { Content } from './Content'
import { Header } from './Header'
import { Total } from './Total'

const App = () => {
  const course  = {
    title: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      }
    ],
    getTotalExercises: function () {
      let total = 0;
      this.parts.map(part => total += part.exercises );
      return total;
    }
  }

  return (
    <div>
      <Header title={ course.title } />
      <Content parts={ course.parts } />
      <Total value={ course.getTotalExercises() } />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))