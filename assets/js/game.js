// Variables

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this console.log(playerName, playerAttack, playerHealth);
var  enemyNames= ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

var fight = function(enemyName) {
  // repeat and execute as long as the enemy robot is alive
  while(enemyHealth > 0) {

    // fight function block

      // fight prompt alert
      var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

      // if player chooses to fight, then fight
      if (promptFight === "fight" || promptFight === "FIGHT") {
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;

      console.log(
        playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has " + enemyHealth + " health remaining.");

      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert( + " has died!");
      } 
      else {
        window.alert( + " still has " + enemyHealth + " health left.");
      }

      // remove player's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;

      console.log(
        enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );

      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
      } 
      else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }

      // if player chooses to skip
      } 
      else if (promptFight === " skip " || promptFight === " SKIP ") {
        // confirm user wants to skip
          var confirmSkip = window.confirm(" Are you sure you want to quit?");

          // if yes (true), leave fight
          if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney -2;
          }

          // if no (false), ask question again by running fight() again
          else {
            fight();
          }
      } 
      else {
          window.alert(" You need to pick a valid option. Try again!");
      }

      // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
      enemyHealth = enemyHealth - playerAttack;

      // Log a resulting message to the console so we know that it worked.
      console.log(
          playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has " + enemyHealth + " health remaining. "
      );

      // check enemy's health
      if (enemyHealth <= 0) {
          window.alert( + " has died? ");
      }
      else {
          window.alert( + " still has " + enemyHealth + " health left. ");
      }

      // Subtract the value of "enemyAttack" from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
      playerHealth = playerHealth - enemyAttack;

      // Log a resulting message to the console so we know that it worked.
      console.log(
          enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. "
      )

      // check player's health
      if (playerHealth <= 0) {
      window.alert(playerName + " has died! ");
      } 
      else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    };    
  }
}

for(var i =0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}