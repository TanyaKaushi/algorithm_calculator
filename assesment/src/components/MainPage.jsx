import React, { useState } from "react";
import "../styles/MainPageStyle.css";
import Illustration from "../assets/illustration.png";
import calculator from "../assets/calculator.png";

const NODES = ["A", "B", "C", "D", "E", "F", "G"];
const SAMPLE_RESULT = {
  fromNode: "A",
  toNode: "G",
  path: ["A", "C", "E", "D", "F", "G"],
  distance: 15,
};

const MainPage = () => {
  const [fromNode, setFromNode] = useState("");
  const [toNode, setToNode] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleCalculate = () => {
    if (fromNode && toNode && fromNode !== toNode) {
      setShowResult(true);
    } else {
      alert("Please select different From and To nodes.");
    }
  };

  const handleClear = () => {
    setFromNode("");
    setToNode("");
    setShowResult(false);
  };

  return (
    <div className="main-page">
      <header className="hero">
        <h1 className="hero-title">Dijkstra’s Algorithm Calculator</h1>
        <p className="hero-sub">
          Discovering Optimal Routes Through Nodes Using Dijkstra's Method
        </p>
      </header>

      <div className="calculate-card enter" role="region" aria-label="Dijkstra calculator card">
        <section className="form">
          <h2 className="main-topic">Select Path</h2>

          {/* From Node */}
          <div className="form-item">
            <label htmlFor="fromSelect" className="label-name">
              From Node
            </label>
            <select
              id="fromSelect"
              className="select-box"
              value={fromNode}
              onChange={(e) => setFromNode(e.target.value)}
            >
              <option value="">Select</option>
              {NODES.map((node) => (
                <option key={node} value={node}>
                  {node}
                </option>
              ))}
            </select>
          </div>

          {/* To Node */}
          <div className="form-item">
            <label htmlFor="toSelect" className="label-name">
              To Node
            </label>
            <select
              id="toSelect"
              className="select-box"
              value={toNode}
              onChange={(e) => setToNode(e.target.value)}
            >
              <option value="">Select</option>
              {NODES.map((node) => (
                <option key={node} value={node}>
                  {node}
                </option>
              ))}
            </select>
          </div>

          {/* Buttons */}
          <div className="button-group">
            <button className="clear-btn" type="button" onClick={handleClear}>
              Clear
            </button>
            <button className="calc-btn" type="button" onClick={handleCalculate}>
              Calculate{" "}
              <span>
                <img src={calculator} alt="Calculator icon" className="calc-img" />
              </span>
            </button>
          </div>
        </section>

        {/* Right Panel */}
        <div className={`right-panel ${showResult ? "show-result" : "empty"}`}>
          <div className={`panel-inner ${showResult ? "slide-in" : "slide-out"}`}>
            {!showResult ? (
              <img src={Illustration} alt="Illustration" className="illustration" />
            ) : (
              <div className="result-wrapper">
                <div className="result-topic">Result</div>
                <div className="result-box">
                  <div className="node-name">
                    <div>From Node Name = "{SAMPLE_RESULT.fromNode}", To Node Name = "{SAMPLE_RESULT.toNode}" : {SAMPLE_RESULT.path.join(" , ")}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
