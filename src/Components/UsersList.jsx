import styles from './UsersList.module.css';

const UsersList = (props) => {
	return (
		<ul>
			{props.users.map(user => (<li key={user.id}>{user.name}{user.age}</li>))}
		</ul>
	);
};

export default UsersList;