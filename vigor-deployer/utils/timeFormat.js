export function timeFormat() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let min = date.getMinutes();
  let seconds = date.getSeconds();

  return `${year}/${month}/${day} ${hour}:${min}:${seconds}`;
}