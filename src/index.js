import { withFramework } from './hashtag';

const getParams = function() {
    try {
        return [require("react").createElement, true];
    } catch (err) {
        try {
            return [require("preact").h];
        } catch (err) {
            console.log("[react-hashtag] there's no react nor preact available to import");
        }
    }
};

export default withFramework.apply(null, getParams());