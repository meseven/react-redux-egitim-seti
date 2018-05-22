import $ from 'jquery';

export const UPDATE_USER = 'UPDATE_USER';

export function updateUser(newUser){
	return {
		type: UPDATE_USER,
		payload: {
			user: newUser
		}
	}
}

export function getUsers(){
	return dispatch => {
		$.ajax({
			url: 'https://jsonplaceholder.typicode.com/posts',
			success() {
				console.log('success');
			},
			error(){
				console.log('err');
			}
		})
	}
}