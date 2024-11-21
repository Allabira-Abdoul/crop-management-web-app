
$("button").click(function () {
    var name = $(this).attr("name");
    $(".title").text(name);
});
function signup() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
}
// Fetch last opened files from backend
$.getJSON('/api/RecentFilesList')
    .done(function (data) {
        const lastOpenedFilesList = $('#RecentFilesList');
        // Clear existing list items
        lastOpenedFilesList.empty();
        // Iterate over last opened files data and create list items
        $.each(data, function (index, file) {
            $('<li>').text(file.name).css('border-bottom', '1px solid #ccc').appendTo(lastOpenedFilesList);
        });
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        console.error('Error fetching last opened files:', textStatus, errorThrown);
    });
const inputBox = document.getElementById("InputBox");
const listContainer = document.getElementById("list-container");
function AddTask() {
    if (inputBox.value === '') {
        alert("You must enter a task before!!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
};
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
function clearForm() {
    document.getElementById("create-event-form").reset();
};