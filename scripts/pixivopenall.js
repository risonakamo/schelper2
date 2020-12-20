// on a pixiv album, return link to small version of all the images on the page,
// assuming the album is open
(()=>{
    return Array.from(document.querySelectorAll(".sc-1qpw8k9-3")).map((x)=>{
        return x.href;
    });
})()