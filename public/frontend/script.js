var buttons = document.getElementById("mode");
var activeSheet = document.getElementById("active-stylesheet");
var label = document.getElementById("modelabel");
var currentLink = document.getElementById("active-stylesheet").href;

if (localStorage.getItem("lastActiveSheet")) {
    activeSheet.setAttribute("href", localStorage.getItem("lastActiveSheet"));
}

// Create a button to clear localStorage
buttons.addEventListener('change', function () {
    if(this.checked){
        label.textContent = 'to Dark Mode';
        activeSheet.setAttribute("href", currentLink.replace(/\/[^\/]*$/, '/light.css'));
        window.localStorage.setItem('lastActiveSheet', currentLink.replace(/\/[^\/]*$/, '/light.css'));
        window.localStorage.setItem('checkmode', 'checked');
    } else {
        label.textContent = 'to Light Mode';
        activeSheet.setAttribute("href", currentLink.replace(/\/[^\/]*$/, '/dark.css'));
        window.localStorage.setItem('lastActiveSheet', currentLink.replace(/\/[^\/]*$/, '/dark.css'));
        window.localStorage.setItem('checkmode', 'unchecked');
    }
});
