var data = [];
var sortedBy = 0;
var filteredTeam = 0;
var filteredGP = 0;
var filteredPS = 0;
var newData = "";
var count = 0;

        data.push({
	    player:"leonard,kawhi",
            team: "spurs",
            PS: "SF",
            GP: "64"});
        data.push({
            player:"parker,tony",
            team: "spurs",
            PS: "PG",
            GP: "58"});
        data.push({
            player:"duncan,tim",
            team: "spurs",
            PS: "PF",
            GP: "77"});
        data.push({
            player:"green,danny",
            team: "spurs",
            PS: "SG",
            GP: "81"});
        data.push({
            player:"ginobili,manu",
            team: "spurs",
            PS: "SG",
            GP: "70"});
        data.push({
            player:"belinelli,marco",
            team: "spurs",
            PS: "SG",
            GP: "62"});
        data.push({
            player:"diaw,boris ",
            team: "spurs",
            PS: "PF",
            GP: "81"});
        data.push({
            player:"splitter,tiago",
            team: "spurs",
            PS: "PF",
            GP: "52"});
        data.push({
            player:"mills,patty",
            team: "spurs",
            PS: "PF",
            GP: "52"});
        data.push({
            player:"joseph,cory",
            team: "spurs",
            PS: "PG",
            GP: "79"});
        data.push({
            player:"baynes,aron",
            team: "spurs",
            PS: "PF",
            GP: "70"});
        data.push({
            player:"daye,austin ",
            team: "spurs",
            PS: "SF",
            GP: "26"});
        data.push({
            player:"bonner,matt ",
            team: "spurs",
            PS: "PF",
            GP: "72"});
        data.push({
            player:"ayres,jeff",
            team: "spurs",
            PS: "PF",
            GP: "51"});
        data.push({
            player:"anderson,kyle",
            team: "spurs",
            PS: "SG",
            GP: "33"});
        data.push({
            player:"bledsoe,eric",
            team: "suns",
            PS: "PG",
            GP: "81"});
        data.push({
            player:"dragic,goran",
            team: "suns",
            PS: "SG",
            GP: "52"});
        data.push({
            player:"morris,markieff",
            team: "suns",
            PS: "PF",
            GP: "82"});
        data.push({
            player:"thomas,isaiah",
            team: "suns",
            PS: "PG",
            GP: "46"});
        data.push({
            player:"knight,brandon",
            team: "suns",
            PS: "PG",
            GP: "11"});
        data.push({
            player:"green,gerald",
            team: "suns",
            PS: "SG",
            GP: "74"});
        data.push({
            player:"morris,marcus",
            team: "suns",
            PS: "PF",
            GP: "81"});
        data.push({
            player:"tucker,p.j.",
            team: "suns",
            PS: "SF",
            GP: "78"});
        data.push({
            player:"wright,brandan",
            team: "suns",
            PS: "PF",
            GP: "40"});
        data.push({
            player:"len,alex",
            team: "suns",
            PS: "C",
            GP: "69"});
        data.push({
            player:"warren,t.j.",
            team: "suns",
            PS: "SF",
            GP: "40"});
        data.push({
            player:"goodwin,archie",
            team: "suns",
            PS: "SG",
            GP: "41"});
        data.push({
            player:"plumlee,miles",
            team: "suns",
            PS: "C",
            GP: "54"});
        data.push({
            player:"thornton,marcus",
            team: "suns",
            PS: "SG",
            GP: 9})
	data.push({
            player:"tolliver,anthony",
            team: "suns",
            PS: "PF",
            GP: "24"});




function printTable() {
    var table = document.getElementById("stats");
    var filter = document.getElementById("teamFilter");
    filteredTeam = filter.options[filter.selectedIndex].value;
    
    filter = document.getElementById("GPFilter");
    filteredGP = filter.options[filter.selectedIndex].value;

    filter = document.getElementById("PSFilter");
    filteredPS = filter.options[filter.selectedIndex].value;

  for (var i = 0; i < data.length; i++) {
    if(filteredTeam == 0 && filteredGP == 0 && filteredPS == 0) { 	
       addData(i); 
    } else if (filteredTeam == 0 && filteredGP ==0) {
        if (data[i].PS == filteredPS)
          addData(i);
    } else if (filteredTeam == 0 && filteredPS == 0) {
        if (filteredGP  == 1) {
            if(data[i].GP < 75) addData(i);
	} else if(data[i].GP > 75) addData(i);
    } else if (filteredPS == 0 && filteredGP == 0) {
	if (data[i].team == filteredTeam)
	  addData(i);
    } else if (filteredPS == 0) {
	if (filteredGP  == 1) {
            if(data[i].GP < 75 && data[i].team == filteredTeam) addData(i);
	} else {if (data[i].GP > 75 && data[i].team == filteredTeam) addData(i); }    
    } else if (filteredTeam == 0) {
	if (filteredGP  == 1) {
            if(data[i].GP < 75 && data[i].PS == filteredPS) addData(i);
        } else {if (data[i].GP > 75 && data[i].PS == filteredPS) addData(i); }
    } else if (filteredGP == 0) {
	if (data[i].team == filteredTeam && data[i].PS == filteredPS)
          addData(i);
    } else{
	 if (filteredGP  == 1) {
            if(data[i].GP < 75 && data[i].PS == filteredPS && data[i].team == filteredTeam) addData(i);
        } else {if (data[i].GP > 75 && data[i].PS == filteredPS && data[i].team == filteredTeam) addData(i); }

    }
  }
 table.innerHTML = newData;
 newData = "";
 count=0;
}



function addData(i) {
count++;
         newData += '<tr><td>' + count + '</td>';
          newData += '<td>' + data[i].player + '</td>';
          newData += '<td>' + data[i].team + '</td>';
          newData += '<td>' + data[i].PS + '</td>';
          newData += '<td>' + data[i].GP + '</td></tr>';
}



function sortByName() {
    if (sortedBy == 1) {
        data.reverse();
    } else {
	        for(var i = 0; i < data.length-1; i++) {
            for(var j = 0; j < data.length - i - 1; j++) {
                if(data[j].player > data[j + 1].player) {
                    var temp = data[j];
                    data[j] = data[j + 1];
                    data[j + 1] = temp;
                }
            }
        }
    }
    sortedBy = 1;
    printTable();

}


function sortByTeam() {
    if (sortedBy == 2) {
        data.reverse();
    } else {
        for(var i = 0; i < data.length-1; i++) {
            for(var j = 0; j < data.length - i - 1; j++) {
                if(data[j].team > data[j + 1].team) {
                    var temp = data[j];
                    data[j] = data[j + 1];
                    data[j + 1] = temp;
                }
            }
        }
    }
    sortedBy = 2;
    printTable();
}

function sortByPS() {
    if (sortedBy == 3) {
        data.reverse();
    } else {
        for(var i = 0; i < data.length - 1; i++) {
            for(var j = 0; j < data.length - i - 1; j++) {
                if(data[j].PS > data[j + 1].PS) {
                    var temp = data[j];
                    data[j] = data[j + 1];
                    data[j + 1] = temp;
                }
            }
        }
    }
    sortedBy = 3;
    printTable();
}

function sortByGP() {
    if (sortedBy == 4) {
        data.reverse();
    } else {
        for(var i = 0; i < data.length - 1; i++) {
            for(var j = 0; j < data.length - i - 1; j++) {
                if(data[j].GP > data[j + 1].GP) {
                    var temp = data[j];
                    data[j] = data[j + 1];
                    data[j + 1] = temp;
                }
            }
        }
    }
    sortedBy = 4;
    printTable();
}
