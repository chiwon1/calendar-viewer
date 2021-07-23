export function changeDateFormat(target) {
  const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = dayList[target.getDay()];
  const date = target.getDate();
  const month = target.getMonth() + 1;
  const year = target.getFullYear();

  return { year, month, date, day };
}

export function checkDailyEventToShow(date, currentDate) {
  const isCurrentDay = date.getDate() === new Date(currentDate).getDate();
  const isCurrentMonth = new Date(currentDate).getMonth() === date.getMonth();

  return isCurrentDay && isCurrentMonth;
};

export function checkWeeklyEventToShow(date, currentWeekDateList, currentSunday) {
  const isCurrentWeek = currentWeekDateList.map(baseDate => changeDateFormat(baseDate).date).includes(date.getDate());
  const isCurrentMonth = new Date(currentSunday).getMonth() === date.getMonth();

  return isCurrentWeek && isCurrentMonth;
};

export const dayList = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const weeklyCalendarIndex = [];

for (let i = 0; i < 7; i++) {
  const day = [];

  for (let j = 0; j < 24; j++) {
    day.push({i, j});
  }

  weeklyCalendarIndex.push(day);
}

export default weeklyCalendarIndex;
