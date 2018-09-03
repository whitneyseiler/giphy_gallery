import React from 'react';
import axios from 'Axios';
import Search from './Search.jsx';
import ResultsContainer from './ResultsContainer.jsx';
import {API_KEY} from '../../../config';

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
    // let publicApiKey = "dc6zaTOxFJmzC";
    let searchEndPoint = "//api.giphy.com/v1/gifs/trending?";
    let limit = 100;
    let url = `${searchEndPoint}&api_key=${API_KEY}&limit=${limit}`;

    axios.get(url)
      .then(response => {
        console.log(response.data.data)
        const {data} = response.data;
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
        <section className="results-container">
          <ResultsContainer results={this.state.trending} />
        </section>
      </main>
    )
  }
}

export default App;