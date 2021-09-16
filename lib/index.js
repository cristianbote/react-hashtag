const rule = /([#|＃][^\s]+)/g;

export const parse = (value, renderer, action, hashtagRegex = rule) => {
    return value.split(rule).map((chunk) => {

        if (hashtagRegex.test(chunk)) {
            return renderer(chunk, action);
        }

        return chunk;
    });
};
