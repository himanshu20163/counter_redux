const num = {
    number:0,
}
const myreducer = (mystore = num,action) =>{
    if(action.type === "number"){
        return{
            number:action.numberdata,
        };
    }
    return mystore;
}
export default myreducer;