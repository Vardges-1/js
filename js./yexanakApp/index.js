window.addEventListener("load", () => {
    let long;
    let lat;

    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    let temperatureSection = document.querySelector(".temperature");
    let temperatureSpan = document.querySelector(".temperature  span");

    let loca = document.querySelector(".location");



    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position)
            long = position.coords.longitude;
            lat = position.coords.latitude;

            let proxy = "https://cors-anywhere.herokuapp.com//";
            let api = `${proxy}https://api.darksky.net/forecast/dc04a4bd203bd6a314ead19e6b7c5211/${lat}, ${long}`


            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data)
                    const {
                        temperature,
                        summary,
                        icon
                    } = data.currently;
                    temperatureDegree.textContent = temperature;
                    temperatureDescription.textContent = summary;
                    locationTimezone.textContent = data.timezone;

                    if (summary === "Mostly Cloudy") {
                        loca.style.backgroundImage = "url('nkar.jpg')";

                    }



                    //formular für celsius
                    let celsius = (temperature - 32) * (5 / 9);

                    //Set Icon  
                    setIcons(icon, document.querySelector(".icon"));


                    //Change temperature to Celsius/Farenheit

                    temperatureSection.addEventListener("click", () => {
                        if (temperatureSpan.textContent === "F") {
                            temperatureSpan.textContent = "C";
                            temperatureDegree.textContent = Math.floor(celsius);
                        } else {
                            temperatureSpan.textContent = "F";
                            temperatureDegree.textContent = temperature;
                        }
                    })




                });
        });


        function setIcons(icon, iconId) {
            const skycons = new Skycons({
                color: "white"
            });
            const currentIcon = icon.replace(/-/g, "_").toUpperCase();
            skycons.play()

            return skycons.set(iconId, Skycons[currentIcon]);
        }
    }




});