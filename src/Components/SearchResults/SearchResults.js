import React from 'react';
import './SearchResults.css';
import { ProfilList } from '../ProfilList/ProfilList';

export class SearchResults extends React.Component {
    render(){
        return (
            <div className="Search">
                <h1>Were you looking for :</h1>
                <div className="SearchResults">
                    <ProfilList profils={this.props.searchResults}/>
                </div>

            </div>
        )
    }
}