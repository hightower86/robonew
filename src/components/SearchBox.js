import React from 'react';

export default ({ searchField, searchChange }) => {
  return (
    <div className="pa3 ma3">
      <input
        className="pa3 b--green bg-lightest-blue f4 br3"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </div>
  )
}