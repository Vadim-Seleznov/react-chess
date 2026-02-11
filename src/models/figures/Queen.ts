import { Figure } from "./Figure";
import { Colors } from "../Colors";
import { Cell } from "../Cell";
import { FigureNames } from "./Figure";

import whiteLogo from "../../../assets/white-queen.png";
import blackLogo from "../../../assets/black-queen.png";

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = FigureNames.QUEEN;
    this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
  }
}
