function scriptToExecute() {
    function replaceLinks() {
        $('a[href*="link.zhihu.com"]').map(function() {
            this.href = decodeURIComponent(this.href.split('target=')[1]);
        });
    }
    $(document).ajaxComplete(function() {
        replaceLinks();
    });
    replaceLinks();
}
var script = document.createElement('script');
script.appendChild(document.createTextNode('(' + scriptToExecute + ')();'));
(document.body || document.head || document.documentElement).appendChild(script);
