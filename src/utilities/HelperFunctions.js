import util from "util";

/**
 * function to format time in mm:ss
 * @param {*} totalSecs
 * @returns time in mm:ss
 */

export const formatTimer = (totalSecs) => {
  //mm:ss
  const seconds = totalSecs % 60;
  const minutes = (totalSecs - seconds) / 60;
  return appendZero(minutes) + ":" + appendZero(seconds);
};

/**
 * function to append zero if the val between 0 - 9
 * @param {*} val
 * @returns val with zero
 */
const appendZero = (val) => {
  if (val >= 0 && val <= 9) {
    return "0" + val;
  }
  return val;
};

export const getCurrentTime = () => {
  const currentDate = new Date();
  const hours = currentDate.getHours() % 12 || 12;
  const ampm = currentDate.getHours() < 12 ? "AM" : "PM";
  return `${hours}:00 ${ampm}`;
};

export const formatTime = (date) => {
  let minutes = date.getMinutes();
  let hours = date.getHours() % 12 || 12;

  // if(minutes>30||minutes==0){
  //   console.log(minutes)
  //   hours = hours+1;
  //   minutes="00";
  // }else{
  //   minutes="30";
  // }
  // hours = hours % 12 || 12;
  const ampm = hours < 12 ? "AM" : "PM";
  return `${appendZero(hours)}:${appendZero(minutes)} ${ampm}`;
};

export const formatDate = (dateString) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(dateString);
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};

export const logger = (item) => {
  if (__DEV__) {
    console.log(util.inspect(item, { depth: 5, colors: true }));
  }
};
