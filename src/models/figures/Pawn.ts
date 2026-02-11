import { Figure, FigureNames } from "./Figure";
import { Colors } from "../Colors";
import { Cell } from "../Cell";
import whiteLogo from "../../assets/white-pawn.png";
import blackLogo from "../../assets/black-pawn.png";

export class Pawn extends Figure {
  isFirstStep: boolean = true;

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = FigureNames.PAWN;
    this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;

    const direction = this.color === Colors.BLACK ? 1 : -1;
    const dx = target.x - this.cell.x;
    const dy = Math.abs(target.y - this.cell.y);

    if (dy === 0 && dx === direction && target.isEmpty()) {
      return true;
    }

    if (
      this.isFirstStep &&
      dy === 0 &&
      dx === direction * 2 &&
      target.isEmpty()
    ) {
      const middleCell = this.cell.board.getCell(
        this.cell.x + direction,
        this.cell.y,
      );
      if (middleCell.isEmpty()) {
        return true;
      }
    }

    if (dy === 1 && dx === direction && !target.isEmpty()) {
      return true;
    }

    return false;
  }

  moveFigure(target: Cell): void {
    super.moveFigure(target);
    this.isFirstStep = false;
  }
}
