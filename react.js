module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        react: {
            version: 'detect'
        },
        'import/resolver': {
            node: {
                extensions: [
                    '.js',
                    '.jsx' // vscode auto import에서 jsx 생략되어도 import를 resolve할 수 있도록 수정
                ]
            }
        }
    },
    extends: [
        require.resolve('./rules/base'),
        require.resolve('./rules/react')
    ]
};
