





rdoPersonality.onchange=function(s){
    
  lblPrompt2.value =`I would agree that you are a ${$("input[name=rdoPersonality]:checked").prop("value")} person too!`
}

btnNext2.onclick=function(){
  ChangeForm(favExercises)
}