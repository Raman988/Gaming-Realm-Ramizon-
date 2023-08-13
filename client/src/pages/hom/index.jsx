import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const [roomCode, setRoomCode] = useState("");
  const history = useHistory();

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    history.push(`/room/${roomCode}`);
  };

  return (
    <div className="home-page">
      <form className="form" onSubmit={handleFormSubmit}>
        <div>
          <label>Enter Room Code</label>
          <input
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
            type="text"
            required
            placeholder="Enter Room Code"
          />
        </div>
        <button type="submit">Enter Room</button>
      </form>
    </div>
  );
};

export default HomePage;
