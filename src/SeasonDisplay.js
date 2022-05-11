import React from "react";
import './index.css'
//object is created here
const seasonConfig = {
  summer: {
    text: "Lets go to the Beach",
    icon: "sun",
  },
  winter: {
    text: "It's Chillyy",
    icon: "snowflake",
  },
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  // const text = (season === 'winter' ? "It's Chillyy" : "Lets go to the Beach");
  // const icon = (season === 'winter' ? "snowflake" : "sun");

  const { text, icon } = seasonConfig[season]; //destructuring

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${icon} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
