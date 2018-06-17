const rule = /(#[a-zA-Z0-9]+)/g;

export const parse = (value, renderer, action) => {
    return value.split(rule).map((chunk) => {

        if (chunk.match(rule)) {
            return renderer(chunk, action);
        }

        return chunk;
    });
};
