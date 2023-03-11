import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="cards">
      <div className="card">
        <img src="https://i.pinimg.com/originals/cd/67/78/cd67786db8f2bef016b9d4e924ecaf03.jpg" alt="myPic"></img>
        <div className="card__info">
          <span className="card_category"> A netflix Original Series</span>
          <h3 className="card_tittle">DARK</h3>
          <a href="https://www.netflix.com/pk/title/80100172" target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
