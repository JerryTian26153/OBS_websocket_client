// 此為回到最上層按鈕的JS
{
    //jquery
    $(document).ready(function (){

        var votingSelectionTable = $("#votingSelectionTable")
        var votingSelectionTemplate =
            ' <div class="input-group mb-1">\n' +
            '   <span class="input-group-text">選項名</span>\n' +
            '   <input type="text" class="form-control voteName_input">\n' +
            '   <span class="input-group-text">關鍵字</span>\n' +
            '   <input type="text" class="form-control voteName_input">\n' +
            ' </div>'
        $("#addSelectionButton").click(function (e) {
            votingSelectionTable.append(votingSelectionTemplate);
        });

    })


}