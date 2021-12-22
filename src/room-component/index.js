import * as PIXI from 'pixi.js';
import spider from '../images/door.png';

window.PIXI = PIXI;

const WIDTH = 100;
const HEIGHT = 100;

window.addEventListener('load', async function () {
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

    const textureUrl = await PIXI.Texture.fromURL('https://qhyxpicoss.kujiale.com/r/2020/03/30/L4D1111ENDDVAXSVUGEJKFNNVCQD3WKVY8_199x225.png');

    console.log(textureUrl, 'url')
    
    const img = await window.fetch('https://qhcmsoss.kujiale.com/ttex/L2HNXEIKN4FT2AABAAAAAAY8.jpg', {
        method: 'GET',
        responseType: 'blob'
    }).then(res => {
        return res.blob();
    }).then(blob => {
        return blob.arrayBuffer();
    })

    console.log(img, 'img')

    const textureBlob = PIXI.Texture.fromBuffer(img, 200, 225);

    console.log(textureBlob, 'blob')
    
    // let texture = null

    // const xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function() {
    //   if (this.readyState === 4 && this.status === 200) {
    //     console.log(this.response, 'xhr');
    //   }
    // };
    // xhr.responseType = "blob";
    // xhr.open("GET", "https://qhcmsoss.kujiale.com/ttex/L2HNXEIKN4FT2AABAAAAAAY8.jpg", true);
    // xhr.send();
    
    const graphics = new PIXI.Graphics();
    
    window.graphics = graphics;
    
    app.stage.addChild(graphics);
    
    graphics
        .drawRect(0, 0, WIDTH, HEIGHT)
        .endFill()
    
    graphics.pivot.x = WIDTH / 2;
    graphics.pivot.y = HEIGHT / 2;
    
    graphics
        .beginTextureFill({
            texture: textureBlob,
            // matrix: new PIXI.Matrix(0.5, 0, 0, 0.5, 0, 0)
        })
        .drawShape(textureBlob.orig)
        // .drawRect(0, 0, WIDTH, HEIGHT)
    
    graphics.x = 100;
    graphics.y = 100;
    
    // graphics.width = 100;
    // graphics.height = 100;
})