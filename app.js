

let allTsks = [];
console.log(allTsks);


console.log('hello world')




let userInput = document.getElementById("inp");

let task = {
    takTittle: '',
    createdDate: '',
    start: '',
    extendDate:'',
    delete(){}
}
function taskAdd(){
// let inpValue = userInput.value.trim();
    if (userInput.value !== '') {
    allTsks.push(userInput.value);
    userInput.value = '';
    userInput.focus();
    console.log(userInput.value);
    console.log(allTsks);    
    }else{
        alert("Plese enter the task here")
    } 
};


