module.exports = {
    plugins: ['import'],
    rules: {
        'no-console': 0,
        'no-else-return': 0,
        'no-empty': 0,
        'no-new': 0,
        'no-alert': 0,
        'no-unused-vars': ['error', { 'vars': 'all', 'args': 'none' }],
        'default-case': 0,
        'func-names': 0,
        'no-var': 0,
        'no-shadow': 0,
        'no-underscore-dangle': 0,
        'no-param-reassign': 0,
        'no-unneeded-ternary': 0,
        'no-restricted-globals': 0,
        'no-mixed-operators': 1, // && || 섞어 쓰지 않음
        'newline-per-chained-call': 0,
        'consistent-return': 0,
        'padded-blocks': 0,
        'global-require': 0, // require()는 함수안에서도 가능

        'prefer-arrow-callback': 0,
        'prefer-destructuring': 0,
        'arrow-body-style': 0,
        'arrow-parens': 0,

        'indent': [2, 4, {
            'VariableDeclarator': 2,
            'SwitchCase': 1
        }],
        'comma-dangle': [2, 'never'],
        'space-before-function-paren': 0,

        'prefer-template': 0,
        'object-shorthand': 0,
        'array-bracket-spacing': 0,
        'array-callback-return': 0,
        'new-cap': 0,
        'max-len': 0,

        'import/extensions': 0, // import할때 확장자 써도 됨
        'import/first': 0, // absolute/relative import 위치 상관 없이
        'import/no-mutable-exports': 0,

        "no-mixed-operators": 0, // 연산자를 연결해서 쓸 수 있도록
        "jsx-a11y/anchor-is-valid": 0 // anchor 태그를 button 대신 쓸 수 있도록 (IE 스타일 오류 때문)
    }
};
