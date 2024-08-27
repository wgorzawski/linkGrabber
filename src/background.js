chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "saveUrl",
        title: "Save URL to Clipboard",
        contexts: ["all"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "saveUrl") {
        const url = tab.url;
        console.log('navigator',navigator);
        // navigator.clipboard.writeText(url).then(() => {
        //     console.log('URL copied to clipboard');
        // });
    }
});
