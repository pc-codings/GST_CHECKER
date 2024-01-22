// App.js

import React, { useState } from 'react';
import GSTChecker from './gstcomponent.js';
import pic from './gstpic.svg';
import "./App.css"
const App = () => {
  const [searchText, setSearchText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  const handleSubmit = () => {
    setSubmittedText(searchText);
  };

  return (
    <div className="App">
          <div class="breadcrumb">
            <a href="#">Dashboard</a>
            <span>&gt;</span>
            <span>Check GST Data</span>
          </div>
      {/* block-1 */}
      <div className="parent-1">
        <div className='childp-1'>
          <div className='childp-2'>
          <p className='txt-1'>Search and Confirm GST registration</p>
          <p className='txt-2'>Quickly verify GST number with Confidence</p>
          <div className='input-container'>
          <input
            placeholder="GST registration"
            value={searchText}
            
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={handleSubmit}>
          <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
              fill="#000000"
            /></svg>
          </button>
        </div>

          </div>
        </div>
        <div>
          <img src={pic}/>
        </div>

    </div>
      <div className='parent-2'>
        <p className='txt-3'>Test Enterprises</p>
        <p>{searchText}</p>
      </div>

      {/* block-1 end */}

      {/* Display GSTChecker with the fetched data */}
      {submittedText && <GSTChecker gstNumber={submittedText} />}

    </div>
  );
};

export default App;
