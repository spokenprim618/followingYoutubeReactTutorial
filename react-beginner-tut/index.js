//regular DOM
// 
//  let incrementBtn =document.getElementById("increment-btn");
// let countDisplay =document.getElementById("count-display");
// let currentCount = 0;
// let g;
// console.log(countDisplay)
// incrementBtn.addEventListener('click',g= ()=>{
//     currentCount++;
//     countDisplay.innerHTML = currentCount;
// });

// regular react and reactDOM

// let reactContentRoot = document.getElementById("root");
// // putting content inside div
// ReactDOM.render("hello world", reactContentRoot);
// // to create an html element first par is element next is props final is content
// let myFirstElement= React.createElement('ul',null,
// React.createElement('li',null,'item1'),
// React.createElement('li',null,'item2')

// );
// // for anyhting to show must use render like below
// ReactDOM.render(myFirstElement,reactContentRoot);
let myItem= "item3"
let myJSXElement ={
    <ul>
    <li>item1</li>
    <li>item2</li>
    <li>{myItem.toUpperCase}</li>

    </ul>
};
ReactDOM.render(myJSXElement,reactContentRoot);
