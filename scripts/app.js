(function (document) {
	"use strict";

	requirejs.config({
		"baseUrl": ".",
		"paths": {
			"fairplay": "scripts/fairplay",
			"demo": "scripts/demo"
		}
	});

	require(["fairplay", "demo"], function (fairplay, demo) {
		var passphrase = document.getElementById("passphrase"),
			key = document.getElementById("key");

		key.innerHTML = fairplay.printKey(passphrase.value);

		demo.init();
	});
}(document));