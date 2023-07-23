// const callback = function(){
//     console.log("I am a callback function");
// }

// setTimeout(callback,3000);

// setTimeout(()=>{
//     console.log("Done");
// }, 5000);

function useCallback(callback)
{
    callback(1);
    callback(2);
    callback(3);
}

function callback(sentence) {
    console.log(sentence);
}

// TODO: execute useCallback with the callback as the argument
useCallback(callback);

function orderPizza(type, name, callback){
    console.log("Order is placed");
    console.log("Order prep has begun!");
    setTimeout(()=>{
        let msg = `Your ${type}-${name} Pizza is read! Total bill is $13`;
        callback(msg);
    },8000)
}

orderPizza("Veg","Farmhouse",(message)=>{
    console.log(message);
})