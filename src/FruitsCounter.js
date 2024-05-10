import React from "react";

function FruitsCounter({ fruits }) {
  const totalFruits = fruits.length;

  return (
    <div>
      <h2>Total fruits: {totalFruits}</h2>
    </div>
  );
}

export default FruitsCounter;
