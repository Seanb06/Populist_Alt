import React from 'react'

const Home = ({lists}) => (
  <div>
    Home
    This is the home page of lists
    <ul>
      {lists.map(({_id, title}) => (
        <li key={_id}>
          {title}
        </li>
      ))}
    </ul>
  </div>
);

export default Home;

