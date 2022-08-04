// 此為回到最上層按鈕的JS
import axios from "/js/axios.js";

{
    var voteEvent = {
        question: "想要主播選哪隻英雄",
        keywords:["a","b","c"],
        voteResult:{
            "a":"達瑞斯不是達瑞文達瑞斯不是達瑞文",
            "b":"厄薩斯",
            "c":"拉姆斯"
        },
        voteTime:600,
        pollAccount:"shabi94ni",
        voter:""
    }
    console.log(voteEvent)
    var Result = JSON.stringify(voteEvent);
    console.log(Result)

    $(document).ready(function (){
        var i=0;
        var voteTitle = $("#voteTitle");
        voteTitle.append(voteEvent["question"]);
        var resultValueTable = $("#resultValueTable");
        var optionTable = $("#optionsTable");
        let opTemplate;
        for(i = 0 ; i < voteEvent["keywords"].length ; i ++){
            if(voteEvent["voteResult"][voteEvent["keywords"][i]].length>5){
                opTemplate =
                    '<div class=" mt-3" style="height: 30px;font-size: 12px;line-height: 14px">'+
                    voteEvent["voteResult"][voteEvent["keywords"][i]]+
                    '</div>'
            }
            else{
                opTemplate =
                    '<div class=" mt-3" style="height: 30px">'+
                    voteEvent["voteResult"][voteEvent["keywords"][i]]+
                    '</div>'
            }
            optionTable.append(opTemplate);
        }

    })







}