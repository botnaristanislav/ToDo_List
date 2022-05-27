const ul = document.querySelector("ul", ".todos");
const addForm = document.querySelector(".add");
const input2 = document.querySelector("#input2");
const deleteBtn = document.querySelector(".far");
const searchForm = document.querySelector(".search");
const input1 = document.querySelector("input");

// ----------------New Todo SECTION----------------------
// addEventListener to add new todo to list
addForm.addEventListener("submit", e => {
  // preventing default behaviour(refresh)
  e.preventDefault();
  // creating new html with inputted value
  const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${input2.value.trim()}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>`;
  // appending new html to ul
  ul.innerHTML += html;
  // resetting value to null after submit event
  addForm.reset();
});

// ----------------Delete Todo SECTION---------------
// Adding event listener to "ul" to specify futher the "delete" button
ul.addEventListener("click", e => {
// Adding condition to specify if "delete" button, remove parent
  if(e.target.classList.contains("delete")){
    e.target.parentElement.remove();
  }
});


//------------------Search Todo SECTION---------------
// Adding event listener to keypress in search input
searchForm.addEventListener("keyup", e => {
  // Storing value inserted by user into a const
  const value = e.target.value.toLowerCase();
  // Creating 2 arrays from HTML collections which we filter from the 'not containing' value li's
  // then vice versa, to show when it matches(removing .filtered)
  Array.from(ul.children)
    .filter(child =>{
      return (!child.innerText.toLowerCase().includes(value))
    })
    .forEach(child => child.classList.add("filtered"));

    Array.from(ul.children)
      .filter(child =>{
        return (child.innerText.toLowerCase().includes(value))
      })
      .forEach(child => child.classList.remove("filtered"));
});
