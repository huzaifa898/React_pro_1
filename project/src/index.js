import React from "react";
import ReactDOM from "react-dom";
import Cards from "./Cards";
ReactDOM.render(
  <>
    <Cards
      imgSrc="https://i.pinimg.com/originals/cd/67/78/cd67786db8f2bef016b9d4e924ecaf03.jpg"
      title="A netflix Original Series"
      sName="DARK"
      link="https://www.netflix.com/pk/title/80100172"
    />
    <Cards
      imgSrc="https://tse4.mm.bing.net/th?id=OIP.pNlTFkxtPD8XTKw13qqNJQHaK-&pid=Api&P=0"
      title="A netflix Original Series"
      sName="STRANGER THINGS"
      link="https://www.netflix.com/pk/title/80057281"
    />
    <Cards
    imgSrc="https://www.heavenofhorror.com/wp-content/uploads/2020/04/Extracurricular-netflix-review.jpg"
    title="A netflix Originals series"
    sName="ETRACURRICULAR"
    link="https://www.netflix.com/pk/title/80990668"
    />
   
  </>,
  document.getElementById("root")
);
