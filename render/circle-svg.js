
const SIZE = 50;

/** 
 * @argument {ImageData} data
 * @argument {HTMLOutputElement} el
 *  */
export default function (data, el) {

    const svg = `
        <svg 
            width="${data.width * SIZE}" 
            height="${data.height * SIZE}"
        >${pixels(data).map(
        ({ x, y, rgba }) =>
            `<ellipse
                cx="${x * SIZE + SIZE / 2}" 
                cy="${y * SIZE + SIZE / 2}" 
                rx="${SIZE / 2}" 
                ry="${SIZE / 2}" 
                fill="${rgba}" 
         />`).join('\n')
        }</svg>`

    el.innerHTML = svg
}

function pixels(data) {
    return Array.from(pixelsGen(data))
}

function* pixelsGen(data) {
    for (let x = 0; x < data.width; x++) {
        for (let y = 0; y < data.height; y++) {
            const o = (x + (y * data.width)) * 4
            const r = data.data[o]
            const g = data.data[o + 1]
            const b = data.data[o + 2]
            const a = data.data[o + 3]
            const rgba = `rgba(${r}, ${g}, ${b}, ${a})`

            yield {
                x, y,
                r, g, b, a,
                rgba
            }
        }
    }
}