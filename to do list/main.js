const list = document.getElementById("list");
const taskinput = document.getElementById("task");
const add = document.getElementById("add");
const remove = document.getElementById("remove");

function showAlert(){
   if (taskinput.value.trim()===""){
   alert("plzz enter the task");

}else{
   let li = document.createElement("li");
   li.innerText = taskinput.value;
   list.appendChild(li);
   taskinput.value = "";

}
};
remove.addEventListener("click", function() {
   
   const lastItem = list.lastElementChild;

   if (lastItem) {
      lastItem.remove();
   } else {
      alert("Add task ");
   }
});
