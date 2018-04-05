import React from 'react';
import Fullheader from '../src/Main'; // This is our component
import { storiesOf } from '@storybook/react';

storiesOf('Fullheader', module)
    .add('with title', () => (
        <Fullheader title="TDD" />
    ))
    .add('with title and subtitle', () => (
        <Fullheader title="TDD" subtitle="Curso de Javascript com TDD na prática" />

    ))
    .add('with tite, subtitle, bgColor', () => (
        <Fullheader
            title="TDD"
            subtitle="Curso de Javascript com TDD na prática"
            bgColor="#3299BB"
        />
    ))
    .add('with tite, subtitle, bgColor, textColor', () => (
        <Fullheader
            title="TDD"
            subtitle="Curso de Javascript com TDD na prática"
            bgColor="#3299BB"
            textColor="#FF9900"
        />
    ))
    .add('with tite, subtitle, bgColor, textColor, font', () => (
        <Fullheader
            title="TDD"
            subtitle="Curso de Javascript com TDD na prática"
            bgColor="#3299BB"
            textColor="#FF9900"
            font="cursive"
        />
    ))
    .add('with tite, subtitle, bgImage', () => (
        <Fullheader
            title="TDD"
            subtitle="Curso de Javascript com TDD na prática"
            bgImage="https://raw.githubusercontent.com/willianjusten/photo-examples/master/iceland-glacier.jpg"
        />
    ))
    .add('with tite, subtitle, video', () => (
        <Fullheader
            title="TDD"
            subtitle="Curso de Javascript com TDD na prática"
            video="http://callmenick.com/_development/video/full-screen-background-video/media/demo.mp4"
            bgColor="#3299BB"
            textColor="#FF9900"
        />
    ))

