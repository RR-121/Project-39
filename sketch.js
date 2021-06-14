var galaxy, galaxyImage, enemyGroup, bulletsGroup, commandGroup, enemy2Group, enemy3Group, enemy4Group;

var score = 0;

var gameState = "start";

var homeCraft1, homeCraft2, homeCraft3, homeCrImg;

var lives = 3;

var enemy, enemy2, enemy3, enemy4, eI1, eI2, eI2, eI3, eI4, eI5, eI6, eI7, eI8;

var defender, defenderImg, gun1, gun2, bullet1, bullet2, reset;

function preload() {
  galaxyImage = loadImage("Images/Galaxy.jpg");
  homeCrImg = loadImage("Images/Home craft image.png");
  eI1 = loadImage("Images/Enemy1.png");
  eI2 = loadImage("Images/Enemy2.png");
  eI3 = loadImage("Images/Enemy3.png");
  eI4 = loadImage("Images/Enemy4.png");
  eI5 = loadImage("Images/Enemy5.png");
  eI6 = loadImage("Images/Enemy6.png");
  eI7 = loadImage("Images/Enemy7.png");
  eI8 = loadImage("Images/Enemy8.png");
}

function setup() {
  createCanvas(displayWidth - 40, displayHeight - 130);

  galaxy = createSprite(displayWidth / 2, displayHeight / 2, displayWidth - 40, displayHeight - 130);
  galaxy.addImage("Galaxy", galaxyImage);
  galaxy.scale = 1.7;
  galaxy.velocityX = 0;

  homeCraft1 = createSprite(displayWidth / 2 - 200, displayHeight / 2, 150, 100);
  homeCraft1.addImage("hcr1", homeCrImg);
  homeCraft1.scale = 0.36;

  homeCraft2 = createSprite(displayWidth / 2 - 80, displayHeight / 2 - 150, 150, 100);
  homeCraft2.addImage("hcr2", homeCrImg);
  homeCraft2.scale = 0.36;

  homeCraft3 = createSprite(displayWidth / 2 + 50, displayHeight / 2, 150, 100);
  homeCraft3.addImage("hcr3", homeCrImg);
  homeCraft3.scale = 0.36;

  defender = createSprite(displayWidth / 2 - 60, displayHeight / 2, 130, 60);
  defender.shapeColor = "powderBlue";


  gun1 = createSprite(defender.x - 70, defender.y - 10, 30, 10);
  gun1.shapeColor = "cadetBlue";
  gun2 = createSprite(defender.x - 70, defender.y + 10, 30, 10);
  gun2.shapeColor = "cadetBlue";

  enemyGroup = new Group();
  enemy2Group = new Group();
  enemy3Group = new Group();
  enemy4Group = new Group();
  bulletsGroup = new Group();
  commandGroup = new Group();
}

