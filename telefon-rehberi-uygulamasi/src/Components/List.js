import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './List.css';

class List extends Component {
	static propTypes = {
		contacts: PropTypes.array.isRequired,
	};

	render() {
		return (
			<div className={"listArea"}>
				<input name={"filter"} id={"filter"} placeholder={"Filter by name or phone"}/>
				<ul className={"list"}>
					{
						this.props.contacts.map(contact =>
							<li key={contact.phone}>
								<span className={"name"}>{contact.name}</span>
								<span className={"phone"}>{contact.phone}</span>
								<span className={"clearfix"}></span>
							</li>
						)
					}
				</ul>
			</div>
		);
	}
}

export default List;
