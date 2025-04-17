$('document').ready(function () {

    let darkmode = localStorage.getItem('darkmode')
    const themeSwitch = document.getElementById('theme-switch')

    const enableDarkmode = () => {

        document.body.classList.add('darkmode')
        localStorage.setItem('darkmode', 'active')
        document.getElementById('title').innerHTML = "Click Here to Change to LightMode!"

    }

    const disableDarkmode = () => {

        document.body.classList.remove('darkmode')
        localStorage.setItem('darkmode', null)
        document.getElementById('title').innerHTML = "Click Here to Change to DarkMode!"

    }

    if (darkmode === "active") enableDarkmode()

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