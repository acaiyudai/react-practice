let dom = document.querySelector('#root');
let element = React.createElement(
    'div', {}, [
        React.createElement(
            'h2', {}, 'Hello!'
        ),
        React.createElement(
            'h3', {}, 'React Sample Page.'
        ),
        React.createElement(
            'ul', {}, [
                React.createElement(
                    'li', {}, 'First Item.'
                ),
                React.createElement(
                    'li', {}, 'Second Item.'
                )

            ]
        ),

    ]
);
ReactDOM.render(element, dom);