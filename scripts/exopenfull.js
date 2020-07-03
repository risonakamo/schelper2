// return url to large image on ex image page, or open the image in the current
// tab if there is not large version
(()=>{
    var downloadLink=document.querySelector("#i7");

    if (downloadLink.children.length)
    {
        downloadLink=downloadLink.children[1].href;
    }

    else
    {
        downloadLink=document.querySelector("#img").src;
    }

    window.location.href=downloadLink;
})()