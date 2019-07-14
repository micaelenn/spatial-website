function OpenMenu() {
    const nav = document.getElementById("main-navigation")
    
    if(nav.className === "main-navigation") {
        nav.className +=  " menu-mobile"
        document.getElementById('threeline-icon').innerHTML = "&Cross;"
    } else {
        nav.className = "main-navigation"
        document.getElementById('threeline-icon').innerHTML = "&#9776;"
    }
} 

