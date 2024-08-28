# Save URLs Chrome Extension

A simple Chrome extension built with Vue.js that allows users to save the current page's URL along with the title, organize URLs into groups, and move URLs between groups using drag & drop.

## Features

- **Save URLs**: Save the current page's URL with its title into a chosen group.
- **Group URLs**: Organize saved URLs into groups for easy management.
- **Drag & Drop**: Move URLs between different groups by simply dragging and dropping them.
- **Context Menu Save**: Quickly save selected page's URL directly from the context menu (right-click menu).
- **Persistent Storage**: All saved URLs are stored using Chrome's `sync` storage, making them accessible across devices logged into the same account.

## Installation

> [!WARNING]
> The plug-in is not yet available in the Chrome Web Store

1. Clone the repository to your local machine:

   ```bash
   git clone
   cd linkGrabber
   npm i
   npm run build
   
2. Open Chrome and go to `chrome://extensions/`.
3. Enable `Developer mode` by toggling the switch in the top right corner.
4. Click on `Load unpacked` and select the directory where you cloned the repository.
5. The extension should now appear in your list of installed extensions.

## Usage

1. Click the extension icon in your Chrome toolbar to open the popup.
2. Enter a group name (or leave it empty to use the default group "Ungrouped").
3. Click the "Save URL" button to save the current page's URL and title to the selected group.
4. Drag and drop URLs between groups as needed.
5. All changes are automatically saved and synced across devices.

## TODO

- [ ] **TypeScript Support**: Refactor code to TypeScript for better type safety and development experience.
- [ ] **Webpack**: Integrate Webpack for module bundling and development server support.
- [ ] **Add Styles**: Improve the visual design of the extension, including better styling for the popup interface.
- [ ] **Save Sessions**: Implement functionality to automatically save all open tabs in the browser as a session that can be restored later.
- [ ] **Notification Reminders**: Add a feature to set reminders for visiting saved URLs, with notifications.
- [ ] **Pin Important Links**: Add functionality to pin important links to the top of their group for quick access.
- [ ] **Delete Links**: Add the ability to remove individual links from groups.
- [ ] **Delete Groups**: Implement functionality to delete entire groups, including all URLs within them.
- [ ] **Search and Filter**: Implement a search and filter feature to easily find specific URLs or groups.
- [ ] **Export/Import Data**: Allow users to export their saved URLs to a file and import them back, making it easier to backup and restore data.
- [ ] **Custom Group Icons**: Provide an option for users to assign custom icons or colors to groups for better visual organization.
- [ ] **i18n Support**: Implement internationalization (i18n) to support multiple languages in the extension.
- [ ] **Add Dark Mode**: Implement a dark mode for the extension to reduce eye strain and improve user experience in low-light environments.
- [ ] **Tagging System**: Introduce a tagging system to allow users to add custom tags to URLs for better categorization and filtering.
- [ ] **Cyclic Reports**: Generate daily, weekly, and monthly reports summarizing saved URLs, including metrics such as the number of URLs saved, most active groups, and frequently visited links.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue if you have any suggestions or improvements.