import { useState } from "react";
export function TwitterFollowCard({name, userName, img}){

    const [isFollowing, setIsFollowing]= useState(false);

    const text = isFollowing ? 'Siguiendo' : 'Seguir';

    const handleClick =()=>setIsFollowing(!isFollowing);

    const buttonClassName = isFollowing ? 'tw-followCard-button is-following': 'tw-followCard-button';
return(
    <article className='tw-followCard'>
    <header className='tw-followCard-header'>
    <img className='tw-followCard-img' src={img} alt="lucario" />
        <div className='tw-followCard-info'>
            <strong>{name}</strong>
            <span className='tw-followCard-infoUsarName'>@{userName}</span>
        </div>
    </header>
    <aside>
        <button className={buttonClassName} onClick={handleClick}>
            <span className="tw-followCard-text" >{text}</span>
            <span className="tw-followCard-stopFollow" >Dejar de Seguir</span>
        </button>
    </aside>
    </article>
)
}





/*
const [isFollowing, setIsFollowing]= useState(false);

    const text = isFollowing ? 'Siguiendo' : 'Seguir';

    const handleClick =()=>{
        setIsFollowing(!isFollowing);*/
    