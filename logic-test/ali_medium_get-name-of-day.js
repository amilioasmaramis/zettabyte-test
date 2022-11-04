/**
 * Direction
 * Get name of the day of 4 days ago from today
 *
 * Expected result:
 * 1. if date now = monday
 * 2. then result = thursday
 */
function convertDate(day) {
  const rulesDate = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  let returnData = [];
  for (const element of rulesDate) {
    if (element.includes(day.toLowerCase())) {
      returnData.push({ result: element });
    }
  }
  return returnData;
}
function result() {
  let date = new Date();
  date.setDate(date.getDate() - 4);

  const subsStrDay = date.toDateString().substring(0, 3);
  return convertDate(subsStrDay);
}

console.log(result());
