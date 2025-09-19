//object for scores by using localStorage
    let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
      };

      
      
      updateScoreElement();
     

    /*to avoid null after resetting score
    if (!score) {
      score = {
        wins: 0,
        losses: 0,
        ties: 0
      }
    }
    */ 
    function playGame(playerMove) {
      const computerMove = pickComputerMove();

      let result = '';

      //compares computer moves with our move and stores in result      
      if (playerMove === 'scissors') {
          if (computerMove === 'rock'){
          result = 'You Lose';
        } else if (computerMove === 'paper') {
          result = 'You Win';
        } else if (computerMove === 'scissors'){
          result = 'Tie';
        }

      } else if (playerMove === 'paper') {
        if (computerMove === 'rock'){
          result = 'You Win';
        } else if (computerMove === 'paper') {
          result = 'Tie';
        } else if (computerMove === 'scissors'){
          result = 'You Lose';
        }
        
      } else if (playerMove === 'rock') {
        if (computerMove === 'rock'){
          result = 'Tie';
        } else if (computerMove === 'paper') {
          result = 'You Lose';
        } else if (computerMove === 'scissors'){
          result = 'You Win';
        }
      }

      //stores the scores
      if (result === 'You Win') {
        score.wins += 1;
      } else if (result === 'You Lose') {
        score.losses += 1;
      } else if(result === 'Tie') {
        score.ties += 1;
      }
       
      localStorage.setItem('score', JSON.stringify(score));

      updateScoreElement();

      document.querySelector('.js-result')
        .innerHTML = result;

      document.querySelector('.js-moves')//displays the moves picked
        .innerHTML = `You
    <img class="move-icon" src="images/${playerMove}-emoji.png">
    <img class="move-icon" src="images/${computerMove}-emoji.png">
    Computer`;

    }

    function updateScoreElement() {
      document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }

    

    //for creating computermoves by using random func by dividing the it to 3 parts -> 0 to 1/3 , 1/3 to 2/3 , 2/3 to 1;
    function pickComputerMove() {
      const randomNumber = Math.random();

      let computerMove = '';
      if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
      } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
      } else if (randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'scissors';
      }

      return computerMove;
  }