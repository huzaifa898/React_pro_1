import React from "react";
function Cards(props) {
    console.log(props);
    return (
      <>
        <div className="cards">
          <div className="card">
            <img src={props.imgSrc} alt="myPic"></img>
            <div className="card__info">
              <span className="card_category">{props.title} </span>
              <h3 className="card_tittle"> {props.sName}</h3>
              <a href={props.link} target="_blank">
                <button>Watch Now</button>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
  export default Cards;