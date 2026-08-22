// input locations
const powerlevel = document.getElementById("powerLevel");

const abilityscore = Array.from(document.getElementsByClassName("abilityscore"));
const defensestats = Array.from(document.querySelectorAll(".defenseRank , .defenseEnhance"));
const usedpoints = Array.from(document.getElementsByClassName("usedPoints"));
const skillstats = Array.from(document.querySelectorAll('.skillRank , .skillEnhance'));
const skillgroups = Array.from(document.getElementsByClassName("skillinputgroup"));

const usedoffensepoints = document.getElementById("usedOffensePoints")
const usedadvantagepoints = document.getElementById("UsedAdvantagePoints")
const usedskillpoints = document.getElementById("UsedSkillPoints")

//Abilities
const strength = document.getElementById("strength")
const agility = document.getElementById("agility")
const fighting = document.getElementById("fighting")
const awareness = document.getElementById("awareness")
const stamina = document.getElementById("stamina")
const dexterity = document.getElementById("dexterity")
const intellect = document.getElementById("intellect")
const presence = document.getElementById("presence")

//Offense
const initbonus = document.getElementById("initiativeBonus")

// Defense
const dodgerank = document.getElementById("dodgeRank")
const parryrank = document.getElementById("parryRank")
const toughnessrank = document.getElementById("toughnessRank")
const fortituderank= document.getElementById("fortitudeRank")
const willrank= document.getElementById("willRank")
const dodgeenhance = document.getElementById("dodgeEnhance")
const parryenhance = document.getElementById("parryEnhance")
const toughnessenhance = document.getElementById("toughnessEnhance")
const fortitudeenhance= document.getElementById("fortitudeEnhance")
const willenhance= document.getElementById("willEnhance")

// output locations
const availablepowerpoints = document.getElementById("availablePowerPoints")
const usedabilitypointsoutput = document.getElementById("usedAbilityPoints");
const useddefensestatpointsoutput = document.getElementById("UsedDefenseStatPoints")
const usedSkillPointsOutput = document.getElementById("UsedSkillPoints")
const spenttotal = document.getElementById("spentTotal")
const initTotal = document.getElementById("initiative")
// stat displays
const StrengthDisplay = Array.from(document.getElementsByClassName("strengthDisplay"))
const AgilityDisplay = Array.from(document.getElementsByClassName("agilityDisplay"))
const FightingDisplay = Array.from(document.getElementsByClassName("fightingDisplay"))
const AwarenessDisplay = Array.from(document.getElementsByClassName("awarenessDisplay"))
const StaminaDisplay = Array.from(document.getElementsByClassName("staminaDisplay"))
const DexterityDisplay = Array.from(document.getElementsByClassName("dexterityDisplay"))
const IntellectDisplay = Array.from(document.getElementsByClassName("intellectDisplay"))
const PresenceDisplay = Array.from(document.getElementsByClassName("presenceDisplay"))
//Defense outputs
const DodgeTotal = document.getElementById("dodgeTotal")
const ParryTotal = document.getElementById("parryTotal")
const ToughnessTotal = document.getElementById("toughnessTotal")
const FortitudeTotal = document.getElementById("fortitudeTotal")
const WillTotal = document.getElementById("willTotal")
//Skill outputs
const AcrobaticsTotal = document.getElementById('AcrobaticsTotal')
const AthleticsTotal = document.getElementById('AthleticsTotal')
const CloseCombatTotal = document.getElementById('CloseCombatTotal')
const DeceptionTotal = document.getElementById('DeceptionTotal')
const ExpertiseTotal = document.getElementById('ExpertiseTotal')
const InsightTotal = document.getElementById('InsightTotal')
const IntimidationTotal = document.getElementById('IntimidationTotal')
const InvestigationTotal = document.getElementById('InvestigationTotal')
const PerceptionTotal = document.getElementById('PerceptionTotal')
const PersuasionTotal = document.getElementById('PersuasionTotal')
const RangedCombatTotal = document.getElementById('RangedCombatTotal')
const SlightofHandTotal = document.getElementById('SlightofHandTotal')
const StealthTotal = document.getElementById('StealthTotal')
const TechnologyTotal = document.getElementById('TechnologyTotal')
const TreatmentTotal = document.getElementById('TreatmentTotal')
const VehiclesTotal = document.getElementById('VehiclesTotal')
// Variables?
var abilitypoints = 0
var powerpoints = powerlevel.value*15
var UsedAbilityPoints = 0
var UsedPowerPoints = 0
var AvailablePoints= powerpoints - UsedPowerPoints

// #region Save across instances (not my code)
document.addEventListener('input', (e) => { 
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') { 
    localStorage.setItem(e.target.id, e.target.value); 
  } 
}); 

document.addEventListener('DOMContentLoaded', () => { 
  document.querySelectorAll('input, textarea').forEach((el) => { 
    const savedValue = localStorage.getItem(el.id); 
    if (savedValue !== null) { 
      el.value = savedValue; 
    } 
    updateUsedAbilityPoints();
    updateUsedDefenseStatPoints();
    updateSpentSkillPoints();
    updateTotalUsedPoints();
    updateAvailablePowerPoints();
    fillAbilityDisplays();
    fillMathSections();
    skillMath();
       
  }); 
});
// #endregion
// All my code
powerlevel.addEventListener("input", updateAvailablePowerPoints);

initbonus.addEventListener("input", fillMathSections);

