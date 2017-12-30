var pre = document.getElementsByTagName('pre')[0];
pre.style.display = 'block';

// get text
var text = pre.innerText.substr(pre.innerText.indexOf('提取码')).trim().substr(4);

// var a = `<a href='#' > copy </a>`;
// pre.insertAdjacentHTML('beforeend', a);
pre.firstElementChild.addEventListener('click', copyToClipboard);

function copyToClipboard() {
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.css('display', 'none');
    dummy.setAttribute("id", "dummy_id");
    document.getElementById("dummy_id").value = text;
    // dummy.select();
    var range = document.createRange();
    range.selectNode(dummy);
    window.getSelection().addRange(range);
    var msg = document.execCommand("copy");
    console.log("copy was " + msg);
    document.body.removeChild(dummy);
}


javascript: (
    function () {
        var a = document.createElement('script');
        a.setAttribute('src', '//loligit.github.io/panda/panda.js?' + Date.parse(new Date()));
        document.body.appendChild(a);
    }());