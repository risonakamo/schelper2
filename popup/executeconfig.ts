const executeConfig:ScriptExecutionConfiguration[]=[
    // SANKAKU
    {
        displayText:"Open source images All",
        script:"openoriginal",
        targetUrl:"https://chan.sankakucomplex.com/post/*",
        multiTarget:true,
        category:"Sankaku Actions",
        tabresultHandler:"openNewTabs"
    },
    {
        displayText:"Fit to page All",
        script:"fitwindowall",
        targetUrl:"https://chan.sankakucomplex.com/post/*",
        multiTarget:true,
        category:"Sankaku Actions"
    },

    // EXH
    {
        displayText:"Open small source images All",
        script:"exopenallsmall",
        targetUrl:"https://exhentai.org/s/*",
        multiTarget:true,
        category:"EX Actions",
        tabresultHandler:"openNewTabs"
    },
    {
        displayText:"Download full-size source All",
        script:"exopenfull",
        targetUrl:"https://exhentai.org/s/*",
        multiTarget:true,
        category:"EX Actions"
    },

    // PIXIV FANBOX
    {
        displayText:"Open small source",
        script:"fanboxopenallsmall",
        targetUrl:"https://*.fanbox.cc/posts/*",
        category:"PX Fanbox Actions",
        tabresultHandler:"openNewTabsFlatten"
    },
    {
        displayText:"Open full size",
        script:"fanbox-open-big",
        targetUrl:"https://*.fanbox.cc/posts/*",
        category:"PX Fanbox Actions",
        tabresultHandler:"openNewTabsFlatten"
    },

    // PIXIV
    {
        displayText:"Open all album images",
        script:"pixivopenall",
        targetUrl:"https://www.pixiv.net/artworks/*",
        category:"PX Actions",
        tabresultHandler:"openNewTabsFlatten"
    },

    // IMGUR
    {
        displayText:"Link to igaviewer2",
        script:"igaviewerlink",
        targetUrl:"https://imgur.com/a/*",
        category:"Imgur Actions",
        tabresultHandler:"openNewTabs"
    },

    // FILE page
    {
        displayText:"Open all",
        script:"openallfilepage",
        targetUrl:"file:///*",
        category:"File Page Actions",
        tabresultHandler:"openNewTabsFlatten"
    },
    {
        displayText:"Pause and Loop all",
        script:"pauseloopfile",
        targetUrl:"file:///*",
        multiTarget:true,
        category:"File Page Actions"
    }
];

export default executeConfig;