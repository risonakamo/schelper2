// return url to large image on ex image page, or open the image in the current
// tab if there is not large version
(()=>{
    var downloadLinks=document.querySelectorAll("#i6 > div > a");

    if (downloadLinks.length)
    {
        window.location.href=downloadLinks[2];
    }

    else
    {
        console.error("could not find download link");
    }
})()