module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['react', 'jsx-a11y', 'babel'],
    extends: ['plugin:react/recommended', 'eslint-config-airbnb'],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],

        // import해서 선언한 것과 jsx 내부에서 모듈 사용에 대한 오류 대응
        'react/jsx-no-undef': 2,
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,

        // ref는 함수형으로
        'react/no-string-refs': 2,

        // 한 파일 내에서 여러 컴포넌트 정의 가능
        'react/no-multi-comp': 0,

        // 주요 메서드 정렬
        'react/sort-comp': [1, {
            'order': [
                'type-annotations',
                'static-methods',
                'lifecycle',
                'everything-else',
                'render'
            ]
        }],

        // isMounted() 사용안하도록 권고
        'react/no-is-mounted': 1,

        // pure function 권고 -> createReactClass 때문에 안함
        'react/prefer-stateless-function': 0,

        // prop-types primitive 타입으로 지정할 수 있게
        'react/forbid-prop-types': 0,

        // isRequired가 아닌 props에 대해서 defaultProps를 지정 안해도 되게
        'react/require-default-props': 0,

        // prop-types에서 children은 정의 안해도 됨
        'react/prop-types': [1, {
            ignore: ['children']
        }],

        'react/no-unused-prop-types': 1,
        'react/no-unused-state': 1,

        'react/no-did-mount-set-state': 1,
        'react/no-did-update-set-state': 1,
        'react/no-will-update-set-state': 1,

        'react/jsx-no-bind': [1, {
            ignoreRefs: true,
            allowArrowFunctions: true
        }],
        'react/no-array-index-key': 1,

        // class 정의 안써도 됨.
        'react/prefer-es6-class': 0,
        'react/jsx-boolean-value': 0,
        'react/jsx-closing-bracket-location': 0,
        'react/jsx-first-prop-new-line': 0,
        'react/jsx-closing-tag-location': 0,
        'react/jsx-max-props-per-line': 0,
        'react/self-closing-comp': 0,
        'react/destructuring-assignment': 0,
        'react/jsx-props-no-spreading': 0,
        'react/static-property-placement': 0,
        'react/jsx-one-expression-per-line': 0,

        // multi-line operator의 위치를 정의
        'operator-linebreak': ['before'],

        // 이벤트 핸들러 있는곳에는 role 필요
        'jsx-a11y/anchor-is-valid': 1,
        'jsx-a11y/no-static-element-interactions': 1,

        // babel 옵션 추가 @see https://github.com/babel/eslint-plugin-babel
        'babel/semi': 1,
        'babel/quotes': [1, 'single', {
            'avoidEscape': true,
            'allowTemplateLiterals': true
        }],
        'babel/no-unused-expressions': 1
    }
};
