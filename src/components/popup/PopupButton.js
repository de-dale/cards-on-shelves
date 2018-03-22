'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export class PopupButton extends Component {
    constructor(props) {
        super(props);
        this.openPopup = this.openPopup.bind(this);
    }

    render() {
        return (
            <button onClick={this.openPopup}>
                {this.props.label}
            </button>
        );
    }

    openPopup() {
        const popup = window.open('', '', 'width=800,height=800,left=200,top=200');
        this.copyStyles(document, popup.document);

        const popupDoc = popup.document;
        const popupStyleSheet = popupDoc.createElement('style');
        Array.from([
            'body {margin: 0;background-color: white;}',
            'body * {visibility: hidden;}',
            '#popup-root * {visibility: visible;}',
            '@page {margin: 8mm;}'
        ])
            .map((cssRule) => popupDoc.createTextNode(cssRule))
            .forEach((cssRule) => popupStyleSheet.appendChild(cssRule));

        popupDoc.head.appendChild(popupStyleSheet);


        const popupRoot = popupDoc.createElement('div')
        popupRoot.id = 'popup-root';
        popupDoc.body.appendChild(popupRoot);

        ReactDOM.render(this.props.children, popupRoot);
    }

    copyStyles(sourceDoc, targetDoc) {
        Array.from(sourceDoc.styleSheets)
            .map(styleSheet => this.copyStyle(styleSheet, targetDoc))
            .forEach((styleSheet) => targetDoc.head.appendChild(styleSheet));
    }

    copyStyle(styleSheet, targetDoc) {
        if (styleSheet.cssRules) {
            return this.copyStyleElement(targetDoc, styleSheet);
        } else if (styleSheet.href) {
            return this.copyStyleLink(targetDoc, styleSheet);
        }
    }


    copyStyleElement(targetDoc, styleSheet) {
        const targetStyleSheet = targetDoc.createElement('style');
        Array.from(styleSheet.cssRules)
            .map((cssRule) => targetDoc.createTextNode(cssRule.cssText))
            .forEach((cssRule) => targetStyleSheet.appendChild(cssRule));

        return targetStyleSheet;
    }

    copyStyleLink(targetDoc, styleSheet) {
        const targetStyleLink = targetDoc.createElement('link');
        targetStyleLink.rel = 'stylesheet';
        targetStyleLink.href = styleSheet.href;
        return targetStyleLink;
    }
}

