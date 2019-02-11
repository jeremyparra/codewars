
function points(games) {
    var pts = 0;
    for (let i = 0; i < games.length; i++) {
        if (games[i][0] === games[i][2]){
            pts = pts + 1;
        } else if (games[i][0] > games[i][2]){
            pts = pts+3;
        }
    }
    console.log("The team earned "+pts+"pts");
    return pts;
}

points(['1:0', '2:1', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3']);
points(['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4']);