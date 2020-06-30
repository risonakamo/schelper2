// open all links in array in new tabs
function openNewTabs(urls:string[]):void
{
    for (var x=0;x<urls.length;x++)
    {
        chrome.tabs.create({url:urls[x]});
    }
}

const executeCallbacks:ExecutorCallbacks={
    openNewTabs
};

export default executeCallbacks;