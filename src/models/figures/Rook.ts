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
}
