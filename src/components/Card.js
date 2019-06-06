import React from 'react';

export default (props) => {
  const {id, name, email} = props;
  return (
    <div className='bg-light-green dib grow br4 pa3 ma2 tc  bw3 shadow-5'>
      <img className='grow br3' src={`https://robohash.org/tel${id}?200x200`} alt="pict"/>
      <div className='bg-lightest-blue grow br3 pa1 pl3 pr3'>
        <h2 className='bb pb3 b-black-50 grow word-normal'>{name}</h2>
        <p className='grow'>{email}</p>
      </div>
    </div>
  );
}