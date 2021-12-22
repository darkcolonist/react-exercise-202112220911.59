import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

function formatData(rawData) {
  return JSON.stringify(rawData, null, 2);
}

export default function Exercise3(props) {
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
    if (apiData === null || apiData.length === 0) return;

    setDone(true);

    // [FORMULA BEGIN]
    const tmpResult = apiData.filter((el, index, arr) => {
      if (el.region === "Asia") {
        const { name, iso2, region } = el;
        const tmp = {
          name,
          iso2,
          region
        };
        arr[index] = tmp;

        return true;
      }
    });
    // [FORMULA END]

    if (tmpResult !== undefined) setMyData(formatData(tmpResult));
    else setMyData("data cannot be found");
  }, [apiData]);

  return (
    <>
      <h2>Exercise 3</h2>
      <p>
        using <code>.filter</code> return all countries
        <code>name, iso2, and region</code> that has a region of “Asia”. Result
        should be an Array of objects
      </p>

      <p>total records found: {JSON.parse(myData).length}</p>
      <SyntaxHighlighter {...shoptions} language="plaintext">
        {myData || "no records found"}
      </SyntaxHighlighter>
    </>
  );
}
