import React, {Component} from 'react';
import ActorList  from '../ActorList';

class HomePage extends Component {
	state = {
		actors: [{
				name: "Marlon Brando",
				description: "Marlon Brando is widely considered the greatest movie actor of all time, rivaled only by the more theatrically oriented Laurence Olivier in terms of esteem.",
				photo: "https://m.media-amazon.com/images/M/MV5BMTg3MDYyMDE5OF5BMl5BanBnXkFtZTcwNjgyNTEzNA@@._V1_.jpg"
			},
			{
				name: "Ingrid Bergman",
				description: "Ingrid Bergman was one of the greatest actresses from Hollywood's lamented Golden Era.",
				photo: "https://m.media-amazon.com/images/M/MV5BMTYzMTgzMTIwOV5BMl5BanBnXkFtZTYwNzI5MzI2._V1_.jpg"
			}
		]
	};
	render() {
		return (
			<div>
				<ActorList actors={this.state.actors}/>
			</div>
		);
	}
}

export default HomePage;
