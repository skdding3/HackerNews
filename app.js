const ajax = new XMLHttpRequest()
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

ajax.open('GET', NEWS_URL, false)
ajax.send()

// JSON 파싱 -> 객체
const newsFeed = JSON.parse(ajax.response)
const ul = document.createElement('ul')

// 해시값 변경
window.addEventListener('hashchange', function () {

    console.log('해시가 변경됨');
})

// 10번 반복
for(let i = 0; i < 10; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.href = `#${newsFeed[i].id}`
    a.innerHTML = `${newsFeed[i].title} (${newsFeed[i].comments_count})`

    li.appendChild(a);
    ul.appendChild(li);
}

document.getElementById('root').appendChild(ul);

