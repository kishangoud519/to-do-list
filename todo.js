const inputBox = document.getElementById("input");
const listContainer = document.getElementById("list-container");

function AddTask()
{
    if(inputBox.value === '')
    {
        alert("You must Write Something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    count();
    saveData();

}

listContainer.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        alert("you have removed task");
        count();
        saveData();
    }
}, false);
function count()
{
    let countitems = document.getElementsByTagName("li");
    let countlist = countitems.length;
    if(countlist != 0){
    document.getElementById("task").innerHTML = "Task " + countlist;
    }
    else
    {
    document.getElementById("task").innerHTML = " ";
    }

    
}

function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
