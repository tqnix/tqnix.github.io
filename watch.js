var indexingshouldhopefullyworkwiththis = [//numbers

[{"x":1,"y":1,"w":3,"l":1},{"x":0,"y":2,"w":1,"l":3},{"x":3,"y":2,"w":2,"l":1},{"x":2,"y":3,"w":1,"l":1},{"x":4,"y":3,"w":1,"l":2},{"x":1,"y":4,"w":1,"l":2},{"x":2,"y":5,"w":2,"l":1}],
[{"x":2,"y":1,"w":1,"l":5},{"x":1,"y":2,"w":2,"l":1},{"x":1,"y":5,"w":3,"l":1}],
[{"x":0,"y":1,"w":4,"l":1},{"x":4,"y":2,"w":1,"l":1},{"x":1,"y":3,"w":3,"l":1},{"x":0,"y":4,"w":1,"l":2},{"x":1,"y":5,"w":4,"l":1}],
[{"x":0,"y":1,"w":4,"l":1},{"x":4,"y":2,"w":1,"l":1},{"x":1,"y":3,"w":3,"l":1},{"x":4,"y":4,"w":1,"l":1},{"x":0,"y":5,"w":4,"l":1}],
[{"x":2,"y":1,"w":2,"l":1},{"x":1,"y":2,"w":1,"l":1},{"x":3,"y":2,"w":1,"l":4},{"x":0,"y":3,"w":1,"l":2},{"x":1,"y":4,"w":4,"l":1}],
[{"x":0,"y":1,"w":5,"l":1},{"x":0,"y":2,"w":1,"l":2},{"x":1,"y":3,"w":3,"l":1},{"x":4,"y":4,"w":1,"l":1},{"x":0,"y":5,"w":4,"l":1}],
[{"x":1,"y":1,"w":3,"l":1},{"x":0,"y":2,"w":1,"l":3},{"x":1,"y":3,"w":3,"l":1},{"x":4,"y":4,"w":1,"l":1},{"x":1,"y":5,"w":3,"l":1}],
[{"x":0,"y":1,"w":5,"l":1},{"x":4,"y":2,"w":1,"l":1},{"x":3,"y":3,"w":1,"l":1},{"x":2,"y":4,"w":1,"l":2}],
[{"x":1,"y":1,"w":3,"l":1},{"x":0,"y":2,"w":1,"l":1},{"x":4,"y":2,"w":1,"l":1},{"x":1,"y":3,"w":3,"l":1},{"x":0,"y":4,"w":1,"l":1},{"x":4,"y":4,"w":1,"l":1},{"x":1,"y":5,"w":3,"l":1}],
[{"x":1,"y":1,"w":3,"l":1},{"x":0,"y":2,"w":1,"l":1},{"x":4,"y":2,"w":1,"l":3},{"x":1,"y":3,"w":4,"l":1},{"x":1,"y":5,"w":3,"l":1}],

[{"x":1,"y":0,"w":3,"l":1},{"x":1,"y":6,"w":3,"l":1},{"x":0,"y":1,"w":1,"l":5},{"x":4,"y":1,"w":1,"l":5},{"x":3,"y":2,"w":1,"l":1},{"x":2,"y":3,"w":1,"l":1},{"x":1,"y":4,"w":1,"l":1}],
[{"x":2,"y":0,"w":1,"l":6},{"x":1,"y":6,"w":3,"l":1},{"x":1,"y":1,"w":2,"l":1}],
[{"x":0,"y":1,"w":1,"l":1},{"x":1,"y":0,"w":3,"l":1},{"x":4,"y":1,"w":1,"l":2},{"x":3,"y":3,"w":1,"l":1},{"x":2,"y":4,"w":1,"l":1},{"x":1,"y":5,"w":1,"l":1},{"x":0,"y":6,"w":5,"l":1}],
[{"x":1,"y":0,"w":3,"l":1},{"x":4,"y":1,"w":1,"l":2},{"x":4,"y":4,"w":1,"l":2},{"x":2,"y":3,"w":2,"l":1},{"x":1,"y":6,"w":3,"l":1},{"x":0,"y":1,"w":1,"l":1},{"x":0,"y":5,"w":1,"l":1}],
[{"w":1,"l":7,"x":3,"y":0},{"w":2,"l":1,"x":2,"y":1},{"w":1,"l":1,"x":1,"y":2},{"w":1,"l":2,"x":0,"y":3},{"w":5,"l":1,"x":0,"y":4}],
[{"x":0,"y":6,"w":1,"l":-1},{"x":1,"y":7,"w":3,"l":-1},{"x":4,"y":3,"w":1,"l":3},{"x":1,"y":2,"w":3,"l":1},{"x":0,"y":0,"w":1,"l":3},{"x":0,"y":1,"w":5,"l":-1}],
[{"w":2,"l":1,"x":2,"y":0},{"w":1,"l":1,"x":1,"y":1},{"w":1,"l":4,"x":0,"y":2},{"w":4,"l":1,"x":0,"y":3},{"w":1,"l":2,"x":0,"y":4},{"w":1,"l":2,"x":4,"y":4},{"w":3,"l":1,"x":1,"y":6}],
[{'w':5,'l':1,'x':0,'y':0},{'w':1,'l':1,'x':4,'y':1},{'w':1,'l':2,'x':3,'y':2},{'w':1,'l':3,'x':2,'y':4},],
[{"x":1,"y":0,"w":3,"l":1},{"x":4,"y":1,"w":1,"l":2},{"x":4,"y":4,"w":1,"l":2},{"x":0,"y":1,"w":1,"l":2},{"x":0,"y":4,"w":1,"l":2},{"x":1,"y":3,"w":3,"l":1},{"x":1,"y":6,"w":3,"l":1}],
[{"w":3,"l":1,"x":1,"y":0},{"w":1,"l":2,"x":0,"y":1},{"w":1,"l":4,"x":4,"y":1},{"w":4,"l":1,"x":1,"y":3},{"w":1,"l":1,"x":4,"y":4},{"w":1,"l":1,"x":3,"y":5},{"w":2,"l":1,"x":1,"y":6},{"w":1,"l":1,"x":2,"y":6}],

];
var DiceTypes = [
    {"max":2,"icon":[{'w':1,'l':3,'x':0,'y':0},{'w':1,'l':3,'x':2,'y':0},{'w':2,'l':1,'x':1,'y':1},{'w':3,'l':1,'x':2,'y':4},{'w':1,'l':2,'x':3,'y':5},]},
    {"max":4,"icon":[{'w':5,'l':1,'x':0,'y':0},{'w':1,'l':1,'x':1,'y':2},{'w':1,'l':1,'x':3,'y':2},{'w':1,'l':1,'x':1,'y':4},{'w':1,'l':1,'x':3,'y':4},{'w':5,'l':1,'x':0,'y':6},]},
    {"max":6,"icon":[{'w':1,'l':1,'x':0,'y':1},{'w':1,'l':1,'x':4,'y':1},{'w':1,'l':1,'x':0,'y':3},{'w':1,'l':1,'x':4,'y':3},{'w':1,'l':1,'x':0,'y':5},{'w':1,'l':1,'x':4,'y':5},]},
    {"max":10,"icon":[{'w':1,'l':5,'x':0,'y':0},{'w':3,'l':1,'x':2,'y':0},{'w':1,'l':4,'x':2,'y':1},{'w':1,'l':4,'x':4,'y':1},{'w':2,'l':1,'x':3,'y':4},{'w':5,'l':1,'x':0,'y':6},]},
    {"max":12,"icon":[{'w':1,'l':5,'x':0,'y':0},{'w':3,'l':1,'x':2,'y':0},{'w':1,'l':2,'x':4,'y':1},{'w':3,'l':1,'x':2,'y':2},{'w':1,'l':2,'x':2,'y':3},{'w':2,'l':1,'x':3,'y':4},{'w':5,'l':1,'x':0,'y':6},]},
    {"max":16,"icon":[{'w':1,'l':5,'x':0,'y':0},{'w':3,'l':1,'x':2,'y':0},{'w':1,'l':4,'x':2,'y':1},{'w':2,'l':1,'x':3,'y':2},{'w':1,'l':2,'x':4,'y':3},{'w':2,'l':1,'x':3,'y':4},{'w':5,'l':1,'x':0,'y':6},]},
    {"max":20,"icon":[{'w':2,'l':1,'x':0,'y':0},{'w':1,'l':1,'x':3,'y':0},{'w':2,'l':1,'x':1,'y':1},{'w':1,'l':3,'x':4,'y':1},{'w':3,'l':1,'x':0,'y':2},{'w':1,'l':2,'x':0,'y':3},{'w':1,'l':1,'x':2,'y':3},{'w':1,'l':1,'x':1,'y':4},{'w':1,'l':1,'x':3,'y':4},{'w':5,'l':1,'x':0,'y':6},]},
    {"max":100,"icon":[{'w':5,'l':1,'x':0,'y':0},{'w':1,'l':2,'x':1,'y':1},{'w':5,'l':1,'x':0,'y':2},{'w':1,'l':4,'x':0,'y':3},{'w':1,'l':4,'x':4,'y':3},{'w':2,'l':1,'x':1,'y':4},{'w':4,'l':1,'x':1,'y':6},]},
];
charArrowUp = [{'w':1,'l':2,'x':2,'y':0},{'w':3,'l':1,'x':1,'y':1},{'w':2,'l':1,'x':0,'y':2},{'w':2,'l':1,'x':3,'y':2},{'w':1,'l':1,'x':0,'y':3},{'w':1,'l':1,'x':4,'y':3},];
charCalc = [{"x":1,"y":1,"w":1,"l":3},{"x":0,"y":2,"w":3,"l":1},{"x":2,"y":5,"w":3,"l":1}];
charClock = [{'w':3,'l':1,'x':1,'y':1},{'w':1,'l':3,'x':0,'y':2},{'w':1,'l':2,'x':2,'y':2},{'w':1,'l':3,'x':4,'y':2},{'w':2,'l':1,'x':3,'y':3},{'w':3,'l':1,'x':1,'y':5},];
charD = [{"x":0,"y":1,"w":4,"l":1},{"x":1,"y":2,"w":1,"l":4},{"x":4,"y":2,"w":1,"l":3},{"x":0,"y":5,"w":4,"l":1}];
charS = [{"x":1,"y":1,"w":4,"l":1},{"x":0,"y":2,"w":1,"l":1},{"x":1,"y":3,"w":3,"l":1},{"x":4,"y":4,"w":1,"l":1},{"x":0,"y":5,"w":4,"l":1}];
charT = [{"x":0,"y":1,"w":5,"l":1},{"x":2,"y":2,"w":1,"l":4}];
charR = [{"x":0,"y":1,"w":4,"l":1},{"x":0,"y":2,"w":1,"l":4},{"x":4,"y":2,"w":1,"l":1},{"x":1,"y":3,"w":3,"l":1},{"x":4,"y":4,"w":1,"l":2}];
charA = [{"x":1,"y":1,"w":3,"l":1},{"x":0,"y":2,"w":1,"l":4},{"x":4,"y":2,"w":1,"l":4},{"x":1,"y":3,"w":4,"l":1}];
charL = [{"x":0,"y":1,"w":1,"l":5},{"x":1,"y":5,"w":4,"l":1}];
charC = [{"x":1,"y":1,"w":4,"l":1},{"x":0,"y":2,"w":1,"l":3},{"x":1,"y":5,"w":4,"l":1}];
charAlarm = [{"x":2,"y":1,"w":1,"l":5},{"x":1,"y":2,"w":3,"l":1},{"x":1,"y":3,"w":3,"l":1},{"x":0,"y":4,"w":5,"l":1}];
charColon = [{'w':1,'l':1,'x':2,'y':2},{'w':1,'l':1,'x':2,'y':5},];
charHyphen = [{'w':3,'l':1,'x':1,'y':3},];
charBlank = [];
charU = [{'w':1,'l':4,'x':0,'y':1},{'w':1,'l':4,'x':4,'y':1},{'w':3,'l':1,'x':1,'y':5},];
charN = [{'w':1,'l':5,'x':0,'y':1},{'w':1,'l':5,'x':4,'y':1},{'w':1,'l':1,'x':1,'y':2},{'w':1,'l':1,'x':2,'y':3},{'w':2,'l':1,'x':3,'y':4},];
charList = [
	/* */[],
	/*A*/[{"x":1,"y":1,"w":3,"l":1},{"x":0,"y":2,"w":1,"l":4},{"x":4,"y":2,"w":1,"l":4},{"x":1,"y":3,"w":4,"l":1}],
	/*B*/[{'w':4,'l':1,'x':0,'y':1},{'w':1,'l':4,'x':0,'y':2},{'w':1,'l':1,'x':4,'y':2},{'w':3,'l':1,'x':1,'y':3},{'w':1,'l':1,'x':4,'y':4},{'w':3,'l':1,'x':1,'y':5},],
	/*C*/[{"x":1,"y":1,"w":4,"l":1},{"x":0,"y":2,"w":1,"l":3},{"x":1,"y":5,"w":4,"l":1}],
	/*D*/[{"x":0,"y":1,"w":4,"l":1},{"x":1,"y":2,"w":1,"l":4},{"x":4,"y":2,"w":1,"l":3},{"x":0,"y":5,"w":4,"l":1}],
	/*E*/[{'w':5,'l':1,'x':0,'y':1},{'w':1,'l':4,'x':0,'y':2},{'w':3,'l':1,'x':1,'y':3},{'w':4,'l':1,'x':1,'y':5},],
	/*F*/[{'w':5,'l':1,'x':0,'y':1},{'w':1,'l':4,'x':0,'y':2},{'w':3,'l':1,'x':1,'y':3},],
	/*G*/[{'w':4,'l':1,'x':1,'y':1},{'w':1,'l':3,'x':0,'y':2},{'w':3,'l':1,'x':2,'y':3},{'w':1,'l':1,'x':4,'y':4},{'w':3,'l':1,'x':1,'y':5},],
	/*H*/[{'w':1,'l':5,'x':0,'y':1},{'w':1,'l':5,'x':4,'y':1},{'w':4,'l':1,'x':1,'y':3},],
	/*I*/[{'w':3,'l':1,'x':1,'y':1},{'w':1,'l':4,'x':2,'y':2},{'w':3,'l':1,'x':1,'y':5},],
	/*J*/[{'w':4,'l':1,'x':1,'y':1},{'w':1,'l':3,'x':3,'y':2},{'w':1,'l':1,'x':0,'y':4},{'w':2,'l':1,'x':1,'y':5},],
	/*K*/[{'w':1,'l':5,'x':0,'y':1},{'w':1,'l':1,'x':4,'y':1},{'w':1,'l':1,'x':3,'y':2},{'w':2,'l':1,'x':1,'y':3},{'w':1,'l':1,'x':3,'y':4},{'w':1,'l':1,'x':4,'y':5},],
	/*L*/[{"x":0,"y":1,"w":1,"l":5},{"x":1,"y":5,"w":4,"l":1}],
	/*M*/[{'w':1,'l':5,'x':0,'y':1},{'w':1,'l':5,'x':4,'y':1},{'w':1,'l':1,'x':1,'y':2},{'w':2,'l':1,'x':3,'y':2},{'w':1,'l':1,'x':2,'y':3},],
	/*N*/[{'w':1,'l':5,'x':0,'y':1},{'w':1,'l':5,'x':4,'y':1},{'w':1,'l':1,'x':1,'y':2},{'w':1,'l':1,'x':2,'y':3},{'w':2,'l':1,'x':3,'y':4}],
	/*O*/[{'w':3,'l':1,'x':1,'y':1},{'w':1,'l':3,'x':0,'y':2},{'w':1,'l':3,'x':4,'y':2},{'w':3,'l':1,'x':1,'y':5},],
	/*P*/[{'w':4,'l':1,'x':0,'y':1},{'w':1,'l':4,'x':0,'y':2},{'w':1,'l':1,'x':4,'y':2},{'w':3,'l':1,'x':1,'y':3},],
	/*Q*/[{'w':3,'l':1,'x':1,'y':1},{'w':1,'l':3,'x':0,'y':2},{'w':1,'l':2,'x':4,'y':2},{'w':1,'l':1,'x':2,'y':3},{'w':1,'l':1,'x':3,'y':4},{'w':2,'l':1,'x':1,'y':5},{'w':1,'l':1,'x':4,'y':5},],
	/*R*/[{"x":0,"y":1,"w":4,"l":1},{"x":0,"y":2,"w":1,"l":4},{"x":4,"y":2,"w":1,"l":1},{"x":1,"y":3,"w":3,"l":1},{"x":4,"y":4,"w":1,"l":2}],
	/*S*/[{"x":1,"y":1,"w":4,"l":1},{"x":0,"y":2,"w":1,"l":1},{"x":1,"y":3,"w":3,"l":1},{"x":4,"y":4,"w":1,"l":1},{"x":0,"y":5,"w":4,"l":1}],
	/*T*/[{"x":0,"y":1,"w":5,"l":1},{"x":2,"y":2,"w":1,"l":4}],
	/*U*/[{'w':1,'l':4,'x':0,'y':1},{'w':1,'l':4,'x':4,'y':1},{'w':3,'l':1,'x':1,'y':5}],
	/*V*/[{'w':1,'l':3,'x':0,'y':1},{'w':1,'l':3,'x':4,'y':1},{'w':1,'l':1,'x':1,'y':4},{'w':1,'l':1,'x':3,'y':4},{'w':1,'l':1,'x':2,'y':5},],
	/*W*/[{'w':1,'l':3,'x':0,'y':1},{'w':1,'l':3,'x':4,'y':1},{'w':1,'l':2,'x':2,'y':2},{'w':1,'l':2,'x':1,'y':4},{'w':1,'l':2,'x':3,'y':4},],
	/*X*/[{'w':2,'l':1,'x':0,'y':1},{'w':1,'l':1,'x':4,'y':1},{'w':1,'l':1,'x':0,'y':2},{'w':2,'l':1,'x':2,'y':2},{'w':1,'l':2,'x':2,'y':3},{'w':2,'l':1,'x':1,'y':4},{'w':1,'l':2,'x':4,'y':4},{'w':1,'l':1,'x':0,'y':5},{'w':2,'l':1,'x':3,'y':5},],
	/*Y*/[{'w':1,'l':2,'x':0,'y':1},{'w':1,'l':2,'x':4,'y':1},{'w':1,'l':1,'x':1,'y':3},{'w':1,'l':1,'x':3,'y':3},{'w':1,'l':2,'x':2,'y':4},],
	/*Z*/[{'w':4,'l':1,'x':1,'y':1},{'w':1,'l':1,'x':3,'y':2},{'w':1,'l':1,'x':2,'y':3},{'w':1,'l':2,'x':1,'y':4},{'w':4,'l':1,'x':0,'y':5},],
//Numbers 0-9
	[{"x":1,"y":1,"w":3,"l":1},{"x":0,"y":2,"w":1,"l":3},{"x":3,"y":2,"w":2,"l":1},{"x":2,"y":3,"w":1,"l":1},{"x":4,"y":3,"w":1,"l":2},{"x":1,"y":4,"w":1,"l":2},{"x":2,"y":5,"w":2,"l":1}],
[{"x":2,"y":1,"w":1,"l":5},{"x":1,"y":2,"w":2,"l":1},{"x":1,"y":5,"w":3,"l":1}],
[{"x":0,"y":1,"w":4,"l":1},{"x":4,"y":2,"w":1,"l":1},{"x":1,"y":3,"w":3,"l":1},{"x":0,"y":4,"w":1,"l":2},{"x":1,"y":5,"w":4,"l":1}],
[{"x":0,"y":1,"w":4,"l":1},{"x":4,"y":2,"w":1,"l":1},{"x":1,"y":3,"w":3,"l":1},{"x":4,"y":4,"w":1,"l":1},{"x":0,"y":5,"w":4,"l":1}],
[{"x":2,"y":1,"w":2,"l":1},{"x":1,"y":2,"w":1,"l":1},{"x":3,"y":2,"w":1,"l":4},{"x":0,"y":3,"w":1,"l":2},{"x":1,"y":4,"w":4,"l":1}],
[{"x":0,"y":1,"w":5,"l":1},{"x":0,"y":2,"w":1,"l":2},{"x":1,"y":3,"w":3,"l":1},{"x":4,"y":4,"w":1,"l":1},{"x":0,"y":5,"w":4,"l":1}],
[{"x":1,"y":1,"w":3,"l":1},{"x":0,"y":2,"w":1,"l":3},{"x":1,"y":3,"w":3,"l":1},{"x":4,"y":4,"w":1,"l":1},{"x":1,"y":5,"w":3,"l":1}],
[{"x":0,"y":1,"w":5,"l":1},{"x":4,"y":2,"w":1,"l":1},{"x":3,"y":3,"w":1,"l":1},{"x":2,"y":4,"w":1,"l":2}],
[{"x":1,"y":1,"w":3,"l":1},{"x":0,"y":2,"w":1,"l":1},{"x":4,"y":2,"w":1,"l":1},{"x":1,"y":3,"w":3,"l":1},{"x":0,"y":4,"w":1,"l":1},{"x":4,"y":4,"w":1,"l":1},{"x":1,"y":5,"w":3,"l":1}],
[{"x":1,"y":1,"w":3,"l":1},{"x":0,"y":2,"w":1,"l":1},{"x":4,"y":2,"w":1,"l":3},{"x":1,"y":3,"w":4,"l":1},{"x":1,"y":5,"w":3,"l":1}],
];
DaysOfTheWeek = [
	"SUN",
	"MON",
	"TUE",
	"WED",
	"THU",
	"FRI",
	"SAT",
];
Montoies = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    //filling outlines and shi
    ctx.fillStyle = "#4f4f58";
    ctx.fillRect(200,0,25,200);
    ctx.fillRect(1375,0,25,200);
    ctx.fillRect(200,1400,25,200);
    ctx.fillRect(1375,1400,25,200);
    ctx.fillStyle = "#d8e0d0";
    ctx.fillRect(200,200,1200,1200);
