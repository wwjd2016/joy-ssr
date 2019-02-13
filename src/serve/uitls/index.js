export const renderServe = (store, content) => {
  return `<html>
  <head><title>ssr</title></head>
  <body>
    <div id="root">${content}</div>
    <script>window.__INIT__STATE__ = ${JSON.stringify(store.getState())}</script>
    <script src='/index.js'></script>
  </body>
</html>`
}