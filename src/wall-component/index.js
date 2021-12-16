import * as PIXI from 'pixi.js';

import { drawPolygon } from './polygon';
import { drawDoor, drawDoubleDoor, drawMoveDoor } from './door.js';

const app = new PIXI.Application({
    width: 1000,
    height: 1000,
    backgroundColor: 0xeef0f1,
    antialias: true,    // default: false 反锯齿
    transparent: false, // default: false 透明度
    resolution: 1       // default: 1 分辨率
});

document.body.appendChild(app.view);

// rectangle
const rectangle = new PIXI.Graphics();

rectangle.beginFill(0x650A5A);

rectangle.drawRect(0, 0 , 100, 130);

app.stage.addChild(rectangle);

const rectHole = new PIXI.Polygon([
    [50, 50], [50, 100], [100, 100], [100, 50]
].map(([x, y]) => new PIXI.Point(x, y)))

rectangle.geometry.drawHole(rectHole);

// polygon
const polygonGraphics = new PIXI.Graphics();

app.ticker.add(() => {
    drawPolygon(polygonGraphics);
});

app.stage.addChild(polygonGraphics);

// door
const doorGraphics = new PIXI.Graphics();

drawDoor(doorGraphics, 150, 30, true);

app.stage.addChild(doorGraphics);

doorGraphics.x = 300;
doorGraphics.y = 50;
doorGraphics.rotation = Math.PI / 8

// doubleDoor
const doubleDoorGraphics = new PIXI.Graphics();

drawDoubleDoor(doubleDoorGraphics, 300, 30);

app.stage.addChild(doubleDoorGraphics);

doubleDoorGraphics.x = 550;
doubleDoorGraphics.y = 100;

// moveDoor
const moveDoorGraphivs = new PIXI.Graphics();

drawMoveDoor(moveDoorGraphivs, 150, 40);

app.stage.addChild(moveDoorGraphivs);

moveDoorGraphivs.x = 750;
moveDoorGraphivs.y = 100;