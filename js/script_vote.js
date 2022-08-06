// 此為回到最上層按鈕的JS
{
    //jquery
    $(document).ready(function (){
        var i = 2;
        var votingSelectionTable = $("#votingSelectionTable")

        $("#addSelectionButton").click(function (e) {
            let votingSelectionTemplate =
                ' <div class="input-group mb-1">\n' +
                '   <span class="input-group-text">選項編號</span>\n' +
                '   <span class="input-group-text">選項內容</span>\n' +
                '   <input id="attr'+ i +'" type="text" class="form-control voteName_input">\n' +
                ' </div>'
            votingSelectionTable.append(votingSelectionTemplate);
            i=i+1;
        });

    })
    function showVotePage() {
        var voteResultPage;
        voteResultPage = window.open('voteResultPage.html', 'open', 'height=500, width=500');
        //voteResultPage = window.open('index.html', 'open', 'height=500, width=500');
    }

    function createVoting() {
        let serial = 1; // 流水號
        let responseArr = [];
        let votingInfo = {}; // Object

        votingInfo.title       = $('#votingQuestion').val();
        //votingInfo.timeLimit   = $('#timeLimit').val(); // 尚未建立
        //votingInfo.pollAccount = $('#pollAccount').val(); // 尚未建立

        let serialStr = '#response' + serial;

        //console.log($("#serial" + serial).val());
        while($('#response' + serial).length > 0) {
            console.log(typeof responseArr);
            responseArr.push($('#response' + serial).val());
            votingInfo['response' + serial] = $('#attr' + serial).val();
            serial++;
        }

        votingInfo.legalResponse = responseArr;
        // pop out from while (Name doesn't exist)

        console.log(votingInfo);
        votingInfo = JSON.stringify(votingInfo);
        return votingInfo;
    }

    $(document).ready(function (){
        console.log($('#votingQuestion').val())

        $('#startVoting').click(function (){
            console.log(createVoting());
        })
    })
}