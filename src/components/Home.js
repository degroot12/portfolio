import React from 'react'

export default function Home() {
    return (
        <div>
            <h1>Thomas de Groot</h1>
            <h2>My Projects:</h2>
            <div className='super-max'>
            <h3>Super-Max</h3>
            <img src='./supermax-game-normal.png'></img>
            <p>Super-Max is a Canvas game where you have to avoid obstacles and collect points.
                If your score is higher than Lewis Hamilton's you win!
                The game has argualy the greatest soundtrack of all time</p>
            </div>
        </div>
    )
}
