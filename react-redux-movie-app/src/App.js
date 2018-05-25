import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import {
	Container, Divider, Grid, Header, Image, List, Menu, Segment, Visibility,
} from 'semantic-ui-react'
import { menuStyle, fixedMenuStyle } from './helpers/styleHelper';

import MoviesPage from './components/pages/MoviesPage';

import { Link, Route } from 'react-router-dom';

class App extends Component {

	state = {
		menuFixed: false,
		overlayFixed: false,
	};

	stickTopMenu = () => this.setState({ menuFixed: true });
	unStickTopMenu = () => this.setState({ menuFixed: false });

  render() {
		const { menuFixed } = this.state;

		return (
      <div className="App">
				<Visibility
					onBottomPassed={this.stickTopMenu}
					onBottomVisible={this.unStickTopMenu}
					once={false}
				>
					<Menu
						borderless
						fixed={menuFixed && 'top'}
						style={menuFixed ? fixedMenuStyle : menuStyle}
					>
						<Container text>
							<Menu.Item>
								<Image size='mini' src='https://react.semantic-ui.com/logo.png' />
							</Menu.Item>
							<Menu.Item header>Movieapp</Menu.Item>
							<Menu.Item as={Link} to="/movies">
								Movies
              </Menu.Item>
							<Menu.Item as='a'>Add New</Menu.Item>
						</Container>
					</Menu>
				</Visibility>

				<Container text>
					<Route path='/movies' component={MoviesPage}></Route>

					<hr/>

					<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis deserunt hic id nesciunt
						perspiciatis porro praesentium sint temporibus vero. Culpa, et fuga officia perferendis porro qui suscipit
						ut veritatis?
					</div>
					<div>Ad aperiam blanditiis consequatur doloribus id illo, incidunt inventore iure labore laboriosam laudantium
						minus, natus nihil nisi nulla perferendis quidem quis quod ratione repellendus repudiandae sit suscipit
						temporibus ullam voluptatem!
					</div>
					<div>Adipisci blanditiis corporis iure laudantium molestiae, molestias numquam, odio officia optio provident
						sunt tenetur! Alias autem cum enim est id nihil repellat, ut! Aliquid dignissimos eligendi et quia
						voluptate. Ad!
					</div>
					<div>Dolore eaque ex maiores pariatur provident? Adipisci asperiores blanditiis distinctio explicabo natus! Ab
						aliquam, blanditiis cumque dolorum ex expedita harum id itaque laudantium nihil non nostrum perspiciatis
						repudiandae ullam, vitae.
					</div>
					<div>Accusamus aliquam assumenda debitis dolore fugiat harum impedit magni maxime, modi molestias odit optio
						provident quas reiciendis repellat repellendus veritatis? Asperiores dicta dignissimos iste, libero mollitia
						natus nulla placeat tempore.
					</div>
					<div>Beatae, corporis culpa dolorum libero vel voluptate! Aut corporis dignissimos laborum nam optio quaerat
						voluptate? Ad consectetur excepturi nulla pariatur quam reiciendis, sit tempora voluptatibus. Et fuga optio
						quos voluptates.
					</div>
					<div>Accusamus architecto asperiores, at cumque dolorum eligendi eos fugit illum laboriosam numquam odio
						quaerat quis veniam. Aspernatur eveniet illum libero molestias nam. Animi delectus eum minima nulla quae
						quaerat voluptatem?
					</div>
					<div>Accusamus adipisci architecto aut cum delectus dicta dolore dolores ducimus ea earum eligendi et harum
						hic iste magni maxime, modi molestias nesciunt nihil placeat quod ratione repudiandae suscipit velit
						voluptate!
					</div>
					<div>Adipisci aliquam amet, blanditiis, cum cupiditate dignissimos dolor doloremque dolorum eveniet fuga
						iusto, libero magni molestiae natus neque nesciunt odit placeat quaerat qui quis quisquam quos tempora totam
						voluptatibus voluptatum.
					</div>
					<div>Aperiam, autem culpa dicta doloribus eaque labore minima modi neque nesciunt nostrum nulla possimus
						praesentium qui recusandae reiciendis, rerum vero voluptate voluptatibus! A alias fugiat in incidunt natus
						nulla reprehenderit!
					</div>
        </Container>

				<Segment
					inverted
					style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
					vertical
				>
					<Container textAlign='center'>
						<Grid columns={4} divided stackable inverted>
							<Grid.Row>
								<Grid.Column>
									<Header inverted as='h4' content='Group 1' />
									<List link inverted>
										<List.Item as='a'>Link One</List.Item>
										<List.Item as='a'>Link Two</List.Item>
										<List.Item as='a'>Link Three</List.Item>
										<List.Item as='a'>Link Four</List.Item>
									</List>
								</Grid.Column>
								<Grid.Column>
									<Header inverted as='h4' content='Group 2' />
									<List link inverted>
										<List.Item as='a'>Link One</List.Item>
										<List.Item as='a'>Link Two</List.Item>
										<List.Item as='a'>Link Three</List.Item>
										<List.Item as='a'>Link Four</List.Item>
									</List>
								</Grid.Column>
								<Grid.Column>
									<Header inverted as='h4' content='Group 3' />
									<List link inverted>
										<List.Item as='a'>Link One</List.Item>
										<List.Item as='a'>Link Two</List.Item>
										<List.Item as='a'>Link Three</List.Item>
										<List.Item as='a'>Link Four</List.Item>
									</List>
								</Grid.Column>
								<Grid.Column>
									<Header inverted as='h4' content='Footer Header' />
									<p>Extra space for a call to action inside the footer that could help re-engage users.</p>
								</Grid.Column>
							</Grid.Row>
						</Grid>
						<Divider inverted section />
						<Image src='https://react.semantic-ui.com/logo.png' centered size='mini' />
						<List horizontal inverted divided link>
							<List.Item as='a' href='#'>Site Map</List.Item>
							<List.Item as='a' href='#'>Contact Us</List.Item>
							<List.Item as='a' href='#'>Terms and Conditions</List.Item>
							<List.Item as='a' href='#'>Privacy Policy</List.Item>
						</List>
					</Container>
				</Segment>
      </div>
    );
  }
}

export default App;
