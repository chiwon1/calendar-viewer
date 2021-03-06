import { DAY_LIST } from "../../features/constant";

export function changeDateFormat(target) {
  const day = DAY_LIST[target.getDay()];
  const date = target.getDate();
  const month = target.getMonth() + 1;
  const year = target.getFullYear();

  return { year, month, date, day };
}

export function checkDailyEventToShow(date, currentDate) {
  const isCurrentDay = new Date(date).getDate() === new Date(currentDate).getDate();
  const isCurrentMonth = new Date(currentDate).getMonth() === new Date(date).getMonth();

  return isCurrentDay && isCurrentMonth;
};

export function checkWeeklyEventToShow(date, currentWeekDateList, currentSunday) {
  const isCurrentWeek = currentWeekDateList.map(baseDate => changeDateFormat(baseDate).date).includes(new Date(date).getDate());
  const isCurrentMonth = new Date(currentSunday).getMonth() === new Date(date).getMonth();

  return isCurrentWeek && isCurrentMonth;
};

const weeklyCalendarIndex = [];

for (let i = 0; i < 7; i++) {
  const day = [];

  for (let j = 0; j < 24; j++) {
    day.push({i, j});
  }

  weeklyCalendarIndex.push(day);
}

export default weeklyCalendarIndex;

export function getCurrentWeeklyDateList(sunday) {
  const dateList = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(sunday);

    date.setDate(date.getDate() + i);

    dateList.push(date);
  }

  return dateList;
};
