$("button").click(function(){
  let Firstname=$(".name").val();  
    let Food=$(".food").val();
    let timesPerWeek=$(".times").val();
    let TimesPerYear=52*timesPerWeek;
console.log(Firstname);
    $(".fortune-display").append(Firstname+" eats " +Food+" "+TimesPerYear+" times per year ");
});


//{name} eats {food} {timesPerYear} times per year