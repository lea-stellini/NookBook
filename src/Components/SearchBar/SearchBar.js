import React from 'react';
import './SearchBar.css';
import { FaSearch } from "react-icons/fa";

export class SearchBar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="SearchBar">
                <input placeholder="Enter a villager name"/>
                <button className="SearchButton"><FaSearch className="search"/></button>
            </div>
        )
    }
}