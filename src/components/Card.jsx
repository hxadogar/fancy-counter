import { useEffect, useState } from "react";
import BtnGroup from "./BtnGroup";
import CardHeading from "./CardHeading";
import Count from "./Count";
import ResetBtn from "./ResetBtn";

export default function Card() {
  const [count, setCount] = useState(0);
  console.log(count);

  const handleReset = () => {
    if (count !== 5) {
      setCount(0);
    }
  };

  const handleAdd = () => {
    if (count >= 5) {
      setCount(5);
      return;
    }
    setCount((prev) => prev + 1);
  };

  const HandleSub = () => {
    if (count <= 0) {
      return setCount(0);
    }
    if (count === 5) return;
    setCount((prev) => prev - 1);
  };

  useEffect(() => {
    const handleKeypress = (e) => {
      if (e.code === "Space") {
        handleAdd();
      }
    };
    window.addEventListener("keydown", handleKeypress);
    return () => {
      window.removeEventListener("keydown", handleKeypress);
    };
  }, [count]);

  return (
    <div className={`card ${count >= 5 && "card--limit"}`}>
      <CardHeading count={count} />
      <Count count={count} />
      <ResetBtn handleReset={handleReset} />
      <BtnGroup handleAdd={handleAdd} HandleSub={HandleSub} />
    </div>
  );
}
