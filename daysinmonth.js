var monthsDays= [ ["January","March","May","July","August","October","December"],["June","September","November"] ];

function daysInMonth(month){

    for(var i = 0; i < monthsDays.length; i++) {
        var month = monthsDays[i];
            for(var j = 0; j < monthsDays.length; j++) {
        display("months[" + i + "][" + j + "] = " + months[j]);

    }
}
}
daysInMonth("January");
