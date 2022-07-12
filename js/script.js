// 此為回到最上層按鈕的JS
{
    /*window.onscroll = () =>{
        if(window.scrollY >60){
            document.querySelector('#scroll-top').classList.add('active');
        }else{
            document.querySelector('#scroll-top').classList.remove('active');
        }
    }
    let toggle_button = document.querySelector('.toggle_button');
    toggle_button.onclick = function (){
        toggle_button.classList.toggle('active')
    }*/
    //jquery
    $(document).ready(function (){
        $(".room_button").click(function (e) {
            console.log($(".room_input").val());
            var Key = $(".room_input").val();
            var pending_url = "http://140.121.196.20:55304/OBS_websocket/get_scenes?key="+Key;
            var insert_pending_HTML = "";

            $(".sceneList").html("");
            $.getJSON(pending_url,function(result){
                $.each(result,function(index,value){
                    var insert_pending_HTML = "";
                    insert_pending_HTML +=
                        '<a id="16" href="#" class="list-group-item list-group-item-action changeSceneButton">'+value+'</a>';

                    $(".sceneList").append(insert_pending_HTML);


                });//一個預約設定完成
                $(".changeSceneButton").click(function (e) { //彈出選擇介面
                    var change_url = "http://140.121.196.20:55304/OBS_websocket/change_scene?key=";
                    $.get(change_url+ Key +"&scene="+e.target.text);
                    console.log(change_url+ Key +"&scene="+e.target.text);
                    //$.get("http://140.121.196.20:55304/OBS_websocket/change_scene?key=4908795&scene=場景");
                });
            });//取得所有待審核預約json完成

        });
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