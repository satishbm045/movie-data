import React, {Component} from 'react';
import axios from 'axios';

class searchBox extends Component{
    constructor(props){
        super(props);
        this.state= {
            inputValue : ''
        }
    }
    searchValue (event){
        this.setState({
            inputValue : event.target.value
        })
    }
    render(){
        return(
            <div>Search:
                <input value={this.state.inputValue}  onChange={this.searchValue} />   
            </div>
        )
    }
}

export default searchBox;