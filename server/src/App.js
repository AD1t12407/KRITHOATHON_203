import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [place, setPlace] = useState('');
  const [history, setHistory] = useState('');

  const fetchHistoricalData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/history/${place}`);
      setHistory(response.data.history);
    } catch (error) {
      console.error('Error fetching historical data:', error);
    }
  };

  return (
    <div>
      <h1>Historic Site Scraper</h1>
      <input
        type="text"
        value={place}
        onChange={e => setPlace(e.target.value)}
        placeholder="Enter a place name"
      />
      <button onClick={fetchHistoricalData}>Get History</button>
      <p>{history}</p>
    </div>
  );
}

export default App;
