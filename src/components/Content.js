import React from "react";
import Title from "./Title";
import Description from "./Description";

function Content(props) {
  return (
    <div className={props.className}>
      <Title title={props.title} />
      <Description descr={props.descr} />
    </div>
  );
}
export default Content;
