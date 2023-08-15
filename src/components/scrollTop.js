import { useCallback } from "react";
import {
  Box,
  Zoom,
  Fab,
} from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import useScrollTrigger from "@mui/material/useScrollTrigger";

function ScrollToTopFab() {
    // Use `window` instead of `body` as `document` will be `undefined` when the
    // hooks first runs. By default, useScrollTrigger will attach itself to `window`.
    const trigger = useScrollTrigger({
      // Number of pixels needed to scroll to toggle `trigger` to `true`.
      threshold: 100,
    })
  
    const scrollToTop = useCallback(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, [])
  
    return (
      <Zoom in={trigger}>
        <Box
          role="presentation"
          // Place the button in the bottom right corner.
          sx={{
            position: "fixed",
            bottom: 42,
            right: 42,
            zIndex: 2000,
          }}
        >
          <Fab 
            onClick={scrollToTop}
            size="small"
            aria-label="Scroll back to top"
            sx={{ bgcolor: '#7EBDC2' }}
          >
            <KeyboardArrowUp fontSize="medium" />
          </Fab>
        </Box>
      </Zoom>
    )
  }
  
  export default ScrollToTopFab