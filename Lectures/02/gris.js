import { Cell } from "./cell";

const GRID_SIZE = 4;
const GRID_COUNT = GRID_SIZE * GRID_SIZE;

class Grid {
    constructor(gridElement) {
        this.cells = [];
        for (let i = 0; i < GRID_COUNT; i++) {
            this.cells.push(new Cell(gridElement, x, y))
        }
    }
}