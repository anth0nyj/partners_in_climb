$(() => {

  // Game Board Creation
  const $titleLine = $('<h1>').text('Partners in Climb');
  const $gameContainer = $('<div>').attr('id', 'game-container');
  $('body').append($titleLine, $gameContainer);
  const $leftPanel = $('<div>').attr('id', 'left-panel');
  const $leftPanelBounds = $leftPanel[0].getBoundingClientRect();
  const $rightPanel = $('<div>').attr('id', 'right-panel');
  $gameContainer.append($leftPanel, $rightPanel);


  // Score Box Creation
  const $scoreBox = $('<div>').attr('id', 'score-box');
  const $currentScoreBox = $('<div>').attr('id', 'current-score-box');
  const $highScoreBox = $('<div>').attr('id', 'high-score-box');
  let currentScore = 0;
  $currentScoreBox.text("Score: " + currentScore);
  let highScore = 0;
  $highScoreBox.text('High Score: ' + highScore);
  $scoreBox.append($currentScoreBox, $highScoreBox);
  $gameContainer.after($scoreBox);


  // Player Object Creation
  const $climber1 = $('<div>').attr('id', 'climber-1');
  const $climber2 = $('<div>').attr('id', 'climber-2');
  $leftPanel.append($climber1);
  $rightPanel.append($climber2);
  $('#climber-1').css({'margin': 'auto'});
  $('#climber-2').css({'margin': 'auto'});


  // Position Tracking
  let $c1Place = $('#climber-1')[0].getBoundingClientRect();
  let $c2Place = $('#climber-2')[0].getBoundingClientRect();


  // Creates hazard, inserts hazard to left panel
  // Note: create setInterval(?) that makes objects appear at increasing frequency.
  const $hazard = $('<div>').addClass('hazard');
  const $hazLeft = Math.floor(Math.random()*281)
  $hazard.css({'height': '20px', 'width': '20px', 'background-color': 'black', 'left': $hazLeft});
  $('#left-panel').append($hazard);
  let $hazPlace = $('.hazard')[0].getBoundingClientRect();
  $hazard.css({'animation-name': 'falling-hazard', 'animation-duration': '4s'});


  // Logging Positions
  console.log($c1Place);
  console.log($hazPlace);


  // Collision Detection
  const colDetect = () => {

  console.log('colDetect called');
  $hazPlace = $('.hazard')[0].getBoundingClientRect();
  console.log('hazPlace: ', $hazPlace);
  console.log('c1Place: ', $c1Place);
  
  // Climber-1 Collision
    if ($c1Place.x < $hazPlace.x + $hazPlace.width &&
   $c1Place.x + $c1Place.width > $hazPlace.x &&
   $c1Place.y < $hazPlace.y + $hazPlace.height &&
   $c1Place.height + $c1Place.y > $hazPlace.y) {
     alert('Game over!');
     if (currentScore > highScore) {
       highScore = currentScore;
       $highScoreBox.text("High Score: " + highScore);
     }
     currentScore = 0;
   }

   // Climber-2 Collision
   if ($c2Place.x < $hazPlace.x + $hazPlace.width &&
  $c2Place.x + $c2Place.width > $hazPlace.x &&
  $c2Place.y < $hazPlace.y + $hazPlace.height &&
  $c2Place.height + $c2Place.y > $hazPlace.y) {
    alert('Game over!');
    if (currentScore > highScore) {
      highScore = currentScore;
      $highScoreBox.text("High Score: " + highScore);
    }
    currentScore = 0;
  }

}


  // Climber Stats

  let c1Left = 0;
  let c1Top = 0;
  let c1Delay = 0;
  let c1DstMvd = 10;
  let c2Left = 0;
  let c2Top = 0;
  let c2Delay = 0;
  let c2DstMvd = 10;

  // Movement for both climbers
  // For some reason, Climber 2 has has a delay on its movement.

  $(document).keydown(function(event){

    // Climber-1 Movement

    // Bind W to Upward Movement
    if (event.keyCode == 87) {
      $('#climber-1').animate({'top': (c1Top - c1DstMvd) + 'px'}, c1Delay);
      c1Top -= c1DstMvd;
    }
    // Bind D to Rightward Movement
    if (event.keyCode == 68 && $leftPanelBounds.x) {
      console.log('You can\'t go that way!');
    } else if (event.keyCode == 68) {
      $('#climber-1').animate({'left': (c1Left + c1DstMvd) + 'px'}, c1Delay);
      c1Left += c1DstMvd;
    }
    // Bind S to Downward Movement
    if (event.keyCode == 83) {
      $('#climber-1').animate({'top': c1Top + c1DstMvd + 'px'}, c1Delay);
      c1Top += c1DstMvd;
    }
    // Bind A to Leftward Movement
    if (event.keyCode == 65 && $leftPanelBounds.x >= $c1Place.x ) {
      console.log('You can\'t go that way!');
    } else if (event.keyCode == 65) {
      $('#climber-1').animate({'left': c1Left - c1DstMvd + 'px'}, c1Delay);
      c1Left -= c1DstMvd
    }

    // Climber-2 Movement
    // Note: Climber-2 moves slowly and slides for some reason. Investigage.
    // Bind I to Upward Movement
    if (event.keyCode == 73) {
      $('#climber-2').animate({'top': (c2Top - c2DstMvd) + 'px', c2Delay});
      c2Top -= c2DstMvd;
    }
    // Bind L to Rightward Movement
    if (event.keyCode == 76) {
      $('#climber-2').animate({'left': c2Left + c2DstMvd + 'px', c2Delay});
      c2Left += c2DstMvd;
    }
    // Bind K to Downward Movement
    if (event.keyCode == 75) {
      $('#climber-2').animate({'top': c2Top + c2DstMvd + 'px', c2Delay});
      c2Top += c2DstMvd;
    }
    // Bind J to Leftward Movement
    if (event.keyCode == 74) {
      $('#climber-2').animate({'left': c2Left - c2DstMvd + 'px', c2Delay});
      c2Left -= c2DstMvd;
    }

    $c1Place = $('#climber-1')[0].getBoundingClientRect();
    $c2Place = $('#climber-2')[0].getBoundingClientRect();

    console.log($c1Place);

    colDetect();

  // Keydown Closure
  });

  // $(document).animationstart(colDetect());

  // }
  const scoreTracker = setInterval(() => {
    currentScore++;
    $currentScoreBox.text("Score: " + currentScore);
  }, 100);



// Onload Closure
});
