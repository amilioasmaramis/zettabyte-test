// Question
// Given a object data, return the data multiple by 3 and sort the data.
// Expected output : { j: 0, k: 9, i: 18, l: 36 }

// const data = { i: 6, j: null, k: 3, l: 12 };
const data = { i: 18, j: 0, k: 9, l: 36 };

function changeValuesData(data) {
  let tmpArr = [];
  for (const key in data) {
    if (!data[key]) {
      tmpArr.push({ key: key, values: 0 });
    } else {
      tmpArr.push({
        key: key,
        values: data[key],
      });
    }
  }
  return tmpArr;
}

function convertData(data) {
  let tmpArrConvert = [];
  for (const element of data) {
    if (element.values % 3 === 0) {
      tmpArrConvert.push({ key: element.key, values: element.values });
    }
  }
  return tmpArrConvert;
}

function sortValues(values) {
  return values.sort(function (a, b) {
    return a - b;
  });
}

function result(data) {
  // write your code here
  // assume when values of object null = 0
  const changesValuesFormat = changeValuesData(data);

  const convert = convertData(changesValuesFormat);

  let tmpSortValues = [];
  for (const element of convert) {
    tmpSortValues.push(element.values);
  }

  const sortData = sortValues(tmpSortValues);

  let tmpReturnData = {};
  if (convert.length === sortData.length) {
    for (const elementSort of sortData) {
      for (const element of convert) {
        if (elementSort === element.values) {
          tmpReturnData[element.key] = elementSort;
        }
      }
    }
  }
  return tmpReturnData;
}

console.log(result(data));
