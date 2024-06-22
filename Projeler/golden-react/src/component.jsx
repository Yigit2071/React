import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GoldenLayout from 'golden-layout';
import 'golden-layout/dist/css/goldenlayout-base.css';
import 'golden-layout/dist/css/themes/goldenlayout-dark-theme.css';

export const TestComponent = ({ glContainer, glEventHub, ...props }) => (
    <div>{props.label}</div>
);

export const layout = new GoldenLayout({
    content: [{
        type: 'row',
        content: [{
            type: 'react-component',
            component: 'test-component',
            props: { label: 'A' }
        }, {
            type: 'column',
            content: [{
                type: 'react-component',
                component: 'test-component',
                props: { label: 'B' }
            }, {
                type: 'react-component',
                component: 'test-component',
                props: { label: 'C' }
            }]
        }]
    }]
});

layout.registerComponent('test-component', TestComponent);
layout.init();

