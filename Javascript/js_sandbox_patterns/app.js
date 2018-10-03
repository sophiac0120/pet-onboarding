// (function(){


//     return {
        
//     }
// })


// const UICtrl = (function(){
//     let text = 'Hello World';

//     const changeText = function(){
//         const element = document.querySelector('h1');
//         element.textContent = text;
//     }

//     return {
//         callChangeText: function(){
//             changeText();
//         }
//     }
// })(); 

// UICtrl.callChangeText();

const ItemCtrl = (function(){
    let data = [];

    function add(item){
        data.push(item);
        console.log('Item Added.....');
    }

    function get(id){
        return data.find(item => {
            return item.id === id;
        });
    }

    return {
        add: add,
        get: get
    }
}

)();

ItemCtrl.add({id: 1, name: 'John'});
ItemCtrl.add({id:2, name: 'Mark'});

//--------------------- Factory  Patterns ---------------------
function MemberFactory(){
    this.createMember = function(name, type){
        let member;

        if (type === 'simple'){
            member = new SimpleMembership(name);
        } else if (type === 'standard'){
            member = new StandardMembership(name);
        } else if (type === 'super'){
            member = new SuperMembership(name);
        }

        member.type = type;

        member.define = function() {
            console.log(`${this.name} (${this.type}) : ${this.cost}`);
        }

        return member;
    }
}

const SimpleMembership = function(name){
    this.name = name;
    this.cost = '$5';
}

const StandardMembership = function(name){
    this.name = name;
    this.cost = '$15';
}

const SuperMembership = function(name){
    this.name = name;
    this.cost = '$25';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('Sophia', 'super'));
members.push(factory.createMember('Soo', 'super'));

console.log(members);

members.forEach(function(member){
    member.define();
});


//---------Observer patterns

function EventObserver(){
    this.observers = [];
}

EventObserver.prototype = {
    subscribe: function(fn){
        this.observers.push(fn);
        console.log(`You are subscribed to ${fn.name}`);
    },
    unsubscribe: function(fn){
        this.observers = this.observers.filter(function(item){
            if (item !== fn){
                return item;
            }
        }); 
        console.log(`You are now ununsubscribed from ${fn.name}`);
    },

    fires: function(){
        this.observers.forEach(function(item){
            item.call();
        });
    }
}

const click = new EventObserver();
document.querySelector('.sub-ms').addEventListener('click', function(){
    click.subscribe(getCurTime);
});

document.querySelector('.unsub-ms').addEventListener('click', function(){
    click.unsubscribe(getCurTime);
});

document.querySelector('.fire').addEventListener('click', function(){
    click.fires();
});

var a = new Date().getMilliseconds();
const getCurTime = function(){
    var a = new Date().getMilliseconds();
    console.log(a);
}