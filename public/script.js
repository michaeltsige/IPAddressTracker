

fetch('http://localhost:3000/api/v1')
    .then(response => {
        return response.json();
    })
    .then(data => {
        
        console.log(data);
        
        document.getElementById('ip').innerHTML = 'IP Address: ' + data.ip;
        document.getElementById('country').innerHTML = 'Country: ' + data.country.en;
        document.getElementById('continent').innerHTML = 'Continent: ' + data.continent.en;
        document.getElementById('latitude').innerHTML = 'Latitude: ' + data.latitude;
        document.getElementById('longitude').innerHTML = 'Longitude: ' + data.longitude;

        // code for displaying map // leafletJS
        var map = L.map('map').setView([data.latitude, data.longitude], 2);
  
        var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
             maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        var marker = L.marker([data.latitude, data.longitude]).addTo(map);

    }).catch(err => {
        alert('error!!!'); 
    });


    
    



