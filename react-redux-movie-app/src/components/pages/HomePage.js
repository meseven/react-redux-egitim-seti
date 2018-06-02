import React, {Component} from 'react';
import ActorList  from '../ActorList';

class HomePage extends Component {
	state = {
		actors: [
			{
				name: "Clint Eastwood",
				description: "Clint Eastwood was born May 31, 1930 in San Francisco, the son of Clinton Eastwood",
				photo: "https://m.media-amazon.com/images/M/MV5BOGFlOTM2OWMtNjI1Ny00ZGQ0LTg4NjYtODUxNjYwNjE0MmFkXkEyXkFqcGdeQXVyMjE5MzM3MjA@._V1_SY1000_CR0,0,827,1000_AL_.jpg"
			},
			{
				name: "Ingrid Bergman",
				description: "Ingrid Bergman was one of the greatest actresses from Hollywood's lamented Golden Era.",
				photo: "https://m.media-amazon.com/images/M/MV5BMTYzMTgzMTIwOV5BMl5BanBnXkFtZTYwNzI5MzI2._V1_.jpg"
			},
			{
				name: "Al Pacino",
				description: "One of the greatest actors in all of film history.",
				photo: "https://m.media-amazon.com/images/M/MV5BMTQzMzg1ODAyNl5BMl5BanBnXkFtZTYwMjAxODQ1._V1_.jpg"
			},
			{
				name: "Naomi Watts",
				description: "Naomi Ellen Watts was born on September 28, 1968 in Shoreham, England.",
				photo: "https://m.media-amazon.com/images/M/MV5BMjIzMjY1NTA4OF5BMl5BanBnXkFtZTcwNjk3MDYwOQ@@._V1_SY1000_CR0,0,667,1000_AL_.jpg"
			},
			{
				name: "Tom Hanks",
				description: "Thomas Jeffrey Hanks was born in Concord, California, to Janet Marylyn (Frager), a hospital worker, and Amos Mefford Hanks, an itinerant cook.",
				photo: "https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_SY1000_CR0,0,691,1000_AL_.jpg"
			},
			{
				name: "Natalie Portman",
				description: "Natalie Portman is the first person born in the 1980s to have won the Academy Award for Best Actress.",
				photo: "https://m.media-amazon.com/images/M/MV5BMTQ3ODE3Mjg1NV5BMl5BanBnXkFtZTcwNzA4ODcxNA@@._V1_SY1000_SX746_AL_.jpg"
			},
			{
				name: "Morgan Freeman",
				description: "With an authoritative voice and calm demeanor, this ever popular American actor has grown into one of the most respected figures in modern US cinema.",
				photo: "https://m.media-amazon.com/images/M/MV5BMTc0MDMyMzI2OF5BMl5BanBnXkFtZTcwMzM2OTk1MQ@@._V1_.jpg"
			},
			{
				name: "Jennifer Connelly",
				description: "Jennifer Connelly was born in the Catskill Mountains, New York, to Ilene (Schuman), a dealer of antiques, and Gerard Connelly, a clothing manufacturer.",
				photo: "https://m.media-amazon.com/images/M/MV5BOTczNTgzODYyMF5BMl5BanBnXkFtZTcwNjk4ODk4Mw@@._V1_.jpg"
			},
			{
				name: "Marlon Brando",
				description: "Marlon Brando is widely considered the greatest movie actor of all time, rivaled only by the more theatrically oriented Laurence Olivier in terms of esteem.",
				photo: "https://m.media-amazon.com/images/M/MV5BMTg3MDYyMDE5OF5BMl5BanBnXkFtZTcwNjgyNTEzNA@@._V1_.jpg"
			}
		]
	};
	render() {
		return (
			<div>
				<h2>Actors & Actresses</h2>
				<ActorList actors={this.state.actors}/>
			</div>
		);
	}
}

export default HomePage;
