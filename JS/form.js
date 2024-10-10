const scriptURL = 'https://script.google.com/macros/s/AKfycbwElKD8v9sHctF0azg-7miZZO9XcCA49ybGJRayRKIYcbIr0g0krBLcEhUQMYU7aWirYQ/exec'
		const form = document.forms['google-sheet']
	  
		form.addEventListener('submit', e => {
		  e.preventDefault()
		  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
			.then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
			.catch(error => console.error('Error!', error.message))
		})