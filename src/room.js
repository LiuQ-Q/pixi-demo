import * as PIXI from 'pixi.js';

const randomInt = (from, to) => Math.round((to - from) * Math.random()) + from;

const Application = PIXI.Application,
    Graphics = PIXI.Graphics,
    Texture = PIXI.Texture;

const app = new Application({
    width: 600,
    height: 600,
    antialias: true,    // default: false 反锯齿
    transparent: false, // default: false 透明度
    resolution: 1       // default: 1 分辨率
});

document.body.appendChild(app.view);

const doorTexture = Texture.from('./images/door.png');

// rectangle
const rectangle = new Graphics();

rectangle.beginTextureFill({
    texture: doorTexture
});

rectangle.drawRect(0, 0 , 100, 100);

app.stage.addChild(rectangle);

const randomPoint = [200, 500]

// polygon

const polygonGraphics = new Graphics();

const start = Date.now();

app.ticker.add(() => {
    const now = Date.now();

    randomPoint[0] = 200 * (Math.sin((now - start) / 1000) * 0.1 + 1);
    randomPoint[1] = 500 * (Math.cos((now - start) / 1000) * 0.1 + 1);

    const polygon = new PIXI.Polygon([
        [0, 150], [0, 200], [150, 300], randomPoint, [300, 500], [350, 300], [200, 150]
    ].map(([x, y]) => new PIXI.Point(x, y)))

    polygonGraphics
        .clear()
        .beginTextureFill({ texture: doorTexture })
        .drawPolygon(polygon)
        .drawCircle(...randomPoint, 5);
});

app.stage.addChild(polygonGraphics);