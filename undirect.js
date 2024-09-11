function replaceLinks() {
    const links = document.querySelectorAll('a[href*="link.zhihu.com/?target="]');
    for (const link of links) {
        link.href = decodeURIComponent(link.href.split('target=')[1]);
    }
}

replaceLinks();

const observer = new MutationObserver(replaceLinks);
observer.observe(document, {
    subtree: true,
    attributes: true
});
