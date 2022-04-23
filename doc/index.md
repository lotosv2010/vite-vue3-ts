# 一、简介

## 搭建前准备

- Vscode: 前端人必备写码神器
- Chrome：对开发者非常友好的浏览器(反正我是很依赖它的)
- Nodejs&npm：配置本地开发环境，安装 Node 后你会发现 npm 也会一起安装下来
- Vue.js devtools：浏览器调试插件
- Vue Language Features (Volar)：Vscode 开发 vue3 必备插件，提供语法高亮提示，非常好用
- Vue 3 Snippets：vue3 快捷输入

## 介绍 vite

- Vite：下一代前端开发与构建工具
  - 极速的开发服务器启动
  - ⚡️ 轻量快速的热模块重载（HMR）
  - 🛠️ 丰富的功能
  - 📦 自带优化的构建
  - 🔩 通用的插件接口
  - 🔑 完全类型化的 API
- Vite （法语意为 “迅速”，发音 /vit/）是一种全新的前端构建工具，它极大地改善了前端开发体验。它主要由两部分组成：
  - 一个开发服务器，它基于原生 ES 模块提供了丰富的内建功能，如速度快到惊人的模块热更新（HMR）。
  - 一套构建指令，它使用 Rollup 打包你的代码，并且它是预配置的，可以输出用于生产环境的优化过的静态资源。
  - Vite 意在提供开箱即用的配置，同时它的 插件 API 和 JavaScript API 带来了高度的可扩展性，并有完整的类型支持。

## 目标

- 构建项目的要求如下：
  - 支持 Typescript
  - 支持 vue3 语法
  - 支持 ES6 语法
  - 支持 Scss module
  - 支持 Eslint、Prettier、Pre-commit hook
  - 支持 HMR 快速热更新
  - 支持 element-ui 按需引入与主题样式覆盖
  - 支持 Proxy 代理、alias 别名
  - 兼容传统浏览器
  - 开发启动速度要够快，以秒计算
  - 支持懒加载和 chunk 分割

# 二、初始化项目

