import { useContext } from "react";
import { ThemeContext } from "styled-components";

export function useMyTheme() {
  const { title,  colors} = useContext(ThemeContext);

  return {
    title,
    colors,
  }
}