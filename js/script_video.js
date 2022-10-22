// 此為回到最上層按鈕的JS
{
    const video_focus = document.querySelector('.video-focus');
    function video_details_show(target) {
        let page = target;
        console.log(page);
        video_focus.innerHTML=page;
    }
//jquery
    /*$(document).ready(function (){
        $(".video").click(function (e) {
            console.log(e.target);
            //$("." + e.target.id).css("display","")
        });
    })*/
}