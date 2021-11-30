export const drawDoor = (doorGraphics, width, wallThickness, flip) => {
    const DOOR_THICKNESS = 10;
    const PI = Math.PI;
    flip = flip ? 1 : 0;

    doorGraphics
        .lineStyle(1, 0x000000)
        .beginFill(0x000000, .1)
        .arc(width * flip, wallThickness / 2, width, PI * flip / 2, PI * flip / 2 + PI / 2)
        .lineTo(width * flip, wallThickness / 2)
        .lineTo(width, width * flip + wallThickness / 2)
        .endFill()
        .beginFill(0xFFFFFF)
        .lineStyle(2, 0x000000)
        .drawRect(0, 0, width, wallThickness)
        .lineStyle(2, 0xFFFFFF)
        .moveTo(0, 0)
        .lineTo(width, 0)
        .moveTo(0, wallThickness)
        .lineTo(width, wallThickness)
        .lineStyle(2, 0x000000)
        .drawRect((width - DOOR_THICKNESS) * flip, wallThickness / 2, DOOR_THICKNESS, width)

    doorGraphics.pivot.x = width / 2
    doorGraphics.pivot.y = wallThickness / 2

    return doorGraphics;
}