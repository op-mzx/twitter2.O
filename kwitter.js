function adduser() {
    user_name= document.getElementById("user_name").value;
    console.log("user_name",user_name);
    localStorage.setItem("user_key", user_name);
window.location="twitter2_0_room.html";

}