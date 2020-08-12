const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=4eab4ab2592fb941b985983bed494ee1&units=metric`);
    //const resp = await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=4eab4ab2592fb941b985983bed494ee1&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}