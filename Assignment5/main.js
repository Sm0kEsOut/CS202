document.addEventListener('DOMContentLoaded', function () {

    fetch('./favartists.json')
        .then(response => response.json())
        .then(data => {
            data.FavoriteArtists.forEach(element => {
                const div = document.createElement('div');
                div.className = "g-col-6 g-col-md-4"
                div.innerHTML = `
        <div class="container-fluid card" style="width: 25rem; height: fit-content;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${element.Artist_Name}</h5>
            <p class="card-text">${element.Description}</p>
            <span class="badge rounded-pill text-bg-secondary">${element.Monthly_Listeners} Monthly Listeners</span>
            
            <a href="${element.Link}" class="btn btn-primary">Listen Now</a>
        </div>
    </div>`
                document.querySelector('#cards').appendChild(div);
            });

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

})