const 
    map = new Map(".map"),
    info = new Info(".info")

applyTheme(document.querySelector(".page"))
let darkTheme = localStorage.getItem("darkTheme")
if (darkTheme == "true") {switchTheme()}


map.setInfo(info).setDots(dots).setBuildings(buildings)

window.onresize = e => map.resize(window.innerWidth, window.innerHeight)
map.resize(window.innerWidth, window.innerHeight)
map.setPosition(0, 0, .15).redraw()
window.onload = e => {
    let hash = location.hash.replace("#", "")
    if (!hash.length) {return}
    let position = hash.split(";")
    if (position[3]) {
        map.show(position[3])
        return
    }
    map.setPosition(position[0], position[2], position[1]).redraw()
}