const positionX = (x , y) => {
    document.form.x.value = x
    document.form.y.value = y
}

let n = 0

// const create = (x , y) => { 
//     const pixel = `<span id="${n}"></span>`   
//     document.getElementsByClassName('center')[0].innerHTML += pixel
//     document.getElementById(n).style.left = x + 'px'
//     document.getElementById(n).style.top = y + 'px'
//     n += 1
// }

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const create = (x , y) => { 
    ctx.fillStyle = "green";
    ctx.fillRect(x, y, 3, 3);
}
