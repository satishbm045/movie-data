import React from 'react';
import './dashboard.css';
const Dashboard = (props) => {
    console.log(props.data);
    const {Title, Released,Director, Genre, Poster} = props.data;
    return(
    <div className="list">
        <div className="left">
            <div className="img">
                <img src={Poster}/>
            </div>
        </div>
        <div className="right">
            <div className="title">Title: {Title}</div><br/>
            <div className="date">Released Date: {Released}</div>
            
            <div className="date">Director: {Director}</div>
            
            <div className="date">Genre: {Genre}</div>
        </div>
    </div>
    )
}

export default Dashboard;