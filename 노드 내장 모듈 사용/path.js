const path = require("path");
const string = __filename;
console.log("path.sep:", path.sep); // 경로의 구분자
console.log("path.delimiter:", path.delimiter); // 환경 변수의 구분자
console.log("-----------------------------");
console.log("path.dirname():", path.dirname(string)); // 파일이 위치한 폴더 경로
console.log("path.extname():", path.extname(string)); // 파일의 확장자
console.log("path.basename():", path.basename(string)); // 파일의 이름(확장자 포함)표시
console.log(
  "path.basename - extname:",
  path.basename(string, path.extname(string))
);
console.log("-----------------------------");
console.log("path.parse():", path.parse(stirng)); // 파일 결로를 root, dir, base, ext, name으로 분리
console.log(
  "path.format():",
  path.format({
    dir: "C:\\users\\zerocho",
    name: "path",
    ext: ".js",
  })
); // path.parse한 객체를 파일 경로로 합칩니다.
console.log(
  "path.normalize():",
  path.normalize("C://users\\\\zerocho\\path.js")
); // /나 \를 실수로 여러번 사용했거나 혼용했을 때 정상적인 경로로 변환
console.log("-----------------------------");
console.log("path.isAbsolute(C:\\)", path.isAbsolute("C:\\")); // 파일의 경로가 절대경로인지 상대경로인지를 true나 false로 알립니다.
console.log("path.isAbsolute(./home)", path.isAbsolute("./home"));
console.log("----------------------------");
console.log(
  "path.relative():",
  path.relative("C:\\users\\zerocho\\path.js", "C:\\")
); // 경로를 두 개 넣으면 첫 번째 경로에서 두 번째 경로로 가는 방법을 알립니다.
console.log(
  "path.join():",
  path.join(__dirname, "..", "..", "/users", ".", "/zerocho")
); // 여러 인수를 넣으면 하나의 경로로 합칩니다.
console.log(
  "path.resolve(:",
  path.resolve(__dirname, "..", "users", ".", "/zerocho")
); // path.join과 비슷하지만 resolve는 절대경로로 join은 상대경로로 처리
