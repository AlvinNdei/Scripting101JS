// alert('Hello there');
// let age=prompt('enter your age');
// if (age<18){
//     console.log('you are not allowed to vote');
// }else{
//     console.log('you are allowed to vote buddy');
// }
// let num=10;
// for(i=0;i<num;i++){
//     console.log(i);
// }
// let num=0;
let button=document.getElementById('mybutton');
button.addEventListener("click",function(){
    alert('Your Info was submitted');
    console.log('User clicked the submit button');
});