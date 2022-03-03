const API_KEY = `154d5473322a8cb5eab3005d5ba39eb6`;
const searchCity = () => {
    const inputCity = document.getElementById("input-city").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => searchName(data))
}

const cityName = (id, name) => {
    document.getElementById(id).innerText = name;
}
const searchName = (value) => {
    console.log(value);
    cityName("city-name", value.name);
    cityName("temparature", value.main.temp);
    cityName("clouds", value.weather[0].main);

    // set image icon attribute
    const url = ` http://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`;
    const iconSet = document.getElementById("icon-img");
    iconSet.setAttribute("src", url);
}

