import React, { useState, useEffect } from 'react';
import './catabase.css';

function Catabase() {

  const [data, setCat] = useState(null);

  useEffect(() => {
    fetch("http://hers.hosts1.ma-cloud.nl/catabase/cats.php")
      .then(response => response.json())
      .then(data => {
        setCat(data)
        console.log(data)
      })
  }, []);

  return (
    <div className='catabase-container'>
      <h2 className='cat-h2'>Cats:</h2>
      {data ? (
        <ul className='cats-list'>
          {data.map((cat, index) => (
            <li className='cat' key={index}>
              <p className='cat-p'>{cat.name}</p>
              <p className='cat-p'>{cat.age} years old</p>
              <p className='cat-p'>{cat.color}</p>
              <p className='cat-p'>{cat.isMale ? "Male" : "Female"}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Catabase
