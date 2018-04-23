


var groups = [];

function isInAnyGroup(name) {
    var grupIndex = -1;
    groups.forEach((group, index) => {
        if (grupIndex == -1) {
            grupIndex = group.indexOf(name) > -1 ? index : grupIndex;
        }
    });
    return grupIndex;
}

function getDirectFriendsGroup(row) {
    return row.map((x, i) => x ? i : -1).filter((x) => x > -1);
}

function addNameToGroup(name, groupIndex) {
    if (!name || groupIndex === undefined || groupIndex < 0) {
        return;
    }
    if (groups[groupIndex].indexOf(name) == -1) {
        groups[groupIndex].push(name)
    }
}

function addGroupToGroup(newGroup, groupIndex) {
    if (newGroup.length == 0 || groupIndex === undefined || groupIndex < 0) {
        return;
    }
    newGroup.forEach(name => {
        addNameToGroup(name, groupIndex);
    });
}

function addNewGroup(group) {
    groups.push(group);
}

function solution(mat) {
    mat.forEach((row, name) => {
        if (isInAnyGroup(name) > -1) {
            return;
        }
        var newGroup = getDirectFriendsGroup(row);
        //is Any Name Of NewGroup Is Part Of Any Old Group
        var isInDirectGroup = -1;
        newGroup.forEach((name) => {
            if (isInDirectGroup == -1) {
                isInDirectGroup = isInAnyGroup(name);
            }
        });

        if (isInDirectGroup > -1) {
            addGroupToGroup(newGroup, isInDirectGroup);
        } else {
            addNewGroup(newGroup);
        }
    });
}

function DisplayFormat() {
    var grp = [];
    console.log("Total No Of Circle: " +groups.length );
    groups.forEach((group,i) => {
        grp.push(group.join(","));
        console.log("group:"+i +" :" +group); 
    });
    console.log("Inline display : " + grp.join("|"));
}

var m1 = [[1, 1, 0, 0],[1, 1, 1, 0],[0, 1, 1, 1],[0, 0, 1, 1]];
var m  = [[1, 1, 0, 0],[1, 1, 0, 0],[0, 0, 1, 1],[0, 0, 1, 1]];
solution(m);
DisplayFormat();