abilityscore.forEach(element =>{
    element.addEventListener("input", (event) => {
        updateUsedAbilityPoints();
        updateTotalUsedPoints();
        updateAvailablePowerPoints();
        fillAbilityDisplays();
        fillMathSections();
    });
});
defensestats.forEach(element =>{
    element.addEventListener("input", (event) => {
        updateUsedAbilityPoints();
        updateTotalUsedPoints();
        updateAvailablePowerPoints();
        fillAbilityDisplays();
        fillMathSections();
        updateUsedDefenseStatPoints();

    });
});

skillstats.forEach(element =>{
    element.addEventListener("input", (event) => {
        skillMath();
        updateSpentSkillPoints();
        updateTotalUsedPoints();
        updateAvailablePowerPoints();
        

    });
});


function updateAvailablePowerPoints(){
    powerpoints = powerlevel.value * 15;
    AvailablePoints= powerpoints - UsedPowerPoints
    availablepowerpoints.value = AvailablePoints;

    if (AvailablePoints<0){
        addError(availablepowerpoints)
    } else {
        clearError(availablepowerpoints)
    }
};

function updateUsedAbilityPoints(){
    usedabilitypointsoutput.value = (+strength.value + +agility.value + +fighting.value + +awareness.value + +stamina.value + +dexterity.value + +intellect.value + +presence.value) * 2;
};

function updateUsedDefenseStatPoints(){
 useddefensestatpointsoutput.value = (+dodgerank.value + +parryrank.value + +toughnessrank.value + +fortituderank.value + +willrank.value);

 DodgeTotal.value = (+strength.value + +dodgerank.value + +dodgeenhance.value)
 ParryTotal.value = (+fighting.value + +parryrank.value + +parryenhance.value)
 ToughnessTotal.value = (+stamina.value + +toughnessenhance.value)
 FortitudeTotal.value = (+stamina.value + +fortituderank.value + +fortitudeenhance.value)
 WillTotal.value = (+ awareness.value + +willrank.value + +willenhance.value)

 if((+DodgeTotal.value + +ToughnessTotal.value) > (+powerlevel.value*2)){
    addError(DodgeTotal);
    addError(ToughnessTotal,"TDConflict");
 } else {
    clearError(DodgeTotal);
    clearError(ToughnessTotal,"TDConflict");
 };
 if((+ParryTotal.value + +ToughnessTotal.value) > (+powerlevel.value*2)){
    addError(ParryTotal);
    addError(ToughnessTotal,"TPConflict");
 } else {
    clearError(ParryTotal);
    clearError(ToughnessTotal,"TPConflict");
 };
 if((+WillTotal.value + +FortitudeTotal.value) > (+powerlevel.value*2)){
    addError(WillTotal);
    addError(FortitudeTotal);
 } else {
    clearError(WillTotal);
    clearError(FortitudeTotal);
 };
 if (((+ParryTotal.value + +ToughnessTotal.value) > (+powerlevel.value*2))&&((+DodgeTotal.value + +ToughnessTotal.value) > (+powerlevel.value*2))){
    addError(ToughnessTotal,"TDPConflict");
 } 
 else {
    ToughnessTotal.classList.remove("TDPConflict");
 };
};

function addError(element,errorType="error"){
    element.classList.add(errorType);
};

function clearError(element,errorType="error"){
    element.classList.remove(errorType);
};

function fillAbilityDisplays(){
    StrengthDisplay.forEach(element => {
        element.value = strength.value;
    });
    AgilityDisplay.forEach(element => {
        element.value = agility.value;
    });
    FightingDisplay.forEach(element => {
        element.value = fighting.value;
    });
   AwarenessDisplay.forEach(element => {
        element.value = awareness.value;
    });
   StaminaDisplay.forEach(element => {
        element.value = stamina.value;
    });
   DexterityDisplay.forEach(element => {
        element.value = dexterity.value;
    });
    IntellectDisplay.forEach(element => {
        element.value = intellect.value;
    });
    PresenceDisplay.forEach(element => {
        element.value = presence.value;
    });
}

function fillMathSections(){
    // initiative
    initTotal.value = +initbonus.value + +agility.value;
    // defense
}

function updateTotalUsedPoints(){
    // update value
    UsedPowerPoints = (+usedabilitypointsoutput.value + +usedSkillPointsOutput.value + +useddefensestatpointsoutput.value);
    // set display to value
    spenttotal.value = UsedPowerPoints;
};

function skillMath(){
    skillgroups.forEach(element => {
        const inputs = element.querySelectorAll('.skillRank , .skillEnhance , .skillDisplay');
        const output = element.querySelector(".skillTotal")
        let total= 0;

        for (i=0; i<inputs.length; ++i){
            total += +inputs[i].value;
        };
        output.value=total;
        if ((+total) > (+powerlevel.value+10)){
            addError(output);
        } else {
            clearError(output);
        }
    });
};
function updateSpentSkillPoints(){
    const skillRanks = document.querySelectorAll(".skillRank");
    let spentSkillPoints= 0;

    for (i=0; i<skillRanks.length; ++i){
        spentSkillPoints += (+skillRanks[i].value/2);
    };
    usedSkillPointsOutput.value = spentSkillPoints;
    console.log(spentSkillPoints);
}
// `${skillName}`Total = (+document.getElementById(${skillName}Display).value + +document.getElementById(`${skillName}'Rank).value + +document.getElementById(`${skillName}Enhance`).value)