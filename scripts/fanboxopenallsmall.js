// return link to smallres version of images on pixiv fanbox
// page
(()=>{
    return Array.from(document.querySelectorAll(".sc-14k46gk-1")).map((x)=>{
        return x.src;
    });
})()