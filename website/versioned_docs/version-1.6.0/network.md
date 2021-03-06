---
id: version-1.6.0-network
title: Network
original_id: network
---


# Network

Playwright provides APIs to **monitor** and **modify** network traffic, both HTTP and HTTPS.
Any requests that page does, including [XHRs](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) and
[fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) requests, can be tracked, modified and handled.

<!-- GEN:toc-top-level -->
- [HTTP Authentication](#http-authentication)
- [Network events](#network-events)
- [Handle requests](#handle-requests)
- [Modify requests](#modify-requests)
- [Abort requests](#abort-requests)
- [Proxy](#proxy)
<!-- GEN:stop -->

<br/>

## HTTP Authentication

```js
const context = await browser.newContext({
  httpCredentials: {
    username: 'bill',
    password: 'pa55w0rd',
  },
});
const page = await context.newPage();
await page.goto('https://example.com');
```

#### API reference

- [`browser.newContext([options])`](./api.md#browsernewcontextoptions)

## Network events

You can monitor all the requests and responses:

```js
const { chromium, webkit, firefox } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Subscribe to 'request' and 'response' events.
  page.on('request', request =>
      console.log('>>', request.method(), request.url()));
  page.on('response', response =>
      console.log('<<', response.status(), response.url()));
  await page.goto('https://example.com');

  await browser.close();
})();
```

Or wait for a network response after the button click:

```js
// Use a glob URL pattern
const [response] = await Promise.all([
  page.waitForResponse('**/api/fetch_data'),
  page.click('button#update'),
]);
```

#### Variations

```js
// Use a RegExp
const [response] = await Promise.all([
  page.waitForResponse(/\.jpeg$/),
  page.click('button#update'),
]);

// Use a predicate taking a Response object
const [response] = await Promise.all([
  page.waitForResponse(response => response.url().includes(token)),
  page.click('button#update'),
]);
```

#### API reference

- [class `Request`](./api.md#class-request)
- [class `Response`](./api.md#class-response)
- [event `'request'`](./api.md#event-request)
- [event `'response'`](./api.md#event-response)
- [`page.waitForRequest(urlOrPredicate[, options])`](./api.md#pagewaitforrequesturlorpredicate-options)
- [`page.waitForResponse(urlOrPredicate[, options])`](./api.md#pagewaitforresponseurlorpredicate-options)

<br/>

## Handle requests

```js
await page.route('**/api/fetch_data', route => route.fulfill({
  status: 200,
  body: testData,
}));
await page.goto('https://example.com');
```

You can mock API endpoints via handling the network quests in your Playwright script.

#### Variations

```js
// Set up route on the entire browser context.
// It will apply to popup windows and opened links.

await browserContext.route('**/api/login', route => route.fulfill({
  status: 200,
  body: 'accept',
}));
await page.goto('https://example.com');
```

#### API reference

- [`browserContext.route(url, handler)`](./api.md#browsercontextrouteurl-handler)
- [`browserContext.unroute(url[, handler])`](./api.md#browsercontextunrouteurl-handler)
- [`page.route(url, handler)`](./api.md#pagerouteurl-handler)
- [`page.unroute(url[, handler])`](./api.md#pageunrouteurl-handler)
- [`Route`](./api.md#class-route)

<br/>

## Modify requests

```js
// Delete header
await page.route('**/*', route => {
  const headers = route.request().headers();
  delete headers['X-Secret'];
  route.continue({headers});
});

// Continue requests as POST.
await page.route('**/*', route => route.continue({method: 'POST'}));
```

You can continue requests with modifications. Example above removes an HTTP header from the outgoing requests.

## Abort requests

```js
await page.route('**/*.{png,jpg,jpeg}', route => route.abort());

// Abort based on the request type
await page.route('**/*', route => {
  return route.request().resourceType() === 'image' ?
      route.abort() : route.continue();
});
```

#### API reference

- [`page.route(url, handler)`](./api.md#pagerouteurl-handler)
- [`browserContext.route(url, handler)`](./api.md#browsercontextrouteurl-handler)
- [`route.abort([errorCode])`](./api.md#routeaborterrorcode)

<br/>

## Proxy