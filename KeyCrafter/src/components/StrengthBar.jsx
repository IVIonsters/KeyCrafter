/* eslint-disable no-unused-vars */
import react from 'react';

function strengthBar() {
  return (
    <div id="strengthIndicator">
      <p>
        Password Strength: <span id="strengthText">Weak</span>
        <span title="Strength is determined by length and character variety"
        >❓</span>
      </p>
      <progress
        id="strengthBar"
        value="0"
        max="100"
        className="w-full"
      ></progress>
    </div>
  )
}

export default strengthBar;