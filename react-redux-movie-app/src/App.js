import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import { Link, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import MoviesPage from './components/pages/MoviesPage';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends Component {
  render() {
		return (
      <div className="App">
				<Header />

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

				<Footer/>
      </div>
    );
  }
}

export default App;
