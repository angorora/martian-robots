import { Grid } from "../entities/grid";
import { Robot } from "../entities/robot";
import type { Direction } from "../types/direction";
import type { Movement } from "../types/movement";

export const handleCommands = (gridBounds: [number, number], commandsToEvaluate: string[]) => {
    const grid = new Grid(gridBounds[0], gridBounds[1]);


    for (let x = 0; x < commandsToEvaluate.length; x = x + 2) {
        const coordinatesAndDirection = commandsToEvaluate[x].split(' ');
        const commandString = commandsToEvaluate[x + 1];
        const xCoord = parseInt(coordinatesAndDirection[0], 10);
        const yCoord = parseInt(coordinatesAndDirection[1], 10);
        const direction = coordinatesAndDirection[2].trim() as Direction;
        const commands = commandString.split('').map(l => l.trim()) as Movement[];

        const robot = new Robot(xCoord, yCoord, direction, commands);

        if (grid.hasScent(`${robot.getCoordinates().x}, ${robot.getCoordinates().y}`)) {
            robot.setIsLost(true);
            grid.addScents(robot.getCoordinates().x, robot.getCoordinates().y);
            robot.reportStatus();
            continue;
        };

        for (const command of commands) {

            switch (command) {
                case 'F':
                    robot.moveForward();
                    break;
                case 'L':
                    robot.moveLeft(robot.getDirection());
                    break;
                case 'R':
                    robot.moveRight(robot.getDirection());
                    break;
            }

            if (grid.isOffGrid(robot.getCoordinates().x, robot.getCoordinates().y)) {
                robot.setIsLost(true);
                grid.addScents(robot.getCoordinates().x, robot.getCoordinates().y);
                break
            };
        }
  
        robot.reportStatus();
    }
}