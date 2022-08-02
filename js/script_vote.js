// 此為回到最上層按鈕的JS
{
    //jquery
    $(document).ready(function (){
        var i = 2;
        var votingSelectionTable = $("#votingSelectionTable")

        $("#addSelectionButton").click(function (e) {
            let votingSelectionTemplate =
                ' <div class="input-group mb-1">\n' +
                '   <span class="input-group-text">選項名</span>\n' +
                '   <input id="Name'+ i +'" type="text" class="form-control voteName_input">\n' +
                '   <span class="input-group-text">關鍵字</span>\n' +
                '   <input id="Key'+ i +'" type="text" class="form-control voteName_input">\n' +
                ' </div>'
            votingSelectionTable.append(votingSelectionTemplate);
            i=i+1;
        });

    })


}