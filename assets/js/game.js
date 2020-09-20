// Pseudocode Comments
// Game States
// "WIN" - Player robot has defeated all enemy robots
//  * Fight all enemy robot
//  * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

//function to generate a random numeric value
var randomNumber = function(min, max){
  var value = Math.floor(Math.random() * (max - min +1)) + min;
  return value;
};

// function to start a new game
var startGame = function() {
  // reset player stats
  playerInfo.reset();

  // for loop starts
  for(var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      // let user know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert("Welcome to Battlebots! Round " + (i + 1));

      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyObj = enemyInfo[i];

      // reset enemyHealth before starting new fight
      pickedEnemyObj.health = randomNumber(40, 60);

      // use debugger to pause script from running and check what's going on at that moment in the code
      // debugger;

      // pass the pickedEnemyname variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyObj);

      // if player is still alive and we're not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        shop();
        // ask if user wants to use the store before the next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

        // if yes, take them to the store() function
        if (storeConfirm) {
            shop();
        }
      }

    }
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
  }
  // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
  endGame();
};

// function to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");

    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }

    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

// shop function
var shop = function () {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
      "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    console.log("entered the shop");

    // use switch to carry out action
    switch (shopOptionPrompt) {
      case "REFILL": // new case
      case "refill":
        playerInfo.refillHealth();
        break;

      case "UPGRADE": // new case
      case "upgrade":
        playerInfo.upgradeAttack();
        break;

      case "LEAVE": // new case
      case "leave":
        window.alert;("Leaving the store.");

        // do nothing, so function will end
        break;

      default:
        window.alert("You did not pick a valid option. Try again.");

        // call shop() again to force player to pick a valid option
        shop();
        break;
    }
};

// fight function begins
var fight = function(enemy) {

    // repeat and execute as long as the enemy robot is alive using while loop
    while(playerInfo.health > 0 && enemy.health > 0) {
      // fight function code block starts
      //ask user if they'd like to fight or run
      var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
      console.log(promptFight);
    
      // if user picks "skip" 
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm user wants to skip
        var confirmSkip = window.confirm(" Are you sure you want to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
          // subtract money from playerMoney for skipping and stop the loop
          playerInfo.money = Math.max(0, playerInfo.money - 10);
          console.log("playerMoney", playerInfo.money);
          break;
          }
      
        }
    
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        // generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);

        // log message to console
        console.log(
            playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
        );
    
        // check enemy's health
        if (enemy.health <= 0) {
          window.alert(enemy.name + ' has died!');  

          // award player money for winning
          playerInfo.money = playerInfo.money + 20;

          // leave while() loop since enemy is dead
          break;

        } else {
            window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
        }

        // remove players's health by subtracting the amount set in the enemyAttack variable
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);

        // log message to console
        console.log(
            enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
        );

        // check user's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + ' has died!');
          // leave while() loop if player is dead
          break;

        } else {
          window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
        };
    }
};

// function to set name
var getPlayerName = function() {
  var name = "";

  // add loop
  while (name === '' || name === null) {
    name = prompt("What is your robot's name?");
  }

};

// User Objects
var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  }, // comma!
  refillHealth: function() {
    if (this.money >= 7) {
      this.health += 20;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }

  }, // comma!
  upgradeAttack: function() {
    if (this.money >= 7) {
      this.attack += 6;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  }
};


// enemy objects array
var enemyInfo = [
  {
    name: "Roberto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  },
];

// start the game when the page loads
startGame();


