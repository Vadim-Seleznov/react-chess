import React, { FC } from "react";
import { Figure } from "../models/figures/Figure";

interface LostFiguresProps {
  title: string;
  figure: Figure[];
}

const LostFigures: FC<LostFiguresProps> = ({ title, figure }) => {
  return (
    <div className="lost">
      <h3>{title}</h3>
      {figure.map((el) => (
        <div key={el.id}>
          {el.name}{" "}
          {el.logo && (
            <img alt="logo" width={20} height={20} src={el.logo}></img>
          )}
        </div>
      ))}
    </div>
  );
};

export default LostFigures;
