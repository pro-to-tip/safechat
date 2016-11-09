define({

	title: "Online",

	ttl: 600000,

	motd: '<pre><iframe id="w" scrolling="no" width="100%" height="355px" src="https://pro-to-tip.github.io/07/scss/index.html" frameborder="0" allowfullscreen></iframe>
		
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
