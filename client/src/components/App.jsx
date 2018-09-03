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
      route: 'trending',
      offset: 0
    }

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.fetchGIFs = this.fetchGIFs.bind(this);
    this.fetchMore = this.fetchMore.bind(this);
  }

  /*
  * retrieve top 20 trending GIFs upon component mount
  */
  componentDidMount() {
    this.fetchGIFs('trending')
  }

  fetchGIFs(route) {
    // let publicApiKey = "dc6zaTOxFJmzC";
    let baseURL = "https://api.giphy.com/v1/gifs/";
    let limit = 24;
    let trendingURL = `trending?&api_key=${API_KEY}&limit=${limit}`;
    let searchURL = `search?&api_key=${API_KEY}&q=${this.state.query}&limit=${limit}`
    
    let endpoint = route === "trending" ? trendingURL : searchURL;
    let url = `${baseURL}${endpoint}&offset=${this.state.offset}`;

    axios.get(url)
      .then(response => {
        const {data} = response.data;
        this.setState({
          results: [...this.state.results, ...data]
        });
      })
      .catch(function (error) {
        console.log(error);
      }); 
  }

  fetchMore() {
    this.setState({
      offset: this.state.offset + 24
    }, this.fetchGIFs(this.state.route))
  }

  handleKeyDown(e){
    let value = e.target.value.split(' ').join('+');

    if(e.keyCode == 13){
      e.preventDefault();
      this.setState({ 
        query: value,
        results: [],
        offset: 0
      }, this.fetchGIFs(value));
    }
  }

  render () {
    return (
      <main className="main">
        <header>
          <h1 className="brand-logo center">Giphy Gallery</h1>
          <nav>
            <Search handleKeyDown={this.handleKeyDown}/>
          </nav>
        </header>
        <section className="results-container">
          <ResultsContainer results={this.state.results} route={this.state.route} fetchMore={this.fetchMore}/>
        </section>
      </main>
    )
  }
}

export default App;