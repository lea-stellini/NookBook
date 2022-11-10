import React from "react";
import './Profil.css'; 
import charlise from './charlise.png';

export class Profil extends React.Component {

    render() {
        return(
            <div className="Profil">
                
                <div className="passport">
                    <img src={charlise} alt="Charlise" className="charlise"/>
                    <div>
                        <div className="firstline">
                            <p>{this.props.profil.name}</p> 
                            <p>{this.props.profil.birthday}</p>
                        </div>
                        <p>{this.props.profil.motto}</p>
                    </div>

                </div>
            </div>
        )
    }
}