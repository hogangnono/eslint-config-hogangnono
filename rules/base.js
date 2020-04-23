module.exports = {
    plugins: ['import', 'babel'],
    extends: [
        'eslint:recommended',
        'eslint-config-airbnb-base'
    ],
    rules: {
        // 0 - turn the rule off
        // 1 - turn the rule on as a warning (doesn't affect exit code)
        // 2 - turn the rule on as an error (exit code is 1 when triggered)
        // off, warn, error 0, 1, 2
        'no-restricted-syntax': 0,
        'no-await-in-loop': 0,
        'no-console': 0,
        'no-debugger': 2,
        'no-else-return': 0,
        'no-empty': 0,
        'no-new': 0,
        'no-alert': 0,
        'no-unused-vars': ['error', { 'vars': 'all', 'args': 'none' }],
        'no-lonely-if': 0,
        'no-return-reassign': 0,
        'default-case': 0,
        'func-names': 0,
        'no-var': 2, // var는 이제 그만
        'no-shadow': 0,
        'no-underscore-dangle': 0,
        'no-param-reassign': 0,
        'no-unneeded-ternary': 0,
        'no-restricted-globals': 0,
        'no-mixed-operators': 2, // && || 섞어 쓰지 않음
        'no-extra-boolean-cast': 0, // !! 사용가능
        'newline-per-chained-call': 0,
        'consistent-return': 0,
        'padded-blocks': [2, 'never'], // 논리 블럭에 공백 없게
        'global-require': 0, // require()는 함수안에서도 가능
        'import/prefer-default-export': 0, // default를 꼭 안써도 되게 함
        'prefer-arrow-callback': 0,
        'prefer-destructuring': 0,
        'arrow-body-style': 0,
        'arrow-parens': 0,

        'indent': [2, 4, {
            'VariableDeclarator': 2,
            'SwitchCase': 1,
            'FunctionExpression': {
                'parameters': 'off' // 함수에 인자가 많을 경우 indent 마음대로
            },
            'MemberExpression': 'off', // 메서드 체이닝시 indent는 마음대로
            'ignoredNodes': ['TemplateLiteral *'], // 템플릿 리터럴 내에서 무시
            'ignoreComments': true // 주석내에서는 허용
        }],
        'comma-dangle': [2, 'never'],
        'keyword-spacing': 2,
        'space-before-function-paren': [2, {'anonymous': 'always', 'named': 'ignore', 'asyncArrow': 'always'}], // function 뒤 괄호 사이에 공백 강제
        'function-paren-newline': [2, 'consistent'],

        'prefer-template': 0,
        'object-shorthand': 0,
        'array-bracket-spacing': 0,
        'array-callback-return': 0,
        'new-cap': 0,
        'max-len': 0,
        'quotes': [2, 'single', { 'allowTemplateLiterals': true }], // single quote에 template string 허용

        'no-mixed-operators': 0, // 연산자를 연결해서 쓸 수 있도록
        'class-methods-use-this': 0, // class 메서드를 외부에서 호출할 때 static 형태로만 호출하지 않아도 되게 수정. instance 형태로 import 하는 구문도 있고, this를 쓰는지 안쓰는지 구분하지 않고 만들기 때문에 은근 불편함

        'no-plusplus': 0,
        'no-loop-func': 1,

        // { a, b, c } 같이 객체를 풀 때 에러 안나도록 수정
        'object-curly-newline': ['error', {
            'consistent': true
        }],

        // multi-line operator의 위치를 정의
        'operator-linebreak': [1, 'before'],

        'curly': [2, 'all'], // 한 줄 조건문 허용하지 않음
        'max-classes-per-file': ['error', 5], // 한 파일에 여러 클래스를 정의할 수 있게 허용
        'dot-notation': ['error', { 'allowPattern': '^[a-z]+(_[a-z]+)+$' }], // obj['camelCase']는 에러. obj['snake_case']는 허용

        'import/extensions': 0, // import할때 확장자 써도 됨
        'import/first': 0, // absolute/relative import 위치 상관 없이
        'import/no-mutable-exports': 0,
        'import/no-dynamic-require': 0,
        'import/newline-after-import': 0,

        /**
         * babel 옵션 추가 @see https://github.com/babel/eslint-plugin-babel
         */
        'babel/semi': 1,
        'babel/quotes': [1, 'single', {
            'avoidEscape': true,
            'allowTemplateLiterals': true
        }],
        'babel/no-unused-expressions': 1,

        // camelcase는 optional chaning에 대응이 잘 안되므로 해제하고 babel/camelcase로 덮어서 처리
        'camelcase': 0,
        'babel/camelcase': [2, { allow: ['^UNSAFE_'], 'properties': 'never', 'ignoreDestructuring': true }], // 최소한만 에러 처리. (db 때문)
    }
};
