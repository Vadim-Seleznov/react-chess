import { Figure, FigureNames } from "./Figure";
import { Cell } from "../Cell";
import { Colors } from "../Colors";

import whiteLogo from "../../../assets/white-knight.png";
import blackLogo from "../../../assets/black-knight.png";

export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
    this.name = FigureNames.KNIGHT;
  }
}
