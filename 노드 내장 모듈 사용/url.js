const url = require("url");
// 인테넷 주소를 쉽게 조작하도록 도아주는 모듈
const { URL } = url;
const myURL = new URL(
  "https://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor"
);
console.log("new URL():", myURL);
console.log("url.format():", url.format(myURL)); // 분해됬던 url 객체를 다시 원래 상태로 조립
console.log("--------------------------");
const parseUrl = url.parse(
  '"https://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor"'
); // 주소를 분해
console.log("url.parse():", parseUrl);
console.log("url.format():", url.format(parseUrl));
