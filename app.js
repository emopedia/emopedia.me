document.addEventListener('DOMContentLoaded', () => {
	if (location.pathname == '/') {
		// Typer
		var words = ['too many projects', 'minecraft plugins', 'web development', 'game development', 'frontend development'];
		var currentPart = 0;
		var partIndex = 0;
		var typer;
		var work = document.querySelector('#work');
		var cursor = document.querySelector('#cursor');

		function type() {
			cursor.style.display = 'inline-block';
			var text = words[currentPart].substring(0, partIndex + 1);
			work.innerHTML = text;
			partIndex++;

			if (text === words[currentPart]) {
				clearInterval(typer);
				setTimeout(function () {
					cursor.style.display = 'none';
					typer = setInterval(deleteText, 50);
				}, 3000);
			}
		}

		function deleteText() {
			var text = words[currentPart].substring(0, partIndex - 1);
			work.innerHTML = text;
			partIndex--;

			if (text === '') {
				clearInterval(typer);

				if (currentPart == words.length - 1) currentPart = 0;
				else currentPart++;

				partIndex = 0;

				setTimeout(function () {
					typer = setInterval(type, 100);
				}, 200);
			}
		}

		typer = setInterval(type, 100);
	}
});
