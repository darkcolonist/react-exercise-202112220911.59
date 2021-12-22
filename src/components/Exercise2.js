import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

function formatData(rawData) {
  return JSON.stringify(rawData, null, 2);
}

export default function Exercise2(props) {
  const { apiData } = props;
  const [myData, setMyData] = useState(formatData("preparing your data..."));
  const [done, setDone] = useState(false);

  const shstyle = monokai;
  const shoptions = {
    style: shstyle,
    wrapLongLines: true
  };

  useEffect(() => {
    if (done) return;
    if (apiData == null) return;

    setDone(true);
    if (apiData === null || apiData.length === 0) return;
    const tmpResult = apiData.find((el) => {
      return el.iso3 === "PHP";
    });

    if (tmpResult !== undefined) setMyData(formatData(tmpResult));
    else setMyData("[]");
  }, [apiData]);

  return (
    <>
      <h2>Exercise 2</h2>
      <p>
        Using <code>.find</code> find the country with iso3 of “PHP”, and log
        the result.
      </p>

      <p>total records found: {JSON.parse(myData).length}</p>
      <SyntaxHighlighter {...shoptions} language="plaintext">
        {myData || "no records found"}
      </SyntaxHighlighter>
    </>
  );
}
