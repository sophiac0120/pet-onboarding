try {
    myFunction();
} catch(e){
    console.log(e);
    console.log(e.name);
    console.log(e.message);
    console.log(e instanceof TypeError);
} finally {
    console.log('Finally runs regardless of result')
}

let re;

re = /hello/i;

const result = re.exec('brad hello world'); 
const result2 = re.exec('brad HELLO');

console.log(result);

console.log(result2);