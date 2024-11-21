function updateProfilePicture(imageSrc) {
    var profilePics = document.querySelectorAll('#profile-pic');
    profilePics.forEach(function (profilePic) {
        profilePic.src = imageSrc;
    });
}
function acceptChanges() {
    var avatarInput = document.getElementById('avatar');
    var file = avatarInput.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var imageSrc = event.target.result;
            updateProfilePicture(imageSrc); // Update profile picture on all pages
            localStorage.setItem('profilePic', imageSrc); // Store the updated profile picture in local storage
        };
        reader.readAsDataURL(file);
    }
    var name = document.getElementById('user-name').attr("value");
    document.querySelectorAll("#username").attr("value").text(name);
    
}
document.addEventListener('DOMContentLoaded', function () {
    // Update profile picture on settings page load if a picture is stored in local storage
    var storedProfilePic = localStorage.getItem('profilePic');
    if (storedProfilePic) {
        updateProfilePicture(storedProfilePic);
    }
});
