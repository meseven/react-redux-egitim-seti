import axios from 'axios';

export const UPDATE_USER = 'UPDATE_USER';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export function updateUser(newUser){
	return {
		type: UPDATE_USER,
		payload: {
			user: newUser
		}
	}
}

export function showError(){
	return {
		type: GET_USER_ERROR,
		payload: {
			error: 'ERROR!!'
		}
	}
}

export function getUsers(){
	return async dispatch => {
		try{
			const res = await axios.get('https://jsonplaceholder.typicode.com/users/2');
			dispatch(updateUser(res.data.name));
		}catch (e) {
			dispatch(showError());
		}
	}
}