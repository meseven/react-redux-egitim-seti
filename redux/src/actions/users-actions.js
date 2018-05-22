import axios from 'axios';

export const UPDATE_USER = 'UPDATE_USER';

export function updateUser(newUser){
	return {
		type: UPDATE_USER,
		payload: {
			user: newUser
		}
	}
}

export function getUsers(){
	return dispatch => {
		axios.get('https://jsonasdasdplaceholder.typicode.com/users/')
			.then(response => console.log(response.data))
			.catch(error => console.log(error))
	}
}