import { useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import {theme} from "../styles/theme";

// check if desktop or mobile/tablet
function useIsDesktop(): boolean {
  let isMobileUA;
  useEffect(() => {
    isMobileUA = /Mobile|Tablet|Android|iOS|iPhone|iPad|iPod|BlackBerry|Phone/i.test(window.navigator.userAgent);
  }, [])
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  return isLargeScreen && !isMobileUA;
}

export default useIsDesktop;
