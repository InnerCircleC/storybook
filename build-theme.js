const S = require('style-dictionary')

const INPUT_DIR = 'theme'
const OUTPUT_DIR = 'theme'
const THEMES = 'global'
const PLATFORMS = 'css js ts'

/* 유틸리티 함수 ------------------------------------------------------------------ */

function transformShadow(shadow) {
  const { x, y, blur, spread, color } = shadow
  return `${x} ${y} ${blur} ${spread} ${color}`
}

/* CSS 변수 포멧 ---------------------------------------------------------------- */

S.registerFormat({
  name: 'css/variables',
  formatter(dictionary /* , config */) {
    return `${this.selector} {
      ${dictionary.allProperties
        .map(({ name, value }) => `  --${name}: ${name.includes('space-') ? `${value}px` : value};`)
        .join('\n')}
      }`
  },
})

// 포멧 구성 함수
const setCSS = theme => ({
  buildPath: `${OUTPUT_DIR}/`,
  transforms: ['attribute/cti', 'name/cti/kebab', 'shadow/shorthand', 'typography/shorthand'],
  files: [
    {
      destination: `css/${theme}.css`,
      format: 'css/variables',
      selector: theme.includes('global') ? ':root' : `.${theme}-theme`,
    },
  ],
})

// CSS Shadow 단축 속성 변경
S.registerTransform({
  name: 'shadow/shorthand',
  type: 'value',
  transitive: true,
  matcher: token => ['boxShadow'].includes(token.type),
  transformer(token) {
    return Array.isArray(token.original.value)
      ? token.original.value.map(single => transformShadow(single)).join(', ')
      : transformShadow(token.original.value)
  },
})

// 타이포그래피 단축 속성 변경
S.registerTransform({
  name: 'typography/shorthand',
  type: 'value',
  transitive: true,
  matcher: token => token.type === 'typography',
  transformer(token) {
    const { value } = token
    return `${value.fontWeight} ${value.fontSize + 'px'}/${value.lineHeight} ${value.fontFamily}`
  },
})

/* JS 변수 포멧 ---------------------------------------------------------------- */

// 포멧 구성 함수
const setJS = theme => ({
  buildPath: `${OUTPUT_DIR}/`,
  transforms: ['name/js/es6'],
  files: [
    {
      destination: `js/${theme}.js`,
      format: 'javascript/es6',
    },
  ],
})

S.registerTransform({
  name: 'name/js/es6',
  type: 'name',
  transformer(token) {
    const tokenPath = token.path.join(' ')
    const tokenPathItems = tokenPath.split(' ')
    for (let i = 0, l = tokenPathItems.length; i < l; ++i) {
      tokenPathItems[i] = tokenPathItems[i].charAt(0).toUpperCase() + tokenPathItems[i].slice(1)
    }
    let tokenName = tokenPathItems.join('')
    tokenName = tokenName.includes('-') ? tokenName.replace('-', '') : tokenName
    return tokenName
  },
})

/* TS 포멧 ---------------------------------------------------------------- */

// 포멧 구성 함수
const setTS = theme => ({
  buildPath: `${OUTPUT_DIR}/`,
  files: [
    {
      destination: `ts/${theme}.ts`,
      format: 'name/ts',
    },
  ],
})

S.registerFormat({
  name: 'name/ts',
  type: 'name',
  formatter: function ({ dictionary }) {
    return dictionary.allProperties
      .map(function (token) {
        const tokenPath = token.path.join(' ')
        const tokenPathItems = tokenPath.split(' ')
        for (let i = 0, l = tokenPathItems.length; i < l; ++i) {
          tokenPathItems[i] = tokenPathItems[i].charAt(0).toUpperCase() + tokenPathItems[i].slice(1)
        }
        let tokenName = tokenPathItems.join('')
        tokenName = tokenName.includes('-') ? tokenName.replace('-', '') : tokenName
        let toRetProp = 'export const ' + tokenName + ' : ' + S.formatHelpers.getTypeScriptType(token.value) + ';'
        if (token.comment) toRetProp = toRetProp.concat(' // ' + token.comment)
        return toRetProp
      })
      .join('\n')
  },
})

/* 스타일 딕셔너리 구성 유틸리티 함수 ------------------------------------------------- */

const getStyleDictionaryConfig = theme => ({
  source: [`${INPUT_DIR}/${theme}.json`],
  platforms: {
    css: setCSS(theme),
    js: setJS(theme),
    ts: setTS(theme),
  },
})

/* 빌드 ----------------------------------------------------------------------- */

console.log('🪩  테마 빌드 START ---------------')
THEMES.split(' ').map(theme => {
  const SD = S.extend(getStyleDictionaryConfig(theme))
  PLATFORMS.split(' ').map(platform => SD.buildPlatform(platform))
})
console.log('\n🪩  테마 빌드 FINISHED ------------\n')

/* JSON 변환 ------------------------------------------------------------------ */

function transformThemeJSON(path) {
  const fs = require('fs')
  const globalTheme = require(path)

  const result = Object.fromEntries(
    Object.entries(globalTheme).map(([key, valueObject]) => {
      if (key.includes('space-')) {
        valueObject = {
          ...valueObject,
          value: `${valueObject.value}px`,
        }
      }

      return [key, valueObject]
    }),
  )

  fs.writeFileSync(`${path.split('.json')[0]}.transformed.json`, JSON.stringify(result, null, 2))
}

transformThemeJSON('./theme/global.json')
