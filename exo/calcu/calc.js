let tmpOpe,tmpVal;

$(".chiffre").on("click",function(){
    if($(".result").text() === "0"){
        $(".result").text($(this).text());
    } else{
        let strResult = $(".result").text();
        strResult += $(this).text();
        $(".result").text(strResult);
    }
    
});

$(".operation").on("click",function(){
    switch ($(this).text()) {

        case "=":
            result($(".result").text());
            break;
        case ".":
            let strResult = $(".result").text();
            strResult += $(this).text();
            $(".result").text(strResult);
            break;
        case "+/-":
            if ($(".result").text() !== "0"){
                let tmp = parseInt($(".result").text());
                tmp = tmp * (-1);
                $(".result").text(tmp);
            }
            break;
        case "CLR":
            $(".result").text("0");
            break;
        default:
            operation($(".result").text(),$(this).text());
            break;
    }
});

$(".sqrt").on("click",function(){
    console.log("sqrt");
})


function operation(nbre,ope){
    tmpVal = nbre;
    tmpOpe = ope;
    $(".result").text(0);
    console.log(tmpVal);
}

function result(nbre){
    switch (tmpOpe) {
        case "+":
            $(".result").text(parseInt(tmpVal) + parseInt(nbre));
            break;
        case "-":
            $(".result").text(parseInt(tmpVal) - parseInt(nbre));
            break;
        case "*":
            $(".result").text(parseInt(tmpVal) * parseInt(nbre));
            break;
        case "/":
            $(".result").text(parseInt(tmpVal) / parseInt(nbre));
            break;
        default:
            break;
    }
}