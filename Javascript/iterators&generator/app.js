function nameIterator(names){
    let nextIndex = 0;

    return {
        next: function(){
            return nextIndex < names.length ? 
                { value: names[nextIndex++], done: false } :
                {done : true}
            }
        }
    }

// Create an array of names
const namesArr = ['Jack', 'Jill', 'John'];
const names = nameIterator(namesArr);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
 

function* sayNames(){
    yield 'Jack';
    yield 'Sophia';
    yield 'Matt';
}

const name = sayNames();
console.log(name.next());

function* createIDs() {
    let index = 0;

    while(true){
        yield index++;
    }
}

const gen = createIDs();
console.log(gen.next().value);

const key1 = Symbol();
const key2 = Symbol('123');

const keyDict = {};

keyDict[key1] = 'Props';
keyDict[key2] = 'Props2';
keyDict.key3 = 'Props3';
keyDict.key4 = 'Props4';

for (let i in keyDict){
    console.log(`${i} : ${keyDict[i]}`);
}

const employee = {
    nameO : 'Sophia',
    age: 21,
    city: 'Hamilton',
    position: 'intern'
};

const {nameO, age, position} = employee;

console.log(employee);