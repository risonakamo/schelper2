// deploys arrow key page control on EXH pages
(()=>{
    var topNavbar=document.querySelector(".ptt");

    if (!topNavbar)
    {
        return;
    }

    var leftArrow=topNavbar.querySelector("td");
    var rightArrow=topNavbar.querySelector("td:last-child");

    document.addEventListener("keydown",(e)=>{
        if (e.key=="a" || e.key=="A" || e.key=="ArrowLeft")
        {
            leftArrow.click();
        }

        else if (e.key=="d" || e.key=="D" || e.key=="ArrowRight")
        {
            rightArrow.click();
        }
    });
})();