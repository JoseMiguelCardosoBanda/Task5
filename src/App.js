import React, { useState } from "react";
import { RiShuffleFill } from "react-icons/ri";
import PersonGenerator from "./components/PersonGenerator";

function App() {
  const [slide, setSlide] = useState(0);
  const [region, setRegion] = useState("MX");

  return (
    <div className="container-fluid">
      <nav className="navbar bg-secondary border border-secondary-subtle rounded-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Random Data Generator</h2>
            </div>
            <div className="col">
              <select
                className="form-select"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              >
                <option value="MX">Mexico</option>
                <option value="USA">United States</option>
                <option value="ITA">Italy</option>
              </select>
            </div>
            <div className="col-auto">
              <h4 htmlFor="errorRange">
                Errors
                <input
                  type="text"
                  id="errorLabel"
                  value={slide}
                  onChange={(e) => setSlide(e.target.value)}
                  autoComplete="off"
                ></input>
              </h4>
              <input
                type="range"
                className="form-range"
                min="0"
                max="10"
                id="errorRange"
                value={slide}
                onChange={(e) => setSlide(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <div className="input-group mb-3">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Seed
                </span>
                <input type="text" className="form-control" />
                <button className="btn btn-light">
                  <RiShuffleFill />
                </button>
              </div>
            </div>
            <div className="col-auto">
              <button className="btn btn-success">Generate</button>
            </div>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        {slide > 1000 ? (
          alert("Errors cannot be more than 1000")
        ) : (
          <PersonGenerator errors={slide} region={region} />
        )}
      </div>
    </div>
  );
}

export default App;
