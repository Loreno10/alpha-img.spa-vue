/* eslint-disable */
import { wrapUrlWithProxy } from '../services/proxy-service.js';

async function copyToClipboard(imageUrl) {
    navigator.permissions.query({ name: "clipboard-write" }).then(async result => {
        if (result.state == "granted" || result.state == "prompt") {
            const image = await fetch(wrapUrlWithProxy(imageUrl))
            const blob = await image.blob()

            const data = [new ClipboardItem({ [blob.type]: blob })];
            await navigator.clipboard.write(data)
        } else {
            console.warn("Clipboard write is not accessible")
        }
    });
}

export { copyToClipboard };