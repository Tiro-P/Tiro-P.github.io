const addPower = document.getElementById("addPower")
const powerCreator = document.getElementById("powerCreator");
const PowerCreatorExit = document.getElementById("powerCreatorExitButton")

// Open Power Creator
addPower.addEventListener("click", function () {
    powerCreator.classList.add("active")
});

// Close Power Creator without saving
PowerCreatorExit.addEventListener("click", function () {
    powerCreator.classList.remove("active")
});

const effectType = document.querySelectorAll(".effectType")

effectType.forEach(element => {
    element.addEventListener("click", function () {
        const allGroups= document.querySelectorAll(".effectGroup")
        let i=0
        for (i; i<allGroups.length; ++i){
            allGroups[i].style.display="none"
        };

        let effectGroup = element.getAttribute("data-group");
        let effect = document.getElementById(effectGroup);
        effect.style.display="flex";
    });
});

const effect = document.querySelectorAll("[name='effect']")

effect.forEach(element=>{
    element.addEventListener("click", function(){
        const allEffects = document.querySelectorAll(".effectDescription")

        let i=0
        for (i; i<allEffects.length; ++i){
            allEffects[i].style.display="none"
        };
        let chosenEffect= element.getAttribute("value")
        console.log(chosenEffect)
        let effectDescription = document.getElementById(chosenEffect+"Description")
        console.log(effectDescription)
        effectDescription.style.display="flex"
    })
})

