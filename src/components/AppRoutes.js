import { Grid } from "@mui/material";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import ApiDataService from "../services/ApiDataService";
import { useEffect, useState } from "react";
import Exercise1 from "./Exercise1";
import Exercise2 from "./Exercise2";
import Exercise3 from "./Exercise3";
import Exercise4 from "./Exercise4";
import Exercise5 from "../Exercise5";

export default function AppRoutes(props) {
  const [apiData, setApiData] = useState();

  const apiDataServiceOptions = {
    setApiData
  };

  const exerciseProps = {
    apiData
  };

  useEffect(() => {
    console.log("api data changed", apiData);
  }, [apiData]);

  return (
    <Grid item xs={12}>
      <ApiDataService {...apiDataServiceOptions} />
      <Switch>
        <Route path="/exe1" exact={true}>
          <Exercise1 {...exerciseProps} />
        </Route>
        <Route path="/exe2" exact={true}>
          <Exercise2 {...exerciseProps} />
        </Route>
        <Route path="/exe3" exact={true}>
          <Exercise3 {...exerciseProps} />
        </Route>
        <Route path="/exe4" exact={true}>
          <Exercise4 {...exerciseProps} />
        </Route>
        {/* <Route path="/exe5" exact={true}>
          <Exercise5 {...exerciseProps} />
        </Route> */}
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
        <Route>TODO</Route>
      </Switch>
    </Grid>
  );
}
