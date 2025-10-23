import type { Direction } from "../types/direction";
import type { IRobot } from "../types/interfaces/robot";

export class Robot implements IRobot {
    private commands: string[] = [];
    private coordinates: { x: number, y: number } = { x: 0, y: 0 };
    private direction: Direction;
    private isLost: boolean = false;

    constructor(x: number, y: number, direction: Direction, commands: string[]) {
        this.coordinates = { x, y };
        this.direction = direction;
        this.commands = commands;
    }

    moveForward() {
        switch (this.direction) {
            case 'N':
                this.coordinates.y += 1;
                break;
            case 'E':
                this.coordinates.x += 1;
                break;
            case 'S':
                this.coordinates.y -= 1;
                break;
            case 'W':
                this.coordinates.x -= 1;
                break;
        }
    }

    moveLeft(direction: string) {
        switch (direction) {
            case 'N':
                this.direction = 'W';
                break;
            case 'W':
                this.direction = 'S';
                break;
            case 'S':
                this.direction = 'E';
                break;
            case 'E':
                this.direction = 'N';
                break;
        }
    }

    moveRight(direction: string) {
        switch (direction) {
            case 'N':
                this.direction = 'E';
                break;
            case 'E':
                this.direction = 'S';
                break;
            case 'S':
                this.direction = 'W';
                break;
            case 'W':
                this.direction = 'N';
                break;
        }
    }

    getCoordinates() {
        return this.coordinates;
    }
    getDirection() {
        return this.direction;
    }
    setIsLost(lostStatus: boolean) {
        this.isLost = lostStatus;
    }
    printCoordinates(command:string): string {
       console.log(`Command: ${command} ${this.coordinates.x} ${this.coordinates.y} ${this.direction}${this.isLost ? ' LOST' : ''}`);
        return `${this.coordinates.x} ${this.coordinates.y} ${this.direction}${this.isLost ? ' LOST' : ''}`;
    }
    reportStatus(): string {
        console.log(`${this.coordinates.x} ${this.coordinates.y} ${this.direction}${this.isLost ? ' LOST' : ''}`);

        return `${this.coordinates.x} ${this.coordinates.y} ${this.direction}${this.isLost ? ' LOST' : ''}`;
    }
}