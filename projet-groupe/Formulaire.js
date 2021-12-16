
    const nom = document.getElementById("nom")
    const surname = document.getElementById("surname")
    const email = document.getElementById("email")
    const favorite = document.getElementById("favorite")
    const message = document.getElementById("message")


document.querySelector("#show-login").addEventListener("click",function(){
    if(formPlein()){
        document.querySelector(".popup").classList.add("active");
        nom.value = ""
        surname.value = ""
        email.value = ""
        favorite.value = ""
        message.value = ""
    }
});

document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");

});


function formPlein(){
    if(nom.value !== "" && surname.value !=="" && email.value !== "" && favorite.value !== "" && message.value !== ""){
        return true
    }
};
