$(document).ready(()=>{

$(".modBg").hide();
$(".mod").hide();



$(".btn").click(()=>{

$(".modBg").show();
$(".mod").show();

})



$(".btnClose").click(()=>{

$(".modBg").toggle();
$(".mod").toggle();

})




$(window).click((e)=>{

var tid = e.target.id;

if(tid == "myModal"){
$(".modBg").toggle();  
}

})

})
















