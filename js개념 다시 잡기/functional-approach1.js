const people = [
    {
        age: 20,
        city: '서울',
        pet: ['cat','dog'],
    },
    {
        age: 40,
        city: '부산',
    },
    {
        age: 31,
        city: '대구',
        pet: ['cat','dog'],
    },
    {
        age: 36,
        city: '서울',
    },
    {
        age: 27,
        city: '부산',
        pet: 'cat',
    },
    {
        age: 24,
        city: '서울',
        pet: 'dog',
    },
];

// 문제 30대 미만이 한 명이라도 사는 모든 도시
// 문제 각 도시별로 개와 고양이를 키우는 사람의 수

function solvedA(){
    const cities = [];
    for(const person of people) {
        if(person.age < 30){
            if(!cities.find(city => person.city === city)){
                cities.push(person.city);
            }
        }
        console.log(person);
    }
    return cities;
}

console.log(solvedA());

function solveAFunctional(){
    const allCities =  people.filter(person => person.age < 30).map(person => person.city);
    const set = new Set(allCities);
    console.log(allCities);
    return Array.from(set);
}

console.log(solveAFunctional());

// 두 번째 문제

function solveB() {
    const result = {};

    for(const person of people) {
        const {city, pet: petOrPets} = person;
        if(petOrPets) {
            const petsOfCity = result[city] || {};
            if(typeof petOrPets === 'string'){
                const pet = petOrPets;
                petsOfCity[pet] = petsOfCity[pet] ? petsOfCity[pet] + 1 : 1;
            }else{
                for(const pet of petOrPets) {
                    petsOfCity[pet] = petsOfCity[pet] ? petsOfCity[pet] + 1 : 1;
                }
            }
            result[city] = petsOfCity;
        }
    }
    return result;
}

console.log('solveB', solveB());

function solveBModern(){
    return people.map(({pet: petOrPets, city}) => {
        const pets = typeof petOrPets === 'string' ? [petOrPets] : petOrPets || [];
        return {
            city,
            pets,
        }
    }).flatMap(({ city, pets }) => pets.map(pet => [city, pet]))
    .reduce((result, [city, pet]) => {
        if(!city || pet){
            return result;
        }

        return {
            ...result,
            [city]: {
                ...result[city],
                [pet]: (result[city]?.[pet] || 0) + 1
            }
        }
    }, {});
}

console.log(solveBModern());