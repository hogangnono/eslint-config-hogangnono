# eslint-config-hogangnono

## 설치
```
yarn add -D eslint babel-eslint eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-config-airbnb eslint-config-airbnb-base
yarn add -D eslint-config-hogangnono
```

## 설정
### base
```
// .eslintrc 파일
{
    "parser": "babel-eslint",
    "extends": "hogangnono",
    "rules": {
        // 프로젝트별 적용할 Rules
    }
}
```

### react
```
// .eslintrc 파일
{
    "parser": "babel-eslint",
    "extends": "hogangnono/react",
    "rules": {
        // 프로젝트별 적용할 Rules
    }
}
```
