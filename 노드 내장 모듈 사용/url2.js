const { URL } = require("url");

const myUrl = new URL(
  "http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript"
);
console.log("searchParams:", myUrl.searchParams);
console.log("searchParams.getAll():", myUrl.searchParams.getAll("category")); // 키에 해당하는 모든 값들을 가져온다.
console.log("searchParams.get():", myUrl.searchParams.get("limit")); // 키에 해당하는 첫 번째 값만 가져온다.
console.log("searchParams.has():", myUrl.searchParams.has("page")); // 해당 키가 있는지 검사

console.log("searchParams.keys():", myUrl.searchParams.keys()); // searchParams의 모든 키를 iterator 객체로 가져온다.
console.log("searchParams.values():", myUrl.searchParams.values()); // searchParams의 모든 값을 iterator 객체로 가져온다.

myUrl.searchParams.append("filter", "es3"); // 해당 키를 추가
myUrl.searchParams.append("filter", "es5");
console.log(myUrl.searchParams.getAll("filter"));

myUrl.searchParams.set("filter", "es6"); // 같은 키의 값들을 모두 지우고 추가
console.log(myUrl.searchParams.getAll("filter"));

myUrl.searchParams.delete("filter"); // 해당 키를 제거
console.log(myUrl.searchParams.getAll("filter"));

console.log("searchParams.toString():", myUrl.searchParams.toString()); // 조작한 searchParams 객체를 다시 문자열로 만들다.
myUrl.search = myUrl.searchParams.toString(); // search에 대입
