import React from 'react';
import axios from 'Axios';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  /*
  * retrieve top 20 trending GIFs upon component mount
  */
  componentDidMount() {
    let apiKey = "dc6zaTOxFJmzC";
    let searchEndPoint = "http://api.giphy.com/v1/gifs/trending?";
    let limit = 20;
    let url = `${searchEndPoint}&api_key=${apiKey}&limit=${limit}`;

    axios.get(url)
    .then(response => {
      console.log(response)
      const {data} = response;
      this.setState({
        trending: data
      });
    })
    .catch(function (error) {
      console.log(error);
    }); 
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