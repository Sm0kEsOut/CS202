document.addEventListener('DOMContentLoaded', function () {

    fetch('./favartists.json')
        .then(response => response.json())
        .then(data => {
            data.FavoriteArtists.forEach(element => {
                const div = document.createElement('div');
                div.innerHTML = `
        <div class="container-fluid card" style="width: 40rem; height: fit-content;">
        <img src="${element.Logo}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${element.Artist_Name}</h5>
            <p class="card-text">${element.Description}</p>
            <span class="badge text-bg-secondary">${element.Genres}</span><br>
            <br>
            <span class="badge rounded-pill text-bg-success">${element.Monthly_Listeners} Monthly Listeners</span><br>
            <br>
            <a href="${element.Link}" class="btn btn-primary">Listen Now</a>
        </div>
    </div><br>`

                document.querySelector('#cards').appendChild(div);
            });

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

})