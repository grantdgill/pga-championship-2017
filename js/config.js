var fantasy = fantasy || {};

var GOLFERS = {
	RORY_MCILROY: 3470,
	JORDAN_SPIETH: 5467,
	JIMMY_WALKER: 446,
	RICKIE_FOWLER: 3702,
	JB_HOLMES: 1067,
	PHIL_MICKELSON: 308,
	BUBBA_WATSON: 780,
	DUSTIN_JOHNSON: 3448,
	JASON_DAY: 1680,
	TIGER_WOODS: 462,
	ADAM_SCOTT: 388,
	HENRIK_STENSON: 576,
	PATRICK_REED: 5579,
	MATT_KUCHAR: 257,
	BRANDT_SNEDEKER: 1222,
	JUSTIN_ROSE: 569,
	JASON_DUFNER: 110,
	SERGIO_GARCIA: 158,
	LEE_WESTWOOD: 455,
	LOUIS_OOSTHUIZEN: 1293,
	BILLY_HORSCHEL: 1651,
	HIDEKI_MATSUYAMA: 5860,
	ZACH_JOHNSON: 686,
	JIM_FURYK: 153,
	CHRIS_KIRK: 3449,
	COREY_CONNERS: 9126,
	CHARL_SHWARTZEL: 1097,
	DANNY_WILLET: 4304,
	BROOKS_KOEPKA: 6798,
	KEVIN_KISNER: 2552,
	JUSTIN_THOMAS: 4848,
	BILL_HAAS: 774,
	JON_RAHM: 9780,
	MARC_LEISHMAN: 3351,
	ALEX_NOREN: 3832,
	MARTIN_KAYMER: 3670,
	GARY_WOODLAND: 3550,
	NIEBRUGGE: 9402,
	THOMAS_PIETERS: 9031,
	BRYSON_DECHAMBEAU: 10046,
	FABRIZIO_ZANOTTI: 1770,
	TONY_FINAU: 2230,
	CHARLEY_HOFFMAN: 205,
	PAUL_CASEY: 72,
	DANIEL_BERGER: 9025,
	KEVIN_CHAPPELL: 3857,
	RUSSELL_HENLEY: 5409
};


fantasy.config = {
	tournamentName: 'PGA Championship -- 2017',
	tournamentId: 2712,
	teams: [
		{
			name: 'JackG',
			golfers: [
				GOLFERS.RORY_MCILROY,
				GOLFERS.JORDAN_SPIETH,
				GOLFERS.PHIL_MICKELSON,
				GOLFERS.ADAM_SCOTT,
				GOLFERS.BRYSON_DECHAMBEAU
			]
		},
		{
			name: 'Garrett',
			golfers: [
				GOLFERS.RORY_MCILROY,
				GOLFERS.JORDAN_SPIETH,
				GOLFERS.DUSTIN_JOHNSON,
				GOLFERS.MATT_KUCHAR,
				GOLFERS.BUBBA_WATSON
			]
		},
		{
			name: 'Steve',
			golfers: [
				GOLFERS.RORY_MCILROY,
				GOLFERS.JORDAN_SPIETH,
				GOLFERS.JUSTIN_ROSE,
				GOLFERS.SERGIO_GARCIA,
				GOLFERS.FABRIZIO_ZANOTTI
			]
		},
		{
			name: 'Matt',
			golfers: [
				GOLFERS.JORDAN_SPIETH,
				GOLFERS.RICKIE_FOWLER,
				GOLFERS.BROOKS_KOEPKA,
				GOLFERS.ADAM_SCOTT,
				GOLFERS.MATT_KUCHAR
			]
		},
		{
			name: 'JR',
			golfers: [
				GOLFERS.HIDEKI_MATSUYAMA,
				GOLFERS.DUSTIN_JOHNSON,
				GOLFERS.JASON_DAY,
				GOLFERS.SERGIO_GARCIA,
				GOLFERS.TONY_FINAU
			]
		},
		{
			name: 'Richard',
			golfers: [
				GOLFERS.RORY_MCILROY,
				GOLFERS.JORDAN_SPIETH,
				GOLFERS.BROOKS_KOEPKA,
				GOLFERS.CHARLEY_HOFFMAN,
				GOLFERS.MATT_KUCHAR
			]
		},
		{
			name: 'Jim',
			golfers: [
				GOLFERS.RORY_MCILROY,
				GOLFERS.JORDAN_SPIETH,
				GOLFERS.RICKIE_FOWLER,
				GOLFERS.PAUL_CASEY,
				GOLFERS.ZACH_JOHNSON
			]
		},
		{
			name: 'Rich',
			golfers: [
				GOLFERS.RORY_MCILROY,
				GOLFERS.JORDAN_SPIETH,
				GOLFERS.PHIL_MICKELSON,
				GOLFERS.SERGIO_GARCIA,
				GOLFERS.DANIEL_BERGER
			]
		},
		{
			name: 'Jetta',
			golfers: [
				GOLFERS.RORY_MCILROY,
				GOLFERS.JORDAN_SPIETH,
				GOLFERS.PHIL_MICKELSON,
				GOLFERS.PAUL_CASEY,
				GOLFERS.TONY_FINAU
			]
		},
		{
			name: 'GrantG',
			golfers: [
				GOLFERS.RORY_MCILROY,
				GOLFERS.JORDAN_SPIETH,
				GOLFERS.RICKIE_FOWLER,
				GOLFERS.JUSTIN_THOMAS,
				GOLFERS.PATRICK_REED
			]
		},
		{
			name: 'DaveG',
			golfers: [
				GOLFERS.RORY_MCILROY,
				GOLFERS.JON_RAHM,
				GOLFERS.JASON_DAY,
				GOLFERS.ADAM_SCOTT,
				GOLFERS.JB_HOLMES
			]
		},
		{
			name: 'Laura',
			golfers: [
				GOLFERS.RORY_MCILROY,
				GOLFERS.JORDAN_SPIETH,
				GOLFERS.JUSTIN_ROSE,
				GOLFERS.HENRIK_STENSON,
				GOLFERS.MATT_KUCHAR
			]
		},
		{
			name: 'JohnG',
			golfers: [
				GOLFERS.RORY_MCILROY,
				GOLFERS.JORDAN_SPIETH,
				GOLFERS.RICKIE_FOWLER,
				GOLFERS.JUSTIN_THOMAS,
				GOLFERS.KEVIN_CHAPPELL
			]
		},
		{
			name: 'Meagan',
			golfers: [
				GOLFERS.RORY_MCILROY,
				GOLFERS.HIDEKI_MATSUYAMA,
				GOLFERS.RICKIE_FOWLER,
				GOLFERS.RUSSELL_HENLEY,
				GOLFERS.MATT_KUCHAR
			]
		},
		{
			name: 'Ted',
			golfers: [
				GOLFERS.RORY_MCILROY,
				GOLFERS.JORDAN_SPIETH,
				GOLFERS.HIDEKI_MATSUYAMA,
				GOLFERS.SERGIO_GARCIA,
				GOLFERS.ADAM_SCOTT
			]
		}
	],
	firstPlaceValue: 50,
	showCut: false,
	apiKey: '_____'
};