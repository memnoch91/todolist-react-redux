module.exports = {
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    env: {
        browser: true,
        es6: true
    },
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        noonsole: 0,
        indent: ['error', 4],
        'linebreak-style': ['error', 'windows'],
        quotes: ['error', 'single'],
        semi: ['error', 'always']
    }
};
