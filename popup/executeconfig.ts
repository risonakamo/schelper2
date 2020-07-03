const executeConfig:ScriptExecutionConfiguration[]=[
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

    {
        displayText:"Open small source",
        script:"fanboxopenallsmall",
        targetUrl:"https://*.fanbox.cc/posts/*",
        category:"PX Fanbox Actions",
        tabresultHandler:"openNewTabsFlatten"
    },

    {
        displayText:"Link to igaviewer2",
        script:"igaviewerlink",
        targetUrl:"https://imgur.com/a/*",
        category:"Imgur Actions",
        tabresultHandler:"openNewTabs"
    }
];

export default executeConfig;