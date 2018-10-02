import React from 'react';

export default function TopNav(props){
  return(
  <ul>
    <li>
         <a
           href="#what"
           className="what"
           aria-label="How to play"
         >
           What?
         </a>
       </li>
   <li>
  <a
      href="#feedback"
      className="new"
      aria-label="Start a new game"
      onClick={() => props.onRestartGame()}
    >
    Feedback
    </a>
  </li>
 </ul>
  );
}
