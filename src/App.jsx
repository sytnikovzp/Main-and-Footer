import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './components/Header/Header.css';
import './components/Footer/Footer.css';

class App extends React.Component {
  state = {
    movies: [
      'Терминатор 2: Судный день',
      'Назад в будущее',
      'Звездные войны: Возвращение Джедая',
    ],
    movieStudio: [
      'г. Киев ул. Закревского, 22',
      'faculty@film.ua',
      '+38 044 459 46 10',
    ],
  };

  render() {
    return (
      <>
        <Header movies={this.state.movies} />
        <Footer movieStudio={this.state.movieStudio} />
      </>
    );
  }
}

export default App;
