import { useRef } from "react";
import useStore from "../store";

export const Input = () => {
  const inputRef = useRef<HTMLInputElement | any>(null);
  const addAthlete = useStore((state) => state.addAthlete)

  const add = () => {
    addAthlete(inputRef.current.value)
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={add}>Add Athlete</button>
    </div>
  );
};
