// görev 1
$("#gorev1>button").click(function(event){
    event.preventDefault();
    var pler = $("h2:lt(3)");
    
    $(pler).each(function(){
        $("#gorev1>ul").append("<li>"+pler.text()+"</li>")
    });

    


    
})

// görev 2
$("#gorev2>button").click(function(){
    var sayısı = $("article>div>h2").length;
    console.log(sayısı),
    $("#gorev2>input").val(sayısı);
})


// görev 3
$("#gorev3>button").click(function(){
    var değer = $("h1").html();
    $("#gorev3>input").val(değer);
})

// görev 4
$("#gorev4>button").click(function(){
    $("article>div>h2").each(function(index,element){
        var puzunluk = $(this).siblings("p").text().length;
        $(this).append("  ( " +puzunluk + " )");

    });
});

    


// görev 5
$("#gorev5>button").click(function(){
    $("p").css("color","black");
    $("h1").css("color","red");
    $("article >  div:nth-child(even)").css("color","blue");     
    $("article >  div:nth-child(odd)").css("color","orange");     
});

// görev 6
$("#gorev6>button").click(function(){
    $("article>div:nth-child(2)>p").fadeOut();
})

// görev 7
$("#gorev7>button").click(function(event){
    event.preventDefault();
    var canli = $("h2:contains('can')");
    canli.each(function(){
        $("#gorev7 > ul").append("<li>" + $(this).text() + "</li>")
    })
})

// görev 8
$("#gorev8>button").click(function(){
    
})

// görev 9
$("h1, h2").each(function(){
    mouseover(function(){
        $("#gorev9>input").val("h1");

})})


// görev 10
$("#gorev10>button").click(function(){
    $("body").append('<img src="./check.png" alt="">')
});
