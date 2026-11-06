console.log("Some code running and doing stuff");

document.querySelector("button").addEventListener("click", e => {
	e.preventDefault();
	fetch("/submit")
		.then(res => res.text())
		.then(d => {
			const parser = new DOMParser();
			const returnedDocument = parser.parseFromString(
				d,
				"text/html"
			);
			console.log(returnedDocument);
			document.documentElement.replaceWith(
				returnedDocument.documentElement
			);
		});

	// window.location.href = `/submit`
});
