document.addEventListener(
	'DOMContentLoaded',
	function() {
		// format JSON method
		document.getElementById('submit').addEventListener(
			'click',
			function() {
				var jsonValue = null;
				try {
					if (document.getElementById('inputTxt').value) {
						jsonValue = document.getElementById('inputTxt').value.replace('"{', '{').replace('}"', '}');

						// condition check for format or deformat
						if (document.getElementById('deformat').checked) {
							document.getElementById('inputTxt').value = JSON.stringify(JSON.parse(jsonValue));
						} else {
							document.getElementById('inputTxt').value = JSON.stringify(JSON.parse(jsonValue), null, 2);
						}
						// copy the formatted content
						copyContent();
					} else {
						// error handler
						document.getElementById('copiedMsg').style.display = 'none';
						document.getElementById('errorMsg').style.display = 'block';
						setTimeout(function() {
							document.getElementById('errorMsg').style.display = 'none';
						}, 6500);
					}
				} catch (err) {}
			},
			false
		);
		// clear the textarea or reset the value
		var resetButton = document.getElementById('reset');
		resetButton.addEventListener(
			'click',
			function() {
				document.getElementById('inputTxt').value = '';
			},
			false
		);
	},
	false
);

function copyContent() {
	if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
		var copyTextarea = document.getElementById('inputTxt');
		copyTextarea.select();

		try {
			document.execCommand('copy');
			document.getElementById('errorMsg').style.display = 'none';
			document.getElementById('copiedMsg').style.display = 'block';

			setTimeout(function() {
				document.getElementById('copiedMsg').style.display = 'none';
			}, 6500);

			// to unselect the selection content
			if (window.getSelection) {
				window.getSelection().removeAllRanges();
			}
		} catch (err) {}
	}
}
