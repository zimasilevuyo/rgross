import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TestAPI = () => {
  const [response, setResponse] = useState(null);

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://156.155.252.14:3000/api/user', {
        name: 'John Doe',
        age: 30
      });
      setResponse(res.data);
    } catch (error) {
      setResponse(error.message);
    }
  };

  return (
    <div>
      <button onClick={handleSubmit}>Submit</button>
      {response && <p>Response: {JSON.stringify(response)}</p>}
    </div>
  );
};

export default TestAPI;
