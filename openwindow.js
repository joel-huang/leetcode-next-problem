setTimeout(function openW() {
	var tableRows = document.body.getElementsByClassName("reactable-data")[0].rows;
	var tableLength = tableRows.length;
	var tickbox = tableRows[0].cells[0].innerHTML.split('"')[1];

	for (var i = 0; i < tableLength; i++) {
		var tickbox = tableRows[i].cells[0].innerHTML.split('"')[1];
		if (tickbox != "text-success fa fa-check") {
			var suffix = tableRows[i].cells[2].innerHTML.split('"')[1];
			var url = "http://leetcode.com";
			var final = url.concat(suffix);
			window.open(final);
			break;
		}
	}
}, 1000);