import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
 export function App (){
    return(
    <section className='App'>
        <TwitterFollowCard name='Lucario' userName='LucarioG00D' isFollowing  img="https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png"/>
        <TwitterFollowCard name='Bulbasaur' userName='BulbaNeitor' isFollowing= {false} img="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/4/43/latest/20190406170624/Bulbasaur.png/200px-Bulbasaur.png"/>
        <TwitterFollowCard name='Gardevoir' userName='PricessCuitie' isFollowing img="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/2/28/latest/20160309224927/Gardevoir.png/200px-Gardevoir.png"/>
    </section>
    )
}