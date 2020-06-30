// open all links in array in new tabs
function openNewTabs(urls:string[]):void
{
    for (var x=0;x<urls.length;x++)
    {
        chrome.tabs.create({url:urls[x]});
    }
}

// special version of open all links, when links are given
// as a single package of strings that needs to be unwrapped.
// usually happens when a single page provides multiple links
function openNewTabsFlatten(urls:string[][]):void
{
    openNewTabs(_.flatten(urls));
}

const executeCallbacks:ExecutorCallbacks={
    openNewTabs,
    openNewTabsFlatten
};

export default executeCallbacks;