```js
//
// index.js
//
// To make service work,
// Then, Tell the browser to use service worker.
if('serviceWorker' in navigator) {
	navigator.serviceWorker.register('service-worker.js')
	.then(function(registration) {
		// listen for service worker lifecycle events and
		// display a message when caching is complete
	})
	.catch(function(error) {
		// display error
	});
} else {
	// offline support isn't available
}

//
//service-worker.js
//
// install and fetch events that will handle (event handlers)
// install
self.addEventListener('install',function(event) {
	var urlsToPrefetch=['image.jpg','results.json','page.html'];
	event.waitUntil(caches.open('mycache').then(function(cache) {
		return cache.addAll(urlsToPrefetch);
	}));
});
// fetch
self.addEventListener('fetch',function(event) {
	event.respondWith(fetch(event.request).catch(function() {
		return caches.match(event.request);
	}));
});

//
// To make "service-worker.js" much better
//
// Load the sw-toolbox library in service worker
importScripts('path/to/sw-toolbox.js');
// Tell sw-toolbox what to precache
// toolbox is a object, precache is a method
toolbox.precache(['image.jpg','results.json','page.html']);
// Then, setup a default caching strategy
toolbox.router.default=toolbox.networkFirst;
```
```html
//
// index.html
//
<script src="webcomponents-lite.min.js"></script>
<link rel="import" href="platinum-sw-elements.html">
<platinum-sw-register auto-register>
	<platinum-sw-cache default-cache-strategy="networkFirst"
		precache='["image.jpg","results.json","page.html"]'>
	</platinum-sw-cache>
</platinum-sw-register>
```
<b>Related links:</b><br>
[1] <a href="https://youtu.be/xDjaHuX356M">Offline apps with Polymer and Service Worker</a><br>
[2] <a href="https://github.com/PolymerElements/platinum-sw">platinum-sw (Service Worker Polymer element)</a><br>
[3] <a href="https://github.com/googlechrome/sw-toolbox">sw-toolbox (Service Worker toolbox)</a><br>
[4] <a href="https://github.com/PolymerElements/polymer-starter-kit">Polymer Starter Kit</a><br>
