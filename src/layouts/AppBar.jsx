import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  // Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function NavBar() {
  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "flex-end", paddingRight: 0 }}>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
           </IconButton> */}
          <Grid
            container
            rowSpacing={1}
            justifyContent="flex-end"
            alignItems="center"
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs="auto">
              <Stack>
                <Typography align="right"> มานี มีงานเยอะมาก </Typography>
                <Typography align="right"> 12345 </Typography>
              </Stack>
            </Grid>
            <Grid
              item
              xs="auto"
              sx={{ paddingLeft: "10px", paddingRight: "10px" }}
            >
              <Stack>
                <AccountCircleIcon color="white" />
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      {/* <Container maxWidth="md"> */}
      <Outlet />
      {/* </Container> */}
    </Fragment>
  );
}
