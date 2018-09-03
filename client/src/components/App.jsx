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

    let limit = 24;
    let baseURL = "https://api.giphy.com/v1/gifs/";
    let trendingEndpoint = `trending?&api_key=${API_KEY}&limit=${limit}&offset=${this.state.offset}`;
    let searchEndpoint = `search?&api_key=${API_KEY}&q=${route}&limit=${limit}&offset=${this.state.offset}`
    let url = `${baseURL}${route === "trending" ? trendingEndpoint : searchEndpoint}`;

    let results = route === "trending" ? this.state.results : [];

    axios.get(url)
      .then(response => {
        const {data} = response.data;
        this.setState({
          results: [...results, ...data]
        });
      })
      .catch(function (error) {
        console.log(error);
      }); 
  }

  /**
   * infinite scroll: fetch more results when user scrolls to bottom of page
   */
  fetchMore() {
    this.setState({
      offset: this.state.offset + 24
    }, this.fetchGIFs(this.state.route))
  }

  /**
   * when user enters searc query and hits enter, reset offset to 0 
   * and fetch associated GIFs
   */
  handleKeyDown(e){
    let value = e.target.value.split(' ').join('+');

    if(e.keyCode == 13){
      e.preventDefault();
      this.setState({
        route: value,
        offset: 0
      });
      this.fetchGIFs(value)
    }
  }

  render () {
    return (
      <main className="main">
        <header>
          <h1 className="brand-logo center" onClick={() => window.location.reload()}>Giphy Gallery</h1>
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