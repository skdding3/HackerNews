const ajax = new XMLHttpRequest()

// ajax 통신
ajax.open('GET','https://api.hnpwa.com/v0/news/1.json',false);
ajax.send();

// 데이터 파싱
const newsFeed = JSON.parse(ajax.response);

document.getElementById('root').innerHTML = `
    <ul>
    <li>${newsFeed[0].title}</li>
    <li>${newsFeed[1].title}</li>
    <li>${newsFeed[2].title}</li>
    </ul>
`;

