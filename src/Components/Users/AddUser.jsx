import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button.jsx";

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
    if (enteredName.trim().length === 0) {
      return {
        title: "Invalid username",
        text: "Please, enter correct username",
      };
    } else if (enteredAge.trim().length === 0) {
      return {
        title: "Invalid user age",
        text: "Please, enter correct user age",
      };
    } else if (parseInt(enteredAge) <= 0) {
      setEnteredName("");
      return {
        title: "Invalid user age",
        text: "User age should be more than zero",
      };
    }
    setEnteredName("");
    setEnteredAge("");
    return false;
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const error = validationHandler();

    if (!error) {
      props.onAddUser(enteredName, enteredAge);
    } else {
      props.onError(error);
    }
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={formSubmitHandler}>
        <label>
          Username
          <input type="text" value={enteredName} onChange={nameChangeHandler} />
        </label>
        <label>
          Age (years)
          <input
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
            step="1"
          />
        </label>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
