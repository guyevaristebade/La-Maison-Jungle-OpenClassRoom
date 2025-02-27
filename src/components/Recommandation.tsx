import React from "react";

const Recommandation = () => {
  const currentMonth = new Date().getMonth();
  const isSpring = currentMonth >= 2 && currentMonth <= 4;
  return (
    <div className="text-right">
      {isSpring
        ? "C'est le printemps, rempotez vos plantes 🌱!"
        : "Ce n'est pas le moment de rempoter vos plantes."}
    </div>
  );
};

export default Recommandation;
