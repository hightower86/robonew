import React from 'react';

const Scroll = (props) => {
  return (
    <div className='vh-75 ba overflow-y-scroll'>
      {props.children}
    </div>
  );
};

export default Scroll;