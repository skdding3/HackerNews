const container = document.getElementById('root')
const ajax = new XMLHttpRequest()
const content = document.createElement('div')
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';


function getData(url) {
    ajax.open('GET', url, false)
    ajax.send()

    return JSON.parse(ajax.response);
}

function newsFeed () {
    const newsFeed = getData(NEWS_URL);
    const newsList = [];

    newsList.push('<ul>');

// 10번 반복
    for(let i = 0; i < 10; i++) {

        // DOM API DELETE

        newsList.push(`
    <li>
        <a href="#${newsFeed[i].id}">
            ${newsFeed[i].title} (${newsFeed[i].comments_count})
        </a>
    </li>
    `)
    }

    newsList.push('</ul>');
    container.innerHTML = newsList.join('');
}

// JSON 파싱 -> 객체
const ul = document.createElement('ul')


function newsDetail() {

    // hash.id
    const id = location.hash.substr(1)
    const newsContent = getData(CONTENT_URL.replace('@id', id), false);

    container.innerHTML = `
        <h1>${newsContent.title}</h1>
        
        <div>
            <a href="#">목록으로</a>
        </div>
    `;

    // title.innerHTML = newsContent.title;

    // content.appendChild(title)
}

// Router
function router() {
    const routePath = location.hash;

    if (routePath === '') {
        newsFeed()
    } else {
        newsDetail();
    }
}

// 해시값 변경
window.addEventListener('hashchange', router)

router()

