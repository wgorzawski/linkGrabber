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

chrome.alarms.onAlarm.addListener((alarm) => {
    // Extract the id from the alarm name
    const id = alarm.name.split('-')[1];

    // Retrieve the stored links
    chrome.storage.sync.get(['savedUrls'], (result) => {
        const links = result.links || [];
        const link = links.find(link => link.id == id);

        if (link) {
            // Create a notification
            chrome.notifications.create({
                type: 'basic',
                iconUrl: 'icon.png', // Add your icon path
                title: 'URL Reminder',
                message: `It's time to visit: ${link.url}`,
                priority: 2
            });
        }
    });
});