- 采用的 [vite 2.0](https://link.segmentfault.com/?enc=JadgkOebg1una78BjJbS4Q%3D%3D.uSLZJu4yWcX%2FnD7TbtnzF4RgEThDMa9AVu0W6OzJ3RUq9ZP7ygXSRf6ZT06f%2Fh98) 来初始化我们的项目

```shell
# npm 6.x
npm create vite@latest vite-vue3-ts --template vue-ts

# npm 7+, extra double-dash is needed:
npm create vite@latest vite-vue3-ts -- --template vue-ts

# yarn
yarn create vite vite-vue3-ts --template vue-ts

# pnpm
pnpm create vite vite-vue3-ts -- --template vue-ts
```

# 三、约束代码风格

## Eslint 支持

### 安装依赖

- [pnpm](https://pnpm.io/zh/motivation)

```shell
# eslint 安装
pnpm i -D eslint
# eslint 插件安装
# Vue.js 的官方 ESLint 插件，提供了，以及 .js 文件中的 Vue 代码的支持
pnpm i -D eslint-plugin-vue
# 针对 ts 的 eslint plugin
pnpm i -D @typescript-eslint/eslint-plugin
# 为 prettier 在 eslint 中工作提供支持
pnpm i -D eslint-plugin-prettier
# typescript parser
# 针对 eslint 的一个 ts 解析器
pnpm i -D @typescript-eslint/parser
```

### 配置

- 新建.eslintrc.js，.eslintignore 两个文件，更 src 同级目录，内容如下

```javascript
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    // eslint-config-prettier 的缩写
    'prettier',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  // eslint-plugin-vue @typescript-eslint/eslint-plugin eslint-plugin-prettier的缩写
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-var': 'error',
    'prettier/prettier': 'error',
    // 禁止出现console
    'no-console': 'warn',
    // 禁用debugger
    'no-debugger': 'warn',
    // 禁止出现重复的 case 标签
    'no-duplicate-case': 'warn',
    // 禁止出现空语句块
    'no-empty': 'warn',
    // 禁止不必要的括号
    'no-extra-parens': 'off',
    // 禁止对 function 声明重新赋值
    'no-func-assign': 'warn',
    // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    'no-unreachable': 'warn',
    // 强制所有控制语句使用一致的括号风格
    curly: 'warn',
    // 要求 switch 语句中有 default 分支
    'default-case': 'warn',
    // 强制尽可能地使用点号
    'dot-notation': 'warn',
    // 要求使用 === 和 !==
    eqeqeq: 'warn',
    // 禁止 if 语句中 return 语句之后有 else 块
    'no-else-return': 'warn',
    // 禁止出现空函数
    'no-empty-function': 'warn',
    // 禁用不必要的嵌套块
    'no-lone-blocks': 'warn',
    // 禁止使用多个空格
    'no-multi-spaces': 'warn',
    // 禁止多次声明同一变量
    'no-redeclare': 'warn',
    // 禁止在 return 语句中使用赋值语句
    'no-return-assign': 'warn',
    // 禁用不必要的 return await
    'no-return-await': 'warn',
    // 禁止自我赋值
    'no-self-assign': 'warn',
    // 禁止自身比较
    'no-self-compare': 'warn',
    // 禁止不必要的 catch 子句
    'no-useless-catch': 'warn',
    // 禁止多余的 return 语句
    'no-useless-return': 'warn',
    // 禁止变量声明与外层作用域的变量同名
    'no-shadow': 'off',
    // 允许delete变量
    'no-delete-var': 'off',
    // 强制数组方括号中使用一致的空格
    'array-bracket-spacing': 'warn',
    // 强制在代码块中使用一致的大括号风格
    'brace-style': 'warn',
    // 强制使用骆驼拼写法命名约定
    camelcase: 'warn',
    // 强制使用一致的缩进
    indent: 'off',
    // 强制在 JSX 属性中一致地使用双引号或单引号
    // 'jsx-quotes': 'warn',
    // 强制可嵌套的块的最大深度4
    'max-depth': 'warn',
    // 强制最大行数 300
    // "max-lines": ["warn", { "max": 1200 }],
    // 强制函数最大代码行数 50
    // 'max-lines-per-function': ['warn', { max: 70 }],
    // 强制函数块最多允许的的语句数量20
    'max-statements': ['warn', 100],
    // 强制回调函数最大嵌套深度
    'max-nested-callbacks': ['warn', 3],
    // 强制函数定义中最多允许的参数数量
    'max-params': ['warn', 3],
    // 强制每一行中所允许的最大语句数量
    'max-statements-per-line': ['warn', { max: 1 }],
    // 要求方法链中每个调用都有一个换行符
    'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 3 }],
    // 禁止 if 作为唯一的语句出现在 else 语句中
    'no-lonely-if': 'warn',
    // 禁止空格和 tab 的混合缩进
    'no-mixed-spaces-and-tabs': 'warn',
    // 禁止出现多行空行
    'no-multiple-empty-lines': 'warn',
    // 禁止出现;
    semi: ['warn', 'always'],
    // 强制在块之前使用一致的空格
    'space-before-blocks': 'warn',
    // 强制在 function的左括号之前使用一致的空格
    // 'space-before-function-paren': ['warn', 'never'],
    // 强制在圆括号内使用一致的空格
    'space-in-parens': 'warn',
    // 要求操作符周围有空格
    'space-infix-ops': 'warn',
    // 强制在一元操作符前后使用一致的空格
    'space-unary-ops': 'warn',
    // 强制在注释中 // 或 /* 使用一致的空格
    // "spaced-comment": "warn",
    // 强制在 switch 的冒号左右有空格
    'switch-colon-spacing': 'warn',
    // 强制箭头函数的箭头前后使用一致的空格
    'arrow-spacing': 'warn',
    'prefer-const': 'warn',
    'prefer-rest-params': 'warn',
    'no-useless-escape': 'warn',
    'no-irregular-whitespace': 'warn',
    'no-prototype-builtins': 'warn',
    'no-fallthrough': 'warn',
    'no-extra-boolean-cast': 'warn',
    'no-case-declarations': 'warn',
    'no-async-promise-executor': 'warn',
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
};
```

```javascript
# eslint 忽略检查 (根据项目需要自行添加)
node_modules
dist
coverage
```

## prettier 支持

### 安装依赖

```
# 安装 prettier
pnpm i -D prettier
```

### 解决 eslint 和 prettier 冲突

方案

- 解决 ESLint 中的样式规范和 prettier 中样式规范的冲突，以 prettier 的样式规范为准，使 ESLint 中的样式规范自动失效

安装依赖

```
# 安装插件 eslint-config-prettier
# 为 eslint 代码校验规则与 prettier 代码校验规则部分冲突提供支持
pnpm i -D eslint-config-prettier
```

### 配置

- 新建.prettierrc.js，.prettierignore 两个文件，更 src 同级目录，内容如下

```javascript
module.exports = {
  tabWidth: 2,
  jsxSingleQuote: true,
  printWidth: 100,
  singleQuote: true,
  semi: true,
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: 'always',
};
```

```javascript
# 忽略格式化文件 (根据项目需要自行添加)
node_modules
dist
coverage
```

## 自动检测

### 安装依赖

```
pnpm install -D vite-plugin-checker
```

### 配置

```typescript
import checker from 'vite-plugin-checker';
export default function configEslint() {
  return [
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{vue,ts,tsx}"',
      },
    }),
  ];
}
```

```typescript
import configEslint from './eslint';
export default function createVitePlugins() {
  const vitePlugins = [configEslint()];
  return vitePlugins;
}
```

```typescript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import createVitePlugins from './config/plugins/index';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ...createVitePlugins()],
});
```

## stylelint

### 安装依赖

```shell
pnpm i -D sass
pnpm i -D stylelint
pnpm i -D stylelint-config-standard
pnpm i -D stylelint-config-prettier
# pnpm i -D stylelint-config-html
pnpm i -D stylelint-order
pnpm i -D stylelint-scss
# pnpm i -D postcss
# pnpm i -D postcss-html
# pnpm i -D postcss-scss

```

### 配置

```javascript
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-order', 'stylelint-scss'],
  // customSyntax: 'postcss-html',
  rules: {
    indentation: 2,
    'no-descending-specificity': null,
    'function-url-quotes': 'always',
    'string-quotes': 'double',
    'unit-case': null,
    'color-hex-case': 'lower',
    'color-hex-length': 'long',
    'block-opening-brace-space-before': 'always',
    'property-no-unknown': null,
    'no-empty-source': null,
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep', 'global'],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'if',
          'each',
          'include',
          'mixin',
        ],
      },
    ],
    'named-grid-areas-no-invalid': null,
    'unicode-bom': 'never',
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    // 'declaration-block-trailing-semicolon': 'always',
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested'],
      },
    ],
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'keyframes-name-pattern': null,
    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        'at-rules',
        'declarations',
        {
          type: 'at-rule',
          name: 'supports',
        },
        {
          type: 'at-rule',
          name: 'media',
        },
        'rules',
      ],
      { severity: 'warning' },
    ],
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'float',
      'width',
      'height',
      'max-width',
      'max-height',
      'min-width',
      'min-height',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'margin-collapse',
      'margin-top-collapse',
      'margin-right-collapse',
      'margin-bottom-collapse',
      'margin-left-collapse',
      'overflow',
      'overflow-x',
      'overflow-y',
      'clip',
      'clear',
      'font',
      'font-family',
      'font-size',
      'font-smoothing',
      'osx-font-smoothing',
      'font-style',
      'font-weight',
      'hyphens',
      'src',
      'line-height',
      'letter-spacing',
      'word-spacing',
      'color',
      'text-align',
      'text-decoration',
      'text-indent',
      'text-overflow',
      'text-rendering',
      'text-size-adjust',
      'text-shadow',
      'text-transform',
      'word-break',
      'word-wrap',
      'white-space',
      'vertical-align',
      'list-style',
      'list-style-type',
      'list-style-position',
      'list-style-image',
      'pointer-events',
      'cursor',
      'background',
      'background-attachment',
      'background-color',
      'background-image',
      'background-position',
      'background-repeat',
      'background-size',
      'border',
      'border-collapse',
      'border-top',
      'border-right',
      'border-bottom',
      'border-left',
      'border-color',
      'border-image',
      'border-top-color',
      'border-right-color',
      'border-bottom-color',
      'border-left-color',
      'border-spacing',
      'border-style',
      'border-top-style',
      'border-right-style',
      'border-bottom-style',
      'border-left-style',
      'border-width',
      'border-top-width',
      'border-right-width',
      'border-bottom-width',
      'border-left-width',
      'border-radius',
      'border-top-right-radius',
      'border-bottom-right-radius',
      'border-bottom-left-radius',
      'border-top-left-radius',
      'border-radius-topright',
      'border-radius-bottomright',
      'border-radius-bottomleft',
      'border-radius-topleft',
      'content',
      'quotes',
      'outline',
      'outline-offset',
      'opacity',
      'filter',
      'visibility',
      'size',
      'zoom',
      'transform',
      'box-align',
      'box-flex',
      'box-orient',
      'box-pack',
      'box-shadow',
      'box-sizing',
      'table-layout',
      'animation',
      'animation-delay',
      'animation-duration',
      'animation-iteration-count',
      'animation-name',
      'animation-play-state',
      'animation-timing-function',
      'animation-fill-mode',
      'transition',
      'transition-delay',
      'transition-duration',
      'transition-property',
      'transition-timing-function',
      'background-clip',
      'backface-visibility',
      'resize',
      'appearance',
      'user-select',
      'interpolation-mode',
      'direction',
      'marks',
      'page',
      'set-link-source',
      'unicode-bidi',
      'speak',
    ],
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
};
```

```javascript
/dist/*
/public/*
public/*
```

## 脚本配置

```json
{
  "script": {
    "lint": "eslint src --fix --ext .ts,.tsx,.vue,.js,.jsx",
    "prettier": "prettier --write .",
    "stylelint": "stylelint --fix \"**/*.{vue,less,postcss,css,scss}\" --cache --cache-location node_modules/.cache/stylelint/"
  }
}
```

- 上面配置完成后,可以运行以下命令测试下代码检查个格式化效果:

```
# eslint 检查
pnpm lint
# prettier 自动格式化
pnpm prettier
```

## 配置 husky + lint-staged

### 概述

- 使用 husky + lint-staged 助力团队编码规范, husky&lint-staged 安装推荐使用 mrm, 它将根据 package.json 依赖项中的代码质量工具来安装和配置 husky 和 lint-staged，因此请确保在此之前安装并配置所有代码质量工具，如 Prettier 和 ESlint
- husky 是一个为 git 客户端增加 hook 的工具。安装后，它会自动在仓库中的 .git/ 目录下增加相应的钩子；比如 pre-commit 钩子就会在你执行 git commit 的触发。
- 那么我们可以在 pre-commit 中实现一些比如 lint 检查、单元测试、代码美化等操作。当然，pre-commit 阶段执行的命令当然要保证其速度不要太慢，每次 commit 都等很久也不是什么好的体验。
- lint-staged，一个仅仅过滤出 Git 代码暂存区文件(被 git add 的文件)的工具；这个很实用，因为我们如果对整个项目的代码做一个检查，可能耗时很长，如果是老项目，要对之前的代码做一个代码规范检查并修改的话，这可能就麻烦了呀，可能导致项目改动很大。
- 所以这个 lint-staged，对团队项目和开源项目来说，是一个很好的工具，它是对个人要提交的代码的一个规范和约束

### 安装 mrm

```
pnpm i mrm -D --registry=https://registry.npm.taobao.org
```

### 安装 lint-staged

- mrm 安装 lint-staged 会自动把 husky 一起安装下来

```
npx mrm lint-staged
```

- 执行完毕之后会在项目的根目录出现一个.husky 的目录，目录下有一个 pre-commit 文件，，示例代码如下：

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

- 安装成功后会发现 package.json 中多了一下几个配置

```json
{
  "script": {
    "prepare": "husky install"
  },
  "devDependencies": {
    "husky": "^7.0.4",
    "lint-staged": "^12.3.7",
    "mrm": "^4.0.0",
  },
  ,
  "lint-staged": {
    "*.{ts,tsx,vue,js,jsx}": "eslint --cache --fix",
    "*.css": "stylelint --fix"
  }
}
```

### 配置

- 因为我们要结合 prettier 代码格式化,所有修改一下配置

```json
{
  "scripts": {
    "lint": "eslint src --fix --ext .ts,.tsx,.vue,.js,.jsx",
    "prettier": "prettier --write .",
    "stylelint": "stylelint --fix \"**/*.{vue,scss,css}\"",
    "prepare": "husky install"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{vue,scss}": "npm run stylelint",
    "*.{js,jsx,vue,ts,tsx}": "npm run lint",
    "*.{js,jsx,vue,tsx,ts,scss,md,json}": ["prettier --write"]
  }
}
```

## 踩坑

- Unknown word (CssSyntaxError) 错误
  - 这个错误是因为安装的 stylelint、stylelint-config-standard、stylelint-scss、stylelint-order 插件版本太新的问题，对于 vue3 模板⽂件的⽀持不是很好，不能正确识别 .vue ⽂件的 css 代码。所以将以上三个插件的版本降⼀个⼤版本就好了
  - 最后的版本如下： "stylelint": "^13.13.1", "stylelint-config-standard": "^22.0.0", "stylelint-scss": "^3.21.0"、"stylelint-order": "^4.0.0"；
  - 另⼀种解决⽅案是安装 postcss-html 插件，但是 stylelint 14 版本的插件有很多问题，验证规则也和之前不太⼀样，并且 .scss ⽂件还验证不了。

## 扩展

- [从零构建前端 ESLint 工作流](https://segmentfault.com/a/1190000022881634)
- [彻底搞懂 ESLint 和 Prettier](https://juejin.cn/post/6909788084666105864)

# 四、vite 配置

## 别名配置

### 安装依赖

```shell
pnpm i -D @types/node
```

### 配置

- vite.config.ts 中新增 resolve 配置节点，用来编译识别用的

```typescript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

import createVitePlugins from './config/plugins/index';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ...createVitePlugins()],
  server: {
    host: true,
    port: 3002,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
```

- tsconfig.json 中新增 paths 和 baseUrl 配置节点，是用来给 Typescript 识别用的

```json
{
  "compilerOptions": {
    "target": "esnext",
    "useDefineForClassFields": true,
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "lib": ["esnext", "dom"],
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"]
}
```

### 使用

```typescript
import { createApp } from 'vue';
import App from '@/App.vue';
import '@/index.scss';

createApp(App).mount('#app');
```

## 环境变量

### 设置环境变量

- 新增.env，.env.test，.env.staging，.env.production 四个文件，更 src 同级目录
- 分别代表开发，测试，预发，生产四个环境变量，如果想要扩展其它的变量，以此类推
- 自定义环境变量一定要是 VITE 为前缀的变量才会暴露给 vite,如：VITE_APP_TITLE

```
VITE_APP_TITLE="DEVELOPMENT APP"
```

```
VITE_APP_TITLE="TEST APP"
VITE_API_HOST=http://www.youbaobao.xyz
```

```
VITE_APP_TITLE="STAGING APP"
VITE_API_HOST=http://www.youbaobao.xyz
```

```
VITE_APP_TITLE="PRODUCTION APP"
VITE_API_HOST=http://www.youbaobao.xyz
```

### 设置脚本

- 之所以要在 package.json 中的命令加--mode，是为了覆盖命令使用的默认模式 production,development

```json
"scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "build:test": "vite build --mode test",
    "build:staging": "vite build --mode staging",
    "preview": "vite preview",
  },
```

### 设置 typescript

```typescript
/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_APP_TITLE: 'development' | 'test' | 'staging' | 'production';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

### 获取环境变量

- 在 vite 中获取环境变量通过：import.meta.env 来获取的，并不是 process.env，如果要在代码中，每次通过 import.meta.env 来获取，写的实在繁琐，不如封装一个 hooks
- 在 src 文件夹下，新建 utils 文件夹，utils 文件夹中新建 env.ts,在 src/utils/env.ts 中编写如下代码

```typescript
export const getEnv = () => {
  return import.meta.env;
};
```

```typescript
import { getEnv } from './env';

export { getEnv };
```

### 自定义钩子

```typescript
import { onMounted } from 'vue';
import { getEnv } from '@/utils';

export default function useTitle(title?: string): void {
  onMounted(() => {
    const { VITE_APP_TITLE } = getEnv();
    document.title = title ?? VITE_APP_TITLE ?? 'Vite Project';
  });
}
```

```typescript
import useTitle from './useTitle';

export { useTitle };
```

### 页面使用

```vue
<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import { useTitle } from '@/hooks';
import { onMounted, ref } from 'vue';

// 设置 document title
useTitle();

const msg = ref('Hello Vue 3 + TypeScript + Vite');

onMounted(() => {
  msg.value = 'Hello Vue 3 + TypeScript + Vite !!!';
});
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld :msg="msg" />
</template>

<style lang="scss">
#app {
  height: 100%;
  margin-top: 50px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
}
</style>
```

## server 配置

- 新建 config/index.ts 文件，新增如下代码

```typescript
// todo server 配置
/**
 * @description 开发端口
 */
export const VITE_APP_PORT = 3002;
/**
 * @description 公共基础路径
 */
export const VITE_APP_BASE = '/';
/**
 * @description 是否自动在浏览器中打开应用程序
 */
export const VITE_APP_OPEN = true;
```

- 新建 config/server/index.ts 文件，新增如下代码

```typescript
import { ServerOptions } from 'vite';
import { VITE_APP_PORT, VITE_APP_OPEN } from '../index';

const server: ServerOptions = {
  host: true,
  port: VITE_APP_PORT,
  open: VITE_APP_OPEN,
};
export default server;
```

- 找到 vite.config.ts 文件，修改 server 属性如下代码

```typescript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

import createVitePlugins from './config/plugins/index';
import server from './config/server';
import { VITE_APP_BASE } from './config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ...createVitePlugins()],
  base: VITE_APP_BASE,
  server,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
```

## proxy 配置

- 找到 config/server/index.ts 文件，新增 proxy 属性，修改如下代码

```typescript
import { ServerOptions, loadEnv } from 'vite';
import { VITE_APP_PORT, VITE_APP_OPEN } from '../index';

const createServer = (mode: string): ServerOptions => ({
  host: true,
  port: VITE_APP_PORT,
  open: VITE_APP_OPEN,
  proxy: {
    '/api': {
      target: loadEnv(mode, process.cwd()).VITE_API_HOST,
      changeOrigin: true,
      rewrite: (path: any) => path.replace(/^\/api/, ''),
    },
  },
});

export default createServer;
```

- 找到 vite.config.ts 文件，修改 server 属性如下代码

```typescript
import { defineConfig, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

import createVitePlugins from './config/plugins/index';
import createServer from './config/server';
import { VITE_APP_BASE } from './config';

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => ({
  plugins: [vue(), ...createVitePlugins()],
  base: VITE_APP_BASE,
  server: createServer(mode),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
}));
```

## build 配置

### 基本配置

- 找到 config/index.ts 文件，新增如下代码

```typescript
// todo build 配置
/**
 * @description 是否在打包环境下，开启打包的分析可视化图
 */
export const VITE_APP_VISUALIZER = true;
/**
 * @description 是否在打包环境下，去除console.log
 */
export const VITE_APP_CONSOLE = true;
/**
 * @description 打包环境下，删除debugger
 */
export const VITE_APP_DEBUGGER = true;
/**
 * @description 打包环境下是否生成source map 文件
 */
export const VITE_APP_SOURCEMAP = false;
```

- 在 config 文件夹下，新建 build/index.ts 文件，且编写如下代码

```typescript
import { BuildOptions } from 'vite';
import { VITE_APP_CONSOLE, VITE_APP_DEBUGGER, VITE_APP_SOURCEMAP } from '../index';

const createBuild = (): BuildOptions => {
  return {
    minify: 'terser',
    terserOptions: {
      compress: {
        keep_infinity: true,
        drop_console: VITE_APP_CONSOLE, // 去除 console
        drop_debugger: VITE_APP_DEBUGGER, // 去除 debugger
      },
    },
    outDir: 'dist', // 指定输出路径目录
    assetsDir: 'assets', // 指定打包生成静态资源的存放路径目录
    sourcemap: VITE_APP_SOURCEMAP, // 构建后是否生成 source map文件
  };
};

export default createBuild;
```

- 找到 vite.config.ts 文件，新增如下代码

```typescript
import { defineConfig, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

import createVitePlugins from './config/plugins/index';
import createServer from './config/server';
import createBuild from './config/build';
import { VITE_APP_BASE } from './config';

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => ({
  plugins: [vue(), ...createVitePlugins()],
  base: VITE_APP_BASE,
  server: createServer(mode),
  build: createBuild(),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
}));
```

### 打包的分析可视化图

- 安装依赖

```shell
npm install rollup rollup-plugin-visualizer -D
```

- 在 config/plugins 文件夹中，新建 visualizer.ts 文件

```typescript
import visualizer from 'rollup-plugin-visualizer';

export default function configVisualizer() {
  return visualizer({
    // 将打包的依赖分析可视化页面，写到node_modules中，这样不占位置
    filename: './node_modules/.cache/visualizer/stats.html',
    open: true,
    gzipSize: true,
    brotliSize: true,
  });
}
```

- 找到 config/plugins/index.ts 文件，新增如下代码

```typescript
import configEslint from './eslint';
import configVisualizer from './visualizer';
import { VITE_APP_VISUALIZER } from '../index';

export default function createVitePlugins() {
  const vitePlugins: any[] = [configEslint()];
  VITE_APP_VISUALIZER && vitePlugins.push(configVisualizer());
  return vitePlugins;
}
```

### 压缩 Html

- 安装依赖

```shell
npm install vite-plugin-html -D
```

- 在 config/plugins 文件夹中，新建 html.ts 文件

```typescript
import { createHtmlPlugin } from 'vite-plugin-html';

export default function configHtml() {
  return createHtmlPlugin({
    minify: true,
  });
}
```

- 找到 config/plugins/index.ts 文件，新增如下代码

```typescript
import configEslint from './eslint';
import configVisualizer from './visualizer';
import configHtml from './html';
import { VITE_APP_VISUALIZER } from '../index';

export default function createVitePlugins() {
  const vitePlugins: any[] = [configEslint(), configHtml()];
  VITE_APP_VISUALIZER && vitePlugins.push(configVisualizer());
  return vitePlugins;
}
```

### 压缩资源

- 安装依赖

```shell
npm install vite-plugin-compression -D
```

- 在 config/plugins 文件夹中，新建 compression.ts 文件

```typescript
import viteCompression from 'vite-plugin-compression';

export default function configCompression() {
  // gzip压缩 生产环境生成 .gz 文件
  return viteCompression({
    verbose: true,
    disable: false,
    threshold: 10240,
    algorithm: 'gzip',
    ext: '.gz',
  });
}
```

- 找到 config/plugins/index.ts 文件，新增如下代码

```typescript
import configEslint from './eslint';
import configVisualizer from './visualizer';
import configHtml from './html';
import configCompression from './compression';
import { VITE_APP_VISUALIZER } from '../index';

export default function createVitePlugins() {
  const vitePlugins: any[] = [configEslint(), configHtml(), configCompression()];
  VITE_APP_VISUALIZER && vitePlugins.push(configVisualizer());
  return vitePlugins;
}
```

## 兼容传统浏览器

### 安装依赖

```shell
npm i -D @vitejs/plugin-legacy
```

### 插件配置

- 在 config/plugins 文件夹中，新建 legacy.ts 文件

```typescript
import legacy from '@vitejs/plugin-legacy';

export default function configLegacy() {
  return legacy({
    // targets: ['ie >= 11', 'Android >= 39', 'Chrome >= 39', 'Safari >= 10.1', 'iOS >= 10', '> 0.5%'],
    // polyfills: ['es.promise', 'regenerator-runtime'],
    targets: ['ie >= 11'],
    additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
  });
}
```

- 找到 config/plugins/index.ts 文件，新增如下代码

```typescript
import configEslint from './eslint';
import configVisualizer from './visualizer';
import configHtml from './html';
import configCompression from './compression';
import configLegacy from './legacy';
import { VITE_APP_VISUALIZER } from '../index';

export default function createVitePlugins() {
  const vitePlugins: any[] = [configEslint(), configHtml(), configCompression(), configLegacy()];
  VITE_APP_VISUALIZER && vitePlugins.push(configVisualizer());
  return vitePlugins;
}
```

# 五、CSS 预处理器

- 虽然 vite 原生支持 less/sass/scss/stylus，但是你必须手动安装他们的预处理器依赖
- vite 默认是支持 module 的，只需将文件名称加一个 module 即可，如：xx.module.css,这样就变成了 module 了，更 create-react-app 一样的写法。
- scss/less 的 module 模式同 css 一样，如：xx.module.scss,xx.module.less

## 安装依赖

```shell
pnpm install -D sass
```

## 全局变量

- 在 src 文件夹下新增 styles 文件夹，在 styles 文件夹中新增 variables.scss、mixins.scss、transition.scss、common.scss、index.scss 文件，编写如下代码：

```less
$bg: #282c34;
```

```less
@mixin flexContainer($dir: column, $jc: center, $align: center) {
  display: flex;
  flex-direction: $dir;
  align-items: $align;
  justify-content: $jc;
}
@mixin style($size, $color, $bold: normal) {
  font-size: $size;
  color: $color;
  font-weight: $bold;
}
```

```less
@import './variables.scss';
@import './mixins.scss';
@import './common.scss';
@import './transition.scss';
```

## 配置

- 在 config 文件夹下，新增 style 文件夹，且在 style 文件夹下新增 index.ts，config/style/index.ts 中编写如下代码：

```typescript
import { CSSOptions } from 'vite';

const createCss = (): CSSOptions => {
  return {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
      scss: {
        additionalData: '@import "./src/styles/index.scss";',
      },
    },
  };
};

export default createCss;
```

> **注意点:**
> additionalData 中如果引用@import 格式的，后面一定要加;否则会报错

```typescript
import { defineConfig, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

import createVitePlugins from './config/plugins/index';
import createServer from './config/server';
import createBuild from './config/build';
import createCss from './config/style';
import { VITE_APP_BASE } from './config';

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => ({
  plugins: [vue(), ...createVitePlugins()],
  base: VITE_APP_BASE,
  server: createServer(mode),
  build: createBuild(),
  css: createCss(),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
}));
```

## 使用

- 将 src/App.vue 中，更改文件中的代码：

```less
<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import { useTitle } from '@/hooks';
import { onMounted, ref } from 'vue';

// 设置 document title
useTitle();

const msg = ref('Hello Vue 3 + TypeScript + Vite');

onMounted(() => {
  msg.value = 'Hello Vue 3 + TypeScript + Vite !!!';
  fetch('/api/datav-res/datav/map.json')
    .then((res) => res.json())
    .then((data) => console.log(data));
});
</script>

<template>
  <header>Vue3 + vite</header>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld :msg="msg" />
</template>

<style lang="scss">
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
  header {
    @include style(calc(10px + 2vmin), #ffffff);
    @include flexContainer();
    min-height: 60px;
    background-color: $bg;
  }
  img {
    height: 20vmin;
    pointer-events: none;
  }
  button {
    font-size: calc(10px + 1vmin);
  }
}
</style>
```

# 六、路由

## 安装依赖

- [router](https://router.vuejs.org/zh/introduction.html)

```shell
pnpm install -S vue-router
```

## 路由配置

- vue-router4.x 支持 typescript，配置路由的类型是 RouteRecordRaw，这里 meta 可以让我们有更多的发挥空间，这里提供一些参考：
  - title:string; 页面标题，通常必选。
  - icon?:string; 图标，一般配合菜单使用。
  - auth?:boolean; 是否需要登录权限。
  - ignoreAuth?:boolean; 是否忽略权限。
  - roles?:RoleEnum[]; 可以访问的角色
  - keepAlive?:boolean; 是否开启页面缓存
  - hideMenu?:boolean; 有些路由我们并不想在菜单中显示，比如某些编辑页面。
  - order?:number; 菜单排序。
  - frameUrl?:string; 嵌套外链。
- 在 src 文件夹下新增 routes 文件夹 => index.ts 文件，内容如下:

```typescript
import { createRouter, createWebHashHistory } from 'vue-router';

export const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/pages/home/index.vue'), // 注意这里要带上 文件后缀.vue
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/pages/dashboard/index.vue'),
  },
  {
    path: '/404',
    name: '404',
    hidden: true,
    meta: { notNeedAuth: true },
    component: () => import('@/pages/404/index.vue'),
  },
  // 匹配所有路径 vue2使用* vue3使用/:pathMatch(.*)或/:catchAll(.*)
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
  },
];

