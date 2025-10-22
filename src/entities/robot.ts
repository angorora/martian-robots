export class Robot {
  commands: string[] = [];
  coordinates:{x:number, y:number} = {x:0, y:0};
  direction: 'N' | 'E' | 'S' | 'W' = 'N';
  isLost: boolean = false;

    constructor(x: number, y: number, direction: 'N' | 'E' | 'S' | 'W', commands: string[]) {
        this.coordinates = {x, y};  
        this.direction = direction;
        this.commands = commands;
    }

    moveForward() {
        switch(this.direction){
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

    moveLeft(direction: string){
        switch(direction){
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

    moveRight(direction: string){
        switch(direction){
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
}