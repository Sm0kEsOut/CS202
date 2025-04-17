$('document').ready(function () {

    let darkmode = localStorage.getItem('darkmode')
    let sun = localStorage.getItem('sunStatus')
    let moon = localStorage.getItem('moonStatus')
    const themeSwitch = document.getElementById('theme-switch')
    const el1 = document.getElementById('sun')
    const el2 = document.getElementById('moon')
    el1.addEventListener("animationstart", function() {}, false);
    el1.addEventListener("animationend", function() {}, false);
    el2.addEventListener("animationstart", function() {}, false);
    el2.addEventListener("animationend", function() {}, false);


    const enableDarkmode = () => {

        document.body.classList.add('darkmode')
        localStorage.setItem('darkmode', 'active')
        localStorage.setItem('sunStatus', 'up')
        localStorage.setItem('moonStatus', 'down')
        document.getElementById('title').innerHTML = "Click Here to Change to LightMode!"
        el1.className = 'sunDown'
        el2.className = 'moonUp'

    }

    const disableDarkmode = () => {

        document.body.classList.remove('darkmode')
        localStorage.setItem('darkmode', null)
        localStorage.setItem('sunStatus', 'down')
        localStorage.setItem('moonStatus', 'up')
        document.getElementById('title').innerHTML = "Click Here to Change to DarkMode!"
        el1.className = 'sunUp'
        el2.className = 'moonDown'

    }

    if (darkmode === "active") enableDarkmode()

    if (darkmode !== "active") disableDarkmode()

    themeSwitch.addEventListener("click", () => {

        darkmode = localStorage.getItem('darkmode')
        darkmode !== "active" ? enableDarkmode() : disableDarkmode()

    })

    window.addEventListener('keydown', function(event) {

        if (event.code === 'Space') {
            darkmode = localStorage.getItem('darkmode')
            darkmode !== "active" ? enableDarkmode() : disableDarkmode()
        } else {
            return event.code;
        }
    })
    
})