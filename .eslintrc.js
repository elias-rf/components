module.exports = {
    extends: ['airbnb-base', 'prettier'],
    env: {
        jest: true,
        node: true,
        browser: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
    },
    rules: {
        'arrow-parens': 'off',
        'comma-dangle': 'off',
        'no-bitwise': [
            'error',
            {
                allow: ['~'],
            },
        ],
        'no-mixed-operators': 'off',
    },
};
