# CSS 0 to 1 Starter Kit

To install BrowserSync:

```
npm install browser-sync@2.7.1
```

To run the live-edit web server:

```
browser-sync start --server --port 4000 --files index.html --files css/main.css
```

It should open the url `http://localhost:4000` immediately. Editing index.html or css/main.css would cause the browser to automatically refresh.
