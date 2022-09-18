const loadData = async () => {

    const searchFild = document.getElementById('search');
    console.log(searchFild.value);

    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=9346bda862bd4deea51181702222605&q=${searchFild.value}&aqi=no`);
    // const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchFild.value}&appid=c2756ab52ce9283c29c4a3cd34eba79b`);
    const data = await res.json();
    searchFild.value = '';
    document.getElementById('weather-status-container').innerHTML = `
            <img src="${data.current.condition.icon}" alt="">
            <h1>${data.location.name}</h1>
            <h3>${data.location.country}</h3>
            <h3><span>${data.current.temp_c}</span>&deg;C</h3>
            <h1 class="lead">${data.current.condition.text}</h1>
    `;
}
