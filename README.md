# 컴포넌트 UI 개발

Figma에서 json으로 내보낸 디자인 데이터를 컴포넌트의 스타일 값으로 변환하여 업데이트하는 과정을 자동화 하는 프로젝트.

## 카테고리

### Example

스토리북 기본 컴포넌트

### AntdButton

Ant Design 버튼과 동일한 컴포넌트

## Data fetching

`src/server/apis`에 http 요청을 처리하는 모듈 파일이 있습니다.  
각 컴포넌트에서 스타일 정보를 받아오기 위해 이곳에 있는 모듈을 사용합니다.

url은 `src/server/axios.ts`에서 변경합니다.

## 개발 환경

### Javascript library

- react (+ typescript)

### Linters

- eslint
- stylelint

### Code formatter

- prettier

### Http client library

- axios

### CSS post-processor

- postcss

### CSS-in-JS

- styled-components

> 평소에 제가 활용하는 환경 설정을 그대로 가지고 왔어요. 불필요한 설정이나 파일이 있습니다만 개발에 지장을 주지 않기도 하고, 이 레포지토리가 세밀하게 관리할 필요가 있을 정도로 프로젝트 진행에 영향을 주지는 않는다고 판단하여 그대로 놔두었어요.
