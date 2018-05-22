import { UPDATE_USER } from '../actions/user-actions';

export default function userReducer(state = '', action) {
	switch(action.type){
		case UPDATE_USER:
			return action.payload.user;

		default:
			return state;
	}
}
