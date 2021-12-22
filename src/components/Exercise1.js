import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

function formatData(rawData) {
  return JSON.stringify(rawData, null, 2);
}

export default function Exercise1(props) {
  const { apiData } = props;
  const [myData, setMyData] = useState([]);
  const [done, setDone] = useState(false);
  const [counter, setCounter] = useState(0);

  const shstyle = monokai;
  const shoptions = {
    style: shstyle,
    wrapLongLines: true
  };

  useEffect(() => {
    if (done) return;
    if (apiData == null) return;
    if (apiData === null || apiData.length === 0) return;

    let tmpData = [];

    apiData.map((el) => {
      setCounter((counter) => counter + 1);
      const { emoji, name } = el;
      tmpData.push(`${emoji} ${name}`);
      return { emoji, name };
    });
    setMyData(tmpData);
    setDone(true);
  }, [apiData]);

  return (
    <>
      <h2>Exercise 1</h2>
      <p>
        Using{" "}
        <Typography variant="code" component="code">
          .map
        </Typography>{" "}
        return all countries name with the emoji as prefix. ex (🇵🇭 Philippines)
        as an array of strings.
      </p>

      <p>total records found: {counter}</p>
      <SyntaxHighlighter {...shoptions} language="plaintext">
        {formatData(myData)}
      </SyntaxHighlighter>
    </>
  );
}
