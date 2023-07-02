const ajax = new XMLHttpRequest()

ajax.open('GET', 'https://api.hnpwa.com/v0/news/1.json', false)
ajax.send()

// JSON 파싱 -> 객체
const newsFeed = JSON.parse(ajax.response)


// innerHTML
document.getElementById('root').innerHTML = `
<ul>
    <li>${newsFeed[0].title}</li>
    <li>${newsFeed[1].title}</li>
    <li>${newsFeed[2].title}</li>
</ul>
`
