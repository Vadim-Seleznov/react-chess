import { Figure } from "./Figure";
import { Colors } from "../Colors";
import { FigureNames } from "./Figure";
import { Cell } from "../Cell";

import whiteLogo from "../../assets/white-rook.png";
import blackLogo from "../../assets/black-rook.png";

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = FigureNames.ROOK;
    this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;

    if (this.cell.x === target.x) {
      return this.cell.isEmptyVertical(target);
    }

    if (this.cell.y === target.y) {
      return this.cell.isEmptyHorizontal(target);
    }

    return false;
  }
}
