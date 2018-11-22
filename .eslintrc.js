// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: false,
    node: true,
    es6: true
  },
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'one-var': [2, { 'initialized': 'never' }],
    'quotes': ['error', 'single'],
    'eol-last': 0, // 允许空行
    /**
     * 约定风格
     */
    // 建议禁止函数圆括号之前有一个空格
    'space-before-function-paren': [1, 'never'],
    // 要求关键字前后有空格
    'keyword-spacing': 2,
    'no-unused-vars': 0,
    // 禁止在常规字符串中出现模板字面量占位符语法
    'no-template-curly-in-string': 1,
    // error; js关键字和保留字不能作为函数名或者变量名
    'no-shadow-restricted-names': 2,
    // error; 不允许非空数组里面有多余的空格
    'array-bracket-spacing': [2, 'never'],
    // error: 逗号之后必须有空格
    'comma-spacing': 2,
    // error; 函数名和执行它的括号之间禁止有空格
    'func-call-spacing': [2, 'never'],
    // error; 对象字面量中冒号前面禁止有空格，后面必须有空格
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true, 'mode': 'strict' }],
    // error; 结尾无须分号
    'semi': [2, 'never'],
    // error; if, function 等的大括号之前必须要有空格
    'space-before-blocks': [2, 'always'],
    // error; 注释空格
    'spaced-comment': [2, 'always', {
      'line': { 'markers': ['/'], 'exceptions': ['-', '+'] },
      'block': { 'markers': ['!'], 'exceptions': ['*'], 'balanced': true }
    }],
    // error; 箭头函数的箭头前后必须有空格
    'arrow-spacing': [2, { 'before': true, 'after': true }],
    // warn; 推荐使用箭头函数作为回调
    'prefer-arrow-callback': [1, { 'allowNamedFunctions': true }],
    // warn; 大括号内是否允许不必要的空格
    'object-curly-spacing': [1, 'always'],
    // error; 小括号里面要不要有空格
    'space-in-parens': [2, 'never'],
    // 禁止重复的函数声明
    'no-func-assign': 2,
    // 最大块嵌套深度为 5 层
    'max-depth': [2, 5],
    // 最大回调深度为 3 层
    'max-nested-callbacks': [2, 3],
    // new 关键字后类应包含圆括号
    'new-parens': 2,
    // 禁止 alert
    'no-alert': 1,
    // 禁止使用 Array 构造函数，使用 Array(num) 直接创建长度为 num 的数组时可以
    'no-array-constructor': 2,
    // 禁止将 await 写在循环里
    'no-await-in-loop': 2,
    // switch的条件中出现 var、let、const、function、class 等关键字，必须使用花括号把内容括起来
    'no-case-declarations': 2,
    // 禁止使用常量作为判断条件
    'no-constant-condition': [2, { 'checkLoops': false }],
    // 禁止对 const 定义重新赋值
    'no-const-assign': 2,
    // 禁止在块作用域内使用 var 或函数声明
    'no-inner-declarations': [2, 'both'],
    // 禁止 for (var i) { function() { use i } }，使用 let 则可以
    'no-loop-func': 2,
    // 禁止使用 var，必须用 let 或 const
    'no-var': 2,
    // 禁止使用 \ 来定义多行字符串，统一使用模板字符串来做
    'no-multi-str': 2,
    // 连续空行的数量限制
    'no-multiple-empty-lines': [2, {
      max: 3, // 文件内最多连续 3 个
      maxEOF: 1, // 文件末尾最多连续 1 个
      maxBOF: 1 // 文件头最多连续 1 个
    }],
    // 禁止行尾空格
    'no-trailing-spaces': [2, {
      'skipBlankLines': true, // 不检查空行
      'ignoreComments': true // 不检查注释
    }],
    // 禁止 if 语句在没有花括号的情况下换行
    'nonblock-statement-body-position': 2,
    // 必须使用解构 ...args 来代替 arguments
    'prefer-rest-params': 2,
    // ...后面不允许有空格
    'rest-spread-spacing': [2, 'never'],
    // 操作符前后要加空格
    'space-infix-ops': 2,
    // 禁用严格模式，禁止在任何地方出现 'use strict'
    'strict': [2, 'never'],
  },
  globals: {
    App: true,
    Page: true,
    wx: true,
    getApp: true,
    getPage: true,
    requirePlugin: true,
    // add
    getCurrentPages: true,
    __wxConfig: true,
    worker: true
  }
}
