import { useEffect, useEffectEvent, useState } from "react";

export const AutoSaveForm = () => {
  const [input, setInput] = useState({});
  function handleInput(e) {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  }

  const save = useEffectEvent(() => {
    console.log(input);
  });

  useEffect(() => {
    const id = setInterval(() => {save()}, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <form action="">
      <input
        type="text"
        name="name"
        value={input.name}
        onChange={handleInput}
      />
      <input
        type="email"
        name="email"
        value={input.email}
        onChange={handleInput}
      />
    </form>
  );
};
