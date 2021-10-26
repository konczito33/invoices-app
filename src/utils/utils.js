export const generateId = () => {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let id = '';
  const getRandomLetter = () => {
    let rand = (Math.random() * 25).toFixed();
    return letters[rand];
  };
  const getRandomNumber = () => (Math.random() * 9).toFixed();
  getRandomLetter();
  for (let i = 0; i < 6; i++) {
    if (i < 2) {
      id += getRandomLetter();
    } else {
      id += getRandomNumber();
    }
  }
  return id;
};

export function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}
