
const image = new ImageData(2, 2);

// yellow
image.data.set([255, 150, 0, 255], 0)
image.data.set([255, 150, 0, 255], 12)

// blue?
image.data.set([0, 150, 255, 255], 4)
image.data.set([0, 150, 255, 255], 8)

export default image;