Partner in Climb

  Description

  This game tasks the player with controlling two separate player sprites with two separate sets of input to avoid obstacles as they come hurling at both of the player sprites. If the either player sprite collides with the hazard objects, the player loses. If the player avoids the hazards long enough to allow the player to fill the progress bar in the middle.

  For this project, I chose to create essentially all objects using jQuery and DOM manipulation. Essentially element is a div. .getBoundingClientRect was my saving grace for this project. I was able to use it to keep player sprites within the game field, as well as to establish at what points collisions should be detected. I used a couple of setIntervals for the score and progress bar. The single biggest part of my JS was the keybinding. Including comments and whitespace, it constitutes just under half of my entire code, which is largely a consequence of establishing boundaries, as well as having to account for eight different entries.

  As for my approach, I first created the game board and put it on the page. I then created the player sprites, and put them halfway down their respective panels. Next I set up a function for hazard creation, using an animation to make them fall. I used a couple of if statements with heavily compounded conditions to check to see if a collision occurred. I used .keydown and .keyCode to listen for input, and then to move the player sprites. I used a setInterval to increment the score, and another setInterval to create 1px-tall divs appended to the central progress bar, with an if statement that triggers a win alert if the progress bar fills up.

  My two biggest unresolved issues are potentially the most crucial to the game experience, which are the staggered generation of hazard objects, as well as the activation of collision detection at all times, as opposed to only on keydown. In retrospect, this project may have been a bit too ambitious for my skill level and the time allotted.
