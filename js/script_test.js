// 此為回到最上層按鈕的JS
{
    /* youtube-search.js */

    // 參考資料 : https://medium.com/%E5%B0%8F%E9%83%AD-%E0%B9%80%E0%B8%88%E0%B8%99/%E8%8F%9C%E9%B3%A5%E5%B7%A5%E7%A8%8B%E5%B8%AB-youtube-data-api-%E8%BC%89%E5%85%A5%E6%92%AD%E6%94%BE%E6%B8%85%E5%96%AE%E4%B8%A6%E5%88%87%E6%8F%9B%E6%AD%8C%E6%9B%B2-356d8e454ca3
    /*const axios = require('axios');

    async function runSample() {

      const res = await axios.get('https://www.googleapis.com/youtube/v3/search',
              {
                params: {
                  part: 'id,snippet',// 必填，把需要的資訊列出來
                  q: '韓國瑜',// 查詢文字
                  maxResults: 50,// 預設為五筆資料，可以設定1~50
                  key: API_KEY, // 使用 API 只能取得公開的播放清單
                }
              });

      console.log(res.data);
    }

    runSample().catch(err => console.error(err));*/

    /*let API_KEY = 'AIzaSyA032OwT6n-rz0wgdDQ9PnlKncANhoiQgM'; // you must replace API_KEY
    let video_http ="https://www.googleapis.com/youtube/v3/videos?";

    fetch(video_http + new URLSearchParams({
      key: API_KEY,
      part: 'snippet',
      chart: 'mostPopular',
      maxResults: 1,
      regionCode: 'IN'
    }))
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })*/
    var account = {
        email: 'abc123@gmail.com',
        password: '1234'
    }
    // xhr
    var XMLHttpRequest = require('xhr2');
    var xhr = new XMLHttpRequest();
    xhr.open('post','http://localhost:8080/user/data/resolveJsonObject',true);
    // 傳送資料的格式選擇為 JSON
    xhr.setRequestHeader('Content-type', 'application/json');
    // 用另一個變數儲存字串化的 JSON
    var data = JSON.stringify(account);
    // 傳送
    xhr.send(data);
    xhr.onload = function(){
        //console.log(xhr.responseText);
        //判斷 HTTP 狀態碼是否成功連線
        if(xhr.status == 200){
            //把抓到的資料加以運用
            var str = JSON.parse(xhr.responseText);
            //選取 DOM，並渲染至網頁
            document.querySelector('.box').textContent = str[0].name;
        } else{
            console.log('資料讀取錯誤!!');
        }

    }


}