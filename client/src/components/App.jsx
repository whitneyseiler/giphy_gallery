import React from 'react';
import ReactDOM from 'react';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render () {
    return (
      <main className="main">
        <header>
          <h1 className="brand-logo center">Giphy Gallery</h1>
          <nav>
            <Search />
          </nav>
        </header>
      </main>
    )
  }
}

export default App;