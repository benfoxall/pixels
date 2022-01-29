
/** 
 * @argument {ImageData} data
 * @argument {HTMLOutputElement} el
 *  */
export default function (data, el) {
    const canvas = document.createElement('canvas')
    canvas.width = data.width
    canvas.height = data.height

    canvas.style.minWidth = 100
    canvas.style.minHeight = 100
    canvas.style.imageRendering = 'pixelated'


    const ctx = canvas.getContext('2d')
    ctx.putImageData(data, 0, 0)


    el.append(canvas)
}