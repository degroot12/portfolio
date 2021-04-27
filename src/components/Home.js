import React from "react";


function Home() {
  return (
    <div className="App">
      <div className='navigation'>
        <div className='navigation-links'>
          <h3>Thomas de Groot</h3>
          <div className='about-contact'>
            <a href='/about'>About</a>
            <a href="mailto:thomas@thomasdegroot.dev">Contact</a>
          </div>
          <div>
            
          </div>
        </div>
       

      </div>
      <div className='projects'>
        <div className='project-summary'>
          
          <div className='screenshots-click-meal'>
        
          {/* <div> */}
          {/* <img src='/click-n-meal-create-page.png' alt='screenshot click and meal create recipe page'/> */}
          {/* </div> */}
          {/* <div> */}
          <img src='./iphone-click-meal-full.png' alt='screenshot click and meal app'/>
          {/* </div> */} 
          </div> 
          <h3>Click-n-Meal</h3>
             <p>Click-n-Meal is an easy way to find the recipes to your liking. You can filter the recipes 
                 based on the price, prepare time or wether it is vegan or not.
                 You can also add you own recipes to the database</p><p><a href='https://click-n-meal.herokuapp.com' target='_blank' rel='noreferrer'>Show me the app</a></p>
          </div>
        <div className='project-summary'>
          <img src='./supermax-game-normal.png' alt='screenshot max verstappen game'></img>
          <h3>Super-Max</h3>
          <p>Super-Max is a Canvas game where you have to avoid obstacles and collect points.
              If your score is higher than Lewis Hamilton's you win!
              The game has argualy the greatest soundtrack of all time! </p>
              <p className='non-mobile'><a href='https://degroot12.github.io/Super-Max' target='_blank' rel='noreferrer'>Play the game</a></p>
              <p className='mobile'>Unfortunately the game can't be play on mobile. Switch to a desktop to enjoy the game!</p>
        </div>
        
          <div className='project-summary'>
            
            <img src='./band-square.png' alt='screenshot band square website'/>
            <h3>Band-Square</h3>
            <p>Band-Square is a platform where musicians can connect with other muscians. 
              If you have a band you can look for other people to join your band, of look for venues where you 
              can book a practice session.
              If you don't have a band, you can look for bands to join and contact them!
              </p>
              <p><a href='https://band-square.herokuapp.com/' target='_blank' rel='noreferrer'>Show me the app</a></p>
          </div>
      </div>  
    </div>
  );
}

export default Home;
