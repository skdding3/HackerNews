const ajax = new XMLHttpRequest()
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'

// ajax 통신
ajax.open('GET', NEWS_URL , false);
ajax.send();

// 데이터 파싱
const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement('ul')

for (let i = 0; i < 10; i++) {
    const li = document.createElement('li')
    li.innerHTML = newsFeed[i].title;

    ul.appendChild(li)
}

document.getElementById('root').appendChild(ul)



