let apiKey = "640c47110d9c3fa96e9fd6063e6e2e9f";

function anytemp(response) {
	let temp = Math.round(response.data.main.temp);
	let h1 = document.querySelector("h1");
	h1.innerHTML = `It is currently ${temp} degrees Celisus in ${response.data.name}`;
}

function search(position) {
	event.preventDefault(event);
	let searchInput = document.querySelector("#search-text-input");
	let city = ` ${searchInput.value}`;
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

	axios.get(apiUrl).then(anytemp);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function currentposition() {
	event.preventDefault(); //prevents reloading of the page

	function weather(response) {
		let temperature = Math.round(response.data.main.temp);
		//console.log(temperature);         //returns temperature in C
		let tempOnText = document.querySelector("#berry");
		tempOnText.innerHTML = `It is currently ${temperature} degrees Celisus in ${response.data.name} `;
	}

	function basho(position) {
		let lat = position.coords.latitude;
		let lon = position.coords.longitude;
		let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

		axios.get(url).then(weather);
	}

	navigator.geolocation.getCurrentPosition(basho);
	//the above gets the current position
}

let button = document.querySelector("button");
button.addEventListener("click", currentposition);