doug = new Date();
mode = "time";//time, stopwatch, interval timer, world time, databank, counter, gps, dice, settings (time, interval timer, view lap records)
//TODO: Add entire alphabet
mode_isAdjusting = false;
time_24h = false;
time_isAnalog = false;
time_date_format = false; //false: mm/dd | true: dd/mm
stopwatch_time_start = 0;
stopwatch_time_elapsed = 0;
stopwatch_time = 0;
stopwatch_time_hidden = 0; //used for animations
stopwatch_started = false;
stopwatch_lapTrigger = false;
stopwatch_laps = [];
timer_interval_ct = 0;
timer_interval_sets = [0,60,300,600,900];//time is in seconds
databank_adj = false;
databank_adj_char = '';
databank_adj_pos = 0;
databank_pos = 0;
databank_entries = [{"name":"TEST","info":""}];//{"name":"","info":""}
counter_pos = 0;
scrolltest = [0,0,0,0,0,0];
dice_result = [55,55,1,1,1,1,1,1,1];
dice_amount = 1;
dice_trigger = false;
worldtime_tz = "NYC";
gps_coords = [];
gps_currententry = 0;
gps_find_status = 0; //0: not found, 1: found, 2: disabled
function Draw(char,fonttype,x,y) {
    ctx.fillStyle = "#d8e0d0";
    if (fonttype == "dotmatrix_short") {
        ctx.fillRect(x,y,75,175);
    } else {
        ctx.fillRect(x-25,y,175,175);
    }
    
    switch(char) {
      case " ":ActuallyDraw(charBlank,x,y);break;
      case "-":ActuallyDraw(charHyphen,x,y);break;
      case ":": ActuallyDraw(charColon,x,y);break;
      default:
      ActuallyDraw(indexingshouldhopefullyworkwiththis[char],x,y);
      break;
        }
}
function ActuallyDraw(char0,q,b) {
    ctx.fillStyle = "#404048";
      for (i=0; i<char0.length; i++) {
      	ctx.fillRect(q+char0[i].x*25,b+char0[i].y*25,char0[i].w*25,char0[i].l*25);
      }
}
function DrawLetters(word,x,y) {
	for (var t = 0; t<word.length; t++) {
    ctx.fillStyle = "#d8e0d0";
		ctx.fillRect(x+(150*t),y,125,175);
    //ctx.fillRect(x-25+(150*t),y,175,175);
		ActuallyDraw(charList[word.charCodeAt(t)-64],x+(150*t),y);
	}
}
function btnPressed(btn) {
    if (btn == 1) {DoWhateverButton1Does();}
    if (btn == 2) {DoWhateverButton2Does();}
    if (btn == 3) {SwitchModes();}
    if (btn == 4) { DoWhateverButton4Does(); }
    ctx.fillStyle = "#d8e0d0";
    ctx.fillRect(200,200,1200,1200);
    Update();
}
function SwitchModes() {
    if (mode == "time" || mode == "date") {mode = "stopwatch";} 
    else if (mode == "stopwatch") {mode = "interval";} 
    else if (mode == "interval") {mode = "counter";} //worldtime before counter
    else if (mode == "counter") {mode = "debug";} //databank later
    else if (mode == "debug") {mode = "dice";} 
    else if (mode == "dice") {mode = "back";}
    else {mode = "time";}
}
function DoWhateverButton1Does() {

    if (mode == "back") {
        window.open('index.html');
    }

    if (mode == "interval") {
    timer_interval_ct = (timer_interval_ct+1)%timer_interval_sets.length;
    stopwatch_time_start = timer_interval_sets[timer_interval_ct];
    stopwatch_time = timer_interval_sets[timer_interval_ct];
    } else if (mode == "stopwatch") {
    console.log(stopwatch_laps);//temporary
    } else if (mode == "counter" || mode == "debug") {
       counter_pos = (counter_pos+1)%scrolltest.length;
    } else if (mode == "dice") {
       counter_pos = (counter_pos+1)%DiceTypes.length;
    } else if (mode == "time") {
        time_24h = !time_24h;
    }
}
function DoWhateverButton2Does() {

if (mode == "back") {
    window.open('index.html');
}

	if (mode == "time") {
		mode = "date";
	} else if (mode == "date") {
		mode = "time";
	} else if (mode == "stopwatch") {
            if (stopwatch_started) {
               stopwatch_time_elapsed += Date.now() - stopwatch_time_start;
            } else {
                stopwatch_time_start = Date.now();
            }
            stopwatch_started = !stopwatch_started;
    } else if (mode == "interval") {
            if (stopwatch_started) {
               stopwatch_time_elapsed += Date.now() - stopwatch_time_start;
            } else {
                stopwatch_time_start = Date.now();
            }
            stopwatch_started = !stopwatch_started;
    } else if (mode == "counter" || mode == "debug") {
            scrolltest[counter_pos]++;
    } else if (mode == "dice") {
            dice_trigger = true;
    }
}
function DoWhateverButton4Does() {

    if (mode == "back") {
    window.open('index.html');
    }

    if (mode == "counter" || mode == "debug") {
        scrolltest[counter_pos]--;
    } else if (mode == "stopwatch" || mode == "interval") {
        if (!stopwatch_started) {
        timer_interval_ct = 0;
        stopwatch_laps = [];
        stopwatch_time = timer_interval_sets[0];
        stopwatch_time_start = Date.now();
        stopwatch_time_elapsed = 0;
        } else {stopwatch_laps.push(stopwatch_time);
        stopwatch_lapTrigger = true;}
    } else if (mode == "dice") {
            dice_amount = (dice_amount%4)+1;
    }

}
function P2R(radius,radian){
    return {
        x:radius*Math.cos(radian),
        y:radius*Math.sin(radian)
    }
}
function aazai(a,b,c) {
    return (a+b/60)/c*Math.PI*2-Math.PI/2;
}
function DrawAnalogClock() {
    ctx.fillStyle = "#d8e0d0";
    ctx.fillRect(200,200,1175,975);
    ctx.strokeStyle = "#101224";

    ctx.lineWidth = 10;

    ctx.beginPath();
    ctx.moveTo(800+368.06,700+212.5);//improve
    ctx.lineTo(800-368.06,700-212.5);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(800+212.5,700+368.06);//improve
    ctx.lineTo(800-212.5,700-368.06);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(800-368.06,700+212.5);//improve
    ctx.lineTo(800+368.06,700-212.5);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(800+212.5,700-368.06);//improve
    ctx.lineTo(800-212.5,700+368.06);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(800,275);
    ctx.lineTo(800,1125);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(375,700);
    ctx.lineTo(1225,700);
    ctx.stroke();

    ctx.strokeStyle = "#404048";
    ctx.lineWidth = 22;

    if (mode == "time") {
        ctx.beginPath();
    ctx.moveTo(800,700);
    ctx.lineTo(P2R(450,aazai(doug.getSeconds(),doug.getMilliseconds()*0.06,60)).x+800,P2R(450,aazai(doug.getSeconds(),doug.getMilliseconds()*0.06,60)).y+700);
    ctx.stroke();

    ctx.beginPath();
	ctx.arc(800,700,375, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(800,700);
	ctx.lineTo(P2R(250,aazai(doug.getHours(),doug.getMinutes(),12)).x+800,P2R(250,aazai(doug.getHours(),doug.getMinutes(),12)).y+700);
	ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(800,700);
    ctx.lineTo(P2R(350,aazai(doug.getMinutes(),doug.getSeconds(),60)).x+800,P2R(350,aazai(doug.getMinutes(),doug.getSeconds(),60)).y+700);
    ctx.stroke();
    } else if (mode == "interval" || mode == "stopwatch") {
        
        if (stopwatch_time < 3600) {
            for (i=0; i<=stopwatch_time%60; i+=0.5) {
            ctx.beginPath();
            ctx.moveTo(800,700);
            ctx.lineTo(P2R(450,aazai(i,0,60)).x+800,P2R(450,aazai(i,0,60)).y+700);ctx.stroke();
            }

            ctx.beginPath();
	        ctx.arc(800,700,375, 0, 2 * Math.PI);
            ctx.fill();

            for (i=0; i<=IsolatePlaceValue(stopwatch_time,60,false)%60; i+=0.5) {
            ctx.beginPath();
            ctx.moveTo(800,700);
            ctx.lineTo(P2R(350,aazai(i,0,60)).x+800,P2R(350,aazai(i,0,60)).y+700);ctx.stroke();
            }
        } else {
            for (i=0; i<=IsolatePlaceValue(stopwatch_time,60,false)%60; i+=1) {
            ctx.beginPath();
            ctx.moveTo(800,700);
            ctx.lineTo(P2R(450,aazai(i,0,60)).x+800,P2R(450,aazai(i,0,60)).y+700);ctx.stroke();
            }

            ctx.beginPath();
	        ctx.arc(800,700,375, 0, 2 * Math.PI);
            ctx.fill();

            for (i=0; i<=IsolatePlaceValue(stopwatch_time,720,false)%60; i+=0.5) {
            ctx.beginPath();
            ctx.moveTo(800,700);
            ctx.lineTo(P2R(350,aazai(i,0,60)).x+800,P2R(350,aazai(i,0,60)).y+700);ctx.stroke();
            }
        }
    }
        ctx.fillStyle = "#404048";
        ctx.beginPath();
	    ctx.arc(800,700,25, 0, 2 * Math.PI);
        ctx.fill();
}
function Update() {
    ShowTime();
}
function ShowTime() {
    doug = new Date();

    if (mode == "time" || mode == "interval" || mode == "stopwatch") {
        DrawAnalogClock();
        ActuallyDraw(charClock,250,225);
    }
    switch (mode) {
        case "time": 
         Draw(":","dotmatrix_short",600+50,1175);
        Draw(":","dotmatrix_short",950+50,1175);
        if (time_24h) {
            Draw(" ","dotmatrix",200,1200);
            Draw(10+IsolatePlaceValue(doug.getHours(),10,true),"dotmatrix",350+50,1175);
            Draw(10+IsolatePlaceValue(doug.getHours(),1,true),"dotmatrix",500+50,1175);
        } else {
             if (AMPM(doug.getHours()).pm) {
                DrawLetters("P",225,1200);
            } else {
                DrawLetters("A",225,1200);
            }
            Draw(10+IsolatePlaceValue(AMPM(doug.getHours()).hour,10,true),"dotmatrix",350+50,1175);
            Draw(10+IsolatePlaceValue(AMPM(doug.getHours()).hour,1,true),"dotmatrix",500+50,1175);
        }
            Draw(10+IsolatePlaceValue(doug.getMinutes(),10,true),"dotmatrix",700+50,1175);
            Draw(10+IsolatePlaceValue(doug.getMinutes(),1,true),"dotmatrix",850+50,1175);
            break;
			case "date": 
            ActuallyDraw(charClock,250,225);
      Draw(IsolatePlaceValue(doug.getFullYear(),1000,true),"dotmatrix",250,525);
     Draw(IsolatePlaceValue(doug.getFullYear(),100,true),"dotmatrix",400,525);
      Draw(IsolatePlaceValue(doug.getFullYear(),10,true),"dotmatrix",550,525);
      Draw(IsolatePlaceValue(doug.getFullYear(),1,true),"dotmatrix",700,525);
            DrawLetters(DaysOfTheWeek[doug.getDay()],900+50,1200-400);
            Draw("-","dotmatrix_short",525,1175-400);

            Draw(10+IsolatePlaceValue(doug.getMonth()+1,10,true),"dotmatrix",200+50,1175-400);
            Draw(10+IsolatePlaceValue(doug.getMonth()+1,1,true),"dotmatrix",350+50,1175-400);
            
            Draw(10+IsolatePlaceValue(doug.getDate(),10,true),"dotmatrix",600+50,1175-400);
            Draw(10+IsolatePlaceValue(doug.getDate(),1,true),"dotmatrix",750+50,1175-400);
            //time
            Draw(":","dotmatrix_short",600+50,1175);
        Draw(":","dotmatrix_short",950+50,1175);
        if (time_24h) {
            Draw(" ","dotmatrix",200,1200);
            Draw(10+IsolatePlaceValue(doug.getHours(),10,true),"dotmatrix",350+50,1175);
            Draw(10+IsolatePlaceValue(doug.getHours(),1,true),"dotmatrix",500+50,1175);
        } else {
             if (AMPM(doug.getHours()).pm) {
                DrawLetters("P",225,1200);
            } else {
                DrawLetters("A",225,1200);
            }
            Draw(10+IsolatePlaceValue(AMPM(doug.getHours()).hour,10,true),"dotmatrix",350+50,1175);
            Draw(10+IsolatePlaceValue(AMPM(doug.getHours()).hour,1,true),"dotmatrix",500+50,1175);
        }
            Draw(10+IsolatePlaceValue(doug.getMinutes(),10,true),"dotmatrix",700+50,1175);
            Draw(10+IsolatePlaceValue(doug.getMinutes(),1,true),"dotmatrix",850+50,1175);
            break;
        case "stopwatch":
        if (stopwatch_lapTrigger) {
            stopwatch_time_hidden += 1;
            Draw(IsolatePlaceValue(stopwatch_laps.length,100,true),"dotmatrix",600,400);
            Draw(IsolatePlaceValue(stopwatch_laps.length,10,true),"dotmatrix",750,400);
            Draw(IsolatePlaceValue(stopwatch_laps.length,1,true),"dotmatrix",900,400);
            Draw(":","dotmatrix_short",750,850);
            Draw(IsolatePlaceValue(stopwatch_laps[stopwatch_laps.length-1],-7,true),"dotmatrix",500,850);
            Draw(IsolatePlaceValue(stopwatch_laps[stopwatch_laps.length-1],60,true),"dotmatrix",650,850);
            Draw(IsolatePlaceValue(stopwatch_laps[stopwatch_laps.length-1],-6,true),"dotmatrix",850,850);
            Draw(IsolatePlaceValue(stopwatch_laps[stopwatch_laps.length-1],1,true),"dotmatrix",1000,850);
                if (stopwatch_time_hidden >= 10) {//shows for 2 seconds
                    stopwatch_lapTrigger = false;
                        stopwatch_time_hidden = 0;
                }
            }
            Draw(":","dotmatrix_short",650,1175);
            Draw(IsolatePlaceValue(stopwatch_time,3600,true),"dotmatrix",225,1200);
            Draw(10+IsolatePlaceValue(stopwatch_time,-7,true),"dotmatrix",400,1175);
            Draw(10+IsolatePlaceValue(stopwatch_time,60,true),"dotmatrix",550,1175);
            break;
        case "interval":
            Draw(":","dotmatrix_short",650,1175);
            Draw(":","dotmatrix_short",1000,1175);
            Draw(10+IsolatePlaceValue(stopwatch_time,36000,true),"dotmatrix",400,1175);
            Draw(10+IsolatePlaceValue(stopwatch_time,3600,true),"dotmatrix",550,1175);
            Draw(10+IsolatePlaceValue(stopwatch_time,-7,true),"dotmatrix",750,1175);
            Draw(10+IsolatePlaceValue(stopwatch_time,60,true),"dotmatrix",900,1175);
            Draw(IsolatePlaceValue((timer_interval_ct%5)+1,1,true),"dotmatrix",225,1200);
            break;
        case "counter":
            ActuallyDraw(charCalc,250,225);
            DrawLetters("COUNT",400,225);
            
            ActuallyDraw(charCalc,250,475+150*counter_pos);
        for (j=0; j<6; j++) {
            for (var i=0; i<=5; i++) {
                Draw(IsolatePlaceValue(scrolltest[j],10**(5-i),true),"dotmatrix",475+150*i,475+150*j);
            }
        }
        break;
        case "dice":
            ActuallyDraw(DiceTypes[2].icon,250,225);
            DrawLetters("DICE",400,225);
            for (var i=0; i<=7; i++) {
                ActuallyDraw(DiceTypes[i].icon,225+150*i,425);
            }
            for (var i=1; i<=dice_amount; i++) {
                ActuallyDraw(DiceTypes[counter_pos].icon,900,600 +150*i);
            }
            ActuallyDraw(charArrowUp,225+150*counter_pos,625);
        break;
		    case "debug":
            ActuallyDraw(charCalc,250,225);
            DrawLetters("DEBUG",400,225);
            ActuallyDraw(charList[(37+scrolltest[0])%37],475+150*0,325+150);
            ActuallyDraw(charList[(37+scrolltest[1])%37],475+150*1,325+150);
            ActuallyDraw(charList[(37+scrolltest[2])%37],475+150*2,325+150);
            ActuallyDraw(charList[(37+scrolltest[3])%37],475+150*3,325+150);
            ActuallyDraw(charList[(37+scrolltest[4])%37],475+150*4,325+150);
            ActuallyDraw(charList[(37+scrolltest[5])%37],475+150*5,325+150);
            ActuallyDraw(charArrowUp,475+150*counter_pos,675);
            DrawLetters("V",225+150*3,475+150*4);
            for (i=0; i<7; i++) {
              ActuallyDraw(charList[(34+i+scrolltest[0])%37],225+150*i,475+150*5);
            }
        break;
        case "back":
            ActuallyDraw(charCalc,250,225);
            DrawLetters("PRESS",250,225+150);
            DrawLetters("ANY",400,225+300));
            DrawLetters("BUTTON",400,225+450));
            DrawLetters("TO",400,225+600));
            DrawLetters("GO",400,225+750));
            DrawLetters("BACK",400,225+900));
        break;
    }
}
function UpdateFast() {
    switch(mode) {
        case "time": 
            Draw(IsolatePlaceValue(doug.getSeconds(),10,true),"dotmatrix",1050+50,1200);
            Draw(IsolatePlaceValue(doug.getSeconds(),1,true),"dotmatrix",1200+50,1200);
            break;
        case "date": 
            Draw(IsolatePlaceValue(doug.getSeconds(),10,true),"dotmatrix",1050+50,1200);
            Draw(IsolatePlaceValue(doug.getSeconds(),1,true),"dotmatrix",1200+50,1200);
            break;
        case "world": 
            Draw(IsolatePlaceValue(doug.getSeconds(),10,true),"dotmatrix",1050,1200);
            Draw(IsolatePlaceValue(doug.getSeconds(),1,true),"dotmatrix",1200,1200);
            break;
        case "interval":
            Draw(IsolatePlaceValue(stopwatch_time,-6,true),"dotmatrix",1100,1200);
            Draw(IsolatePlaceValue(stopwatch_time,1,true),"dotmatrix",1250,1200);
            break;
        case "stopwatch":
            Draw(10+IsolatePlaceValue(stopwatch_time,-6,true),"dotmatrix",750,1175);
            Draw(10+IsolatePlaceValue(stopwatch_time,1,true),"dotmatrix",900,1175);
            Draw(IsolatePlaceValue(stopwatch_time,0.1,true),"dotmatrix",1100,1200);
            Draw(IsolatePlaceValue(stopwatch_time,0.01,true),"dotmatrix",1250,1200);
            break;
        case "dice":
            if (dice_trigger) {
            stopwatch_time_hidden += 1;
                for (j=0; j<dice_amount; j++) {
                dice_result[j] = Math.floor(Math.random()*DiceTypes[counter_pos].max)+1;
                for (var i=0; i<2; i++) {
                    Draw(IsolatePlaceValue(dice_result[j],10**(1-i),true),"dotmatrix",225+150*i,750+150*j);
                }
                }
                
                if (stopwatch_time_hidden >= 16) {//shows for 1 second
                        dice_trigger = false;
                        stopwatch_time_hidden = 0;
                }
            }
            break;
    }
    
}
function CalculateStopwatchTime() {
    if (mode == "stopwatch") {
        stopwatch_time = (Date.now() - stopwatch_time_start + stopwatch_time_elapsed)/1000;
    } else if (mode == "interval") {
        stopwatch_time = (0 - Date.now() + stopwatch_time_start + timer_interval_sets[timer_interval_ct]*1000 - stopwatch_time_elapsed )/1000;
    }
}
setInterval(function() {Update();},200);
setInterval(function() {UpdateFast();},62.5);
setInterval(function() {
    if (stopwatch_started) {
        CalculateStopwatchTime();
    }
    if (stopwatch_time <= 0 && mode == "interval" && stopwatch_started) {
        timer_interval_ct++;
        stopwatch_time_start = Date.now();
        
    }
    if (stopwatch_time >= 3 && stopwatch_time < 3.02 && mode == "interval" && stopwatch_started) {
        window.open("https://www.youtube.com/watch?v=2k0SmqbBIpQ");//doesnt work well
    }
},10);
function IsolatePlaceValue(value,place,singledigitonly) {
    let smemg = Math.floor(value/place);
    if (place < 0) {
        switch(place) {
            case -5: smemg = Math.floor(value/0.1); break;
            case -6: smemg = Math.floor(value/10); break;
            case -7: smemg = Math.floor(value/600); break;
        } return smemg%6;
        } else if (singledigitonly) {
        return smemg%10;
    } else {
        return smemg;
    }
}
function AMPM(hora) {
    if (hora > 12) {
        return {"pm":true,"hour":hora-12};
    } else if (hora == 0) {
        return {"pm":false,"hour":12};
    } else if (hora == 12) {
        return {"pm":true,"hour":12};
    } else {
        return {"pm":false,"hour":hora};
    }
}

document.addEventListener("keydown",function() {
RespondToKeyCodes(event);
Update();
});
function RespondToKeyCodes(event) {
     if (event.code == "KeyA") {
        ManualIncrementTime(-1);
    } else if (event.code == "KeyD") {
        ManualIncrementTime(1);
    } else if (event.code == "KeyZ") {
        ManualIncrementTime(-60);
    } else if (event.code == "KeyC") {
        ManualIncrementTime(60);
    } else if (event.code == "KeyR") {
    if (document.getElementById("hadde").style.display == "inline-block") {
        document.getElementById("hadde").style.display = "none";
    } else {
        document.getElementById("hadde").style.display = "inline-block";
		GenerateCheckboxes();
    }
    } else if (event.code == "Digit0") {
        scrolltest[counter_pos] = 0;
    }
}
function ManualIncrementTime(s) {
    timer_interval_sets[timer_interval_ct]+=s;
    stopwatch_time_start = Date.now();
    stopwatch_time = timer_interval_sets[timer_interval_ct];
}

