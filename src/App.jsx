import { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";
import Modal from "./Components/UI/Modal/Modal";
import Button from "./Components/UI/Button/Button";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState();

  const addUserHandler = (userName, userAge) => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        {
          name: userName,
          age: userAge,
          id: Math.random().toString(),
        },
      ];
    });
  };

  const errorHandler = (error) => {
    setIsError(error);
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} onError={errorHandler} />
      <UsersList users={users} />
      <Modal active={isError} setActive={errorHandler}>
        <h2>{isError && isError.title}</h2>
        <p>{isError && isError.text}</p>
        <Button type="button" onClick={() => errorHandler(false)}>Continue</Button>
      </Modal>
    </div>
  );
}

export default App;