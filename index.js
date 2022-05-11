
let skills = document.getElementsByClassName("skills")[0];
let about = document.getElementsByClassName("about")[0];
let contact = document.getElementsByClassName("contact")[0];
let education = document.getElementsByClassName("education")[0];
let hobbies = document.getElementsByClassName("hobbies")[0];
let containerSkills = document.getElementsByClassName("container-skills")[0];
let containerContact = document.getElementsByClassName("container-contact")[0];
let containerEducation = document.getElementsByClassName("container-education")[0];
let containerHobbies = document.getElementsByClassName("container-hobbies")[0];
let containerAbout = document.getElementsByClassName("container-about")[0];
let skillsIt = document.getElementsByClassName("skills-it")[0];
let skillFlex =document.getElementsByClassName("skills-flexing")[0];
let right =document.getElementsByClassName("arrow-right")[0];
let left =document.getElementsByClassName("arrow-left")[0];
let skillsLang =document.getElementsByClassName("skills-lang")[0];
let skillSoft =document.getElementsByClassName("skills-soft")[0];
let eduCont =document.getElementsByClassName("skills-education")[0];
let hidingTrick =document.getElementsByClassName("hiding");
let buttonAbout =document.getElementsByClassName("input-aboutBut")[0];
let secretInfo =document.getElementsByClassName("secret-info")[0];
let aboutSymbol =document.getElementsByClassName("about-me")[0];
let form =document.getElementsByTagName('form')[0];
let skillList =[skillsIt, skillSoft, skillsLang]
skills.addEventListener('click', skillses)
function skillses(){
containerSkills.style.display ='block';
skillsIt.style.display = 'block';
skillsIt.scrollTop = 0;
skillSoft.style.display ='none';
skillsLang.style.display ='none';
}
document.addEventListener('mouseup', function(event) {
    var isClickInsideElement = containerSkills.contains(event.target);
    if (!isClickInsideElement) {
containerSkills.style.display ='none';
    }})
right.addEventListener('click', changeSkills)
function changeSkills(){
    for (let x =0; x <skillList.length; x++){
        skillList[x].style.display='none'
    }
    skillList[0].style.display = 'block'
    skillList[0].scrollTop = 0;
    skillList.unshift(skillList.pop())
}
left.addEventListener('click', changeSkillsBack)
function changeSkillsBack(){
    for (let x=0;x < skillList.length; x++){
        skillList[x].style.display='none'
    }
    skillList[0].style.display = 'block'
    skillList[0].scrollTop = 0;
    skillList.push(skillList.shift())
}
contact.addEventListener('click', contacts)
function contacts(){
    containerContact.style.display ='block'
}
document.addEventListener('mouseup', function(event) {
    var isClickInsideElement = containerContact.contains(event.target);
    if (!isClickInsideElement) {
containerContact.style.display ='none';
    }})
education.addEventListener('click', educate)
function educate(){
    containerEducation.style.display ='block';
    eduCont.scrollTo(0,0);
}

document.addEventListener('mouseup', function(event) {
    var isClickInsideElement = containerEducation.contains(event.target);
    if (!isClickInsideElement) {
containerEducation.style.display ='none';
    }})
hobbies.addEventListener('click', hobby)
function hobby(){
    containerHobbies.style.display ='block';
}

document.addEventListener('mouseup', function(event) {
    var isClickInsideElement = containerHobbies.contains(event.target);
    if (!isClickInsideElement) {
containerHobbies.style.display ='none';
    }})
for (let y of hidingTrick){
    y.addEventListener('click', hideMi)
    function hideMi(){
        y.style.backgroundColor='rgba(0, 0, 0, 0.39)';
}}
about.addEventListener('click', aboutShow)
function aboutShow(){
    containerAbout.style.display ='block';
    containerAbout.scrollTop = 0;
}
document.addEventListener('mouseup', function(event) {
    var isClickInsideElement = containerAbout.contains(event.target);
    if (!isClickInsideElement) {
containerAbout.style.display ='none';
    }})

form.addEventListener('keypress', function(event) {
    if (event.key === 'Enter')
    {
        event.preventDefault();
    }
});
buttonAbout.addEventListener('click', getPass)
let aboutMi =document.getElementsByClassName("about-message")[0]
function getPass(){
let aboutInput =document.getElementsByClassName("about-input")[0].value;
if (aboutInput === 'wanted' || aboutInput === 'Wanted'|| aboutInput === 'WANTED'){
    secretInfo.style.display = 'block'
    aboutSymbol.classList.add('colorfulPass')
    aboutSymbol.style.cursor ='pointer'
    aboutSymbol.addEventListener('click', aboutSym)
    function aboutSym(){
        containerAbout.scrollTop = 400;
    }
    form.reset()
    buttonAbout.innerHTML ='✓'
}
}
