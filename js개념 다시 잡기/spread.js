// const [head, ...rest] = [1,2,3];
// console.log(head);
// console.log(rest)

const personalData = {
    email: 'abcdef@abc.com',
    password: '*****',
};

const publicData = {
    nickName: 'abc',
};

const overrides = {
    email: 'aaaaa@aaa.aaa',
}

const user = {
    ...personalData,
    ...publicData,
    ...overrides,
}

console.log(user);

function fun1(head, ...rest){
    console.log(head);
    console.log(rest);
};

fun1(1,2,3,4);