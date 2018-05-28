import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

const MovieCard = ({ movie }) => (
	<Grid.Column>
		<Card>
			<Card
				image={movie.cover}
				header={ movie.title}
			/>
		</Card>
	</Grid.Column>
);

export default MovieCard;