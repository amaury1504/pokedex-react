import React, {Component} from 'react'
import PokemonList from '../components/list'

export default class PokemonCard extends Component {
    render() {
        return(
            <div className={"row"}>
                <div className={"col"}>
                    <PokemonList/>
                </div>
            </div>
        )
    }
}