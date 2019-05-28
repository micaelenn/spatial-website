function OpenMenu() {

    var x = document.getElementById("menu")

    if (x.className === "menu") {
        x.className += " menu_open"
    }
}

function CloseMenu() {

    document.getElementById("menu").className = "menu"
}