import path from "path";
import { TFunction } from "react-i18next";
export interface ContentBlockWithImageProps {
 
  t: TFunction;
  id: string;
  name: string;
  direction: "left" | "right";
}
