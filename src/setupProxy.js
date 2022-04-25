const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:8080",
      auth: false,
      pathRewrite: {
        "^/api/": "/", // rewrite path
      },
      onProxyRes: (proxyRes) => {
        if (proxyRes.statusCode === 302 && !proxyRes.headers.location.startsWith("/api")) {
          proxyRes.headers.location = `/api${proxyRes.headers.location}`;
        }
      },
    })
  );
};