function draw() {
  background(17, 17, 27);

  reset = createButton('Reset');
  reset.position(displayWidth - 100, 20);
  reset.mousePressed(() => {
    enemyGroup.destroyEach();
    enemy2Group.destroyEach();
    enemy3Group.destroyEach();
    enemy4Group.destroyEach();
    defender.destroy();
    bulletsGroup.destroyEach();
    frameCount = 0;
    gameState = "start";
    lives = 3;
    score = 0;
    setup();
  })
  console.log("Frame count: " + frameCount);

  camera.position.x = defender.x;
  camera.position.y = defender.y;

  if (gameState === "start") {
    background("SteelBlue");
    textSize(20);
    fill("white");
    text("Welcome to Galactic Defender! Your objective in this game is to defend your command crafts as long as possible and score as much as you can. To control your defender, which has guns, use the up, down, left and right arrow keys. To change the direction (where it is aiming) of the defender, use w (up), s (down), d (right), and a (left) keys. Use the space key to shoot the enemies. Shoot them before they touch your command crafts. As your score increases, the speed of your enemies will, too. Watch out for the ones that come from above an below! They can appear dangerously close to your command crafts. Can you handle the pressure when you are the only one others can count on?!", displayWidth / 4 + 40, displayHeight / 4, 600);
    text("Press 'space' to continue!", displayWidth / 3 + 50, displayHeight / 2 + 100);

    if (keyWentDown("space")) {
      gameState = "play";
    }
  }


  if (gameState === "play") {

    if (keyWentDown("a")) {
      defender.height = 60;
      defender.width = 130;
      gun1.height = 10;
      gun1.width = 30;
      gun2.height = 10;
      gun2.width = 30;
      gun1.x = defender.x - 70;
      gun2.x = defender.x - 70;
      gun1.y = defender.y - 10;
      gun2.y = defender.y + 10;
    }
    if (keyWentDown("d")) {
      defender.height = 60;
      defender.width = 130;
      gun1.height = 10;
      gun1.width = 30;
      gun2.height = 10;
      gun2.width = 30;
      gun1.x = defender.x + 70;
      gun2.x = defender.x + 70;
      gun1.y = defender.y - 10;
      gun2.y = defender.y + 10;
    }
    if (keyWentDown("w")) {
      defender.height = 130;
      defender.width = 60;
      gun1.width = 10;
      gun1.height = 30;
      gun2.width = 10;
      gun2.height = 30;
      gun1.y = defender.y - 70;
      gun2.y = defender.y - 70;
      gun1.x = defender.x - 10;
      gun2.x = defender.x + 10;
    }
    if (keyWentDown("s")) {
      defender.height = 130;
      defender.width = 60;
      gun1.width = 10;
      gun1.height = 30;
      gun2.width = 10;
      gun2.height = 30;
      gun1.y = defender.y + 70;
      gun2.y = defender.y + 70;
      gun1.x = defender.x - 10;
      gun2.x = defender.x + 10;
    }

    edges = createEdgeSprites();
    edges.setVisibleEach(false);

    if (keyDown("up")) {
      defender.y -= 10;
      gun1.y -= 10;
      gun2.y -= 10;
    }
    if (keyDown("down")) {
      defender.y += 10;
      gun1.y += 10;
      gun2.y += 10;
    }
    if (keyDown("right")) {
      defender.x += 10;
      gun1.x += 10;
      gun2.x += 10;
    }
    if (keyDown("left")) {
      defender.x -= 10;
      gun1.x -= 10;
      gun2.x -= 10;
    }

    if (keyWentDown("space")) {
      shoot();
    }


    if (defender.isTouching(edges)) {
      if (gun1.x < defender.x && defender.width === 130) {
        defender.bounceOff(edges);
        gun1.y = defender.y - 10;
        gun2.y = defender.y + 10;
        gun1.x = defender.x - 70;
        gun2.x = defender.x - 70;
      }
      if (gun1.x > defender.x && defender.width === 130) {
        defender.bounceOff(edges);
        gun1.y = defender.y - 10;
        gun2.y = defender.y + 10;
        gun1.x = defender.x + 70;
        gun2.x = defender.x + 70;
      }
      if (gun1.y < defender.y && defender.width === 60) {
        defender.bounceOff(edges);
        gun1.y = defender.y - 70;
        gun2.y = defender.y - 70;
        gun1.x = defender.x - 10;
        gun2.x = defender.x + 10;
      }
      if (gun1.y > defender.y && defender.width === 60) {
        defender.bounceOff(edges);
        gun1.y = defender.y + 70;
        gun2.y = defender.y + 70;
        gun1.x = defender.x - 10;
        gun2.x = defender.x + 10;
      }
    }

    if (enemyGroup.isTouching(bulletsGroup)) {
      score += 1;
      enemyGroup.destroyEach();
      bulletsGroup.destroyEach();
    }
    if (enemy2Group.isTouching(bulletsGroup)) {
      score += 1;
      enemy2Group.destroyEach();
      bulletsGroup.destroyEach();
    }
    if (enemy3Group.isTouching(bulletsGroup)) {
      score += 1;
      enemy3Group.destroyEach();
      bulletsGroup.destroyEach();
    }
    if (enemy4Group.isTouching(bulletsGroup)) {
      score += 1;
      enemy4Group.destroyEach();
      bulletsGroup.destroyEach();
    }

    if (enemyGroup.isTouching(homeCraft1) && lives > 0) {
      homeCraft1.destroy();
      enemyGroup.destroyEach();
      lives -= 1;
    }
    if (enemyGroup.isTouching(homeCraft2) && lives > 0) {
      homeCraft2.destroy();
      enemyGroup.destroyEach();
      lives -= 1;
    }
    if (enemyGroup.isTouching(homeCraft3) && lives > 0) {
      homeCraft3.destroy();
      enemyGroup.destroyEach();
      lives -= 1;
    }
    if (enemy2Group.isTouching(homeCraft1) && lives > 0) {
      homeCraft1.destroy();
      enemy2Group.destroyEach();
      lives -= 1;
    }
    if (enemy2Group.isTouching(homeCraft2) && lives > 0) {
      homeCraft2.destroy();
      enemy2Group.destroyEach();
      lives -= 1;
    }
    if (enemy2Group.isTouching(homeCraft3) && lives > 0) {
      homeCraft3.destroy();
      enemy2Group.destroyEach();
      lives -= 1;
    }
    if (enemy3Group.isTouching(homeCraft1) && lives > 0) {
      homeCraft1.destroy();
      enemy3Group.destroyEach();
      lives -= 1;
    }
    if (enemy3Group.isTouching(homeCraft2) && lives > 0) {
      homeCraft2.destroy();
      enemy3Group.destroyEach();
      lives -= 1;
    }
    if (enemy3Group.isTouching(homeCraft3) && lives > 0) {
      homeCraft3.destroy();
      enemy3Group.destroyEach();
      lives -= 1;
    }
    if (enemy4Group.isTouching(homeCraft1) && lives > 0) {
      homeCraft1.destroy();
      enemy4Group.destroyEach();
      lives -= 1;
    }
    if (enemy4Group.isTouching(homeCraft2) && lives > 0) {
      homeCraft2.destroy();
      enemy4Group.destroyEach();
      lives -= 1;
    }
    if (enemy4Group.isTouching(homeCraft3) && lives > 0) {
      homeCraft3.destroy();
      enemy4Group.destroyEach();
      lives -= 1;
    }

    if (lives === 0)
      gameState = "end"

    spawnEnemies();
    drawSprites();

    fill("white");
    textSize(20);
    text("Score: " + score, displayWidth / 2 - 115, -10);
  }

  if (gameState === "end") {
    background("black");

    defender.x = displayWidth / 2 - 60;
    defender.y = displayHeight / 2;

    textSize(30);
    fill("red");
    text("Game Over", displayWidth / 2 - 140, displayHeight / 2 - 130);

    textSize(20);
    fill("yellow");
    text("Your Score: " + score, displayWidth / 2 - 120, displayHeight / 2 - 60);
  }
}