module.exports = {
    plugins: ['react', 'react-hooks', 'jsx-a11y'],
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended'
    ],
    rules: {
        /**
         * react
         */
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }], // js 파일 내에서도 jsx 문법 사용가능
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
        'react/no-access-state-in-setstate': 1, // setState할 때 this.state 접근시 warning 으로 변경

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
        'react/state-in-constructor': 0,
        'react/jsx-fragments': 1,

        /**
         * jsx-a11y
         */
        'jsx-a11y/anchor-is-valid': 0, // anchor 태그를 button 대신 쓸 수 있도록 (IE 스타일 오류 때문)
        'jsx-a11y/no-static-element-interactions': 1 // 이벤트 핸들러 있는곳에는 role 필요
    }
};
