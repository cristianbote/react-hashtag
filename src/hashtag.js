import {parse} from '../lib';

const defaultHashtagRenderer = createElement => (hashtag, onClick) => (
    createElement(
        'span',
        {
            key: hashtag,
            onClick: onClick ? (e) => onClick(hashtag, e) : null
        },
        hashtag
    )
);

export const withFramework = (createElement, canRenderArray) => {    
    return (props) => {
        const contents = typeof props.children === "object" && props.children.length ? (!isNaN(props.children.length) ? props.children[0] : props.children) : props.children;
        const hashtagRenderer = props.renderHashtag || defaultHashtagRenderer(createElement);
        const onHashtagClick = props.onHashtagClick;
        const parsed = parse(contents, hashtagRenderer, onHashtagClick);

        return canRenderArray ? parsed : createElement('span', null, parsed);
    };
};