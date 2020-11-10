---
id: files
title: File handling
---


# File handling

## Upload files

```js
// Select one file
await page.setInputFiles('input#upload', 'myfile.pdf');

// Select multiple files
await page.setInputFiles('input#upload', ['file1.txt', 'file2.txt']);

// Remove all the selected files
await page.setInputFiles('input#upload', []);

// Upload buffer from memory
await page.setInputFiles('input#upload', {
  name: 'file.txt',
  mimeType: 'text/plain',
  buffer: Buffer.from('this is test')
});
```

You can select input files for upload using the `page.setInputFiles` method. It expects first argument to point to an [input element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) with the type `"file"`. Multiple files can be passed in the array. If some of the file paths are relative, they are resolved relative to the [current working directory](https://nodejs.org/api/process.html#process_process_cwd). Empty array clears the selected files.

#### Example

[This script](examples/upload.js) uploads a file to an `input` element that accepts file uploads.

#### API reference

- [page.setInputFiles(selector, files[, options])](https://github.com/microsoft/playwright/blob/master/docs/api.md#pagesetinputfilesselector-value-options)
- [frame.setInputFiles(selector, files[, options])](https://github.com/microsoft/playwright/blob/master/docs/api.md#framesetinputfilesselector-value-options)
- [elementHandle.setInputFiles(files[, options])](https://github.com/microsoft/playwright/blob/master/docs/api.md#elementhandlesetinputfilesfiles-options)

<br/>

## Handle file downloads

```js
const [ download ] = await Promise.all([
  page.waitForEvent('download'), // <-- start waiting for the download
  page.click('button#delayed-download') // <-- perform the action that directly or indirectly initiates it.
]);
const path = await download.path();
```

For every attachment downloaded by the page, [`"download"`](https://github.com/microsoft/playwright/blob/master/docs/api.md#event-download) event is emitted. If you create a browser context with the `acceptDownloads: true`, all these attachments are going to be downloaded into a temporary folder. You can obtain the download url, file system path and payload stream using the [`Download`](https://github.com/microsoft/playwright/blob/master/docs/api.md#class-download) object from the event.

#### Variations

If you have no idea what initiates the download, you can still handle the event:

```js
page.on('download', download => download.path().then(console.log));
```

Note that handling the event forks the control flow and makes script harder to follow. Your scenario might end while you are downloading a file since your main control flow is not awaiting for this operation to resolve.

#### API reference

- [`Download`](https://github.com/microsoft/playwright/blob/master/docs/api.md#class-download)
- [`page.on('download')`](https://github.com/microsoft/playwright/blob/master/docs/api.md#event-download)
- [`page.waitForEvent(event)`](https://github.com/microsoft/playwright/blob/master/docs/api.md##pagewaitforeventevent-optionsorpredicate)
