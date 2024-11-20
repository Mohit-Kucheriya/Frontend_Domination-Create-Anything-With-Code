import React from "react";
import Button from "./components/Button";
import Button1 from "./components/Button1";

function App() {
  return (
    <div>
      <Button text="Know more" />
      <Button text="Download now" />
      <Button1 text="Login" bgColor="bg-red-500" />
      <Button1 text="Sign up" bgColor="bg-purple-500" />
    </div>
  );
}

export default App;
