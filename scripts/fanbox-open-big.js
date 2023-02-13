// return links to large res on pixiv fanbox
(()=>{
    return Array.from(document.querySelectorAll("a.sc-xvj0xk-1")).map((element)=>{
        return element.href;
    });
})()