/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");
let mode = "light";
let i = 0;
function changeTheme()
{
  const body = document.body;
  body.classList.toggle("dark-mode");
  const button = document.getElementById("button");
  if (mode == "light")
  {
    button.innerText = "Change to Light Mode";
    mode = "dark";
  }
  else if (mode == "dark")
    {
      button.innerText = "Change to Dark Mode";
      mode = "light";
    }
}
function addTheNumbers()
{
  const numberArea = document.getElementById("numberarea");
  var num = document.createElement("P");
  num.innerHTML = i;
  i += 1;
  document.body.appendChild(num);
}