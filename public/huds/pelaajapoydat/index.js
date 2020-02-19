var team_one = [];
var team_two = [];

var teams = [{"sjgaming": ["76561197986831501", "76561198026620771", "76561198095859748", "76561198166952201", "76561197963335479"],"kovaesports": ["76561197999553091", "76561198021709172", "76561198012528425", "76561198148047557", "76561198038463715"],"helsinkireds": ["76561198069862260", "76561197978619793", "76561198017997306", "76561198161756624", "76561198098536184"],"conquergaming": ["76561198222656736", "76561198149258503", "76561197997371252", "76561198258187741", "76561198019836697"]}];

//ISTUMAJÄRJESTYS OIKEIN

function updatePage(data) {
    
    
    var players = data.getPlayers();
    var teamonedata = data.getTeamOne();
    var teamtwodata = data.getTeamTwo();
    
    var teamonename = teamonedata.team_name;
    var teamoneid = teamonename.replace(" ","").toLowerCase();
    
    var teamtwoname = teamtwodata.team_name;
    var teamtwoid = teamtwoname.replace(" ","").toLowerCase();
    
    team_one = teams[0][teamoneid];
    team_two = teams[0][teamtwoid];

    
    
//    console.log(players);
    
    var i = 0;
    var steamidlist = "";
    var st = 0;
    
    while(i < players.length) {
        
        if(team_one[0] == players[i].steamid) {
            fillPlayer(0, players[i]);
            rotateHealth(players[i].state.health,1);
        }
        
        if(team_one[1] == players[i].steamid) {
            fillPlayer(1, players[i]);
            rotateHealth(players[i].state.health,2);
        }
        
        if(team_one[2] == players[i].steamid) {
            fillPlayer(2, players[i]);
            rotateHealth(players[i].state.health,3);
        }
        
        if(team_one[3] == players[i].steamid) {
            fillPlayer(3, players[i]);
            rotateHealth(players[i].state.health,4);
        }
        
        if(team_one[4] == players[i].steamid) {
            fillPlayer(4, players[i]);
            rotateHealth(players[i].state.health,5);
        }
        
        if(team_two[0] == players[i].steamid) {
            fillPlayer(5, players[i]);
            rotateHealth(players[i].state.health,6);
        }
        
        if(team_two[1] == players[i].steamid) {
            fillPlayer(6, players[i]);
            rotateHealth(players[i].state.health,7);
        }
        
        if(team_two[2] == players[i].steamid) {
            fillPlayer(7, players[i]);
            rotateHealth(players[i].state.health,8);
        }
        
        if(team_two[3] == players[i].steamid) {
            fillPlayer(8, players[i]);
            rotateHealth(players[i].state.health,9);
        }
        
        if(team_two[4] == players[i].steamid) {
            fillPlayer(9, players[i]);
            rotateHealth(players[i].state.health,10);
        }
        
//        if(st == 0) {
//            steamidlist = steamidlist + ', "' + players[i].steamid + '"';
//        }
//        
//        if(i == (players.length - 1)) {
//            st = 1;
//            console.log(steamidlist);
//        }
        i++;
    }
}

function fillPlayer(slot, player) {
    $('#player' + (slot + 1) + ' .name').text(player.name);
    $('#player' + (slot + 1) + ' .photo').css({
        backgroundImage: "url(/huds/pelaajapoydat/playerphotos/" + player.steamid + ".png)"
    });
    $('#player' + (slot + 1) + ' .stats .wrap .money').text("$" + player.state.money);
    $('#player' + (slot + 1) + ' .stats .wrap .hp').text(player.state.health);
    if(player.state.health <= 0) {
        $('#player' + (slot + 1)).addClass("dead");
    } else {
        $('#player' + (slot + 1)).removeClass("dead");
    }
}

function rotateHealth(hp, player) {
    var deg = 3.6 * hp;
    
    if(hp > 50) {
        $('#player' + player + ' .circle .circle-right-wrap').css({
            transform: "rotate(" + deg + "deg)",
            display: "block"
        });
        
        $('#player' + player + ' .circle .circle-left-wrap').css({
            transform: "rotate(0deg)"
        });
        
        $('#player' + player + ' .circle').css({
            width: "250px",
            overflow: "visible"
        });
    } else {
        $('#player' + player + ' .circle .circle-right-wrap').css({
            display: "none"
        });
        
        var newdeg = 180 - deg;
        
        $('#player' + player + ' .circle .circle-left-wrap').css({
            transform: "rotate(-" + newdeg + "deg)"
        });
        
        $('#player' + player + ' .circle').css({
            width: "125px",
            overflow: "hidden"
        });
    }
    
    if(hp <= 20) {
        $('#player' + player + ' .circle .circle-left-wrap .circle-left').css({
            borderColor: "red"
        });
    } else {
        $('#player' + player + ' .circle .circle-left-wrap .circle-left').css({
            borderColor: "#ffb100"
        });
    }
}