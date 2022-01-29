
const SIZE = 25;

/** 
 * @argument {ImageData} data
 * @argument {HTMLOutputElement} el
 *  */
export default function (data, el) {
    const canvas = document.createElement('canvas')
    canvas.width = data.width * SIZE
    canvas.height = data.height * SIZE

    canvas.style.minWidth = 100
    canvas.style.minHeight = 100
    canvas.style.imageRendering = 'pixelated'

    const ctx = canvas.getContext('2d')


    for (let i = 0; i < data.width; i++) {
        for (let j = 0; j < data.height; j++) {
            ctx.beginPath()
            ctx.ellipse(i * SIZE + SIZE / 2, j * SIZE + SIZE / 2, SIZE / 2, SIZE / 2, 0, 0, Math.PI * 2)
            // ctx.stroke()
            const rgba = data.data.slice([i + (j * data.width)], 4)

            const o = (i + (j * data.width)) * 4
            const r = data.data[o]
            const g = data.data[o + 1]
            const b = data.data[o + 2]
            const a = data.data[o + 3]
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`

            ctx.fill()
        }

    }




    el.append(canvas)
}