let table = document.body.firstElementChild;
console.log(table.tBodies[0].children)
let rows = table.rows
// for(i = 0; i <= rows.length; i++ ) {
//     rows[i].cells[i].style.backgroundColor = "red";
// }



for(i = 0; i <= rows.length; i++) {
    rows[i].cells[rows.length - i - 1].style.backgroundColor = 'red';   
}
