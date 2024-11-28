import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();
  console.log(useForm());
  
  console.log(register);
  

  return (
    <div>
      <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
        <input {...register("name")} type="text" placeholder="FirstName" />
        <input {...register("email")} type="email" placeholder="Email" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
