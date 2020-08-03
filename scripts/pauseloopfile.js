// attempt to target a video element, pause and set it to loop.
(()=>{
    var player=document.querySelector("video");

    if (player)
    {
        player.loop=true;
        player.pause();
    }
})()