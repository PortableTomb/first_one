
var arrAverages = [2,4,6];

function averages(avg) {
for (var i = 0; i < arrAverages.length; i++) {
    var avg = arrAverages[i] + avg[i];
    avg++;
    var average =  avg / arrAverages.length;
    return average;
}
}
console.log(averages(arrAverages));
