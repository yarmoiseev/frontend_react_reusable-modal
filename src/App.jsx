import { useState } from "react";
import AddUser from "./Components/AddUser";
import UsersList from "./Components/UsersList";
import Modal from "./Components/Modal/Modal";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
	const [isError, setIsError] = useState(false);

  const addUserHandler = (userData) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({
        name: userData.name,
        age: userData.age,
        id: Math.random().toString(),
      });
			setIsError(false);
      return updatedUsers;
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
				<p>Invalid input</p>
				<p>{isError}</p>
				<button onClick={() => errorHandler(false)}>Continue</button>
			</Modal>
    </div>
  );
}

export default App;
