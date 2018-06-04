const Users =  props => (
	<div>
		Users page <br/>
		{ props.url.query.name }
	</div>
);

export default Users;