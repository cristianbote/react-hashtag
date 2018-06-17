import React from 'react';
import PropTypes from 'prop-types';
import {parse} from '../lib';

const defaultHashtagRenderer = (hashtag, onClick) => (
    React.createElement(
        'span',
        { key: hashtag, onClick: onClick ? (e) => onClick(hashtag, e) : null },
        hashtag
    )
);

export const ReactHashtag = (props) => {
    const contents = props.children;
    const hashtagRenderer = props.renderHashtag || defaultHashtagRenderer;
    const onHashtagClick = props.onHashtagClick;
    return parse(contents, hashtagRenderer, onHashtagClick);
};

ReactHashtag.propTypes = {
    'onHashtagClick': PropTypes.func,
    'renderHashtag': PropTypes.func
};