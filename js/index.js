


$("#options i").click(function(){
    
    $("#colors-options").toggle();
})


let lis = $("#options ul li");
let hs =$("h1,h2,h3,h4,h5,h6");

lis.eq(0).css("backgroundColor","#09c")
lis.eq(1).css("backgroundColor","tomato")
lis.eq(2).css("backgroundColor","teal")
lis.eq(3).css("backgroundColor","tan")
lis.eq(4).css("backgroundColor","orange");



lis.click(function(){

  let color =  $(this).css("backgroundColor");

    hs.css("color",color)
})


$("#options img").click(function(){
    
  let imgSrc =  $(this).attr("src");
$("#home").css("backgroundImage",`url(${imgSrc})`)
})






let profileOffset = $(".profile").offset().top;


let navHeight = $("nav").outerHeight();


$(window).scroll(function(){

    let scrollTop =  $(window).scrollTop();

    if(scrollTop > profileOffset)
        {
            $("nav").css("backgroundColor","rgba(0,0,0,0.6)")
        }
    else
        {
            $("nav").css("backgroundColor","transparent")
            
        }
    
    if(scrollTop > 1200)
        {
            $("#btnUp").fadeIn(500);
        }
    else
        {
            $("#btnUp").fadeOut(520)
        }
    
    
})



$("#btnUp").click(function(){
    
    $("body,html").animate({scrollTop:0} , 1000)
})


$("nav a").click(function(){

    let aHref =$(this).attr("href");

    let profileOffset = $(aHref).offset().top;
    $("body,html").animate({scrollTop:profileOffset} , 1000)

})


$(document).ready(function(){

    $("#loading").fadeOut(2000 , function(){
        
        $("body").css("overflow","auto");
    });

})









