var player = {level: 1, xp: 0, damage: 5,autodamage: 0};


var coins = 0;
var upgradecost = 15;
var upgradeCostAuto = 100;
var enemy = {level: 1, health: 100};
var healthRespawn = enemy.health;
var xpReq = 10;
var percent;
var resetpng;
var randommonster = 1;
var photohurtid = randommonster;
var photoid = randommonster;
var dodamage;
var deathmoney = 5;
var deathxp = 5;

function attack() {
    enemy.health = enemy.health - player.damage;
    document.getElementById("healthbar").value = document.getElementById("healthbar").value - player.damage;
    // document.getElementById("attackbtn").src = "monsters/Monster%2001/hurt.png";
    switch (photohurtid) {
        case 1: document.getElementById("attackbtn").src = "monsters/Monster%2001/hurt.png"; break;
        case 2: document.getElementById("attackbtn").src = "monsters/Monster%2002/hurt.png"; break;
        case 3: document.getElementById("attackbtn").src = "monsters/Monster%2003/hurt.png"; break;
        case 4: document.getElementById("attackbtn").src = "monsters/Monster%2004/hurt.png"; break;
        case 5: document.getElementById("attackbtn").src = "monsters/Monster%2005/hurt.png"; break;
        case 6: document.getElementById("attackbtn").src = "monsters/Monster%2006/hurt.png"; break;

    }
     reset();
    if (enemy.health <= 0) {
        death();
    }


    document.getElementById("enemyHealth").innerHTML = "Health: " + enemy.health;
    document.getElementById("playerDamage").innerHTML = "Damage per click :" + player.damage;
    document.getElementById("autoDamage").innerHTML = "Auto damage :" + player.autodamage + " per half second";
    document.getElementById("coins").innerHTML = "coins :" + coins;

    function reset() {
        resetpng = setTimeout(resetPng, 300);
    }

    function resetPng() {
        switch (photoid) {
            case 1: document.getElementById("attackbtn").src = "monsters/Monster%2001/idle.png"; break;
            case 2: document.getElementById("attackbtn").src = "monsters/Monster%2002/idle.png"; break;
            case 3: document.getElementById("attackbtn").src = "monsters/Monster%2003/idle.png"; break;
            case 4: document.getElementById("attackbtn").src = "monsters/Monster%2004/idle.png"; break;
            case 5: document.getElementById("attackbtn").src = "monsters/Monster%2005/idle.png"; break;
            case 6: document.getElementById("attackbtn").src = "monsters/Monster%2006/idle.png"; break;
        }
    }

    checkhealth();
    check();
    checkauto()

}

function checkhealth() {
    percent = enemy.health * 100 / healthRespawn;
    if (percent >= 50 && percent <= 70) {
        document.getElementById("healthbar").className = "healthyellow";
    }
    else if (percent > 70) {
        document.getElementById("healthbar").className = "healthbar";
    }
    else if (percent >= 30 && percent < 50) {
        document.getElementById("healthbar").className = "healthorange";
    }
    else {
        document.getElementById("healthbar").className = "healthred";
    }
}

function check() {

    if (coins >= upgradecost) {
        document.getElementById("button").disabled = false;
        document.getElementById("button").style.backgroundColor = "green";
        document.getElementById("button").innerHTML = "upgrade click damage for " + upgradecost + "";

    }
    else {
        document.getElementById("button").disabled = true;
        document.getElementById("button").style.backgroundColor = "red";
    }
}
function checkauto() {

    if (coins >= upgradeCostAuto) {
        document.getElementById("autoD").disabled = false;
        document.getElementById("autoD").style.backgroundColor = "green";
        document.getElementById("autoD").innerHTML = "upgrade auto click for " + upgradeCostAuto + "";

    }
    else {
        document.getElementById("autoD").disabled = true;
        document.getElementById("autoD").style.backgroundColor = "red";
    }
}
function calcDeathMoney() {
    if(player.level >= 1 && player.level <= 5)
    {
        deathmoney = 5;
        deathxp = 5;
    }
    else if (player.level >=6 && player.level <= 10)
    {
        deathmoney = 10;
        deathxp = 7;
    }
    else if (player.level >=11 && player.level <= 15)
    {
        deathmoney = 15;
        deathxp = 9;
    }
    else  if (player.level >=16 && player.level <=20)
    {
        deathmoney = 20;
        deathxp = 11;
    }
    else {
        deathmoney = 25;
        deathxp = 13;
    }
}
function death() {
    player.xp = player.xp + deathxp;
    calcDeathMoney();
    coins = coins + deathmoney;
    document.getElementById("playerXp").innerHTML = "Player xp :" + player.xp;
    enemy.health = healthRespawn;
    document.getElementById("healthbar").max = healthRespawn;
    document.getElementById("healthbar").value = healthRespawn;
    randommonster = Math.floor(Math.random() * 6) + 1;
    photohurtid = randommonster;
    photoid = randommonster;
    switch (randommonster) {
        case 1: document.getElementById("attackbtn").src = "monsters/Monster%2001/idle.png"; break;
        case 2: document.getElementById("attackbtn").src = "monsters/Monster%2002/idle.png"; break;
        case 3: document.getElementById("attackbtn").src = "monsters/Monster%2003/idle.png"; break;
        case 4: document.getElementById("attackbtn").src = "monsters/Monster%2004/idle.png"; break;
        case 5: document.getElementById("attackbtn").src = "monsters/Monster%2005/idle.png"; break;
        case 6: document.getElementById("attackbtn").src = "monsters/Monster%2006/idle.png"; break;

    }

    console.log("Enemy diesd!");
    if (player.xp >= xpReq) {
        player.xp = 0;
        player.level++;
        document.getElementById("playerXp").innerHTML = "Player xp :" + player.xp;
        if (player.level < 100) {

            xpReq = xpReq + 2;
            healthRespawn = enemy.health + 25;
            document.getElementById("enemyHealth").innerHTML = "Health: " + healthRespawn;

        }
        else {
            // alert("You Won the game!");
            clearInterval(autohit);
            clearInterval(dodamage);


            console.log('Chorus lyrics for "Happy": ' + chorus.repeat(27));

            document.getElementById("attackbtn").style.display = "none";
            document.getElementById("button").disabled = true;
            document.getElementById("autoD").disabled = true;

        }

    }
    document.getElementById("playerLevel").innerHTML = "Playerlevel: " + player.level;

}

function upgrade() {

    player.damage = player.damage + 5;

    document.getElementById("playerDamage").innerHTML = "Damage per click :" + player.damage;
    coins = coins - upgradecost;
    upgradecost = upgradecost + 10;
    document.getElementById("button").innerHTML = "upgrade for " + upgradecost + "";
    document.getElementById("coins").innerHTML = "coins :" + coins;
    check();
    checkauto();
}

function upgradeAuto() {
    player.autodamage = player.autodamage + 1;
    dodamage = setInterval(autohit, 500);
    coins = coins - upgradeCostAuto;
    upgradeCostAuto = upgradeCostAuto + 125;
    document.getElementById("autoD").innerHTML = "upgrade for " + upgradeCostAuto + "";
    document.getElementById("coins").innerHTML = "coins :" + coins;
    checkauto();
    check();
}
function autohit()
{
    enemy.health = enemy.health - player.autodamage;
    document.getElementById("enemyHealth").innerHTML = "Health: " + enemy.health;
    document.getElementById("healthbar").value = document.getElementById("healthbar").value - player.autodamage;
    checkhealth();
    if (enemy.health <= 0) {
        death();
    }
    document.getElementById("coins").innerHTML = "coins :" + coins;
}



