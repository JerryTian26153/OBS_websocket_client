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
                '   <input id="response'+ i +'" type="text" class="form-control voteName_input">\n' +
                '   <span class="input-group-text">選項內容</span>\n' +
                '   <input id="attr'+ i +'" type="text" class="form-control voteName_input">\n' +
                ' </div>'
            votingSelectionTable.append(votingSelectionTemplate);
            i=i+1;
        });

    })
    function showVoteResultPage() {
        var voteResultPage;
        voteResultPage = window.open('voteResultPage.html', 'open', 'left=500, top=500, height=500, width=500');
        //voteResultPage = window.open('index.html', 'open', 'height=500, width=500');
    }

    function createVoting() {
        let serial = 1; // 流水號
        let responseArr = [];
        let votingInfo = {}; // Object

        //votingInfo.timeLimit   = $('#timeLimit').val(); // 尚未建立
        votingInfo.pollAccount = sessionStorage.getItem("user"); // 尚未建立
        votingInfo.title  = $('#votingQuestion').val();
        votingInfo.legalResponse = new Map;
        //console.log($("#serial" + serial).val());
        while($('#response' + serial).length > 0) {
            console.log(typeof responseArr);
            votingInfo.legalResponse.set($('#response' + serial).val(),$('#attr' + serial).val())
            serial++;
        }
        // pop out from while (Name doesn't exist)TEST321

        votingInfo = JSON.stringify(votingInfo);
        return votingInfo;
    }

    $(document).ready(function (){
        console.log($('#votingQuestion').val())

        $('#startVoting').click(function (){
            var data = createVoting();
            console.log(data);
            url =
            $.ajax({
                type: "POST",
                url: url,
                data:data,
                success: function(re){
                    if(re == true){
                        alert("投票發起成功，請前往投票結果查看。");
                    }
                    else
                        alert("投票發起失敗，請重新嘗試");
                },
                error: function (thrownError) {
                    alert(thrownError);
                }
            });
        })
    })
}