window.onload = function() {
    loadHTML('./include/header.html', document.querySelector('header'));
    loadHTML('./include/footer.html', document.querySelector('footer'));
}

function loadHTML(url, element) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            element.innerHTML = xhr.responseText;
        }
    };

    xhr.open('GET', url, true);
    xhr.send('');
    //보안 정책??상 웹페이지서버에서만 작동이 되는 것 같다.
    //CORS정책이라고 함
    //Node.js를 사용하여 서버를 열면 제대로 hrader와 footer가 들어가는 걸 볼 수 있다.
    //콘솔에서 네트워트>캐셔를 체크하면 실시간으로 바뀐다.
}
window.jQuery = window.$ = require('jquery');

