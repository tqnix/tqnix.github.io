GameItems = [
"🪙money",//obtainable via digging
"🧱brick",
"🗑️trash",
"🌳plant",
"🪵wood",
"🪨stone",
"🍫energy bar",
"💧water",
"🥷steal",
"🟫dirt",
//craftable
"🧵string",
"🍔food",
"⬛mystery",
"✨Win!",
"🏠house",
"💰trash pile",
"⛏️tool",
];
GameReforges = [
	"😎Good",
	"🗳️Approved",
	"🪙Rich",
	"🗳️Approved",
	"🗑️Bad",
	"📇Cumbersome",
	"😈Evil",
	"🅿️Poor",//you should be able to turn this into rich

];
TrashGamblingLootTable = 
	[
	"💧water",
	"💧water",
	"🌳plant",
	"🪨stone",
	"🌳plant",
	"🪨stone",
	"🪙money",
	"🧵string",
	"⬛mystery",
	"💧water",
	"💧water",
	"🌳plant",
	"🪨stone",
	"🌳plant",
	"🪨stone",
	"🪙money",
	"🧵string",
	"⬛mystery",
	"💧water",
	"💧water",
	"🌳plant",
	"🪨stone",
	"🌳plant",
	"🪨stone",
	"🪙money",
	"🧵string",
	"⬛mystery",
	"💧water",
	"💧water",
	"🌳plant",
	"🪨stone",
	"🌳plant",
	"🪨stone",
	"🪙money",
	"🧵string",
	"⬛mystery",
	"💧water",
	"💧water",
	"🌳plant",
	"🪨stone",
	"🌳plant",
	"🪨stone",
	"🪙money",
	"🧵string",
	"⬛mystery",
	"🪨stone",
	"🪨stone",
	"🌳plant",
	"🪨stone",
	"🌳plant",
	"🪨stone",
	"🪙money",
	"🧵string",
	"⬛mystery",
	"⛏️tool",
	"⛏️tool",
	"⛏️tool",
	"⛏️tool",
	"🧵string",
	"🧵string",
	"🪨stone",
	"🧵string",
	"🧵string",
	"💰trash pile",
	];
const PotentialEnergyItems = ["🍫energy bar","🍔food","⛏️tool"];
const PEIMagicCostModifier = [1,2,1];

var Item = {type:"air",count:1,extra_tags:""};
var recipeInst = {r1type:"",r1ct:1,r2type:"",r2ct:1,result:"",resultct:1,id:""};
/*
conditions:
Items aren't evil
Item 1 is approved
Item 1 is rich



*/
recipes = [
	{r1type:"🪙money",r1ct:1,
	r2type:"💧water",r2ct:1,
	result:"🍫energy bar",resultct:1,condition:"Items aren't evil"},

	{r1type:"🧱brick",r1ct:50,
	r2type:"🪙money",r2ct:10,
	result:"🏠house",resultct:1,condition:"Item 1 is approved"},

	{r1type:"🟫dirt",r1ct:1,
	r2type:"🪙money",r2ct:1,
	result:"🧱brick",resultct:2,condition:"Item 1 is approved"},

	{r1type:"🌳plant",r1ct:1,
	r2type:"💧water",r2ct:0.5,
	result:"🍔food",resultct:4,condition:""},

	{r1type:"🌳plant",r1ct:1,
	r2type:"🪨stone",r2ct:1,
	result:"🪵wood",resultct:3,condition:"Item 1 is approved"},

	{r1type:"🌳plant",r1ct:1,
	r2type:"⛏️tool",r2ct:1,
	result:"🪵wood",resultct:6,condition:""},

	{r1type:"🪙money",r1ct:0.25,
	r2type:"⬛mystery",r2ct:1,
	result:"⬛mystery",resultct:4,condition:"Items aren't evil"},

	{r1type:"💰trash pile",r1ct:1,
	r2type:"💰trash pile",r2ct:0,
	result:"🗑️trash",resultct:222,condition:"Item 1 is approved"},
	
];
cookingrecipes = [
	{
	ingredients:[
	{type:"🪨stone",ct:1}
	],
	fuelcost:1,
	result:"🥷steal",resultct:1
	},
	{
	ingredients:[
	{type:"🥷steal",ct:2}
	],
	fuelcost:1,
	result:"🪙money",resultct:4
	},
	{
	ingredients:[
	{type:"🟫dirt",ct:1},
	{type:"💧water",ct:2},
	],
	fuelcost:1,
	result:"🧱brick",resultct:2
	},
	{
	ingredients:[
	{type:"🪵wood",ct:3},
	{type:"🪨stone",ct:3},
	{type:"🧵string",ct:4},
	],
	fuelcost:1,
	result:"⛏️tool",resultct:10
	},
	{
	ingredients:[
	{type:"🪵wood",ct:3},
	{type:"🥷steal",ct:3},
	{type:"🧵string",ct:6},
	],
	fuelcost:1,
	result:"⛏️tool",resultct:25
	},
];
customrecipes = [
	{
	ingredients:
	[
	{type:"🪙money",ct:50},
	{type:"🧵string",ct:25}
	],
	result:"🧧红包",
	resultct:1
	},
];
customitems = [
	"🧧红包",
];
