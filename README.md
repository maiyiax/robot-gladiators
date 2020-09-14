# robot-gladiators

## Goal
* Use JavaScript to build a browser-based video game called Robot Gladiators to enter in the Con Solo Game Jam, a competitive hackathon.

## Requirements:

* The game must be created by a single developer in 24 hours.
* The game must run in a web browser.
* The game must use the provided index.html file.
* Only the <title> element of index.html may be changed.
* Participants cannot use CSS.
* All game code must be contained in the game.js JavaScript file.(Extra points for code quality)

## Gameplay
During the game, the player will coach their robot through a series of fights, gaining cash, attack power, and repairs along the way. The robot who survives with the most cash will be remembered in the browser's storage system!

## Plan
1. The game will prompt the user to name their robot.

2. The player's robot will be initialized with the following properties:
    - 100 health points
    - 10 attack points
    - 10 money points

3. The player's opponent, Roborto, will be initialized with the following properties:
   - 50 health points
   - 12 attack points
   - The game will display "Welcome to Robot Gladiators!"

4. The game will prompt the user to either fight the round or skip it.

- If the player chooses to skip:

  - A penalty of 10 money points will be deducted from the player's robot.

  - The game will end.

- If the player chooses to fight:

  - The player's robot will attack Roborto, and the player robot's attack points will be deducted from Roborto's health points.

  - The game will display Roborto's remaining health points.

  - Roborto will attack the player's robot, and Roberto's attack points will be deducted from the player's robot's health points.

  - The game will display the player robot's remaining health points.

  - The game will end.

