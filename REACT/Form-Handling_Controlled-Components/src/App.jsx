import React, { useState } from "react";

function App() {
  const [val, setVal] = useState({ name: "", email: "" });

  const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log(val);
  };

  return (
    <form action="" onSubmit={handleSubmitForm}>
      <input
        onChange={(event) => setVal({ ...val, name: event.target.value })}
        type="text"
        placeholder="name"
      />
      <input
        onChange={(event) => setVal({ ...val, email: event.target.value })}
        type="email"
        placeholder="email"
      />
      <input type="submit" />
    </form>
  );
}

export default App;
