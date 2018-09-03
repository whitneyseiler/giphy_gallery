import React from 'react';
import axios from 'Axios';
import Search from './Search.jsx';
import ResultsContainer from './ResultsContainer.jsx';
import {API_KEY} from '../../../config';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      query: '',
      loaded: false
    }

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  /*
  * retrieve top 20 trending GIFs upon component mount
  */
  componentDidMount() {
    this.fetchGIFs('trending')
  }

  fetchGIFs(route) {
    console.log(route)
    // let publicApiKey = "dc6zaTOxFJmzC";
    let baseURL = "https://api.giphy.com/v1/gifs/";
    let limit = 24;
    let trendingURL = `trending?&api_key=${API_KEY}&limit=${limit}`;
    let searchURL = `search?&api_key=${API_KEY}&q=${route}&limit=${limit}`
    
    let endpoint = route === "trending" ? trendingURL : searchURL;
    let url = baseURL + endpoint;

    axios.get(url)
      .then(response => {
        const {data} = response.data;
        console.log(response)
        this.setState({
          results: data
        });
      })
      .catch(function (error) {
        console.log(error);
      }); 
  }

  onChange(e) {
    let value = e.target.value.split(' ').join('+');
    this.setState({ query: value });
  }

  handleKeyDown(e){
    if(e.keyCode == 13){
      e.preventDefault();
      let value = this.state.query;
      this.fetchGIFs(value);
    }
  }

  render () {
    return (
      <main className="main">
        <header>
          <h1 className="brand-logo center">Giphy Gallery</h1>
          <nav>
            <Search handleKeyDown={this.handleKeyDown} onChange={this.onChange}/>
          </nav>
        </header>
        <section className="results-container">
          <ResultsContainer results={this.state.results}/>
        </section>
      </main>
    )
  }
}

export default App;