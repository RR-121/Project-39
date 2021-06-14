function spawnEnemies() {
    if (frameCount % 130 === 0) {
        enemy = createSprite(0, Math.round(random(50, displayHeight - 180)));
        enemy.velocityX = (score / 7) + 1.5;
        enemy.lifetime = 1100;

        enemyGroup.add(enemy);

        var num = Math.round(random(1, 8));

        switch (num) {
            case 1:
                enemy.width = 100;
                enemy.height = 80;
                enemy.addImage("e1", eI1);
                enemy.scale = 0.15;
                break;
            case 2:
                enemy.width = 50;
                enemy.height = 100;
                enemy.addImage("e2", eI2);
                enemy.scale = 0.46;
                break;
            case 3:
                enemy.width = 75;
                enemy.height = 20;
                enemy.addImage("e3", eI3);
                enemy.scale = 0.2;
                break;
            case 4:
                enemy.width = 15;
                enemy.height = 50;
                enemy.addImage("e4", eI4);
                enemy.scale = 0.25;
                break;
            case 5:
                enemy.width = 60;
                enemy.height = 60;
                enemy.addImage("e5", eI5);
                enemy.scale = 0.2;
                break;
            case 6:
                enemy.width = 130;
                enemy.height = 60;
                enemy.addImage("e6", eI6);
                enemy.scale = 0.25;
                break;
            case 7:
                enemy.width = 90;
                enemy.height = 10;
                enemy.addImage("e7", eI7);
                enemy.scale = 0.27;
                break;
            case 8:
                enemy.width = 10;
                enemy.height = 70;
                enemy.addImage("e8", eI8);
                enemy.scale = 0.26;
                break;
            default: break;
        }
    }
    if (frameCount % 170 === 0) {
        enemy2 = createSprite(displayWidth - 40, Math.round(random(50, displayHeight - 180)));
        enemy2.velocityX = -(score / 7) - 1.5;
        enemy2.lifetime = 1100;

        enemy2Group.add(enemy2);

        var num = Math.round(random(1, 8));

        switch (num) {
            case 1:
                enemy2.width = 100;
                enemy2.height = 80;
                enemy2.addImage("e1", eI1);
                enemy2.scale = 0.15;
                break;
            case 2:
                enemy2.width = 50;
                enemy2.height = 100;
                enemy2.addImage("e2", eI2);
                enemy2.scale = 0.46;
                break;
            case 3:
                enemy2.width = 75;
                enemy2.height = 20;
                enemy2.addImage("e3", eI3);
                enemy2.scale = 0.2;
                break;
            case 4:
                enemy2.width = 15;
                enemy2.height = 50;
                enemy2.addImage("e4", eI4);
                enemy2.scale = 0.25;
                break;
            case 5:
                enemy2.width = 60;
                enemy2.height = 60;
                enemy2.addImage("e5", eI5);
                enemy2.scale = 0.2;
                break;
            case 6:
                enemy2.width = 130;
                enemy2.height = 60;
                enemy2.addImage("e6", eI6);
                enemy2.scale = 0.25;
                break;
            case 7:
                enemy2.width = 90;
                enemy2.height = 10;
                enemy2.addImage("e7", eI7);
                enemy2.scale = 0.27;
                break;
            case 8:
                enemy2.width = 10;
                enemy2.height = 70;
                enemy2.addImage("e8", eI8);
                enemy2.scale = 0.26;
                break;
            default: break;
        }
    }
    if (frameCount % 420 === 0) {
        enemy3 = createSprite(Math.round(random(50, displayWidth - 90)), 0);
        enemy3.velocityY = (score / 15) + 1.2;
        enemy3.lifetime = 1100;

        enemy3Group.add(enemy3);

        var num = Math.round(random(1, 8));

        switch (num) {
            case 1:
                enemy3.width = 100;
                enemy3.height = 80;
                enemy3.addImage("e1", eI1);
                enemy3.scale = 0.15;
                break;
            case 2:
                enemy3.width = 50;
                enemy3.height = 100;
                enemy3.addImage("e2", eI2);
                enemy3.scale = 0.46;
                break;
            case 3:
                enemy3.width = 75;
                enemy3.height = 20;
                enemy3.addImage("e3", eI3);
                enemy3.scale = 0.2;
                break;
            case 4:
                enemy3.width = 15;
                enemy3.height = 50;
                enemy3.addImage("e4", eI4);
                enemy3.scale = 0.25;
                break;
            case 5:
                enemy3.width = 60;
                enemy3.height = 60;
                enemy3.addImage("e5", eI5);
                enemy3.scale = 0.2;
                break;
            case 6:
                enemy3.width = 130;
                enemy3.height = 60;
                enemy3.addImage("e6", eI6);
                enemy3.scale = 0.25;
                break;
            case 7:
                enemy3.width = 90;
                enemy3.height = 10;
                enemy3.addImage("e7", eI7);
                enemy3.scale = 0.27;
                break;
            case 8:
                enemy3.width = 10;
                enemy3.height = 70;
                enemy3.addImage("e8", eI8);
                enemy3.scale = 0.26;
                break;
            default: break;
        }
    }
    if (frameCount % 500 === 0) {
        enemy4 = createSprite(Math.round(random(50, displayWidth - 90)), displayHeight - 130,);
        enemy4.velocityY = -(score / 15) - 1.2;
        enemy4.lifetime = 1100;

        enemy4Group.add(enemy4);

        var num = Math.round(random(1, 8));

        switch (num) {
            case 1:
                enemy4.width = 100;
                enemy4.height = 80;
                enemy4.addImage("e1", eI1);
                enemy4.scale = 0.15;
                break;
            case 2:
                enemy4.width = 50;
                enemy4.height = 100;
                enemy4.addImage("e2", eI2);
                enemy4.scale = 0.46;
                break;
            case 3:
                enemy4.width = 75;
                enemy4.height = 20;
                enemy4.addImage("e3", eI3);
                enemy4.scale = 0.2;
                break;
            case 4:
                enemy4.width = 15;
                enemy4.height = 50;
                enemy4.addImage("e4", eI4);
                enemy4.scale = 0.25;
                break;
            case 5:
                enemy4.width = 60;
                enemy4.height = 60;
                enemy4.addImage("e5", eI5);
                enemy4.scale = 0.2;
                break;
            case 6:
                enemy4.width = 130;
                enemy4.height = 60;
                enemy4.addImage("e6", eI6);
                enemy4.scale = 0.25;
                break;
            case 7:
                enemy4.width = 90;
                enemy4.height = 10;
                enemy4.addImage("e7", eI7);
                enemy4.scale = 0.27;
                break;
            case 8:
                enemy4.width = 10;
                enemy4.height = 70;
                enemy4.addImage("e8", eI8);
                enemy4.scale = 0.26;
                break;
            default: break;
        }
    }
}

