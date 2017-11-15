$(() => {

  // Game Board Creation
  const $titleLine = $('<h1>').text('Partners in Climb');
  const $gameContainer = $('<div>').attr('id', 'game-container');
  $('body').append($titleLine, $gameContainer);
  const $leftPanel = $('<div>').attr('id', 'left-panel');
  // const $leftPanelBounds = $leftPanel[0].getBoundingClientRect();
  const $progBar = $('<div>').attr('id', 'prog-bar');
  const $rightPanel = $('<div>').attr('id', 'right-panel');
  $gameContainer.append($leftPanel, $progBar, $rightPanel);


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

  // Progress Bar
  // const $progBar = $('<div>').attr('id', 'prog-bar');
  // $('#game-container').append($progBar);
  // $progBar.css({'left': $('#game-container')[0].getBoundingClientRect().x + $('#game-container')[0].getBoundingClientRect().width + 10 + 'px'})

  // Player Object Creation
  const $climber1 = $('<div>').attr('id', 'climber-1');
  const $climber2 = $('<div>').attr('id', 'climber-2');
  $climber1.css({'top': ($('#left-panel')[0].getBoundingClientRect().height/2)-10});
  $climber2.css({'top': ($('#right-panel')[0].getBoundingClientRect().height/2)-10});
  $leftPanel.append($climber1);
  $rightPanel.append($climber2);
  $('#climber-1').css({'margin': 'auto'});
  $('#climber-2').css({'margin': 'auto'});


  // Hazard Creation
  const createHazard = () => {
    // Creates object
    const $hazard = $('<div>').addClass('hazard');
    // Randomly determines and sets starting X coordinate.
    const $hazLeft = Math.floor(Math.random()*281) + $('#left-panel')[0].getBoundingClientRect().x;
    $hazard.css({'left': $hazLeft});
    // Inserts object in left panel.
    // Note: this will probably require passing an argument to determine which panel is selected for hazard creation, or something of the sort.
    $('#left-panel').append($hazard);
    // Gets coordinates of object boundaries.
    let $hazPlace = $('.hazard')[0].getBoundingClientRect();
    // Makes object descend across screen.
    // Note: at some point, the animation duration should take a passed argument, a function, something to modify the rate of descent. This will be employed as a means of increasing game difficulty.
    $hazard.css({'animation-name': 'falling-hazard', 'animation-duration': '4s'});

}

createHazard();

  // Position Tracking
  let $c1Place = $('#climber-1')[0].getBoundingClientRect();
  let $c2Place = $('#climber-2')[0].getBoundingClientRect();
  $hazPlace = $('.hazard')[0].getBoundingClientRect();


  // Logging Positions
  console.log($c1Place);
  console.log($hazPlace);


  // Collision Detection
  const colDetect = () => {

  // console.log('colDetect called');
  $hazPlace = $('.hazard')[0].getBoundingClientRect();
  // console.log('hazPlace: ', $hazPlace);
  // console.log('c1Place: ', $c1Place);

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
  let c1Top = ($('#left-panel')[0].getBoundingClientRect().height/2)-10;
  let c1Delay = 0;
  let c1DstMvd = 10;
  let c2Left = 0;
  let c2Top = ($('#right-panel')[0].getBoundingClientRect().height/2)-10;
  let c2Delay = 0;
  let c2DstMvd = 10;

  // Movement for both climbers
  // Note: Climber 2 has a delay on its movement.

  $(document).keydown(function(event){

    // Climber-1 Movement

    // Bind W to Upward Movement
    if (event.keyCode == 87 && $c1Place.y <= $('#left-panel')[0].getBoundingClientRect().y + 10) {
      console.log('You can\'t go that way!');
    } else if (event.keyCode == 87) {
      $('#climber-1').animate({'top': (c1Top - c1DstMvd) + 'px'}, c1Delay);
      c1Top -= c1DstMvd;
    }
    // Bind D to Rightward Movement
    if (event.keyCode == 68 && $c1Place.x >= $('#left-panel')[0].getBoundingClientRect().x + $('#left-panel')[0].getBoundingClientRect().width - 30) {
      console.log('You can\'t go that way!');
    } else if (event.keyCode == 68) {
      $('#climber-1').animate({'left': (c1Left + c1DstMvd) + 'px'}, c1Delay);
      c1Left += c1DstMvd;
    }
    // Bind S to Downward Movement
    if (event.keyCode == 83 && $c1Place.y >= $('#left-panel')[0].getBoundingClientRect().y + $('#left-panel')[0].getBoundingClientRect().height - 20) {
      console.log('You can\'t go that way!');
    } else if (event.keyCode == 83) {
      $('#climber-1').animate({'top': c1Top + c1DstMvd + 'px'}, c1Delay);
      c1Top += c1DstMvd;
    }
    // Bind A to Leftward Movement
    if (event.keyCode == 65 && $c1Place.x <= $('#left-panel')[0].getBoundingClientRect().x + 10) {
      console.log('You can\'t go that way!');
  }  else if (event.keyCode == 65) {
      // console.log('C1 Left: ' + $c1Place.x);
      // console.log('Left Panel Left Boundary: ' + $leftPanelBounds.x);
      $('#climber-1').animate({'left': c1Left - c1DstMvd + 'px'}, c1Delay);
      c1Left -= c1DstMvd
    }

    // Climber-2 Movement
    // Note: Climber-2 moves slowly and slides for some reason. Investigage.
    // Bind I to Upward Movement
    if (event.keyCode == 73 && $c2Place.y <= $('#right-panel')[0].getBoundingClientRect().y + 20) {
      console.log('You can\'t go that way!');
    } else if (event.keyCode == 73) {
      $('#climber-2').animate({'top': (c2Top - c2DstMvd) + 'px', c2Delay});
      c2Top -= c2DstMvd;
    }
    // Bind L to Rightward Movement
    if (event.keyCode == 76 && $c2Place.x >= $('#right-panel')[0].getBoundingClientRect().x + $('#right-panel')[0].getBoundingClientRect().width - 40) {
      console.log('You can\'t go that way!');
    } else if (event.keyCode == 76) {
      $('#climber-2').animate({'left': c2Left + c2DstMvd + 'px', c2Delay});
      c2Left += c2DstMvd;
    }
    // Bind K to Downward Movement
    if (event.keyCode == 75 && $c2Place.y >= $('#right-panel')[0].getBoundingClientRect().y + $('#right-panel')[0].getBoundingClientRect().height - 30) {
      console.log('You can\'t go that way!');
    } else if (event.keyCode == 75) {
      $('#climber-2').animate({'top': c2Top + c2DstMvd + 'px', c2Delay});
      c2Top += c2DstMvd;
    }
    // Bind J to Leftward Movement
    if (event.keyCode == 74 && $c2Place.x <= $('#right-panel')[0].getBoundingClientRect().x + 20) {
      console.log('You can\'t go that way!');
    } else if (event.keyCode == 74) {
      $('#climber-2').animate({'left': c2Left - c2DstMvd + 'px', c2Delay});
      c2Left -= c2DstMvd;
    }

    $c1Place = $('#climber-1')[0].getBoundingClientRect();
    $c2Place = $('#climber-2')[0].getBoundingClientRect();


    // console.log('Left panel left boundary: ' + $('#left-panel')[0].getBoundingClientRect().x);
    // console.log('Left panel right boundary: ' + ($('#left-panel')[0].getBoundingClientRect().x + $('#left-panel').css('width')));

    console.log("$c1Place: ");
    console.log($c1Place);
    console.log("$hazPlace: ");
    console.log($hazPlace);

    colDetect();

  // Keydown Closure
  });

  // $(document).animationstart(colDetect());

  // }
  const scoreTracker = setInterval(() => {
    currentScore++;
    $currentScoreBox.text("Score: " + currentScore);
    const $progBit = $('<div>').addClass('prog-bit');
    $progBar.append($progBit);
    if ($('.prog-bit')[0].getBoundingClientRect().y + $('.prog-bit')[0].getBoundingClientRect().height >= $('#prog-bar')[0].getBoundingClientRect().y + $('#prog-bar')[0].getBoundingClientRect().height) {
      alert('You win!');
    }
  }, 10);

// Onload Closure
});