// 路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
```

## 路由使用

- 修改入口文件 mian.ts

```tsx
import { createApp } from 'vue';
import App from '@/App.vue';
import router from './routes/index';
import '@/index.scss';

createApp(App).use(router).mount('#app');
```

- 修改 App.vue 文件

```vue
<script setup lang="ts">
import BasicLayout from '@/layouts/BasicLayout.vue';
import { useTitle } from '@/hooks';

// 设置 document title
useTitle();
</script>

<template>
  <BasicLayout />
</template>

<style lang="scss">
#app {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
}
</style>
```

## 页面编写

### Layout

- 在 src 文件夹下新增 layouts 文件夹 => BasicLayout.vue 文件，内容如下:

```vue
<script setup lang="ts">
// import { ref } from 'vue';
// const layout = ref('layout');
</script>

<template>
  <div class="layout">
    <header>LOGO</header>
    <p>
      <router-link to="/dashboard">dashboard</router-link>
      <router-link to="/home">home</router-link>
    </p>
    <img src="../assets/logo.png" />
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
.layout {
  height: 100%;
  header {
    @include style(calc(10px + 2vmin), #ffffff);
    @include flexContainer();

    min-height: 60px;
    background-color: $bg;
  }

  img {
    height: 20vmin;
    pointer-events: none;
  }

  button {
    font-size: calc(10px + 1vmin);
  }
}
</style>
```

### Dashboard

- 在 src 文件夹下新增 pages 文件夹 => dashboard/index.vue 文件，内容如下:

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue';

const dashboard = ref('Dashboard');

onMounted(() => {
  dashboard.value = 'Dashboard !!!';
  fetch('/api/datav-res/datav/map.json')
    .then((res) => res.json())
    .then((data) => console.log(data));
});
</script>

<template>
  <div>{{ dashboard }}</div>
</template>

<style scoped lang="scss"></style>
```

### Home

- 在 src 文件夹下新增 pages 文件夹 => home/index.vue 文件，内容如下:

```vue
<script setup lang="ts">
import { ref } from 'vue';

const home = ref('Home');
</script>

<template>
  <div>{{ home }}</div>
</template>

<style scoped lang="scss"></style>
```

### 404

- 在 src 文件夹下新增 pages 文件夹 => 404/index.vue 文件，内容如下:

```vue
<script setup lang="ts">
import { ref } from 'vue';

const msg = ref('NOT FUND');
</script>

<template>
  <div>{{ msg }}</div>
</template>

<style scoped lang="scss"></style>
```

# 七、状态管理

## 安装依赖

- [pinia 英文](https://pinia.vuejs.org/)
- [pinia 中文](https://pinia.web3doc.top/)

```vue
pnpm install -S pinia
```

## 状态配置

- Pinia 与 Vuex 的区别：
  - id 是必要的，它将所使用 store 连接到 devtools。
  - 创建方式：new Vuex.Store(...)(vuex3)，createStore(...)(vuex4)。
  - 对比于 vuex3 ，state 现在是一个函数返回对象。
  - 没有 mutations，不用担心，state 的变化依然记录在 devtools 中。
- Pinia 让 Actions 更加的灵活：
  - 可以通过组件或其他 action 调用
  - 可以从其他 store 的 action 中调用
  - 直接在 store 实例上调用
  - 支持同步或异步
  - 有任意数量的参数
  - 可以包含有关如何更改状态的逻辑（也就是 vuex 的 mutations 的作用）
  - 可以 $patch 方法直接更改状态属性
- 在 src 文件夹下新增 stores 文件夹 => global.ts 文件，内容如下:

```typescript
import { defineStore } from 'pinia';

export const useGlobalStore = defineStore({
  id: 'global',
  state: () => ({
    title: 'App',
    theme: 'default',
    language: 'zh',
  }),
  // getters
  getters: {
    // title: (state) => state.title,
  },
  actions: {
    setTitle(payload: string) {
      // 可以做异步
      // await doAjaxRequest(data);
      this.title = payload;
    },
    setTheme(payload: string) {
      this.theme = payload;
    },
    async setLanguage(payload: string) {
      // 模拟接口请求
      await new Promise((resolve) => {
        setTimeout(() => {
          this.language = payload;
          resolve(payload);
        }, 1000);
      });
    },
  },
});
```

- 在 src 文件夹下新增 stores 文件夹 => index.ts 文件，内容如下:

```typescript
import { useGlobalStore } from './global';

export { useGlobalStore };
```

## 状态使用

- 修改入口文件 mian.ts

```tsx
import { createApp } from 'vue';
import App from '@/App.vue';
import { createPinia } from 'pinia';
import router from './routes/index';
import '@/index.scss';

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');
```

- 修改 page/dashboard/index.vue 文件

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '@/stores';

const store = useGlobalStore();
const { title, language } = storeToRefs(store);
const dashboard = ref('Dashboard');

onMounted(() => {
  store.setLanguage('en');
  dashboard.value = 'Dashboard !!!';
  fetch('/api/datav-res/datav/map.json')
    .then((res) => res.json())
    .then((data) => console.log(data));
});
</script>

<template>
  <div>
    <p>{{ dashboard }}</p>
    <p>标题：{{ title }}</p>
    <p>语言：{{ language }}</p>
  </div>
</template>

<style scoped lang="scss"></style>
```

- 修改 src/pags/home/index.vue 文件

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '@/stores';

const home = ref('Home');
const store = useGlobalStore();
const { title, language } = storeToRefs(store);
</script>

<template>
  <div>
    <p>{{ home }}</p>
    <p>标题：{{ title }}</p>
    <p>语言：{{ language }}</p>
    <button @click="store.setTitle('Dep_App')">setTitle</button>
  </div>
</template>

<style scoped lang="scss"></style>
```

# 八、请求封装

## 安装依赖

```shell
pnpm i -S axios
pnpm i -S nprogress
pnpm i -S @types/nprogress
```

## Aixos 封装

- 在 src 文件夹中，新建 service 文件夹，并且新建 src/service/request/index.ts、src/service/request/types.ts、src/service/index.ts 文件

```typescript
import axios, { AxiosResponse } from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import type { RequestConfig, RequestInterceptors, CancelRequestSource } from './types';
import NProgress from 'nprogress';

class Request {
  // axios 实例
  instance: AxiosInstance;
  // 拦截器对象
  interceptorsObj?: RequestInterceptors<AxiosResponse>;

  /*
  存放取消方法的集合
  * 在创建请求后将取消请求方法 push 到该集合中
  * 封装一个方法，可以取消请求，传入 url: string|string[]  
  * 在请求之前判断同一URL是否存在，如果存在就取消请求
  */
  cancelRequestSourceList?: CancelRequestSource[];
  /*
  存放所有请求URL的集合
  * 请求之前需要将url push到该集合中
  * 请求完毕后将url从集合中删除
  * 添加在发送请求之前完成，删除在响应之后删除
  */
  requestUrlList?: string[];

  constructor(config: RequestConfig) {
    this.requestUrlList = [];
    this.cancelRequestSourceList = [];
    this.instance = axios.create(config);
    this.interceptorsObj = config.interceptors;
    // 拦截器执行顺序 接口请求 -> 实例请求 -> 全局请求 -> 实例响应 -> 全局响应 -> 接口响应
    this.instance.interceptors.request.use(
      (res: AxiosRequestConfig) => res,
      (err: any) => err,
    );

    // 使用实例拦截器
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptors,
      this.interceptorsObj?.requestInterceptorsCatch,
    );
    this.instance.interceptors.response.use(
      this.interceptorsObj?.responseInterceptors,
      this.interceptorsObj?.responseInterceptorsCatch,
    );
    // 全局响应拦截器保证最后执行
    this.instance.interceptors.response.use(
      // 因为我们接口的数据都在res.data下，所以我们直接返回res.data
      (res: AxiosResponse) => {
        return res.data;
      },
      (err: any) => err,
    );
  }
  /**
   * @description: 获取指定 url 在 cancelRequestSourceList 中的索引
   * @param {string} url
   * @returns {number} 索引位置
   */
  private getSourceIndex(url: string): number {
    return this.cancelRequestSourceList?.findIndex((item: CancelRequestSource) => {
      return Object.keys(item)[0] === url;
    }) as number;
  }
  /**
   * @description: 删除 requestUrlList 和 cancelRequestSourceList
   * @param {string} url
   * @returns {*}
   */
  private delUrl(url: string) {
    const urlIndex = this.requestUrlList?.findIndex((u) => u === url);
    const sourceIndex = this.getSourceIndex(url);
    // 删除url和cancel方法
    urlIndex !== -1 && this.requestUrlList?.splice(urlIndex as number, 1);
    sourceIndex !== -1 && this.cancelRequestSourceList?.splice(sourceIndex as number, 1);
  }
  request<T>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      NProgress.start();
      // 如果我们为单个请求设置拦截器，这里使用单个请求的拦截器
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config);
      }
      const url = config.url;
      // url存在保存取消请求方法和当前请求url
      if (url) {
        this.requestUrlList?.push(url);
        config.cancelToken = new axios.CancelToken((c) => {
          this.cancelRequestSourceList?.push({
            [url]: c,
          });
        });
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 如果我们为单个响应设置拦截器，这里使用单个响应的拦截器
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res);
          }
          // NProgress.done();
          resolve(res);
        })
        .catch((err: any) => {
          // NProgress.done();
          reject(err);
        })
        .finally(() => {
          NProgress.done();
          url && this.delUrl(url);
        });
    });
  }
  upload(url: string, data: File) {
    return new Promise((resolve, reject) => {
      NProgress.start();
      this.request({
        url,
        method: 'POST',
        data,
        headers: { 'Content-Type': 'multipart/form-data' },
      })
        .then((res: any) => {
          NProgress.done();
          resolve(res.data);
        })
        .catch((err) => {
          NProgress.done();
          reject(err.data);
        });
    });
  }
  download(url: string) {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = url;
    iframe.onload = function () {
      document.body.removeChild(iframe);
    };
    document.body.appendChild(iframe);
  }
  // 取消请求
  cancelRequest(url: string | string[]) {
    if (typeof url === 'string') {
      // 取消单个请求
      const sourceIndex = this.getSourceIndex(url);
      sourceIndex >= 0 && this.cancelRequestSourceList?.[sourceIndex][url]();
    } else {
      // 存在多个需要取消请求的地址
      url.forEach((u) => {
        const sourceIndex = this.getSourceIndex(u);
        sourceIndex >= 0 && this.cancelRequestSourceList?.[sourceIndex][u]();
      });
    }
  }
  // 取消全部请求
  cancelAllRequest() {
    this.cancelRequestSourceList?.forEach((source) => {
      const key = Object.keys(source)[0];
      source[key]();
    });
  }
}

export default Request;
export type { RequestConfig, RequestInterceptors };
```

```typescript
/* eslint-disable no-unused-vars */
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
export interface RequestInterceptors<T> {
  // 请求拦截
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorsCatch?: (err: any) => any;
  // 响应拦截
  responseInterceptors?: (config: T) => T;
  responseInterceptorsCatch?: (err: any) => any;
}
// 自定义传入的参数
export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T>;
}
export interface CancelRequestSource {
  [index: string]: () => void;
}
```

```typescript
import Request from './request';
import { AxiosResponse } from 'axios';

import type { RequestConfig } from './request/types';

interface IResponse<T> {
  statusCode: number;
  desc: string;
  result: T;
}
interface IRequest<T> extends RequestConfig<IResponse<any>> {
  data?: T;
}

const request = new Request({
  baseURL: import.meta.env.VITE_API_HOST,
  timeout: 1000 * 60 * 5,
  interceptors: {
    // 请求拦截器
    requestInterceptors: (config) => config,
    // 响应拦截器
    responseInterceptors: (result: AxiosResponse) => {
      return result;
    },
  },
});

/**
 * @description: 函数的描述
 * @generic D 请求参数
 * @generic T 响应结构
 * @param {IRequest} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
const req = <D = any, T = any>(config: IRequest<D>) => {
  const { method = 'GET' } = config;
  if (method === 'get' || method === 'GET') {
    config.params = config.data;
  }
  return request.request<IResponse<T>>(config);
};
export const upload = (url: string, data: File) => {
  return request.upload(url, data);
};
export const download = (url: string) => {
  return request.download(url);
};
// 取消请求
export const cancelRequest = (url: string | string[]) => {
  return request.cancelRequest(url);
};
// 取消全部请求
export const cancelAllRequest = () => {
  return request.cancelAllRequest();
};

export default req;
```

## Axios 使用

- 在 src/apis 文件夹中，新建 dashboard 文件夹，并且新建 src/apis/dashboard/index.ts 文件

```typescript
import request from '@/service';

export const getMapData = (data?: any) => {
  return request({
    url: '/datav-res/datav/map.json',
    method: 'GET',
    data,
    interceptors: {
      requestInterceptors(res: any) {
        console.log('接口请求拦截');
        return res;
      },
      responseInterceptors(result: any) {
        console.log('接口响应拦截');
        return result;
      },
    },
  });
};

export const getDashboardInfo = (data?: object) =>
  request({
    url: '/getDashboardInfo',
    method: 'POST',
    data,
  });
```

- 在 src/apis 文件夹中，新建 home 文件夹，并且新建 src/apis/home/index.ts 文件

```typescript
import request from '@/service';

export const getUserInfo = (data?: object) =>
  request({
    url: '/getUserInfo',
    method: 'POST',
    data,
  });
```

- 修改入口文件 mian.ts

```tsx
import { createApp } from 'vue';
import App from '@/App.vue';
import { createPinia } from 'pinia';
import router from './routes/index';
import 'nprogress/nprogress.css';
import '@/index.scss';

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');
```

- 修改类型定义文件 env.d.ts

```typescript
// / <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ImportMetaEnv {
  VITE_APP_TITLE: 'development' | 'test' | 'staging' | 'production';
  VITE_API_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

- 修改环境变量文件 .env

```vue
VITE_APP_TITLE="DEVELOPMENT APP" VITE_API_HOST=/api
```

- 修改 page/dashboard/index.vue 文件

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '@/stores';
import { getMapData } from '@/apis/dashboard';

const store = useGlobalStore();
const { title, language } = storeToRefs(store);
const dashboard = ref('Dashboard');

const getMap = async () => {
  const data = await getMapData();
  console.log(data);
};

onMounted(() => {
  store.setLanguage('en');
  dashboard.value = 'Dashboard !!!';
});
</script>

<template>
  <div>
    <p>{{ dashboard }}</p>
    <p>标题：{{ title }}</p>
    <p>语言：{{ language }}</p>
    <button @click="getMap">axios</button>
  </div>
</template>

<style scoped lang="scss"></style>
```

# 九、Mock

## 安装依赖

```shell
pnpm install mockjs -S
pnpm install vite-plugin-mock -D
```

## 插件配置

- 在 config/plugins 文件夹中，新建 mock.ts 文件

```typescript
import { viteMockServe } from 'vite-plugin-mock';

export default function configMock(command: string) {
  return viteMockServe({
    // default
    mockPath: 'mock', // 解析根目录下的mock文件夹
    localEnabled: command === 'serve', // 开发打包开关
    prodEnabled: false, // 生产打包开关
    supportTs: true, // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件。
    watchFiles: true, // 监视文件更改
  });
}
```

- 找到 config/plugins/index.ts 文件，新增如下代码

```typescript
import configEslint from './eslint';
import configVisualizer from './visualizer';
import configHtml from './html';
import configCompression from './compression';
import configLegacy from './legacy';
import configMock from './mock';
import { VITE_APP_VISUALIZER } from '../index';

export default function createVitePlugins(command: string) {
  const vitePlugins: any[] = [configEslint(), configHtml(), configCompression(), configLegacy(), configMock(command)];
  VITE_APP_VISUALIZER && vitePlugins.push(configVisualizer());
  return vitePlugins;
}
```

- 找到 vite.config.ts 文件，新增如下代码

```typescript
import { defineConfig, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

import createVitePlugins from './config/plugins/index';
import createServer from './config/server';
import createBuild from './config/build';
import createCss from './config/style';
import { VITE_APP_BASE } from './config';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv) => ({
  plugins: [vue(), ...createVitePlugins(command)],
  base: VITE_APP_BASE,
  server: createServer(mode),
  build: createBuild(),
  css: createCss(),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
}));
```

## 接口实现

- 在根目录(和 src 同级)新建 mock 文件夹，新建 mock/home.ts 文件、mock/about.ts 文件以及 mock/index.ts 文件

```typescript
import { MockMethod } from 'vite-plugin-mock';
import Mock from 'mockjs';
export default [
  {
    url: '/api/getDashboardInfo',
    method: 'post',
    response: () => {
      return Mock.mock({
        code: 200,
        data: {
          nickname: '@cname',
          age: '@integer(10-100)',
          uid: '@id',
          url: '@image(200x100)',
          city: '@city',
          country: '@county(true)',
          province: '@province',
          mobile_phone: '@phone',
          email: '@email',
          region: '@region',
          menus: [
            {
              menu_name: '一级导航',
              id: '@id',
              code: 'Nav1',
              children: [
                {
                  code: 'about',
                  menu_url: 'views/about',
                  access_permissions: '["about"]',
                  children: [],
                  menu_name: '测试1',
                  id: '@id',
                },
                {
                  code: 'home',
                  menu_url: 'views/home',
                  access_permissions: '["home"]',
                  children: [],
                  menu_name: '测试2',
                  id: '@id',
                },
              ],
            },
          ],
        },
      });
    },
  },
] as MockMethod[];
```

```typescript
import { MockMethod } from 'vite-plugin-mock';
import Mock from 'mockjs';
export default [
  {
    url: '/api/getUserInfo',
    method: 'post',
    response: () => {
      return Mock.mock({
        code: 200,
        data: {
          nickname: 'about',
          age: '@integer(10-100)',
        },
      });
    },
  },
] as MockMethod[];
```

```typescript
export * from './dashboard';
export * from './home';
```

## Api 实现

- 在 src/apis/dashboard/index.ts 文件

```typescript
import request from '@/service';

export const getMapData = (data?: any) => {
  return request({
    url: '/datav-res/datav/map.json',
    method: 'GET',
    data,
    interceptors: {
      requestInterceptors(res: any) {
        console.log('接口请求拦截');
        return res;
      },
      responseInterceptors(result: any) {
        console.log('接口响应拦截');
        return result;
      },
    },
  });
};

export const getDashboardInfo = (data?: object) =>
  request({
    url: '/getDashboardInfo',
    method: 'POST',
    data,
  });
```

- 在 src/apis/home/index.ts 文件

```typescript
import request from '@/service';

export const getUserInfo = (data?: object) =>
  request({
    url: '/getUserInfo',
    method: 'POST',
    data,
  });
```

## Api 调用

- 在 src/pages/dashboard/index.vue 文件

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '@/stores';
import { getMapData, getDashboardInfo } from '@/apis/dashboard';

const store = useGlobalStore();
const { title, language } = storeToRefs(store);
const dashboard = ref('Dashboard');

const getMap = async () => {
  const data = await getMapData();
  console.log(data);
};

onMounted(() => {
  store.setLanguage('en');
  dashboard.value = 'Dashboard !!!';
});
</script>

<template>
  <div>
    <p>{{ dashboard }}</p>
    <p>标题：{{ title }}</p>
    <p>语言：{{ language }}</p>
    <p><button @click="getMap">axios</button></p>
    <p><button @click="getDashboardInfo">mock</button></p>
  </div>
</template>

<style scoped lang="scss"></style>
```

- 在 src/pages/home/index.vue 文件

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '@/stores';
import { getUserInfo } from '@/apis/home';

const home = ref('Home');
const store = useGlobalStore();
const { title, language } = storeToRefs(store);
</script>

<template>
  <div>
    <p>{{ home }}</p>
    <p>标题：{{ title }}</p>
    <p>语言：{{ language }}</p>
    <button @click="store.setTitle('Dep_App')">setTitle</button>
    <p><button @click="getUserInfo">mock</button></p>
  </div>
</template>

<style scoped lang="scss"></style>
```

# 十、国际化

## 安装依赖

- [i18next](https://www.i18next.com/)
- [vue-i18n](https://vue-i18n.intlify.dev/installation.html)

```shell
pnpm install -S vue-i18n
```

## 初始化配置

- 在 src 文件夹中，新建 locales 文件夹，添加 index.ts 文件，对 i18n 进行初始化操作及插件配置

```typescript
import { createI18n } from 'vue-i18n';
import messages from './messages';

const i18nConfig = createI18n({
  fallbackLocale: 'zh',
  globalInjection: true,
  legacy: false, // you must set `false`, to use Composition API
  locale: 'zh',
  messages,
});

export default i18nConfig;
```

## 多语言配置

- 在 src 文件夹中，新建 locales/messages 文件夹，添加 index.ts 文件，新增代码如下

```typescript
import en from './json/en.json';
import ja from './json/ja.json';
import zh from './json/zh.json';

const messages = {
  ja,
  en,
  zh,
};
export default messages;
```

- 在 src/locales/messages 文件夹中，新建 json 文件夹，添加多语言配置文件

```json
{
  "欢迎使用 vue-i18n": "Welcome to react using vue-i18n",
  "切换语言": "change language",
  "切换到中文": "change to Chinese",
  "切换到英文": "change to English",
  "切换到日文": "change to Japenese",
  "methods": {
    "renderProps": "change language with render props",
    "hook": "change language with hook",
    "hoc": "change language with hoc"
  }
}
```

```json
{
  "欢迎使用 vue-i18n": "ご利用を歓迎する vue-i18n",
  "切换语言": "言語を切り替える",
  "切换到中文": "中国語に切り替える",
  "切换到英文": "英文に切り替える",
  "切换到日文": "日本語に切り替える",
  "methods": {
    "renderProps": "renderProps方式で言語を変換する",
    "hook": "hook方式で言語を変換する",
    "hoc": "hoc方式で言語を変換する"
  }
}
```

```json
{
  "欢迎使用 vue-i18n": "欢迎使用 vue-i18n",
  "切换语言": "切换语言",
  "切换到中文": "切换到中文",
  "切换到英文": "切换到英文",
  "切换到日文": "切换到日文",
  "methods": {
    "renderProps": "用renderProps转换",
    "hook": "用hook转换",
    "hoc": "用hoc转换"
  }
}
```

## 入口文件配置

```tsx
import { createApp } from 'vue';
import App from '@/App.vue';
import { createPinia } from 'pinia';
import router from './routes/index';
import i18nConfig from './locales';
import 'nprogress/nprogress.css';
import '@/index.scss';

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(i18nConfig);
app.mount('#app');
```

## 切换语言

- dashboard

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '@/stores';
import { getMapData, getDashboardInfo } from '@/apis/dashboard';
import { useI18n } from 'vue-i18n';

const { locale, t } = useI18n({ useScope: 'global' });

const change = (type: string) => {
  locale.value = type; // change!
};

const store = useGlobalStore();
const { title, language } = storeToRefs(store);
const dashboard = ref('Dashboard');

const getMap = async () => {
  const data = await getMapData();
  console.log(data);
};

onMounted(() => {
  store.setLanguage('en');
  dashboard.value = 'Dashboard !!!';
});
</script>

<template>
  <div>
    <p>{{ dashboard }}</p>
    <p>标题：{{ title }}</p>
    <p>语言：{{ language }}</p>
    <p>
      语言切换测试：{{ t('欢迎使用 vue-i18n') }}
      <button @click="change('zh')">{{ t('切换到中文') }}</button>
      <button @click="change('en')">{{ t('切换到英文') }}</button>
      <button @click="change('ja')">{{ t('切换到日文') }}</button>
    </p>
    <p><button @click="getMap">axios</button></p>
    <p><button @click="getDashboardInfo">mock</button></p>
  </div>
</template>

<style scoped lang="scss"></style>
```

- home

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '@/stores';
import { getUserInfo } from '@/apis/home';
import { useI18n } from 'vue-i18n';

const { t } = useI18n({ useScope: 'global' });

const home = ref('Home');
const store = useGlobalStore();
const { title, language } = storeToRefs(store);
</script>

<template>
  <div>
    <p>{{ home }}</p>
    <p>标题：{{ title }}</p>
    <p>语言：{{ language }}</p>
    <p>语言切换测试：{{ t('欢迎使用 vue-i18n') }}</p>
    <button @click="store.setTitle('Dep_App')">setTitle</button>
    <p><button @click="getUserInfo">mock</button></p>
  </div>
</template>

<style scoped lang="scss"></style>
```

## 踩坑

> vue-i18n.esm-bundler.js:46
> You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.

```typescript
import { defineConfig, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

import createVitePlugins from './config/plugins/index';
import createServer from './config/server';
import createBuild from './config/build';
import createCss from './config/style';
import { VITE_APP_BASE } from './config';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv) => ({
  plugins: [vue(), ...createVitePlugins(command)],
  base: VITE_APP_BASE,
  server: createServer(mode),
  build: createBuild(),
  css: createCss(),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      // 解决警告You are running the esm-bundler build of vue-i18n.
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
    },
  },
}));
```

# 十一、Element-Plus

## 安装依赖

```shell
pnpm install element-plus -S
pnpm install vite-plugin-style-import -D
```

## 插件配置

- 在 config/plugins 文件夹中，新建 styleImport.ts 文件

```typescript
import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import';

export default function configStyleImport() {
  return createStyleImportPlugin({
    resolves: [ElementPlusResolve()],
    libs: [
      {
        libraryName: 'element-plus',
        esModule: true,
        base: 'element-plus/theme-chalk/base.css',
        resolveStyle: (name) => {
          return `element-plus/theme-chalk/${name}.css`;
        },
      },
    ],
  });
}
```

- 找到 config/plugins/index.ts 文件，新增如下代码

```typescript
import configEslint from './eslint';
import configVisualizer from './visualizer';
import configHtml from './html';
import configCompression from './compression';
import configLegacy from './legacy';
import configMock from './mock';
import configStyleImport from './styleImport';
import { VITE_APP_VISUALIZER } from '../index';

export default function createVitePlugins(command: string) {
  const vitePlugins: any[] = [
    configEslint(),
    configHtml(),
    configCompression(),
    configLegacy(),
    configMock(command),
    configStyleImport(),
  ];
  VITE_APP_VISUALIZER && vitePlugins.push(configVisualizer());
  return vitePlugins;
}
```

## Element-Plus 使用

```vue
<script setup lang="ts">
import { ref } from 'vue';
import {
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElIcon,
  ElScrollbar,
  ElSpace,
  ElAvatar,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
} from 'element-plus';
import { DataLine, HelpFilled, ArrowDown } from '@element-plus/icons-vue';
import { useI18n } from 'vue-i18n';

const { locale, t } = useI18n({ useScope: 'global' });

const change = (type: string) => {
  locale.value = type; // change!
};
const scrollbarHeight = ref('calc(100vh - 60px)');
// const fill = ref(true);
</script>

<template>
  <el-container class="layout">
    <el-header>
      <el-space>
        <span class="logo">LOGO</span>
      </el-space>
      <el-space alignment="center" :size="30">
        <el-dropdown>
          <span>切换语言</span>
          <el-icon><arrow-down /></el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="change('zh')">{{ t('切换到中文') }}</el-dropdown-item>
              <el-dropdown-item @click="change('en')">{{ t('切换到英文') }}</el-dropdown-item>
              <el-dropdown-item @click="change('ja')">{{ t('切换到日文') }}</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </el-space>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-scrollbar :height="scrollbarHeight" view-style="height:100%">
          <el-menu
            :default-openeds="['2']"
            active-text-color="#ffd04b"
            background-color="#282c34"
            text-color="#fff"
            default-active="/dashboard"
            router
          >
            <el-menu-item index="/dashboard">
              <el-icon><DataLine /></el-icon>
              <span>工作台</span>
            </el-menu-item>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><HelpFilled /></el-icon>
                <span>首页</span>
              </template>
              <el-menu-item index="/home">
                <span>图表</span>
              </el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-main>
        <el-scrollbar :height="scrollbarHeight">
          <router-view></router-view>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
.layout {
  height: 100%;

  .logo {
    font-size: 24px;
  }

  .el-header {
    @include style(calc(10px + 2vmin), #ffffff);
    @include flexContainer(row, space-between);

    min-height: 60px;
    background-color: $bg;

    .el-space {
      .el-dropdown {
        color: #ffffff;
        cursor: pointer;

        .el-icon {
          margin-left: 5px;
        }
      }
    }
  }

  .el-aside {
    .el-scrollbar {
      .el-menu {
        height: 100%;

        .el-menu-item {
          a {
            display: inline-block;
            color: #ffffff;
            text-decoration: none;
          }
        }
      }
    }
  }

  .el-main {
    padding: 0;
  }
}
</style>
```

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '@/stores';
import { getMapData, getDashboardInfo } from '@/apis/dashboard';
import { useI18n } from 'vue-i18n';
import { ElButton } from 'element-plus';

const { t } = useI18n({ useScope: 'global' });

const store = useGlobalStore();
const { title, language } = storeToRefs(store);
const dashboard = ref('Dashboard');

const getMap = async () => {
  const data = await getMapData();
  console.log(data);
};

onMounted(() => {
  store.setLanguage('en');
  dashboard.value = 'Dashboard !!!';
});
</script>

<template>
  <div>
    <p>{{ dashboard }}</p>
    <p>标题：{{ title }}</p>
    <p>语言：{{ language }}</p>
    <p>语言切换测试：{{ t('欢迎使用 vue-i18n') }}</p>
    <p><el-button type="warning" @click="getMap">axios</el-button></p>
    <p><el-button type="danger" @click="getDashboardInfo">mock</el-button></p>
  </div>
</template>

<style scoped lang="scss"></style>
```

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '@/stores';
import { getUserInfo } from '@/apis/home';
import { useI18n } from 'vue-i18n';
import { ElButton } from 'element-plus';

const { t } = useI18n({ useScope: 'global' });

const home = ref('Home');
const store = useGlobalStore();
const { title, language } = storeToRefs(store);
</script>

<template>
  <div>
    <p>{{ home }}</p>
    <p>标题：{{ title }}</p>
    <p>语言：{{ language }}</p>
    <p>语言切换测试：{{ t('欢迎使用 vue-i18n') }}</p>
    <el-button @click="store.setTitle('Dep_App')">setTitle</el-button>
    <p><el-button type="success" @click="getUserInfo">mock</el-button></p>
  </div>
</template>

<style scoped lang="scss"></style>
```

## Icon 图标使用

### 安装依赖

```shell
pnpm install @element-plus/icons-vue -S
```

### Icon 使用

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '@/stores';
import { getMapData, getDashboardInfo } from '@/apis/dashboard';
import { useI18n } from 'vue-i18n';
import { ElButton, ElIcon } from 'element-plus';
import { AlarmClock } from '@element-plus/icons-vue';

const { t } = useI18n({ useScope: 'global' });

const store = useGlobalStore();
const { title, language } = storeToRefs(store);
const dashboard = ref('Dashboard');

const getMap = async () => {
  const data = await getMapData();
  console.log(data);
};

onMounted(() => {
  store.setLanguage('en');
  dashboard.value = 'Dashboard !!!';
});
</script>

<template>
  <div>
    <p>{{ dashboard }}</p>
    <p>标题：{{ title }}</p>
    <p>语言：{{ language }}</p>
    <el-icon :size="50" color="red">
      <AlarmClock />
    </el-icon>
    <p>语言切换测试：{{ t('欢迎使用 vue-i18n') }}</p>
    <p><el-button type="warning" @click="getMap">axios</el-button></p>
    <p><el-button type="danger" @click="getDashboardInfo">mock</el-button></p>
  </div>
</template>

<style scoped lang="scss"></style>
```

## 参考

# 十二、测试框架

## 单元测试

### 安装依赖

```shell
pnpm install @types/jest jest -D
pnpm install @vue/vue3-jest -D
pnpm install babel-jest -D
pnpm install @vue/test-utils@next -D
pnpm install @testing-library/jest-dom -D
pnpm install ts-jest -D
pnpm install @babel/preset-env @babel/core -D
pnpm install identity-obj-proxy -D
```

![image.png](https://cdn.nlark.com/yuque/0/2022/png/738210/1650609944963-5d6c2ff0-b4a7-4d1c-8f67-ee3395d6aa31.png#clientId=u12bc0701-ddbf-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=633&id=uc4305ebf&margin=%5Bobject%20Object%5D&name=image.png&originHeight=882&originWidth=898&originalType=binary&ratio=1&rotation=0&showTitle=false&size=66533&status=done&style=none&taskId=u60550f87-78e0-4985-9f1d-1f64210c1ca&title=&width=644)

### jest 配置

- 新增 jest.config.js 文件，同 src 同级，且编写如下代码

```javascript
module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>'],
  moduleDirectories: ['node_modules', 'src'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest', // vue 文件用 vue-jest 转换
    '^.+\\.ts$': 'ts-jest', // ts 文件用 ts-jest 转换
  },
  testRegex: '(tests.unit.*.(test|spec)).(jsx?|tsx?)$',
  moduleFileExtensions: ['vue', 'ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{vue, ts,tsx,js,jsx}'],
  coverageDirectory: '<rootDir>/coverage/',
  verbose: true,
  testTimeout: 30000,
  // 为了修复 Consider using the "jsdom" test environment. 问题
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '(.*).d.ts$'],
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
    '^.+\\.module\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$': 'identity-obj-proxy',
  },
};
```

### ESLint 配置

- .eslintrc.js 中，新增如下代码

```javascript
module.exports = {
  ....
  env: {
    ....
    jest: true,
  },
  ....
}
```

### 脚本配置

```json
"unit": "jest --colors --passWithNoTests",
"unit-watch": "jest --watchAll",
"coverage": "jest --coverage",
```

### jest 使用

- 在 src 同级新建 tests 目录，在 tests 目录中继续添加 unit 目录，新建 HelloWorld.test.tsx 文件，并编写如下代码

```tsx
import getMsg from './utils';
import HelloWorld from '../../src/components/HelloWorld.vue';

test('1+1=2', () => {
  expect(1 + 1).toBe(2);
});
test('getMsg', () => {
  expect(getMsg()).toBe('this is msg');
});
test('HelloWorld', () => {
  console.log('HelloWorld', HelloWorld);
});
```

```typescript
export default function () {
  return 'this is msg';
}
```

### 类型声明

- 在 tests 目录，在 tests 目录中，新建 env.d.ts 文件，并编写如下代码

```typescript
// / <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare const cy: any;
```

## E2E 测试

### 安装依赖

```shell
pnpm install cypress @types/cypress -D
```

### cypress 配置

- 新增 cypress.json 文件，同 src 同级，且编写如下代码

```javascript
{
  "pluginsFile": "tests/e2e/plugins/index.ts",
  "video":false
}
```

- 在 src 同级新建 tests 目录，在 tests 目录中继续添加 e2e 目录，新建 plugins/index.ts 文件，并编写如下代码

```typescript
module.exports = (on: any, config: any) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  return Object.assign({}, config, {
    // fixtures路径
    fixturesFolder: 'tests/e2e/fixtures',
    // 测试脚本文件夹
    integrationFolder: 'tests/e2e/specs',
    // 从 cy.screenshot() 命令或在 cypress 运行期间测试失败后保存屏幕截图的文件夹路径
    screenshotsFolder: 'tests/e2e/screenshots',
    // cypress 运行期间保存视频的文件夹路径
    videosFolder: 'tests/e2e/videos',
    // 在加载测试文件之前加载的文件路径。 这个文件被编译和捆绑。 （通过 false 禁用）
    supportFile: 'tests/e2e/support/index.ts',
  });
};
```

- 在 src 同级新建 tests 目录，在 tests 目录中继续添加 e2e 目录，新建 support/index.ts 文件，并编写如下代码

```typescript
module.exports = {};
```

### 脚本配置

```json
"test": "pnpm unit && pnpm e2e",
"unit": "jest --colors --passWithNoTests",
"unit-watch": "jest --watchAll",
"coverage": "jest --coverage",
"e2e": "cypress open",
"e2e-run": "cypress run"
```

### cypress 使用

- 在 src 同级新建 tests 目录，在 tests 目录中继续添加 e2e 目录，新建 specs/index.specs.tsx 文件，并编写如下代码

```tsx
describe('home', () => {
  it('button click', () => {
    cy.visit('http://localhost:3002');
    cy.get('main');
  });
});
```

## 参考

# 十三、目录结构

```vue
├─.vscode // vscode配置文件 ├─config // vite配置文件 ├─coverage // jest coverage ├─dist // 打包输出文件 ├─doc // 文档
├─tests // 测试文件 ├─mock // mock apu存放地址，和apis对应 │ └─modules ├─src // 代码源文件目录 │ ├─apis // apis统一管理
│ │ └─modules // api模块 │ ├─assets // 静态资源 │ │ └─images │ ├─components // 项目组件目录 │ │ ├─Icon │ │ ├─Charts │ │
├─Message │ ├─directives // 指令目录 │ │ └─print │ ├─hooks // hooks目录 │ ├─layouts // 布局组件 │ │ ├─dashboard │ │ │
├─content │ │ │ ├─header │ │ │ └─sider │ │ └─fullpage │ ├─locales // 国际化配置文件 │ ├─pages // 页面目录地址 │ ├─home │
└─about │ ├─routes // 路由相关 │ │ └─routes │ ├─service // axios 封装 │ │ └─request │ ├─stores // 状态管理相关 │
├─styles // 样式相关 │ ├─types // 类型定义相关 │ ├─utils // 工具类相关 └─template // 模板相关 ├─apis └─page
```

# 参考
