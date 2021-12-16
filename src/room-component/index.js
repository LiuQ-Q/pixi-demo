import * as PIXI from 'pixi.js';
import spider from '../images/door.png';

window.PIXI = PIXI;

const WIDTH = 100;
const HEIGHT = 100;

const app = new PIXI.Application({
    width: 1000,
    height: 1000,
    backgroundColor: 0xeef0f1,
    antialias: true,    // default: false 反锯齿
});

document.body.appendChild(app.view);

// const texture = PIXI.Texture.from(spider, {
//     width: 200,
//     height: 200
// });
// const texture = new Promise(resolve => {
//     const spiderTexture = PIXI.Texture.from(spider, {
//         width: 100,
//         height: 100
//     });
//     resolve(spiderTexture);
// })

const texture = PIXI.Texture.fromURL('https://qhyxpicoss.kujiale.com/r/2020/03/30/L4D1111ENDDVAXSVUGEJKFNNVCQD3WKVY8_199x225.png');

const graphics = new PIXI.Graphics();

window.graphics = graphics;

app.stage.addChild(graphics);

graphics
    // .beginFill(0x000000)
    .drawRect(0, 0, WIDTH, HEIGHT)
    .endFill()

graphics.pivot.x = WIDTH / 2;
graphics.pivot.y = HEIGHT / 2;




texture.then((res) => {
    graphics
        .beginTextureFill({
            texture: res,
            matrix: new PIXI.Matrix(0.5, 0, 0, 0.5, 0, 0)
        })
        .drawRect(0, 0, WIDTH, HEIGHT)
    
    // graphics.width = WIDTH;
    // graphics.height = HEIGHT;
})

// graphics
//     .beginTextureFill({
//         texture
//     })
//     .drawShape(texture.orig)

graphics.x = 100;
graphics.y = 100;

// graphics.width = 100;
// graphics.height = 100;