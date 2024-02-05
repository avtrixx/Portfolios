import { TFunction } from "react-i18next";
export interface ContentBlockWithoutImageProps {
  icon: string;
  title: string;
  content: string;
  section?: {
    title: string;
    content: string;
    duration?: string
    lab?: string
    icon: string;
  }[];
  button?: (
    | {
        title: string;
        color?: undefined;
      }
    | {
        title: string;
        color: string;
      }
  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
}
