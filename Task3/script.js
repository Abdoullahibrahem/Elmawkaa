function myFunction() //function for the firrst dropdown list, used to open the list when the user click on it // 
{
    document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction2()// function for the second dropdownlist, used to open the list when the user click on the search bar//
{
    document.getElementById("myDropdown2").classList.toggle("show");
}


// this is for filtering the search by putting the wanted element at the to of the list while searching //
function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("search");//will take input from the user and store it in "input" v//
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown2");//store elements of the list in "div" var//
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) { //loop to itirate for the result//
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }