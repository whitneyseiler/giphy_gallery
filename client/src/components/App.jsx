import React from 'react';
import ReactDOM from 'react';
import Nav from './Nav.jsx';

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
          <Nav />
        </header>
      </main>
    )
  }
}

export default App;