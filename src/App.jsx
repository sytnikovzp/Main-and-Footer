import React from 'react';
import Header from './components/Header/Header';
import './App.css';

class App extends React.Component {
  state = {
    count: 0,
    movies: ['Gladiator', 'Harry Potter', 'Lord of the rings'],
  };

  render() {
    return (
      <>
        <Header count={this.state.count} movies={this.state.movies} />

        <div className='card'>
          <button
            onClick={() =>
              this.setState({
                count: this.state.count + 1,
              })
            }
          >
            count is {this.state.count}
          </button>

          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className='read-the-docs'>
          Click on the Vite and React logos to learn more
        </p>
      </>
    );
  }
}

export default App;
