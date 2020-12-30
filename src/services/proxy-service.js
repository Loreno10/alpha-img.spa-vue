const proxyUrl = process.env.VUE_APP_PROXY_URL

function wrapUrlWithProxy(originalUrl) {
    return proxyUrl + (proxyUrl.endsWith("/") ? "" : "/") + originalUrl;
}

export { wrapUrlWithProxy };