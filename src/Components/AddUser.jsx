import React, { useState } from "react";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const validationHandler = () => {
    if (enteredName === "") {
      return "ENTER USER'S NAME!";
    } else if (enteredAge === "") {
      return "ENTER USER'S AGE!";
    } else if (parseInt(enteredAge) <= 0) {
      setEnteredName("");
      return "USER'S AGE SHOULD BE MORE THAN 0!";
    }
    return false;
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const error = validationHandler();

    if (!error) {
      const userData = {
        name: enteredName,
        age: enteredAge,
      };

      props.onAddUser(userData);
    } else {
      props.onError(error);
    }

    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <div className={styles["user-controls"]}>
          <label>Username</label>
          <input type="text" value={enteredName} onChange={nameChangeHandler} />
        </div>
        <div className={styles["user-controls"]}>
          <label>Age (years)</label>
          <input
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
            step="1"
          />
        </div>
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
