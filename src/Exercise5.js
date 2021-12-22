import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

const projectSpecOrg = `Related to loops and function calls
// given an array of numbers:

const numbers = [ 50, 23, 5, 12, 34, 27, 1, 23, 4, 2, 321, 50, 12, 23, 99, 1, 50, 25];

// remove any duplicates

// and find all number combinations that when summed will equal to 100`;

const projectSpec = ".";
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

function permutator(inputArr) {
  var results = [];

  function permute(arr, memo) {
    var cur,
      memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return results;
  }

  return permute(inputArr);
}

function permutatorWithSummation(inputArr, summation) {
  var results = [];
  console.log(summation, "is the summation set");

  function permute(arr, memo, curSum) {
    var cur,
      memo = memo || [],
      curSum = curSum || 0;

    console.log(curSum, memo);
    // console.log(memo);
    // if (curSum === summation) return results;

    // if (curSum >= summation) {
    //   console.log(curSum, "breaking out of recursion");
    //   curSum = 0;
    //   return;
    // }

    for (var i = 0; i < arr.length; i++) {
      let theCurSum = 0;

      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        if (curSum < summation) {
          results.push(memo.concat(cur));
          theCurSum = parseInt(curSum) + parseInt(cur);
        }
      }

      // if (curSum >= summation) return;

      // if (curSum < summation) {
      permute(arr.slice(), memo.concat(cur), theCurSum);
      // }

      arr.splice(i, 0, cur[0]);
    }

    return results;
  }

  return permute(inputArr);
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

    // setMyData(myNumbers);

    let permutations = permutatorWithSummation(
      /** the array */
      [1, 2, 3, 4],

      /** the max summation */
      3
    );
    // let permutations = permutatorWithSummation100(myNumbers);

    setMyData({ found: permutations.length, permutations });
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
