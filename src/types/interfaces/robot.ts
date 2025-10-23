export interface IRobot {
    moveForward(): void;
    moveLeft(direction: string): void;
    moveRight(direction: string): void;
    getCoordinates(): { x: number, y: number };
    getDirection(): string;
    setIsLost(lostStatus: boolean): void;
    reportStatus(): string;
}