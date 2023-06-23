import { Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <div className="landing-container">
        <h1>Spotify Profile</h1>
        <div>
          <p>Click on the button to START!</p>
          <Link to="/configuration">
            <button>START</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
