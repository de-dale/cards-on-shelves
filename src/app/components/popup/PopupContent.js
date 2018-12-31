import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class PopupContent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onClose = props.onClose.bind(this);
        this.popupRoot = document.createElement('div');
        this.popupRoot.id = 'popup-root';
        this.popup = null;
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.popupRoot);
    }

    componentDidMount() {
        this.popup = window.open('', '', 'width=800,height=800,left=200,top=200');
        this.popup.addEventListener('beforeunload', this.onClose);

        this.appendPopupHead();
        this.appendPopupBody();
    }

    appendPopupHead() {
        const popupDoc = this.popup.document;
        copyStyles(document, popupDoc);
        this.appendPopupStyleSheet(popupDoc);
    }

    appendPopupStyleSheet(popupDoc) {
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
    }

    appendPopupBody() {
        this.popup.document.body.appendChild(this.popupRoot);
    }

    componentWillUnmount() {
        this.popup.removeEventListener('beforeunload', this.onClose);
        this.popup.close();
    }

}

function copyStyles(sourceDoc, targetDoc) {
    Array.from(sourceDoc.styleSheets)
        .map(styleSheet => copyStyle(styleSheet, targetDoc))
        .forEach((styleSheet) => targetDoc.head.appendChild(styleSheet));
}

function copyStyle(styleSheet, targetDoc) {
    if (styleSheet.cssRules) {
        return copyStyleElement(targetDoc, styleSheet);
    } else if (styleSheet.href) {
        return copyStyleLink(targetDoc, styleSheet);
    }
}


function copyStyleElement(targetDoc, styleSheet) {
    const targetStyleSheet = targetDoc.createElement('style');
    Array.from(styleSheet.cssRules)
        .map((cssRule) => targetDoc.createTextNode(cssRule.cssText))
        .forEach((cssRule) => targetStyleSheet.appendChild(cssRule));

    return targetStyleSheet;
}

function copyStyleLink(targetDoc, styleSheet) {
    const targetStyleLink = targetDoc.createElement('link');
    targetStyleLink.rel = 'stylesheet';
    targetStyleLink.href = styleSheet.href;
    return targetStyleLink;
}

PopupContent.propTypes = {
    label: PropTypes.string,
    children: PropTypes.element,
    onClose: PropTypes.func.isRequired
};
export default PopupContent;