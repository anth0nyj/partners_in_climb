$(() => {

  const $climber1 = $('<div>').attr('id', 'climber-1');
  const $leftPanel = $('#left-panel');
  const $climber2 = $('<div>').attr('id', 'climber-2');
  const $rightPanel = $('#right-panel');
  $leftPanel.append($climber1);
  $rightPanel.append($climber2);

  let Xpos = 0; //Sets starting position left/right
  let Ypos = 0; //Sets starting position up/down
  let spd = 0; //Milliseconds
  let dstnc = 10; //Pixels

  // Climber Movement
  // Modify W/I controllers to account for gravity
  // S/K may be unnecessary
  $(document).keydown(function(e){
    // Climber 1 Movement
      if (e.keyCode == 87){ //W Up
          $('#climber-1').animate({
              top: -dstnc+Ypos+'px'
          }, spd );
          Ypos = Ypos-dstnc;
      }
      if (e.keyCode == 68){ //D Right
          $('#climber-1').animate({
              left: dstnc+Xpos+'px'
          }, spd );
          Xpos = Xpos+dstnc;
      }
      if (e.keyCode == 83){ //S Down
          $('#climber-1').animate({
              top: dstnc+Ypos+'px'
          }, spd );
          Ypos = Ypos+dstnc;
      }
      if (e.keyCode == 65){ //A Left
          $('#climber-1').animate({
              left: -dstnc+Xpos+'px'
          }, spd );
          Xpos = Xpos-dstnc;
      }
      // Climber 2 Movement
      if (e.keyCode == 73){ //I Up
          $('#climber-2').animate({
              top: -dstnc+Ypos+'px'
          }, spd );
          Ypos = Ypos-dstnc;
      }
      if (e.keyCode == 76){ //L Right
          $('#climber-2').animate({
              left: dstnc+Xpos+'px'
          }, spd );
          Xpos = Xpos+dstnc;
      }
      if (e.keyCode == 75){ //K Down
          $('#climber-2').animate({
              top: dstnc+Ypos+'px'
          }, spd );
          Ypos = Ypos+dstnc;
      }
      if (e.keyCode == 74){ //J Left
          $('#climber-2').animate({
              left: -dstnc+Xpos+'px'
          }, spd );
          Xpos = Xpos-dstnc;
      }
    })
});
