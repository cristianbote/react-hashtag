import { withFramework } from './hashtag';

const Component = (() => {
    try {
        return withFramework(require("react").createElement, true);
    } catch (err) {
        try {
            return withFramework(require("preact").h);
        } catch (err) {
            console.log("[react-hashtag] there's no react nor preact available to import");
        }
    }
})();

export default Component;