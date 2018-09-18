import React from 'react';
import axios from 'Axios';
import Search from './Search.jsx';
import ResultsContainer from './ResultsContainer.jsx';
// import {API_KEY} from '../../../config';

//TODO: change to your personal API key or create config.js
const API_KEY = 'MqHwoX9aRuMaHUSDF9chC7RZQMTShaEl'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      route: 'trending',
      offset: 0,
      suggested: ['reactions', 'entertainment', 'sports', 'artists'],
      loading: false
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
    console.log(this.state.loading)
    this.setState({
      loading: true
    });
    
    let limit = 24;
    let baseURL = "https://api.giphy.com/v1/gifs/";
    let trendingEndpoint = `trending?&api_key=${API_KEY}&limit=${limit}&offset=${this.state.offset}`;
    let searchEndpoint = `search?&api_key=${API_KEY}&q=${route}&limit=${limit}&offset=${this.state.offset}`
    let url = `${baseURL}${route === "trending" ? trendingEndpoint : searchEndpoint}`;

    let results = route === this.state.route ? this.state.results : [];

    axios.get(url)
      .then(response => {
        const {data} = response.data;
        this.setState({
          results: [...results, ...data],
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          loading: false
        })
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
        offset: 0,
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
          <div id="suggested-links" style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
          {this.state.suggested.map(channel => {
            return <span className="channel"
                    style={{padding:"0px 20px",cursor:"pointer"}}
                    onClick={() => this.fetchGIFs(channel)}
                  >{channel}</span>
          })}
          </div>
        </header>
        {!this.state.loading ? 
          <section className="results-container">
            <ResultsContainer results={this.state.results} route={this.state.route} fetchMore={this.fetchMore}/>
          </section> :
          <div id="loading">Loading...</div>
        }
      </main>
    )
  }
}

export default App;