function replaceLinks() {
    var links = document.querySelectorAll('a[href*="link.zhihu.com/?target="]');
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        link.href = decodeURIComponent(link.href.split('target=')[1]);
    }
}
replaceLinks();

var observer = new MutationObserver(function(mutations) {
    replaceLinks();
});
observer.observe(document, {
    subtree: true,
    attributes: true
});
