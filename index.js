const totalAmount = document.getElementById("totalBudgetAmount");
const remainingAmount = document.getElementById("remainingBudgetAmount");
const expenseAmount = document.getElementById("expenseBudgetAmount");

// input amount and category 

const enterBudget = document.getElementById("inputBudget");
const enterAmount = document.getElementById("inputAmount");
const budgetBtn = document.getElementById("budgetBtn");
const amountBtn = document.getElementById("amountBtn");
const categoryBtn = document.getElementById("categoryBtn");
const CategoryInput = document.getElementById("Category");
const tableBody = document.getElementById("tableBody");
const d = document.getElementById("dateData");


let expenseAmountAdd = 0;
let sumOfArr = 0;



// Budget  SubmitEvent 
let store;
let arr = [];
budgetBtn.addEventListener('click', addAmount);
function addAmount(e) {
    e.preventDefault();
    if(enterBudget.value==""){
        return alert("please submit a valid number")
    }
    store = enterBudget.value;
    arr.push(parseInt(store));
    // console.log(arr);

    sumOfArr = arr.reduce((accum, curr) => {
        return accum + curr;

    });
    totalAmount.innerHTML = sumOfArr;
    enterBudget.value = "";
    console.log(sumOfArr);

}



// expenses submit 

let storeExpense;
let expenseArr = [];
amountBtn.addEventListener('click', addExpense);
function addExpense(e) {
    e.preventDefault();
    storeExpense = enterAmount.value;
    expenseArr.push(parseInt(storeExpense));
    console.log(expenseArr);

    expenseAmountAdd = expenseArr.reduce(moveExpens);
    function moveExpens(accum, curr) {
        return accum + curr;
    }
    enterAmount.value = "";
    // <<<<<<<<<<<<<<<<<<<<remaining balance >>>>>>>>>>>>>>>>>>>>>>>

    let remaining = sumOfArr - expenseAmountAdd;
    if (remaining > 0)
        remainingAmount.innerHTML = remaining;
    if (remaining)
        // console.log(remaining);



        if (expenseAmountAdd < arr) 
            expenseAmount.innerHTML = expenseAmountAdd;


    const optionValue = document.getElementById("selectItem");
    const op = optionValue.value;
    const dateData = d.value;
    const tr = document.createElement("tr");
    console.log(dateData);
    if (optionValue.value && expenseAmountAdd && d.value !== 0)

        tr.innerHTML = `<td>${dateData}</td>
        <td>${op}</td>
        <td>${storeExpense}</td>
<td><button onClick="deleteBtn(this)" id="delete">Delete</button></td>
<td><button onClick="updateData(this)">Update</button></td>
`;
    tableBody.appendChild(tr);
    d.value = "";
    optionValue.value = "";

}

categoryBtn.addEventListener('click', addCategorys);
function addCategorys(e) {
    e.preventDefault();
    if(CategoryInput.value ==""){
        return alert("Please Enter a category..")
    }

    let category = CategoryInput.value;
    const selectItem = document.getElementById("selectItem");
    const option = document.createElement("option");
    option.innerText = category;
    selectItem.appendChild(option);

    // console.log(category);
    CategoryInput.value = "";
}


// <<<<<<<<<<<<delete table row data >>>>>>>>>>>>>>>

function deleteBtn(e){
    let Row = e.parentNode.parentNode;
    // console.log(Row);
    Row.parentNode.removeChild(Row);

}

// <<<<<<<<<<<<<<<<<update table row data >>>>>>>>>>>>>>>

function updateData(e){
    let updateRow = e.parentNode.parentNode;
    const updateModal = document.querySelector(".updateModal");
    updateModal.classList.add("display");

}