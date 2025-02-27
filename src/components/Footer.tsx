import React from "react";

const Footer = () => {
  const [inputValue, setInputValue] = React.useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    console.log(e.target.value);
  };

  const handleBlur = () => {
    if (!inputValue.includes("@")) {
      alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide");
    }
  };

  return (
    <footer className="p-8 flex flex-col items-center justify-start font-bold-2xl">
      <div className="">Pour les passionné·e·s de plantes 🌿🌱🌵</div>
      <div className="mb-2.5">Laissez-nous votre mail :</div>
      <input
        className="border-2 border-solid p-2 rounded"
        type="email"
        name="mail"
        placeholder="example@gmail.com"
        defaultValue={inputValue}
        onChange={handleInput}
        onBlur={handleBlur}
      />
    </footer>
  );
};

export default Footer;
