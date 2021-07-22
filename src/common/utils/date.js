export default function changeDateFormat(target) {
  const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = dayList[target.getDay()];
  const date = target.getDate();
  const month = target.getMonth() + 1;
  const year = target.getFullYear();

  return { year, month, date, day };
}
