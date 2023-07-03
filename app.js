const container = document.getElementById('root')
const ajax = new XMLHttpRequest()
const content = document.createElement('div')
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';
const store = {
    currentPage : 1,
};

function getData(url) {
    ajax.open('GET', url, false)
    ajax.send()

    return JSON.parse(ajax.response);
}

function newsFeed () {
    const newsFeed = getData(NEWS_URL);
    const newsList = [];

    newsList.push('<ul>');

    for(let i = (store.currentPage - 1) * 10; i < store.currentPage * 10; i++) {

        // DOM API DELETE

        newsList.push(`
    <li>
        <a href="#/show/${newsFeed[i].id}">
            ${newsFeed[i].title} (${newsFeed[i].comments_count})
        </a>
    </li>
    `)
    }

    newsList.push('</ul>');
    newsList.push(`
        <div>
            <a href="#/page/${store.currentPage - 1}">이전 페이지</a>
            <a href="#/page/${store.currentPage + 1}">다음 페이지</a>
        </div>
    `)
    container.innerHTML = newsList.join('');
}

// JSON 파싱 -> 객체
const ul = document.createElement('ul')


function newsDetail() {

    // hash.id
    const id = location.hash.substr(7)
    const newsContent = getData(CONTENT_URL.replace('@id', id), false);

    container.innerHTML = `
        <h1>${newsContent.title}</h1>
        
        <div>
            <a href="#/page/${store.currentPage}">목록으로</a>
        </div>
    `;

    // title.innerHTML = newsContent.title;

    // content.appendChild(title)
}

// Router
function router() {
    const routePath = location.hash;

    if (routePath === '') {
        newsFeed();
    } else if(routePath.indexOf('#/page/') >= 0) {
        store.currentPage = Number(routePath.substr(7));
        newsFeed();
    } else {
        newsDetail();
    }
}

// 해시값 변경
window.addEventListener('hashchange', router)

router()

