import * as PIXI from 'pixi.js';
import doorImg from '../images/door.png';

const randomInt = (from, to) => Math.round((to - from) * Math.random()) + from;

const doorTexture = PIXI.Texture.from(doorImg);
const randomPoint = [150, 300]
const start = Date.now();

export const drawPolygon = (polygonGraphics) => {
    const now = Date.now();

    randomPoint[0] = 150 * (Math.sin((now - start) / 1000) * 0.1 + 1);
    randomPoint[1] = 300 * (Math.cos((now - start) / 1000) * 0.1 + 1);

    const polygon = new PIXI.Polygon([
        [0, 150], [0, 200], [100, 200], randomPoint, [200, 350], [300, 250], [200, 150]
    ].map(([x, y]) => new PIXI.Point(x, y)))

    polygonGraphics
        .clear()
        .lineStyle(10, 0x66CCFF)
        .beginTextureFill({ texture: doorTexture })
        .drawPolygon(polygon)
        .drawCircle(...randomPoint, 5);
}