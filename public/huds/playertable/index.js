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

    $('#team1').find(".team_logo").css({
        backgroundImage: "url(/teams/"+teamonedata.logo + ")"
    });

    $('#team2').find(".team_logo").css({
        backgroundImage: "url(/teams/"+teamtwodata.logo + ")"
    });
    
    var i = 0;

    while(i < players.length) {
        
        if(team_one[0] == players[i].steamid) {
            fillPlayer(0, players[i]);
        }
        
        if(team_one[1] == players[i].steamid) {
            fillPlayer(1, players[i]);
        }
        
        if(team_one[2] == players[i].steamid) {
            fillPlayer(2, players[i]);
        }
        
        if(team_one[3] == players[i].steamid) {
            fillPlayer(3, players[i]);
        }
        
        if(team_one[4] == players[i].steamid) {
            fillPlayer(4, players[i]);
        }
        
        if(team_two[0] == players[i].steamid) {
            fillPlayer(5, players[i]);
        }
        
        if(team_two[1] == players[i].steamid) {
            fillPlayer(6, players[i]);
        }
        
        if(team_two[2] == players[i].steamid) {
            fillPlayer(7, players[i]);
        }
        
        if(team_two[3] == players[i].steamid) {
            fillPlayer(8, players[i]);
        }
        
        if(team_two[4] == players[i].steamid) {
            fillPlayer(9, players[i]);
        }
        i++;
    }
}

function fillPlayer(slot, player) {
    let statistics = player.getStats();
    let team = player.team.toLowerCase();
    let health_color = statistics.health <= 20 ? "#ff0000" : team == "ct" ? "#00a0ff":"#ffa000";
    let gradient = "linear-gradient(to left, rgba(0,0,0,0) " + (100-statistics.health) + "%, " + health_color + " " + (100-statistics.health) + "%)";
    
    $('#player' + (slot + 1) + ' .hp_bar').css("background", gradient);

    $('#player' + (slot + 1) + ' .hp_container').find(".hp_bar_red").css({
        width: 2.9 * statistics.health
    });
    
    $('#player' + (slot + 1) + ' .name').text(player.name);

    var weapons = player.getWeapons();
    var weapleng = Object.keys(weapons).length;
    var primarywep;
    var secondwep;

    for(let key in weapons){
        let weapon = weapons[key];
        let name = weapon.name.replace("weapon_", "");
        let type = weapon.type;

        if(type == "Rifle" || type == "SniperRifle" || type == "Submachine Gun") {
            primarywep = name;
        }

        if(type == "Pistol") {
            secondwep = name;
        }

        if(key == ("weapon_" + (weapleng - 1))) {

            if(primarywep != undefined) {
                $('#player' + (slot + 1) + ' .weapons').html($("<img />").attr("src", "/files/img/weapons/" + primarywep + ".png"));
            } else if(secondwep != undefined) {
                $('#player' + (slot + 1) + ' .weapons').html($("<img />").attr("src", "/files/img/weapons/" + secondwep + ".png"));
            } else {
                $('#player' + (slot + 1) + ' .weapons').html("");
            }
        }
    }
    
    $('#player' + (slot + 1) + ' .numberstats #kills').text("K: " + statistics.kills);
    $('#player' + (slot + 1) + ' .numberstats #assists').text("A: " + statistics.assists);
    $('#player' + (slot + 1) + ' .numberstats #deaths').text("D: " + statistics.deaths);

    $('#player' + (slot + 1) + ' .stats .wrap .money').text("$" + player.state.money);
    $('#player' + (slot + 1) + ' .stats .wrap .hp').text("+" + player.state.health);
    if(player.state.health <= 0) {
        $('#player' + (slot + 1)).addClass("dead");
        $('#player' + (slot + 1) + ' .weapons').html("");
    } else {
        $('#player' + (slot + 1)).removeClass("dead");
    }
}
