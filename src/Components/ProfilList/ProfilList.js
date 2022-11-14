import React from 'react';
import { Profil } from '../Profil/Profil';


export class ProfilList extends React.Component {

    render(){

        return (
            <div className="ProfilList">
                {
                        this.props.profils.map(profil => {
                            return <Profil profil={profil}
                                                key={profil.id}/>
                        })
                    }
            </div>
        )
    }
}