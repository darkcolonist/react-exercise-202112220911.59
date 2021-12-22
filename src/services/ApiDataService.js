import axios from "axios";
import { useEffect, useState } from "react";

export default function ApiDataService(props) {
  const [dataLoaded, setDataLoaded] = useState(false);
  const { setApiData } = props;

  useEffect(() => {
    if (!dataLoaded) setDataLoaded(true);

    const options = {
      url: "https://api.awsnmsappstaging.nmscreative.com/geo/countries"
      // url: "https://jsonplaceholder.typicode.com/posts/1"
      // method: "POST",
      // headers: {
      //   Accept: "application/json",
      //   "Content-Type": "application/json;charset=UTF-8"
      // },
      // data: {
      //   a: 10,
      //   b: 20
      // }
    };

    // return "one";

    axios(options).then((data) => {
      setApiData(data.data);
    });
  }, [dataLoaded]);

  return <></>;
}
