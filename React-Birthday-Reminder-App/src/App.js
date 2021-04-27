import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data)
  return(
    <main>
        <section className='container'>
          <h3> Birthdays Today</h3>
          <List people={people}></List>
          <button className='btn' onClick={() => setPeople([])}>clear all</button>
        </section>
    </main>
  )
}

export default App;