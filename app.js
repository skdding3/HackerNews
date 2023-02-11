const ajax = new XMLHttpRequest()
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'
const CONTENT_URL = 'https://api/hnpwa.com/v0/item/@id.json'

// ajax 통신
ajax.open('GET', NEWS_URL , false);
ajax.send();

// 데이터 파싱
const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement('ul')

window.addEventListener('hashchange', function () {
    console.log(location.hash) // # blarblar
    ajax.open('GET', CONTENT_URL, false)
})

for (let i = 0; i < 10; i++) {
    const li = document.createElement('li')
    const a = document.createElement('a')

    a.href = `#${newsFeed[i].id}`
    a.innerHTML = `${newsFeed[i].title} (${newsFeed[i].comments_count})`

    li.appendChild(a)
    ul.appendChild(li)
}

document.getElementById('root').appendChild(ul)



