import React from 'react'

function Projects() {
    return (
        <div>
            <div className='game-summary'>
            <h3>Super-Max</h3>
            <img src='./supermax-game-normal.png' alt='screenshot max verstappen game'></img>
            <p>Super-Max is a Canvas game where you have to avoid obstacles and collect points.
                If your score is higher than Lewis Hamilton's you win!
                The game has argualy the greatest soundtrack of all time! </p>
                <p className='non-mobile'><a href='https://degroot12.github.io/Super-Max' target='_blank' rel='noreferrer'>Play the game</a></p>
                <p className='mobile'>Unfortunately the game can't be play on mobile. Switch to a desktop to enjoy the game!</p>
            </div>
            <div className='game-summary'>
            <h3>Click-n-Meal</h3>
            <img src='./Click-n-meal-preview.png' alt='screenshot click and meal app'/>
            <p>Click-n-Meal is an easy way to find the recipes to your liking. You can filter the recipes 
                based on the price, prepare time or wether it is vegan or not.
                You can also add you own recipes to the database</p><p><a href='https://click-n-meal.herokuapp.com' target='_blank' rel='noreferrer'>Show me the app</a></p>
            </div>
            <div className='game-summary'>
                <h3>Band-Square</h3>
                <img src='./band-square.png' alt='screenshot band square website'/>
                <p>Band-Square is a platform where musicians can connect with other muscians. 
                   If you have a band you can look for other people to join your band, of look for venues where you 
                   can book a practice session.
                   If you don't have a band, you can look for bands to join and contact them!
                   </p>
                   <p><a href='https://band-square.herokuapp.com/' target='_blank' rel='noreferrer'>Show me the app</a></p>
            </div>
        </div>
    )
}

export default Projects