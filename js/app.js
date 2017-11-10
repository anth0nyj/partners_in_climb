$(() => {

  const $titleLine = $('<h1>').text('Partners in Climb');
  const $gameContainer = $('<div>').attr('id', 'game-container');
  $('body').append($titleLine, $gameContainer)
  const $leftPanel = $('<div>').attr('id', 'left-panel');
  const $rightPanel = $('<div>').attr('id', 'right-panel');
  $gameContainer.append($leftPanel, $rightPanel);
  const $climber1 = $('<div>').attr('id', 'climber-1');
  const $climber2 = $('<div>').attr('id', 'climber-2');
  $leftPanel.append($climber1);
  $rightPanel.append($climber2);
  // Positions climbers within panels
  $climber1.css({'left': '140px', 'top': '390px'});
  $climber2.css({'left': '440px', 'top': '390px'});

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
    if (event.keyCode == 68) {
      $('#climber-1').animate({'left': (c1Left + c1DstMvd) + 'px'}, c1Delay);
      c1Left += c1DstMvd;
    }
    // Bind S to Downward Movement
    if (event.keyCode == 83) {
      $('#climber-1').animate({'top': c1Top + c1DstMvd + 'px'}, c1Delay);
      c1Top += c1DstMvd;
    }
    // Bind A to Leftward Movement
    if (event.keyCode == 65) {
      $('#climber-1').animate({'left': c1Left - c1DstMvd + 'px'}, c1Delay);
      c1Left -= c1DstMvd
    }

    // Climber-2 Movement

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

    // Logs the position of each climber on keydown.
    console.log('Climber-1 Position: ', $('#climber-1').offset());
    console.log('Climber-2 Position: ', $('#climber-2').offset());


    // Send alert when positions are the same
    if ($('#climber-1').offset() == $('.hazard').offset()) {
      alert('Collision!');
    }

  });

  // Creates hazard, inserts hazard to left panel
  const $hazard = $('<div>').addClass('hazard');
  $hazard.css({'height': '20px', 'width': '20px', 'background-color': 'black'});
  $('#left-panel').append($hazard);


});
