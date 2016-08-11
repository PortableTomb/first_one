var monthsDays = [ ["January","March","May","July","August","October","December"],["June","September","November"] ];

function daysInMonth(month){

    for (var i = 0; i < months.length; i++) {
        var monthsDays = monthsDays[i];
            for(var j = 0; j < months.length; j++) {
        display("months[" + i + "][" + j + "] = " + months[j]);
        
    }
        }
}

daysInMonth("January");
