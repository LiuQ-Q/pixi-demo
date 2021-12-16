const DOOR_THICKNESS = 10;
const PI = Math.PI;

export const drawDoor = (doorGraphics, width, wallThickness, flip) => {
    const flipSign = flip ? 1 : 0;

    doorGraphics
        .lineStyle(1, 0x000000)
        .beginFill(0x000000, .1)
        .arc(width * flipSign, wallThickness / 2, width, PI * flipSign / 2, PI * flipSign / 2 + PI / 2)
        .lineTo(width * flipSign, wallThickness / 2)
        .lineTo(width, width * flipSign + wallThickness / 2)
        .endFill()
        .beginFill(0xFFFFFF)
        .lineStyle(2, 0xFFFFFF)
        .drawRect(0, 0, width, wallThickness)
        .lineStyle(2, 0x000000)
        .moveTo(0, 0)
        .lineTo(0, wallThickness)
        .moveTo(width, 0)
        .lineTo(width, wallThickness)
        .lineStyle(2, 0x000000)
        .drawRect((width - DOOR_THICKNESS) * flipSign, wallThickness / 2, DOOR_THICKNESS, width)

    doorGraphics.pivot.x = width / 2
    doorGraphics.pivot.y = wallThickness / 2

    return doorGraphics;
}

export const drawDoubleDoor = (doorGraphics, width, wallThickness) => {
    doorGraphics
        .lineStyle(1, 0x000000)
        .beginFill(0x000000, .1)
        .arc(0, wallThickness / 2, width / 2, 0, PI / 2)
        .lineTo(0, wallThickness / 2)
        .lineTo(width / 2, wallThickness / 2)
        .endFill()
        .beginFill(0x000000, .1)
        .lineStyle(1, 0x000000)
        .arc(width, wallThickness / 2, width / 2, PI / 2, PI)
        .lineTo(width, wallThickness / 2)
        .lineTo(width, (width + wallThickness) / 2)
        .endFill()
        .beginFill(0xFFFFFF)
        .lineStyle(1, 0xFFFFFF)
        .drawRect(0, 0, width, wallThickness)
        .lineStyle(2, 0x000000)
        .moveTo(0, 0)
        .lineTo(0, wallThickness)
        .moveTo(width, 0)
        .lineTo(width, wallThickness)
        .drawRect(0, wallThickness / 2, DOOR_THICKNESS, width / 2)
        .drawRect(width, wallThickness / 2, -DOOR_THICKNESS, width / 2)

    doorGraphics.pivot.x = width / 2
    doorGraphics.pivot.y = wallThickness / 2

    return doorGraphics;
}

export const drawMoveDoor = (doorGraphics, width, wallThickness, flip) => {
    doorGraphics
        .lineStyle(2, 0x000000)
        .beginFill(0xFFFFFF)
        .drawRect(0, 0, width, wallThickness)
}