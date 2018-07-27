import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import ReactHashtag from '../src/index';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('ReactHashtag should behave', () => {

    it('Should render hashtags', () => {
        const context = shallow(
            <div>
                <ReactHashtag>
                    Hello #there fellow #dude#Works?
                </ReactHashtag>
            </div>
        );

        expect(context.html()).toMatchSnapshot();
    });

    it('Should render custom hashtags', () => {
        const hashtagRenderer = (hashtag) => (
            <div>
                {hashtag}
            </div>
        );

        const context = shallow(
            <div>
                <ReactHashtag renderHashtag={hashtagRenderer}>
                    #lots
                    #of
                    #hashtags
                    ＃🤷🏿‍♀️
                    #thatWasAUnicodeSet
                </ReactHashtag>
            </div>
        );

        expect(context.html()).toMatchSnapshot();
    });


    it('Should handle the hashtag actions', () => {
        const onHashtagClick = jest.fn();
        const context = mount(
            <div>
                <ReactHashtag onHashtagClick={onHashtagClick}>
                    #lots
                    #of
                    #hashtags
                </ReactHashtag>
            </div>
        );

        context.find('span').first().simulate('click');
        expect(onHashtagClick).toHaveBeenCalledWith("#lots", expect.any(Object));
    });


    it('Should handle the hashtag action and custom renderer', () => {
        const onHashtagClick = jest.fn();

        const hashtagRenderer = (hashtag, action) => (
            <p key={hashtag} onClick={() => action(hashtag)}>
                {hashtag}
            </p>
        );

        const context = mount(
            <div>
                <ReactHashtag renderHashtag={hashtagRenderer} onHashtagClick={onHashtagClick}>
                    #lots
                    #of
                    #hashtags
                </ReactHashtag>
            </div>
        );

        context.find('p').first().simulate('click');
        expect(onHashtagClick).toHaveBeenCalledWith("#lots");
    });

});