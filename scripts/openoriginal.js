// return link to source image on sankaku image page
(()=>{
    var imageLink=document.querySelector("#image-link");

    if (imageLink.href)
    {
        return imageLink.href;
    }

    return imageLink.firstElementChild.src;
})()