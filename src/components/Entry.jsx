import React from "react";
// import emojipedia from "../emojipedia";
// function card(data) {
//   return (
//     <div className="term">
//       <dt>
//         <span className="emoji" role="img" aria-label="Tense Biceps">
//           {data.emoji}
//         </span>
//         <span>{data.name}</span>
//       </dt>
//       <dd>{data.meaning}</dd>
//     </div>
//   );
// }
function Entry(props) {
  // console.log(props.description);
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.description}</dd>
    </div>
  );
}
export default Entry;
