import React, {Component} from 'react';
import axios from 'axios';
import Dashboard from './components/dashboard';
import './App.css';

class App extends Component{
  constructor(props){
      super(props);
      this.state= {
          inputValue : '',
          movieList: {
            data: [],
            err: '',
            loading: false
          }
      }
  }
  searchValue =(event) =>{
      var self = this;
      this.setState({
          inputValue : event.target.value,
          movieList: {
            data: [],
            err: '',
            loading: true
          }
      }, (function() {
        axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=15fe76d2&t="+this.state.inputValue)
        .then(function(response){
          self.setState({
            movieList: {
              data: response.data,
              err: '',
              loading: false
            }
          })
          console.log(response);
        })
        .catch(function(response){
          self.setState({
            movieList: {
              data: [],
              err: response.error,
              loading: false
            }
          })
          console.log(response);
        })
      }

      ))
  }
  render(){
    return(
      <div className="mainBlock">
        <div className="searchBox">
          <span className="text">Search:</span>  
          <input type="text" value={this.state.inputValue}  onChange={this.searchValue} />
        </div>
        <div className="movieDetails">
          <div className="loading">
            { this.state.movieList.loading && 
              <>Loading...</>
            }
          </div>
          <div className="item">
            { !this.state.movieList.loading && 
              <Dashboard data={this.state.movieList.data} />
            }
          </div>
        </div>
      </div>
    )
  }
}
export default App;