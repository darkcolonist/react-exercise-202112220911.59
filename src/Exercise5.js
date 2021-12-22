import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

const projectSpec = `Related to loops and function calls
// given an array of numbers:

const numbers = [ 50, 23, 5, 12, 34, 27, 1, 23, 4, 2, 321, 50, 12, 23, 99, 1, 50, 25];

// remove any duplicates

// and find all number combinations that when summed will equal to 100`;
const numbers = [
  50,
  23,
  5,
  12,
  34,
  27,
  1,
  23,
  4,
  2,
  321,
  50,
  12,
  23,
  99,
  1,
  50,
  25
];

function formatData(rawData) {
  return JSON.stringify(rawData, null, 2);
}

function uniq(a) {
  return a.sort().filter(function (item, pos, ary) {
    return !pos || item != ary[pos - 1];
  });
}

export default function Exercise5(props) {
  const [myData, setMyData] = useState([]);
  const [done, setDone] = useState(false);

  const shstyle = monokai;
  const shoptions = {
    style: shstyle,
    wrapLongLines: true
  };

  useEffect(() => {
    if (done) return;
    setDone(true);
    // [FORMULA BEGIN]
    let myNumbers = [...numbers];

    // /**
    //  * sort
    //  */
    // myNumbers.sort();

    // /**
    //  * remove duplicates
    //  */
    // // myNumbers.filter((el, index, numbersArrOrig) => {
    // //   if (index > 0)
    // //     if (el === numbersArrOrig[index - 1]) numbersArrOrig.splice(index, 1);
    // // });

    // myNumbers.filter(
    //   (value, index, self) =>
    //     index ===
    //     self.findIndex((t) => t.place === value.place && t.name === value.name)
    // );

    myNumbers = uniq(myNumbers);

    setMyData(myNumbers);
    // [FORMULA END]
  }, []);

  return (
    <>
      <Typography variant="h4">Exercise 5</Typography>
      <SyntaxHighlighter {...shoptions} language="plaintext">
        {projectSpec}
      </SyntaxHighlighter>

      <Typography variant="h5">result</Typography>
      <SyntaxHighlighter {...shoptions} language="plaintext">
        {formatData(myData)}
      </SyntaxHighlighter>
    </>
  );
}
