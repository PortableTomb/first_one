
var arrAverages = [2,4,6];

function averages(avg) {
for (var i = 0; i < arrAverages.length; i++) {
    var avg = arrAverages[i] + arrAverages[i]+ arrAverages[i];
    var average = avg / arrAverages.length ;
    return average;
}
}
averages(arrAverages);
