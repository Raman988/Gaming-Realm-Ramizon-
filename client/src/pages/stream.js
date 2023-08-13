
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Stream = () => {
  const [roomCode, setRoomCode] = useState("");
  const history = useHistory();

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    history.push(`/room/${roomCode}`);
  };

  return (
    <div className="container">
    <div className="row justify-content-center mt-5">
      <div className="col-md-6">
        <div className="card login-card">
          <div className="card-body">
            <h5 className="card-title">Join a Room</h5>
            <form className="stream-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="roomCode" className="stream-label">Enter Room Code</label>
                <input
                  id="roomCode"
                  className="form-control stream-input"
                  value={roomCode}
                  onChange={(e) => setRoomCode(e.target.value)}
                  type="text"
                  required
                  placeholder="Enter Room Code"
                />
              </div>
              <button className="btn btn-primary stream-button" type="submit">
                Enter Room
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default Stream;
