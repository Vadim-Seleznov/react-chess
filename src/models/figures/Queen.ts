import { Figure } from "./Figure";
import { Colors } from "../Colors";
import { Cell } from "../Cell";
import { FigureNames } from "./Figure";

import whiteLogo from "../../assets/white-queen.png";
import blackLogo from "../../assets/black-queen.png";

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = FigureNames.QUEEN;
    this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    if (this.cell.x === target.x) {
      return this.cell.isEmptyVertical(target);
    }

    if (this.cell.y === target.y) {
      return this.cell.isEmptyHorizontal(target);
    }

    if (Math.abs(this.cell.x - target.x) === Math.abs(this.cell.y - target.y)) {
      return this.cell.isEmptyDiagonal(target);
    }

    return false;
  }
}
