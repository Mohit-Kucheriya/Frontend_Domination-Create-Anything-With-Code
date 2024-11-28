import React, { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";

function App() {

  const [users, setUsers] = useState([])

  const handleFormSubmitData = (data) => {
    setUsers([...users, data])
  }


  const handleRemoveUser = (id) => {
    setUsers(users.filter((item, index) => index != id))
  }

  return (
    <div className="w-full h-screen bg-gray-300 flex items-center justify-center">
      <div className="container mx-auto ">
        <Cards users={users} handleRemoveUser={handleRemoveUser} />
        <Form handleFormSubmitData={handleFormSubmitData} />
      </div>
    </div>
  );
}

export default App;
