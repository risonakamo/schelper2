// return url to igaviewer for the imgur album page
(()=>{
    return `https://risonakamo.github.io/igaviewer2/#${window.location.href.match(/a\/(.*)/)[1]}`;
})()