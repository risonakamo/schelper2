// on a pixiv album, return link to small version of all the images on the page,
// assuming the album is open
(()=>{
    return Array.from(document.querySelectorAll(".sc-1mz6e1e-1 img")).map((x)=>{
        return x.src;
    });
})()