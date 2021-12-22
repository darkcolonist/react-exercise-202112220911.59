import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

const projectSpec = `// Grocery List

// Calculate the total price of a grocery item
// by multiplying price and qty
// and pushing the total with the emoji as an object
// ex:
//    {
//      emoji: '🍑'
//      total: '2838.2'
//    }
// in the \`total\` array.

// using filter, console.log
// as
//
// FRUITS:
// [{ emoji: '🍑', total: 2838.2 }, { ... }, { ... }]
// NON-FRUITS:
// [{ emoji: '🍕', total: 2838.2 }, { ... }]

// TOTAL:
// 🍕 and 🌭's total TOTAL_COST
// 🍉, 🍊 and 🍑's total TOTAL_COST
    `;

const grocery = [
  { emoji: "🍉", price: 5, qty: 10 },
  { emoji: "🍊", price: 15, qty: 1 },
  { emoji: "🍕", price: 56, qty: 32 },
  { emoji: "🌭", price: 48, qty: 4 },
  { emoji: "🍑", price: 12, qty: 8 }
];

const fruits = ["🍉", "🍊", "🍑"];
const nonfruits = ["🍕", "🌭"];
// Grocery List

// Calculate the total price of a grocery item
// by multiplying price and qty
// and pushing the total with the emoji as an object
// ex:
//    {
//      emoji: '🍑'
//      total: '2838.2'
//    }
// in the `total` array.

// using filter, console.log
// as
//
// FRUITS:
// [{ emoji: '🍑', total: 2838.2 }, { ... }, { ... }]
// NON-FRUITS:
// [{ emoji: '🍕', total: 2838.2 }, { ... }]

// TOTAL:
// 🍕 and 🌭's total TOTAL_COST
// 🍉, 🍊 and 🍑's total TOTAL_COST

function formatData(rawData) {
  return JSON.stringify(rawData, null, 2);
}

export default function Exercise4(props) {
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

    // setMyData(formatData(grocery));

    // [FORMULA BEGIN]
    let myGroceryTotals = {
      fruits: [],
      nonfruits: []
    };

    grocery.filter((el, index, arr) => {
      const { emoji } = el;

      // get get totals
      let totals = {
        emoji,
        total: el.qty * el.price
      };

      // it is a fruit!
      if (fruits.indexOf(el.emoji) !== -1) {
        myGroceryTotals.fruits.push(totals);
      }

      // it is not a fruit!
      if (nonfruits.indexOf(el.emoji) !== -1) {
        myGroceryTotals.nonfruits.push(totals);
      }
    });

    setMyData(formatData(myGroceryTotals));
    return true;
    // [FORMULA END]
  }, []);

  return (
    <>
      <h2>Exercise 4</h2>
      <SyntaxHighlighter {...shoptions} language="plaintext">
        {projectSpec}
      </SyntaxHighlighter>

      <p>result:</p>
      <SyntaxHighlighter {...shoptions} language="plaintext">
        {myData || "no records found"}
      </SyntaxHighlighter>
    </>
  );
}
