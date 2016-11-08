define({

	title: "Online",

	ttl: 600000,

	motd: '<pre>\n\n' +
		'\n' +
		'\n' +
		'\n' +
		'\n' +
		'\n' +
		'\n' +
		'\n' +
		'\n' +
		'\n' +
		'\n' +
		'\n' +
		'\n' +
		' Управление: введите /help\n' +
		'----------------------------------------------------------------------' +
		'</pre>',

	nick: {
		maxLen: 20,
		minLen: 2,	
	},

	key: {
		maxLen: 1024,
		minLen: 8,	
	},

	room: {
		minLen: 1,
		maxLen: 64
	},

	notifications: {
		maxOnePerMs: 3000
	}
});
