import { useRef, useState } from "react";

function Example() {
  const inputRef = useRef<any | null>(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}
export default Example;

export function MyComponent() {
  const myRef = useRef(null);
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  // Accessing the current value of the ref
  console.log(myRef.current);

  return <div ref={myRef} className="flex flex-col">Hello, useRef! 
  <button onClick={handleClick} >Click</button>
  <span ref={myRef}>Count: {count}</span>
  </div>;
}