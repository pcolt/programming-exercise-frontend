import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <ul>
        <li><Link to="/images/1.gif">Gif 1</Link></li>
        <li><Link to="/images/2.gif">Gif 2</Link></li>
        <li><Link to="/images/3.gif">Gif 3</Link></li>
        <li><Link to="/images/4.gif">Gif 4</Link></li>
        <li><Link to="/images/5.gif">Gif 5</Link></li>
        <li><Link to="/images/6.gif">Gif 6</Link></li>
        <li><Link to="/images/7.gif">Gif 7</Link></li>
        <li><Link to="/images/8.gif">Gif 8</Link></li>
        <li><Link to="/images/9.gif">Gif 9</Link></li>
        <li><Link to="/images/10.gif">Gif 10</Link></li>
      </ul>
    </div>
  );
};

export default Home;
