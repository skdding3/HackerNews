const ajax = new XMLHttpRequest()
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';

ajax.open('GET', NEWS_URL, false)
ajax.send()

// JSON 파싱 -> 객체
const newsFeed = JSON.parse(ajax.response)
const ul = document.createElement('ul')

// 10번 반복
for(let i = 0; i < 10; i++) {
    const li = document.createElement('li');
    li.innerHTML = newsFeed[i].title;

    ul.appendChild(li);
}

document.getElementById('root').appendChild(ul);

