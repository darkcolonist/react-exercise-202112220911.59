import { Button, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";

export default function TopNavigation(props) {
  const useStyles = makeStyles({
    active: {
      // outline: "1px solid #ccc"
      textDecoration: "underline"
    }
  });

  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Button
        variant="text"
        activeClassName={classes.active}
        component={NavLink}
        exact
        to="/"
      >
        Home
      </Button>

      <Button
        variant="text"
        activeClassName={classes.active}
        component={NavLink}
        exact
        to="/exe1"
      >
        Exercise 1
      </Button>

      <Button
        variant="text"
        activeClassName={classes.active}
        component={NavLink}
        exact
        to="/exe2"
      >
        Exercise 2
      </Button>

      <Button
        variant="text"
        activeClassName={classes.active}
        component={NavLink}
        exact
        to="/exe3"
      >
        Exercise 3
      </Button>

      <Button
        variant="text"
        activeClassName={classes.active}
        component={NavLink}
        exact
        to="/exe4"
      >
        Exercise 4
      </Button>

      <Button
        variant="text"
        activeClassName={classes.active}
        component={NavLink}
        exact
        to="/exe5"
      >
        Exercise 5
      </Button>
    </Grid>
  );
}
