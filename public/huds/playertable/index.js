var team_one = [];
var team_two = [];

var teams = [{"sjgaming": ["76561198095859748", "76561198166952201", "76561198026620771", "76561197986831501", "76561197963335479"],"havugaming": ["76561198148047557", "76561198038632729", "76561198002132867", "76561197972265203", "76561197976197744"]}];

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
    $('#player' + (slot + 1) + ' #team_logo').html(
        ('<img src="/teams/' + player.teamData.logo + '" />')
);
    $('#player' + (slot + 1) + ' .stats .wrap .money').text("$" + player.state.money);
    $('#player' + (slot + 1) + ' .stats .wrap .hp').text("+" + player.state.health);
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
            display: "block"
        });
        
        $('#player' + player + ' .circle').css({
            width: "250px",
            overflow: "visible"
        });
    } else {
        $('#player' + player + ' .circle .circle-right-wrap').css({
            display: "none"
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
            borderColor: "#3e8ddd"
        });
    }
}