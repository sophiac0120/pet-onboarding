let re;
re = /^h/i;
re = /d$/i;

const str = 'Hellod';
const result = re.exec(str);
console.log(result);

function reTest(re, str){
    if (re.test(str)){
        console.log(`${str} matches ${re.source}`);
    }
    else{
        console.log(`${str} does not matches ${re.source}`);
    }
}

reTest(re, str)