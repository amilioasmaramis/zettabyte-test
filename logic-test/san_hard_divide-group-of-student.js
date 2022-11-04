/**
 * Direction
 * Divide students to all of groups & students must sorted by first name
 *
 * Expected Result
 * [
 *   [
 *     { "firstName": "Belle", "lastName": "Norton" },
 *     { "firstName": "Finnley", "lastName": "Rennie" }
 *   ],
 *   [
 *     { "firstName": "Kai", "lastName": "Lyons" },
 *     { "firstName": "Peyton", "lastName": "Gardner" }
 *   ],
 *   [{ "firstName": "Tatiana", "lastName": "Dickerson" }]
 * ]
 */
const students = [
  { firstName: "Kai", lastName: "Lyons" },
  { firstName: "Belle", lastName: "Norton" },
  { firstName: "Finnley", lastName: "Rennie" },
  { firstName: "Tatiana", lastName: "Dickerson" },
  { firstName: "Peyton", lastName: "Gardner" },
  // { firstName: "zooxs", lastName: "Gardner" },
  // { firstName: "zkzk", lastName: "Gardner" },
  // { firstName: "zlzl", lastName: "Gardner" },
];
const groups = 3;

function sortedData(data) {
  return data.sort((a, b) => {
    let tmpFirstnameA = a.firstName.toLowerCase();
    let tmpFirstnameB = b.firstName.toLowerCase();

    if (tmpFirstnameA < tmpFirstnameB) {
      return -1;
    }
    if (tmpFirstnameA > tmpFirstnameB) {
      return 1;
    }
    return 0;
  });
}

function groupingRules(tmpSortedArr, groups) {
  let groupBy = Math.round(tmpSortedArr.length / groups);
  let groupByZero = 0;
  console.log(groupBy, groupByZero, groups, "groupp");
  if (groupBy === 0) {
    groupByZero = Math.round(tmpSortedArr.length / groups);
  } else if (groupBy === 1) {
    groupByZero = 1;
  }
  return { groupBy, groupByZero };
}

function result(students, groups) {
  // your code here
  let tmpSortedArr = sortedData(students);

  const { groupBy, groupByZero } = groupingRules(tmpSortedArr, groups);

  let tmpReturnData = [];
  let tmpArr = [];
  for (let i = 0; i < tmpSortedArr.length; i++) {
    if (groupBy === 0) {
      tmpArr.push(tmpSortedArr[i]);
      if (tmpArr.length === groupByZero) {
        tmpReturnData.push(tmpArr);
        tmpArr = [];
      }
    }
    if (groupBy === 1) {
      tmpArr.push(tmpSortedArr[i]);
      if (
        tmpArr.length === groupByZero &&
        tmpReturnData.length !== tmpSortedArr.length - 2
      ) {
        tmpReturnData.push(tmpArr);
        tmpArr = [];
      }
      if (i === tmpSortedArr.length - 2 && tmpReturnData.length === i) {
        tmpReturnData.push(tmpArr);
      }
    } else {
      tmpArr.push(tmpSortedArr[i]);
      if (
        tmpArr.length === groupBy &&
        groupBy !== 0 &&
        tmpReturnData.length !== groupBy
      ) {
        tmpReturnData.push(tmpArr);
        tmpArr = [];
      }
      if (i === tmpSortedArr.length - 1) {
        tmpReturnData.push(tmpArr);
      }
    }
  }
  return tmpReturnData;
}

console.log(result(students, groups));
