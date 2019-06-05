import React from 'react';

export default (props) => {
  const {id, name, email} = props;
  return (
    <div className='bg-light-green dib br3 pa3 ma2 tc grow bw2 shadow-5'>
      <img src={`https://robohash.org/tel${id}?200x200`} alt="pict"/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}