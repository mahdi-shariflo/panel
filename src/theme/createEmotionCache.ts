import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";

export default function createEmotionCache(isRTL?: any) {
    let shouldRotate = isRTL;
    const isClient = typeof isRTL === "undefined";
    if (isClient) {
        if (!(typeof document === "undefined")) {
            const dir = document.dir;
            shouldRotate = dir === "rtl" ? true : false;
        }
    }
    return createCache({
        key: "css",
        //@ts-ignore
        stylisPlugins: shouldRotate ? [rtlPlugin] : [],
    });
}
