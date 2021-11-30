import * as PIXI from 'pixi.js';

import { drawDoor } from './door.js';
import { drawPolygon } from './polygon';

const Application = PIXI.Application,
    Graphics = PIXI.Graphics;

const app = new Application({
    width: 1000,
    height: 1000,
    backgroundColor: 0xeef0f1,
    antialias: true,    // default: false 反锯齿
    transparent: false, // default: false 透明度
    resolution: 1       // default: 1 分辨率
});

document.body.appendChild(app.view);

// rectangle
const rectangle = new Graphics();

rectangle.beginFill(0x650A5A);

rectangle.drawRect(0, 0 , 100, 130);

app.stage.addChild(rectangle);

const rectHole = new PIXI.Polygon([
    [50, 50], [50, 100], [100, 100], [100, 50]
].map(([x, y]) => new PIXI.Point(x, y)))

rectangle.geometry.drawHole(rectHole);

// polygon
const polygonGraphics = new Graphics();

app.ticker.add(() => {
    drawPolygon(polygonGraphics);
});

app.stage.addChild(polygonGraphics);

// door
const doorGraphics = new PIXI.Graphics();

drawDoor(doorGraphics, 200, 50, true);

app.stage.addChild(doorGraphics);

doorGraphics.y = 70;
doorGraphics.x = 400;
doorGraphics.rotation = Math.PI / 8
