import React from 'react';
import Header from './components/Header/Header';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

class App extends React.Component {


  state = {
    count: 0,
    movies: ['Gladiator', 'Harry Potter', 'Lord of the rings'],
  };

  render() {
    // console.log(this.state.count)
    return (
      <>
        {/* <div>
          <a href='https://vitejs.dev' target='_blank'>
            <img src={viteLogo} className='logo' alt='Vite logo' />
          </a>
          <a href='https://react.dev' target='_blank'>
            <img src={reactLogo} className='logo react' alt='React logo' />
          </a>
        </div>
        <h1>Vite + React</h1> */}
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
          <Header count={this.state.count} movies={this.state.movies} />
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