function shoot() {
    if (gun1.x === defender.x - 70 && gun2.x === defender.x - 70 && gun1.y === defender.y - 10 && gun2.y === defender.y + 10) {
        bullet1 = createSprite(defender.x - 85, defender.y - 10, 10, 10);
        bullet2 = createSprite(defender.x - 85, defender.y + 10, 10, 10);
        bullet1.velocityX = -20;
        bullet2.velocityX = -20;
    }
    if (gun1.x === defender.x + 70 && gun2.x === defender.x + 70 && gun1.y === defender.y - 10 && gun2.y === defender.y + 10) {
        bullet1 = createSprite(defender.x + 85, defender.y - 10, 10, 10);
        bullet2 = createSprite(defender.x + 85, defender.y + 10, 10, 10);
        bullet1.velocityX = 20;
        bullet2.velocityX = 20;
    }
    if (gun1.x === defender.x - 10 && gun2.x === defender.x + 10 && gun1.y === defender.y - 70 && gun2.y === defender.y - 70) {
        bullet1 = createSprite(defender.x - 10, defender.y - 85, 10, 10);
        bullet2 = createSprite(defender.x + 10, defender.y - 85, 10, 10);
        bullet1.velocityY = -20;
        bullet2.velocityY = -20;
    }
    if (gun1.x === defender.x - 10 && gun2.x === defender.x + 10 && gun1.y === defender.y + 70 && gun2.y === defender.y + 70) {
        bullet1 = createSprite(defender.x - 10, defender.y + 85, 10, 10);
        bullet2 = createSprite(defender.x + 10, defender.y + 85, 10, 10);
        bullet1.velocityY = 20;
        bullet2.velocityY = 20;
    }

    bullet1.shapeColor = "red";
    bullet1.lifetime = 70;

    bullet2.shapeColor = "red";
    bullet2.lifetime = 70;

    bulletsGroup.add(bullet1);
    bulletsGroup.add(bullet2);
}