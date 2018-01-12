module.exports = {
    plugins: ['import'],
    rules: {
        'no-console': 0,
        'no-else-return': 0,
        'no-empty': 0,
        'no-new': 0,
        'no-alert': 0,
        'no-unused-vars': ['error', { 'vars': 'all', 'args': 'none' }],
        'no-lonely-if': 0,
        'no-return-reassign': 0,
        'default-case': 0,
        'func-names': 0,
        'no-var': 0,
        'no-shadow': 0,
        'no-underscore-dangle': 0,
        'no-param-reassign': 0,
        'no-unneeded-ternary': 0,
        'no-restricted-globals': 0,
        'no-mixed-operators': 2, // && || 섞어 쓰지 않음
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
            'SwitchCase': 1,
            'FunctionExpression': 'off', // 함수에 인자가 많을 경우 indent 마음대로
            'MemberExpression': 'off' // 메서드 체이닝시 indent는 마음대로
        }],
        'comma-dangle': [2, 'never'],
        'space-before-function-paren': 0,

        'prefer-template': 0,
        'object-shorthand': 0,
        'array-bracket-spacing': 0,
        'array-callback-return': 0,
        'new-cap': 0,
        'max-len': 0,
        'quotes': ['error', 'single', { 'allowTemplateLiterals': true }], // single quote에 template string 허용

        'import/extensions': 0, // import할때 확장자 써도 됨
        'import/first': 0, // absolute/relative import 위치 상관 없이
        'import/no-mutable-exports': 0,
        "import/no-dynamic-require": 0,
        "import/newline-after-import": 0,

        'no-mixed-operators': 0, // 연산자를 연결해서 쓸 수 있도록
        'jsx-a11y/anchor-is-valid': 0, // anchor 태그를 button 대신 쓸 수 있도록 (IE 스타일 오류 때문)

        "no-plusplus": 0,
        "no-loop-func": 1,

        // { a, b, c } 같이 객체를 풀 때 에러 안나도록 수정
        "object-curly-newline": ["error", {
            "consistent": true
        }]
    }
};
