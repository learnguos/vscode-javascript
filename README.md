## 说明

- 一个 `vscode` 的 `javascript` 代码片段提示插件
- 涵盖了 `es5 + es6` 语法
- 支持的页面：`vue`、`javascript`、`html`

## 使用教程

#### 变量

- 呼出关键字：`var` `变量`

  - Snipped 代码

    ```javascript
    "body": [
          "// 变量提升：有变量提升  变量值：可修改 自动成为window对象中的一个属性",
          "var $1 = $0"
        ]
    ```

- 呼出关键字：`let` `变量`

  - Snipped 代码

    ```javascript
    "body": [
          "// 变量提升：没有变量提升  变量值：可修改 不会成为window对象中的一个属性",
          "// 有助于提高性能(垃圾回收程序更早介入)",
          "let $1 = $0"
        ]
    ```

- 呼出关键字：`const` `变量`

  - Snipped 代码

    ```javascript
    "body": [
          "// 变量提升：没有变量提升  变量值：不可修改 不会成为window对象中的一个属性",
          "// 有助于提高性能(垃圾回收程序更早介入)",
          "const $1 = $0"
        ]
    ```



#### 输出

- 呼出关键字：`log` `输出`

  - Snipped 代码

    ```javascript
    "body": ["console.log($0)"]
    ```

- 呼出关键字：`error` `输出`

  - Snipped 代码

    ```javascript
    "body": ["console.error($0)"]
    ```

- 呼出关键字：`warn` `输出`

  - Snipped 代码

    ```javascript
    "body": ["console.warn($0)"]
    ```

- 呼出关键字：`dir` `输出`

  - Snipped 代码

    ```javascript
    "body": ["console.dir($0)"]
    ```



#### 判断

- 呼出关键字：`if判断语句` `判断`

  - Snipped 代码

    ```javascript
    "body": ["if ($0) {", "", "}"]
    ```

- 呼出关键字：`ifelse双重判断语句` ` `判断`

  - Snipped 代码

    ```javascript
    "body": ["if ($0) {", "  ", "} else {", "  ", "}"]
    ```

- 呼出关键字：`ife三元表达式` `判断`

  - Snipped 代码

    ```javascript
    "body": ["$1 ? $2 : $3"]
    ```

- 呼出关键字：`ifif多重判断语句` `判断`

  - Snipped 代码

    ```javascript
    "body": ["if ($0) {", "  ", "} else if () {", "  ", "} else {", "  ", "}"]
    ```



#### 循环

- 呼出关键字：`for循环` `循环`

  - Snipped 代码

    ```javascript
    "body": ["for (let i = 0; i < ${1:变量或数字}; i++) {", "  $0", "}"]
    ```

- 呼出关键字：`while循环` `循环`

  - Snipped 代码

    ```javascript
    "body": [
          "while (${1:条件语句}) {",
          " // 只要条件语句值为true那么就会一直循环，所以要额外注意要设置停止条件",
          "  $0",
          "}"
        ]
    ```

- 呼出关键字：`do while循环` `循环`

  - Snipped 代码

    ```javascript
    "body": [
          "do {",
          "  // 先执行一次循环体",
          "  // 再根据条件语句值为true执行循环体",
          "} while (条件语句)"
        ]
    ```

- 呼出关键字：`break关键字停止循环` `循环`

  - Snipped 代码

    ```javascript
    "body": [
          "// 只要执行到break关键字就停止循环不再执行下面语句,只能用于循环体。",
          "break"
        ]
    ```

- 呼出关键字：`continue关键字停止循环` `循环`

  - Snipped 代码

    ```javascript
    "body": [
          "// 只要执行到continue就会停止当前这次的循环，继续后面次数的循环。",
          "continue"
        ]
    ```



#### 函数

- **使用构造函数 new Function()创建函数**

  - 呼出关键字：`function` `函数`

  - Snipped 代码

    ```javascript
    "body": [
          "// 1.Function是一个构造函数",
          "// 所有函数都是 Function 的实例(对象)",
          "// 所以所有的函数也是个对象",
          "// 用Function生成的实列对象，相当于声明一个匿名函数。",
          "// 2.函数都有length属性表示获取当前函数实参的数量",
          "// 函数都有name属性表示获取当前函数实列的名称",
          "// 用构造函数创建的函数的name属性值都为anonymous",
          "// 3.Function构造函数都默认有一个 prototype 属性，prototype本身是个函数,且名字为anonymous,prototype也叫原型对象。",
          "// 通过Function构造函数创建的每个实列对象默认通过__proto__属性可以访问到这个原型对象",
          "// prototype有个属性constructor，通过它可以访问Function构造函数。",
          "// Function构造函数也是一个对象，也有属性。",
          "// 在Function构造函数中的属性叫静态成员",
          "// 4.Function构造函数的原型链,也叫函数的原型链，原型链分为三层。",
          "// 第一层为Function.prototype === 实列对象.__proto__ 由Function构造函数和实列对象和prototype组成",
          "// 第二层为Function.prototype.__proto__ 或 实列对象.__proto__.__proto__ 这两个都指向第二层的Object对象",
          "// Object对象是一个对象，通过__proto__指向一个空的原型对象",
          "// 第三层为Function.prototype.__proto__.__proto__ 或 实列对象.__proto__.__proto__.__proto__ 这两个都指向第三层的null",
          "// 5.访问实列对象的属性和方法时，比如实列对象.属性名，如果实列对象没有这个属性，则自动执行 实列对象.__proto__.属性名 去找原型对象有没有这个属性",
          "// 这是在第一层原型链找，如果找不到又会自动执行 实列对象.__proto__.__proto__.属性名 在第二次原型链的Object对象找",
          "// 第二层找不到基本就返回undefined，因为自动执行了 实列对象.__proto__.__proto__.__proto__.属性名  相当于 null.属性名 空对象什么都没有，所以返回undefined",
          "// 使用Function构造函数创建函数",
          "var f = new Function('a', 'b', 'console.log(a + b)')",
          "// 调用函数",
          "f(1, 2)"
        ]
    ```

- **创建立即执行函数(自动调用)**

  - 呼出关键字：`function` `函数`

  - Snipped 代码

    ```javascript
    "body": ["(function () {", "", "})()"]
    ```

- **创建构造函数**

  - 呼出关键字：`function` `函数`

  - Snipped 代码

    ```javascript
    "body": [
          "function Star() {",
          "  console.log('gg')",
          "}",
          "// 调用方式一：自动",
          "new Star()",
          "// 调用方式二：匿名自动调用",
          "let ff = new Star()"
        ]
    ```

- **创建回调函数**

  - 呼出关键字：`function` `函数`

  - Snipped 代码

    ```javascript
    "body": [
          "function ff(gg) {",
          "  // 函数作为一个对象，可以作为实参进行传输或调用，这个就是回调函数。",
          "  // 执行前调用回调函数",
          "  gg()",
          "  // 执行后调用回调函数",
          "  gg()",
          "}"
        ]
    ```

- **创建闭包函数**

  - 呼出关键字：`function` `函数`

  - Snipped 代码

    ```javascript
    "body": [
          "// 闭包函数 指有权访问另一个函数作用域中变量的函数",
          "function fn1() {",
          "  function fn2() {",
          "    // 这里就可以访问最外面的函数的变量，这个函数就叫闭包函数",
          "  }",
          "  fn2()",
          "}",
          "fn1()"
        ]
    ```

- **创建递归函数**

  - 呼出关键字：`function` `函数`

  - Snipped 代码

    ```javascript
    "body": [
          "function fn() {",
          "  // 使用递归函数，先外部调用一下函数",
          "  // 在函数内部，再次调用自己，这样只需要外部调用一次，这个函数就会无限循环被调用",
          "  // return关键字可以使这个无限循环停止",
          "  fn()",
          "}",
          "fn()"
        ]
    ```

- **创建箭头函数**

  - 呼出关键字：`function` `函数`

  - Snipped 代码

    ```javascript
    "body": [
          "let gg = () => {",
          "  // () => 相当于 function ()",
          "  // 形参只有一个时，可以省略小括号,直接填形参",
          "  // 只有 return 出去的语句可以省略 {  }号",
          "}"
        ]
    ```

- **创建匿名函数**

  - 呼出关键字：`function` `函数`

  - Snipped 代码

    ```javascript
    "body": [
          "// 匿名函数",
          "const 函数名 = function () {}",
          "// 调用匿名函数",
          "函数名()"
        ]
    ```

- **创建普通函数**

  - 呼出关键字：`function` `函数`

  - Snipped 代码

    ```javascript
    "body": [
          "// 声明函数",
          "function ff(r) {",
          "  // 2为实参，r为形参。",
          "  // 实参可以接收数据类型，函数，变量等",
          "  // 形参接收调用函数时得实参,并赋值一个新的变量名。",
          "  // 在实参中，如果是var声明的变量，在函数体内去修改这个变量时，外面的变量值不会改变",
          "  // 在实参中，如果是let声明的变量，在函数体中去修改这个变量时，外面的变量值会改变",
          "  // 如果实参数有多个参数，形参接收时，可以用...xx表示，xx代表一个数组，自动把实参打包成一个数组",
          "}",
          "// 调用函数",
          "ff(2)"
        ]
    ```

- **函数体中 return 关键字的作用**

- 呼出关键字：`function` `函数`

  - Snipped 代码

    ```javascript
    "body": [
          "// 声明函数",
          "function ff(r) {",
          "  console.log('1')",
          "  // 函数体中return以下得语句不会执行",
          "  // 'werwe'为return出去得字符串，由ff(2)返回",
          "  // return 出去的可以是数据类型，函数，变量等",
          "  return 'werwe'",
          "  console.log('2')",
          "}",
          "// 调用函数",
          "ff(2)"
        ]
    ```



#### 对象

- **defineProperty方法处理对象属性**

  - 呼出关键字：`object` `对象`

  - Snipped 代码

    ```javascript
    "body": [
          "Object.defineProperty(对象, '要定义或修改的属性名', {",
          "  value: 'e', // 修改当前属性值，或添加。",
          "  writable: false, // 值为false时当前属性值不可修改，默认值为true可修改",
          "  enumerable: true, // 值为false当前属性不能被遍历到,且不能被获取到默认值为true可以被遍历到和获取到",
          "  configurable: false // 值为false时，当前属性不能被删除,属性值也不能被修改",
          "})"
        ]
    ```

- **defineProperty方法监听对象属性操作**

  - 呼出关键字：`object` `对象`

  - Snipped 代码

    ```javascript
    "body": [
          "let data = {};",
          "Object.defineProperty(data, \"name\", {",
          "  // 访问name属性就会执行此方法 返回值就是获取到的值",
          "  get() {",
          "    console.log(\"name属性被获取了\");",
          "    return \"666\";",
          "  },",
          "  // 设置新值就会执行此方法 newVal就是设置的新值",
          "  set(newVal) {",
          "    console.log(\"name属性被设置新值了\");",
          "    console.log(newVal);",
          "  },",
          "});"
        ]
    ```

- **删除对象属性**

  - 呼出关键字：`object` `对象`

  - Snipped 代码

    ```javascript
    "body": "delete ${1:对象}.${0:要删除的属性名}"
    ```

- **解构赋值获取指定的对象属性并保存为变量**

  - 呼出关键字：`object` `对象`

  - Snipped 代码

    ```javascript
    "body": [
          "// let { 对象的属性名1:把属性名的变量名更换为这里的变量名} = 对象",
          "let { 对象的属性名1,对象的属性名2 } = 对象"
        ]
    ```

- **字面量创建对象**

  - 呼出关键字：`object` `对象`

  - Snipped 代码

    ```javascript
    "body": [
          "var dd = {",
          "  属性1: '属性值',",
          "  属性2: '属性值',",
          "  函数名: function () {}",
          "}",
          "// 获取属性值",
          "dd.属性1",
          "// 调用对象的函数",
          "dd.函数值名()",
          "// 添加新属性",
          "dd.ff = 'sdf'",
          "// 添加新方法",
          "dd.ff = () => {}"
        ]
    ```

- **构造函数 new Object 创建对象**

  - 呼出关键字：`object` `对象`

  - Snipped 代码

    ```javascript
    "body": [
          "var dd = new Object()",
          "dd.属性1 = 属性值",
          "dd.属性2 = 属性值",
          "dd.函数名 = function () {}"
        ]
    ```

- **自定义构造函数创建对象**

  - 呼出关键字：`object` `对象`

  - Snipped 代码

    ```javascript
    "body": [
          "// 3.Star构造函数都默认有一个 prototype 属性，prototype本身是个对象也叫原型对象。",
          "// 通过Star构造函数创建的每个实列对象默认通过__proto__属性可以访问到这个原型对象",
          "// prototype有个属性constructor，通过它可以访问Star构造函数。",
          "// Star构造函数也是一个对象，也有属性。",
          "// 在Star构造函数中的属性叫静态成员",
          "// 4.Star构造函数的原型链,也叫函数的原型链，原型链分为三层。",
          "// 第一层为Star.prototype === 实列对象.__proto__ 由Star构造函数和实列对象和prototype组成",
          "// 第二层为Star.prototype.__proto__ 或 实列对象.__proto__.__proto__ 这两个都指向第二层的Object对象",
          "// Object对象是一个对象，通过__proto__指向一个空的原型对象",
          "// 第三层为Star.prototype.__proto__.__proto__ 或 实列对象.__proto__.__proto__.__proto__ 这两个都指向第三层的null",
          "// 5.访问实列对象的属性和方法时，比如实列对象.属性名，如果实列对象没有这个属性，则自动执行 实列对象.__proto__.属性名 去找原型对象有没有这个属性",
          "// 这是在第一层原型链找，如果找不到又会自动执行 实列对象.__proto__.__proto__.属性名 在第二次原型链的Object对象找",
          "// 第二层找不到基本就返回undefined，因为自动执行了 实列对象.__proto__.__proto__.__proto__.属性名  相当于 null.属性名 空对象什么都没有，所以返回undefined",
          "// 普通的对象只有两层原型链",
          "function Star(属性, 属性2, 属性3) {",
          "// 在这里面添加的实列对象属性也叫实例成员在构造函数内部创建的对象成员称为实例成员， 只能由实例化的对象来访问。",
          "this.属性 = '属性值'",
          "this.属性2 = '属性值2'",
          "this.属性3 = '属性值3'",
          "this.sing = function (形参) {",
          "console.log(形参)",
          "}",
          "}",
          "// 创建实列对象 张学友 对应属性 19 对应属性2 男 对应属性3",
          "// 先创建的实列对象，再自动调用构造函数。",
          "var hh = new Star('张学友', 19, '男')",
          "// 调用对象的函数",
          "hh.sing('实参')"
        ]
    ```

- **面向对象**

  - 呼出关键字：`object` `对象`

  - Snipped 代码

    ```javascript
    "body": [
          "// 1.class关键字创建一个类，Star为类名。相当于创建一个自定义的构造函数。",
          "class Star {",
          "  constructor(r, s) {",
          "    // 给实列对象添加属性",
          "    this.r = r",
          "    this.s = s",
          "  }",
          "  // 给实列对象添加方法",
          "  sing(形参) {",
          "    console.log('面向对象定义的方法')",
          "  sing(形参) {",
          "    console.log('面向对象定义的方法')",
          "  }",
          "}",
          "// 2.创建实列对象",
          "var ldh = new Star('11', 222)",
          "// 3.调用面向对象方法,必须要传递参数。",
          "ldh.sing('实参')",
          "// 3.1获取面向对象属性",
          "console.log(ldh.r)",
          "// 面向对象可以继承，使用extends关键字可以继承Star类。",
          "class Son extends Star {",
          "  // 必须要有下面的操作",
          "  constructor(r, s) {",
          "    super(r, s)",
          "    // super(r, s) 表示获取到继承类的属性",
          "  }",
          "  /* 如果有同名方法，优先调用自己的 */",
          "  sing(形参) {",
          "    console.log('继承类的方法')",
          "  }",
          "}",
          "var son = new Son('111', 222)",
          "// 调用继承的方法,如果自己的类中没有，则往继承的类中寻找。",
          "son.sing('调用继承')",
          "console.log(son.r)"
        ]
    ```

- **历对象方法一for循环**

  - 呼出关键字：`object` `对象`

  - Snipped 代码

    ```javascript
    "body": [
          "for (var k in obj) {",
          "  // k为当前属性名 obj为对象 obj[k]为属性值",
          "}"
        ]
    ```

- **遍历对象方法二Object.keys()方法**

  - 呼出关键字：`object` `对象`

  - Snipped 代码

    ```javascript
    "body": [
          "Object.keys(data).forEach((key) => {",
          "  // Object.keys(data)提取对象属性成数组  data为对象",
          "  // 使用 forEach 方法遍历 这个数组",
          "  // key 属性名",
          "  // data[key] 属性值",
          "  // data 原对象",
          "});"
        ]
    ```

#### 数组

- **使用构造函数创建数组**

  - 呼出关键字：`array` `数组`

  - Snipped 代码

    ```javascript
    "body": ["// 使用Array构造函数创建数组", "let uu = new Array()", "// 添加数组的第一个成员", "uu[0] = \"1111\""]
    ```

- **获取数组中最小的数字成员**

  - 呼出关键字：`array` `数组`

  - Snipped 代码

    ```javascript
    "body": ["Math.min.apply(Math, ${0:数组})"]
    ```

- **获取数组中最大的数字成员**

  - 呼出关键字：`array` `数组`

  - Snipped 代码

    ```javascript
    "body": ["Math.max.apply(Math, ${0:数组})"]
    ```

- **解构赋值将数组的成员提取出来，并设置变量名。**

  - 呼出关键字：`array` `数组`

  - Snipped 代码

    ```javascript
    "body": [
          "let [${1:设置第一个数组成员的变量名},${2:设置第二个数组成员的变量名}] = ${0:数组}"
        ]
    ```

- **在数组尾部新增一个成员或多个成员**

  - 呼出关键字：`array` `数组`

  - Snipped 代码

    ```javascript
    "body": ["// 返回结果为新数组成员的数量", "${1:数组}.push(${0:元素})"]
    ```

- **根据数组索引获取成员**

  - 呼出关键字：`array` `数组`

  - Snipped 代码

    ```javascript
    "body": ["${1:数组}[${0:成员索引}]"]
    ```

- **在数组头部新增一个元素或多个元素**

  - 呼出关键字：`array` `数组`

  - Snipped 代码

    ```javascript
    "body": [
          "// 返回结果为新增元素后的数组长度",
          "${1:数组}.unshift(${0:元素})"
        ]
    ```

- **删除数组最后一个成员**

  - 呼出关键字：`array` `数组`

  - Snipped 代码

    ```javascript
    "body": ["// 返回结果为删除的元素", "${1:数组}.pop()"]
    ```

- **删除数组第一个成员**

  - 呼出关键字：`array` `数组`

  - Snipped 代码

    ```javascript
    "body": ["// 返回结果为删除的元素", "${1:数组}.shift()"]
    ```

- **根据成员索引截取数组成员或多个数组成员**

  - 呼出关键字：`array` `数组`

  - Snipped 代码

    ```javascript
    "body": [
          "// 返回结果为截取的成员",
          "${1:数组}.splice(${2:成员索引}, ${0:从成员索引开始往后截取多少个成员})"
        ]
    ```

- **倒转数组成员**

  - 呼出关键字：`array` `数组`

  - Snipped 代码

    ```javascript
    "body": ["${1:数组}.reverse()"]
    ```

- **数组的数字成员冒泡排序**

  - 呼出关键字：`array` `数组`

  - Snipped 代码

    ```javascript
    "body": [
          "${1:数组}.sort((a, b) => {",
          "  return a - b // 从小到大",
          "  // return b - a  // 从大到小",
          "})"
        ]
    ```

- **数组去重 for 循环实现**

  - 呼出关键字：`array` `数组`

  - Snipped 代码

    ```javascript
    "body": [
          "for (let i = 0; i < ${1:要去重的数组}.length; i++) {",
          "  // for 遍历数组",
          "  // 遍历每个元素，在push进空数组前都要检查当前要push进空数组的元素是否与上传push进空数组的元素相等",
          "  if (${0:定义的空数组}.indexOf(${1:要去重的数组}[i]) === -1) {",
          "    ${0:定义的空数组}.push(${1:要去重的数组}[i])",
          "  }",
          "}"
        ]
    ```

- **数组去重 forEach 循环实现**

  - 呼出关键字：`array` `数组`

  - Snipped 代码

    ```javascript
    "body": [
          "${1:要去重的数组}.forEach(function (value, index, array) {",
          "  // forEach 方法遍历数组",
          "  // value为当前元素，index为当前元素索引号，arra代表这个数组本身",
          "  if (${0:定义的空数组}.indexOf(value) === -1) {",
          "    ${0:定义的空数组}.push(value)",
          "  }",
          "})"
        ]
    ```

- **根据数值匹配相同的数组第一位成员**

  - 呼出关键字：`array` `数组`

  - Snipped 代码

    ```javascript
    "body": [
          "// indexOf('元素',3)可以指定从字符索引号为3开始往后查找，如果找不到这个字符则返回-1",
          "${1:数组}.indexOf(${0:元素})"
        ]
    ```

- **遍历数组 for 循环**

  - 呼出关键字：`array` `数组`

  - Snipped 代码

    ```javascript
    "body": ["for (let i = 0; i < ${1:数组}.length; i++) {", "  $0", "}"]
    ```

- **遍历数组 forEach 方法**

  - 呼出关键字：`array` `数组`

  - Snipped 代码

    ```javascript
    "body": [
          "${1:数组}.forEach(function (value, index, array) {",
          "  // forEach 方法遍历数组",
          "  // value为当前元素，index为当前元素索引号，arra代表这个数组本身",
          "  ${0}",
          "})"
        ]
    ```

- **遍历数组筛选符合条件的成员到新数组**

  - 呼出关键字：`array` `数组`

  - Snipped 代码

    ```javascript
    "body": [
          "const ${1:新数组} = arr.filter(function (value, index, arr) {",
          "  // value 当前元素，index 当前元素索引, arr 数组",
          "  // value % 2 === 0 为条件表达式，结果为真，则把当前元素放入新数组",
          "  return value % 2 === 0",
          "})"
        ]
    ```

- **遍历数组查找符合条件的数组成员是否存在**

  - 呼出关键字：`array` `数组`

  - Snipped 代码

    ```javascript
    "body": [
          "const ${1:布尔值的变量} = arr.some(function (value, index, arr) {",
          "  // value为当前元素，index为当前索引，arr为要遍历的数组",
          "  // 只要有一个元素符合 value < 11 那么布尔值的变量为true",
          "  return value < 11",
          "})"
        ]
    ```

- **遍历数组 map 方法**

  - 呼出关键字：`array` `数组`

  - Snipped 代码

    ```javascript
    "body": [
          "let ${1:新数组} = ${2:要遍历的数组}.map(function (value, index, array) {",
          "  // value为当前元素，index为当前元素索引号，arra代表这个数组本身",
          "  return ${0:每次遍历都要返回新数组一个元素}"
        ]
    ```

- **定义数组**

  - 呼出关键字：`array` `数组`

  - Snipped 代码

    ```javascript
    "body": ["[元素1,元素2,元素3,元素4]"]
    ```

- **遍历数组 find 方法获取第一个符合条件的数组元素**

  - 呼出关键字：`array` `数组`

  - Snipped 代码

    ```javascript
    "body": [
          "let ${1:接受第一个符合条件的数组元素} = ${0:要遍历的数组}.find(function (item, index) {",
          "  // itrm元素，index元素索引",
          "  // return 出符合 item > 30000 这个语句第一个元素",
          "  return item > 30000",
          "})"
        ]
    ```

- **根据成员判断数组是否有该成员，成功返回 true，失败返回 false**

  - 呼出关键字：`array` `数组`

  - Snipped 代码

    ```javascript
    "body": ["${1:数组}.includes(${0:要查找的数组成员})"]
    ```

- **使用扩展运算符合并数组**

  - 呼出关键字：`array` `数组`

  - Snipped 代码

    ```javascript
    "body": ["let ${1:新数组名} = [...${2:新数组名},...${0:新数组名}]"]
    ```

- **获取数组长度**

  - 呼出关键字：`array` `数组`

  - Snipped 代码

    ```javascript
    "body": ["数组.length"]
    ```



#### 字符

- **获取字符长度**

  - 呼出关键字：`string` `字符`

  - Snipped 代码

    ```javascript
    "body": ["字符串.length"]
    ```

- **去除字符串头部与尾部的空白字符**

  - 呼出关键字：`string` `字符`

  - Snipped 代码

    ```javascript
    "body": ["${1:字符串} = ${1:字符串}.trim()"]
    ```

- **根据字符获取第一次在字符串出现的字符索引**

  - 呼出关键字：`string` `字符`

  - Snipped 代码

    ```javascript
     "body": [
          "// indexOf('字符',3)可以指定从字符索引号为3开始往后查找，如果找不到这个字符则返回-1",
          "${1:字符串}.indexOf('${0:字符}')"
        ]
    ```

- **根据字符索引获取字符**

  - 呼出关键字：`string` `字符`

  - Snipped 代码

    ```javascript
    "body": ["${1:字符串}.charAt(${0:字符索引})"]
    ```

- **根据字符索引的字符获取字符的 ASCII 码值**

  - 呼出关键字：`string` `字符`

  - Snipped 代码

    ```javascript
    "body": ["${1:字符串}.charCodeAt(${0:字符索引})"]
    ```

- **根据字符索引获取字符或多个字符**

  - 呼出关键字：`string` `字符`

  - Snipped 代码

    ```javascript
    "body": [
          "// 从索引号的字符开始往后删除，返回的结果为复制的字符",
          "${1:字符串}.substr(${2:字符索引}, ${0:获取索引字符后面多少个字符})"
        ]
    ```

- **在字符串尾部新增字符**

  - 呼出关键字：`string` `字符`

  - Snipped 代码

    ```javascript
    "body": ["${1:字符串} = ${2:字符串}.concat('${0:要新增的字符}')"]
    ```

- **替换字符串第一次出现的相同字符**

  - 呼出关键字：`string` `字符`

  - Snipped 代码

    ```javascript
    "body": [
          "${1:字符串} = ${2:字符串}.replace('${3:被替换的字符}', '${0:新的的字符}')"
        ]
    ```

- **替换所有出现相同的字符**

  - 呼出关键字：`string` `字符`

  - Snipped 代码

    ```javascript
    "body": [
          "while (${1:字符串}.indexOf('${2:要替换的字符}') !== -1) {",
          "  ${3:字符串} = ${4:字符串}.replace('${5:要替换的字符}', '${0:新的字符}')",
          "}"
        ]
    ```

- **将大写的英文转换为小写英文**

  - 呼出关键字：`string` `字符`

  - Snipped 代码

    ```javascript
    "body": ["${1:字符串} = ${2:字符串}.toLowerCase()"]
    ```

- **将小写的英文转换为大写英文**

  - 呼出关键字：`string` `字符`

  - Snipped 代码

    ```javascript
    "body": ["${1:字符串} = ${2:字符串}.toUpperCase()"]
    ```

- **根据字符索引获取字符串往后的所有字符**

  - 呼出关键字：`string` `字符`

  - Snipped 代码

    ```javascript
     "body": [
          "// slice(1)获取索引为1及往后的所有字符",
          "${1:字符串).slice(${0:字符索引)"
        ]
    ```

- **模板字符**

  - 呼出关键字：`string` `字符`

  - Snipped 代码

    ```javascript
    "body": ["// `字符字符${变量}字符字符${变量2}字符字符${函数名()}}`"]
    ```

- **根据字符判断是否在字符串的头部**

  - 呼出关键字：`string` `字符`

  - Snipped 代码

    ```javascript
    "body": ["${1:字符串}.startsWith('${0:字符}')"]
    ```

- **根据字符判断是否在字符串的尾部**

  - 呼出关键字：`string` `字符`

  - Snipped 代码

    ```javascript
    "body": ["${1:字符串}.endsWith('${0:字符}')"]
    ```

- **根据字符复制 n 次字符并返回字符串**

  - 呼出关键字：`string` `字符`

  - Snipped 代码

    ```javascript
    "body": ["const $1 = '${2:字符}'.repeat(${0:复制的次数})"]
    ```



#### 数字

- **Math.ceil()方法返回大于或等于给定浮点数的最小整数**

  - 呼出关键字：`math` `数字`

  - Snipped 代码

    ```javascript
    "body": ["Math.ceil({0:浮点数})"]
    ```

- **获取绝对值**

  - 呼出关键字：`math` `数字`

  - Snipped 代码

    ```javascript
    "body": ["Math.abs(${1:数字})"]
    ```

- **根据有小数点的数字获取忽略小数的数字**

  - 呼出关键字：`math` `数字`

  - Snipped 代码

    ```javascript
    "body": ["Math.floor(${1:有小数的数字})"]
    ```

- **根据有小数点的数字获取忽略小数个位数进 1 的数字**

  - 呼出关键字：`math` `数字`

  - Snipped 代码

    ```javascript
    "body": ["Math.ceil(${1:有1位小数的数字})"]
    ```

- **根据有小数的数字获取第一位小数四舍五入后的数字**

  - 呼出关键字：`math` `数字`

  - Snipped 代码

    ```javascript
    "body": ["Math.round(${1:有1位小数的数字})"]
    ```

- **随机生成有 15 位小数的数字**

  - 呼出关键字：`math` `数字`

  - Snipped 代码

    ```javascript
    "body": ["Math.random()"]
    ```

- **随机生成 1 位整数**

  - 呼出关键字：`math` `数字`

  - Snipped 代码

    ```javascript
    "body": ["Math.floor(Math.random() * 10)"]
    ```



#### 日期

- **获取当前日期**

  - 呼出关键字：`date` `日期`

  - Snipped 代码

    ```javascript
    "body": ["new Date()"]
    ```

- **获取当前的年份**

  - 呼出关键字：`date` `日期`

  - Snipped 代码

    ```javascript
    "body": ["new Date().getFullYear()"]
    ```

- **获取当前的月份**

  - 呼出关键字：`date` `日期`

  - Snipped 代码

    ```javascript
    "body": ["new Date().getFullYear()"]
    ```

- **获取当前月份的号数**

  - 呼出关键字：`date` `日期`

  - Snipped 代码

    ```javascript
    "body": ["new Date().getDate() + 1"]
    ```

- **获取当前的星期**

  - 呼出关键字：`date` `日期`

  - Snipped 代码

    ```javascript
    "body": ["new Date().getDay()"]
    ```

- **获取当前分钟的秒数**

  - 呼出关键字：`date` `日期`

  - Snipped 代码

    ```javascript
    "body": ["new Date().getSeconds()"]
    ```

- **获取当前的分钟**

  - 呼出关键字：`date` `日期`

  - Snipped 代码

    ```javascript
    "body": ["new Date().getMinutes()"]
    ```

- **获取当前小时**

  - 呼出关键字：`date` `日期`

  - Snipped 代码

    ```javascript
    "body": ["new Date().getHours()"]
    ```

- **获取当前日期总毫秒、时间从 1970 年 1 月 1 日 0 时开始算**

  - 呼出关键字：`date` `日期`

  - Snipped 代码

    ```javascript
    "body": ["+new Date()"]
    ```



#### set

- **定义 set 对象**

  - 呼出关键字：`set`

  - Snipped 代码

    ```javascript
    "body": [
          "// set数据类型与数组相似但是new创建的set数组默认把重复的元素去掉",
          "new Set(${0:这里写数组或者数组的变量或者不填为空数组})"
        ]
    ```

- **根据元素向 ste 后面新增元素(重复的元素不会添加进来)**

  - 呼出关键字：`set`

  - Snipped 代码

    ```javascript
    "body": ["${1:set数据}.add(${2:要新增的元素1).add(${0:要新增的元素2)"]
    ```

- **根据元素删除 set 对象的元素**

  - 呼出关键字：`set`

  - Snipped 代码

    ```javascript
    "body": [
          "// 删除失败会返回fasle，删除成功会返回true",
          "${1:set数据}.delete(${0:元素})"
        ]
    ```

- **根据元素判断 set 数据是否有这个元素**

  - 呼出关键字：`set`

  - Snipped 代码

    ```javascript
    "body": [
          "// 查找成功返回true，查找失败返回false",
          "${1:set数据}.has(${0:元素})"
        ]
    ```

- **清空 set 数据**

  - 呼出关键字：`set`

  - Snipped 代码

    ```javascript
    "body": ["${1:set数据}.clear()"]
    ```

- **遍历 set 数据**

  - 呼出关键字：`set`

  - Snipped 代码

    ```javascript
    "body": [
          "${1:set数据}.forEach(function (value, index, array) {)",
          "  // forEach 方法遍历Set",
          "  // value为当前元素，index为当前元素索引号，arra代表这个数组本身",
          "})"
        ]
    ```



#### 操作符

- **扩展运算符**

  - 呼出关键字：`operator` `操作符`

  - Snipped 代码

    ```javascript
    "body": [
          "// 扩展运算符就是... 作用1是把一个变量数组添加  ...数组变量名  输出后自动把数组转成字符串，数组成员之间用空格隔开。",
          "// 扩展运算符就是... 作用2是可以合并数组: [...数组变量名1,...数组变量名2]"
        ]
    ```

- **算数运算符**

  - 呼出关键字：`operator` `操作符`

  - Snipped 代码

    ```javascript
    "body": [
          "// 小数不能计算会有精度问题",
          "// 加：+ 减：- 乘：* 除：/",
          "//  取余：% 3的平方(es7新增)：3 ** 2"
        ]
    ```

- **递增与递减运算符**

  - 呼出关键字：`operator` `操作符`

  - Snipped 代码

    ```javascript
    "body": [
          "//  前置递增表示加1和递减运算符表示减1(第一次执行到当前语句就会计算)：++数字 --数字",
          "//  后置递增表示加1和递减运算符表示减1(第一次执行到当前语句不会计算，直到第二次执行到当前语句才会运行+1计算)：++数字 --数字"
        ]
    ```

- **比较运算符**

  - 呼出关键字：`operator` `操作符`

  - Snipped 代码

    ```javascript
    "body": [
          "// 小于号< 大于号> 大于或等于号>= 小于或等于号<=",
          "判等号只要求值相等==  全等号要求值和数据类型相等===",
          "不等号只要求值不相等!= 全不等号要求值和数据类型不相等!=="
        ]
    ```

- **逻辑运算符**

  - 呼出关键字：`operator` `操作符`

  - Snipped 代码

    ```javascript
    "body": [
          "// 逻辑与(两侧都为true  结果才是 true  只要有一侧为false  结果就为false) &&",
          "// 逻辑或(两侧都为false  结果才是 true  只要有一侧为true  结果就为true) ||",
          "// 逻辑非(取反) !",
          "// 逻辑与短路运算(如果表达式一为真则返回表达式二 如果表达式一为假则返回表达式一) 456(表达式一) && 33(表达式二)",
          "// 逻辑或短路运算(如果表达式一为真则返回表达式一 如果表达式一为假则返回表达式二) 456(表达式一) && 33(表达式二)"
        ]
    ```

- **运算符优先级**

  - 呼出关键字：`operator` `操作符`

  - Snipped 代码

    ```javascript
    "body": [
          "// 优先级1 ()",
          "// 优先级2 ++ -- ！",
          "// 优先级3 先* / % 后 + -",
          "// 优先级4 > >= < <=",
          "// 优先级5 == != === !==",
          "// 优先级6 =",
          "// 优先级7 ,"
        ]
    ```



#### 正则

- **text()方法匹配正则**

  - 呼出关键字：`regex` `正则`

  - Snipped 代码

    ```javascript
    "body": [
          "// 匹配成功返回true，匹配失败返回false",
          "${0:正则}.test(${0:要匹配的内容})"
        ]
    ```

- **exec()方法匹配正则**

  - 呼出关键字：`regex` `正则`

  - Snipped 代码

    ```javascript
    "body": [
          "// 匹配成功返回要匹配的内容，匹配失败返回null",
          "${0:正则}.exec(${0:要匹配的内容})"
        ]
    ```



#### 数据类型

- **简单数据类型**

  - 呼出关键字： `dt` `数据类型`

  - Snipped 代码

    ```javascript
    "body": [
          "// 简单数据类型定义的数据值放到了栈空间里面，变量名指向了栈空间的定义的数据值。",
          "// undefined用布尔值判断为false",
          "// null用布尔值判断为false",
          "// undefined表示未定义值",
          "",
          "// 数字型：number",
          "// 数字型数最大数值为：1.7976931348623157e308 这个表示科学计数法 e308就表示 1.7976931348623157 * 10的308次方",
          "// 如果数值超过这个最大数，则返回 Infinity 表示无穷大,可以在构造函数上面看到。",
          "// 数字型数最小数值为：5e-324 这个表示科学计数法 e-324 就表示 5 * -10的324次方",
          "// 如果数值小于这个数，则返回 -Infinity 表示无穷小,可以在构造函数上面看到。",
          "// 数字型的浮点数计算时有精度问题",
          "// 数字型默认为10进制数据，想要转换2进制数据则使用toString(2)方法,传入这个2就表示要转换成2进制数据，传入8表示转换8进制数据，传入16表示转换成16进制数据，不传入表示默认为10进制数据。",
          "// 使用 toFixed(2) 方法表示添加小数点，列如 10 变成 10.00 传入的2表示要添加几个小数点",
          "// 判断是否为整数：Number.isInteger(数字)",
          "// javascript有一个整数范围，超过了这个整数范围，这个数值输出或赋值时就不精确了",
          "// 范围在 -2的53次立方+1到2的53次立方-1中，可以在构造函数上面看到。",
          "// 为了鉴别整数是否在这个范围，可以使用：Number.isSafeInteger(数字) 方法去判断",
          "",
          "// 布尔型：boolean",
          "// 字符串型：string",
          "// 未定义型：undefined",
          "// 空值型：null"
        ]
    ```

- **复杂数据类型**

  - 呼出关键字： `dt` `数据类型`

  - Snipped 代码

    ```javascript
    "body": [
          "// 复杂数据类型的变量名指向了栈空间的数据值但是这个数据值是一个16进制的地址，这个16进制的地址指向了堆空间，在堆空间里有一个小空间这个小空间存放的就是复杂数据类型的值。",
          "// 数组型：array",
          "// 对象型：object",
          "// 日期构造函数型：date",
          "// Set数据结构(构造函数类似于数组)",
          "// ..."
        ]
    ```



#### 转换数据类型

- **提取对象属性名转化为数组**

  - 呼出关键字： `cdt` `转换数据类型`

  - Snipped 代码

    ```javascript
    "body": ["Object.keys(${1:对象})"]
    ```

- **对象转数组(提取属性值转化为数组成员)**

  - 呼出关键字： `cdt` `转换数据类型`

  - Snipped 代码

    ```javascript
    "body": ["${1:对象} = Object.keys(${0:对象})"]
    ```

- **数组类型转换为字符串型**

  - 呼出关键字： `cdt` `转换数据类型`

  - Snipped 代码

    ```javascript
    "body": [
          "// join('')里面的实参''决定了数组元素之间的拼接符号为空,如果什么不填则默认数组元素之间的拼接符号为逗号,join方法默认会进行深拷贝，所以要重新赋值。避免造成不必要的内存浪费",
          "${1:数组} = ${2:数组}.join('${0:替换数组逗号的拼接符号}')"
        ]
    ```

- **字符串型转换为数组类型**

  - 呼出关键字： `cdt` `转换数据类型`

  - Snipped 代码

    ```javascript
    "body": [
          "// 会把每个字符转成数组的每个元素,split方法默认会进行深拷贝,所以要重新赋值,避免造成不必要的内存浪费",
          "${1:字符串} = ${2:字符串}.split('')"
        ]
    ```

- **简单数据类型转换为字符串型**

  - 呼出关键字： `cdt` `转换数据类型`

  - Snipped 代码

    ```javascript
    "body": ["String($0)"]
    ```

- **简单数据类型转换为数字型**

  - 呼出关键字： `cdt` `转换数据类型`

  - Snipped 代码

    ```javascript
    "body": ["Number($0)"]
    ```

- **简单数据类型转换为布尔型**

  - 呼出关键字： `cdt` `转换数据类型`

  - Snipped 代码

    ```javascript
    "body": ["Boolean($0)"]
    ```

- **将类似数组的对象类型转换为数组类型**

  - 呼出关键字： `cdt` `转换数据类型`

  - Snipped 代码

    ```javascript
    "body": [
          "let ${1:定义类似数组的对象} = {",
          "  0: 1,",
          "  1: 2,",
          "  length: 2",
          "}",
          "let ${2:新数组} = Array.from(${3:遍历的对象}, function (value, e) {",
          "  // value 属性值 e 属性名 return 出去的的为新数组的元素",
          "  return value",
          "})"
        ]
    ```



#### 识别数据类型

- **typeof 关键字识别数据类型**

  - 呼出关键字： `idt` `识别数据类型`

  - Snipped 代码

    ```javascript
    "body": [
          "// 返回的结果用该类型的字符串(全小写字母)形式表示，包括以下 7 种：string、number、boolean、symbol、undefined、object、function BigInt。",
          "typeof ${0:数据}"
        ]
    ```

- **检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上**

  - 呼出关键字： `idt` `识别数据类型`

  - Snipped 代码

    ```javascript
    "body": [
          "// 检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上",
          "// 如果出现了则为true，否则为false",
          "// 构造函数可通过 实列对象.__proto__.constructor去访问,这是第一层原型链",
          "// 第二层原型链可通过 实列对象.__proto__.__proto__.constructor去访问",
          "实列对象 instanceof 构造函数名"
        ]
    ```

- **判断是否为非数字类型**

  - 呼出关键字： `idt` `识别数据类型`

  - Snipped 代码

    ```javascript
    "body": ["isNaN(${0:数据})"]
    ```

- **判断是否为对象类型方法**

  - 呼出关键字： `idt` `识别数据类型`

  - Snipped 代码

    ```javascript
    "body": ["$0 instanceof Object"]
    ```

- **判断是否为数组类型方法一**

  - 呼出关键字： `idt` `识别数据类型`

  - Snipped 代码

    ```javascript
    "body": ["$0 instanceof Array"]
    ```

- **判断是否为数组类型方法二**

  - 呼出关键字： `idt` `识别数据类型`

  - Snipped 代码

    ```javascript
    "body": ["Array.isArray($0)"]
    ```



#### this 关键字

- **this 关键字**

  - 呼出关键字： `this关键字`

  - Snipped 代码

    ```javascript
    "body": [
          "// this关键字表示当前的作用域指向哪个对象,一般在事件函数里,普通函数里，构造函数里使用",
          "// 默认的在全局作用域下this就表示window浏览器对象，前提是当前js脚本已经被页面引入。否则为{}空对象",
          "// 普通函数内部的this一般的如果在全局作用域调用这个函数，那么this就表示window浏览器对象",
          "// 构造函数里面的this指向实列对象",
          "// 立即执行函数里面的this指向window浏览器对象",
          "// 绑定事件的函数里面的this指向这个获取到的元素对象",
          "// 定时器函数的this指向window浏览器对象"
        ]
    ```

- **改变 this 指向 call 方法**

  - 呼出关键字： `this关键字`

  - Snipped 代码

    ```javascript
    "body": [
          "// 同时调用函数并同时改变函数内this的指向",
          "${1:函数名}.call(${0:这里填this指向的数据可以是对象，数组等}, 实参1,实参2)"
        ]
    ```

- **改变 this 指向 bind 方法**

  - 呼出关键字： `this关键字`

  - Snipped 代码

    ```javascript
    "body": [
          "let 新函数名  = ${1:要改变this指向的函数名}.bind(${1:这里填this指向的数据可以是对象，数组等}, 实参1,实参2)"
        ]
    ```



#### 复制数据

- **复制简单数据类型与复制复杂数据类型的区别**

  - 呼出关键字： `复制数据`

  - Snipped 代码

    ```javascript
    "body": [
          "// 复制数据的过程，简单数据类型中是可以直接复制的，因为值都在栈内存中。",
          "// 列如",
          "let tt = '111'",
          "let gg = tt",
          "tt = '222'",
          "console.log(tt + gg)",
          "// 但是复制复杂数据类型时，复制的只是栈内存的指向堆的16进制地址，并不是真正的复制。",
          "// 真正的复杂数据类型数据值存在了堆内存中，通过栈内存的16进制地址指向了这个堆的内存。",
          "// 所以我们通过变量赋值的操作的复杂数据类型并不是真正意义上的复制",
          "// 列如",
          "let bb = {",
          "  sdf: '111'",
          "}",
          "let xx = bb",
          "bb.sdf = '222'",
          "console.log(bb.sdf + xx.sdf)"
        ]
    ```

- **浅拷贝**

  - 呼出关键字： `复制数据`

  - Snipped 代码

    ```javascript
    "body": [
          "// 浅拷贝，复制一个对象或数组的属性或成员到另外一个对象或数组中。",
          "// 下面拿拷贝对象为列子",
          "// yy为要拷贝给的对象，gg为被拷贝的对象。",
          "// 浅拷贝特点1：两个对象有相同属性名，属性值不相同，被拷贝的对象会覆盖掉要拷贝给的对象。",
          "// 浅拷贝特点2：两个对象有相同属性名，属性值也相同，拷贝时，不会叠加。",
          "// 浅拷贝特点3：当被拷贝的对象的属性有复杂数据类型时，并不会真正的拷贝，而只是拷贝了在栈内存中的一个16进制地址",
          "// 此时两个对象的复杂数据类型其实是共享的。",
          "// 当修改了被拷贝的对象的复杂数据类型的值，要拷贝给的对象也会跟着改变。",
          "let yy = {",
          "  ff: '111'",
          "}",
          "let gg = {",
          "  ff: '222',",
          "  gg: '333',",
          "  jj: {",
          "    gg: '222'",
          "  }",
          "}",
          "// assign()方法进行浅拷贝",
          "Object.assign(yy, gg)",
          "gg.jj.gg = '333'",
          "console.log(yy)"
        ]
    ```

- **深拷贝**

  - 呼出关键字： `复制数据`

  - Snipped 代码

    ```javascript
    "body": [
          "// 深拷贝特点1：两个对象有相同属性名，属性值不相同，被拷贝的对象会覆盖掉要拷贝给的对象。",
          "// 深拷贝特点2：两个对象有相同属性名，属性值也相同，拷贝时，不会叠加。",
          "// 深拷贝特点3：复杂数据类型的复制为真正的复制。",
          "",
          "let ff = {",
          "  ff: 565,",
          "  gg: {",
          "    hh: 888",
          "  }",
          "}",
          "let hh = {",
          "  jj: 55",
          "}",
          "// 开始进行深拷贝",
          "function deepCopy(yy, gg) {",
          "  // 2.开始遍历要拷贝的对象, k表示当前遍历的属性名, obj[k]表示当前遍历的属性值",
          "  for (var k in gg) {",
          "    // 3.把当前属性值赋值给一个变量",
          "  var item = gg[k]",
          "  // 4.开始判断每个属性是否为复杂数据类型，如果是则需要进一步操作。",
          "  // 4.1先判断当前遍历到的属性是否为数组。",
          "  if (item instanceof Array) {",
          "      // 4.11已经判断为数组，先给要拷贝给的对象一个空数组。",
          "      yy[k] = []",
          "      // 4.12执行递归函数，传入两个参数，相当于一个是要拷贝给的对象一个是被拷贝的对象",
          "      deepCopy(yy[k], item)",
          "    } else if (item instanceof Object) {",
          "      // 4.11已经判断为对象，先给要拷贝给的对象一个空对象。",
          "      yy[k] = {}",
          "      deepCopy(yy[k], item)",
          "    } else {",
          "      // 4.31简单数据类型直接赋值",
          "      yy[k] = item",
          "    }",
          "  }",
          "}",
          "deepCopy(hh, ff)",
          "ff.gg.hh = 999",
          "console.log(ff)",
          "console.log(hh)"
        ]
    ```



#### 定时器

- **执行一次的定时器**

  - 呼出关键字： `timer` `定时器`

  - Snipped 代码

    ```javascript
    "body": ["  let dd = setTimeout(function () {", "  ", "  }, ${0:毫秒数})"]
    ```

- **停止定时器**

  - 呼出关键字： `timer` `定时器`

  - Snipped 代码

    ```javascript
    "body": ["clearTimeout(${0:定时器的变量})"]
    ```

- **无限循环执行的定时器**

  - 呼出关键字： `timer` `定时器`

  - Snipped 代码

    ```javascript
    "body": ["  let dd = setInterval(function () {", "  ", "  }, ${0:毫秒数})"]
    ```



#### 本地存储

- **窗口生命周期~存储数据**

  - 呼出关键字： `le` `本地存储`

  - Snipped 代码

    ```javascript
    "body": [
          "window.sessionStorage.setItem('${1:要存储数据名称}', ${0:要存储的数据})"
        ]
    ```

- **窗口生命周期~获取数据**

  - 呼出关键字： `le` `本地存储`

  - Snipped 代码

    ```javascript
    "body": ["window.sessionStorage.getItem('${0:已存储数据的名称}')"]
    ```

- **窗口生命周期~删除数据**

  - 呼出关键字： `le` `本地存储`

  - Snipped 代码

    ```javascript
    "body": ["window.sessionStorage.removeItem(${0:已存储数据的名称})"]
    ```

- **窗口生命周期~删除所有数据**

  - 呼出关键字： `le` `本地存储`

  - Snipped 代码

    ```javascript
    "body": ["window.sessionStorage.clear()"]
    ```

- **永久生命周期~存储数据**

  - 呼出关键字： `le` `本地存储`

  - Snipped 代码

    ```javascript
     "body": [
          "window.localStorage.setItem('${1:要存储数据名称}', ${0:要存储的数据})"
        ]
    ```

- **永久生命周期~获取数据**

  - 呼出关键字： `le` `本地存储`

  - Snipped 代码

    ```javascript
    "body": ["window.localStorage.getItem('${0:已存储数据的名称}')"]
    ```

- **永久生命周期~删除数据**

  - 呼出关键字： `le` `本地存储`

  - Snipped 代码

    ```javascript
    "body": ["window.localStorage.removeItem(${0:已存储数据的名称})"]
    ```

- **永久生命周期~删除全部数据**

  - 呼出关键字： `le` `本地存储`

  - Snipped 代码

    ```javascript
    "body": ["window.localStorage.clear()"]
    ```

- **转化要存储的复杂数据类型的数据**

  - 呼出关键字： `le` `本地存储`

  - Snipped 代码

    ```javascript
    "body": [
          "// 把数据对象转换为字符串的过程，叫做序列化，例如：调用 JSON.stringify() 函数的操作，叫做 JSON 序列化。",
          "// 因为本地存储的是字符串数据，所以一般的简单数据类型可直接存储，但是复制数据类型不行，需要转换成json字符串类型的。",
          "JSON.stringify(${0:要存储的数据})"
        ]
    ```

- **转化已获取到的复杂数据类型的数据**

  - 呼出关键字： `le` `本地存储`

  - Snipped 代码

    ```javascript
    "body": [
          "// 把字符串转换为数据对象的过程，叫做反序列化，例如：调用 JSON.parse() 函数的操作，叫做 JSON 反序列化。",
          "// 当然获取本地存储数据时，也要需要把复杂数据类型的反序列化",
          "JSON.parse(${0:要存储的数据})"
        ]
    ```



#### 模块

- **模块介绍与 script 标签中的模块**

  - 呼出关键字： `module` `模块`

  - Snipped 代码

    ```javascript
    "body": [
          "    <script type=\"module\" src=\"./测试 copy.js\">",
          "      // 模块可以适用在script标签也可以适用在js文件中",
          "      // 模块的定义就是可以访问在一个js文件中导入另外一个js文件",
          "      // 可以访问另外一个js文件的函数，变量等操作",
          "      // module的script的js代码必须等到dom解析完才能加载等价于在普通的javascript添加defer属性",
          "      // 一个页面中，相同模块只加载一次",
          "      // 相较于普通script标签导入js的方式多了一个import '文件路径'",
          "      // 模块是异步加载和执行的",
          "      // 模块可以定义公共接口，其他模块可以基于这个公共接口观察和交互",
          "      // 模块可以请求加载其他模块",
          "      // 模块支持循环依赖",
          "      // es6模块默认在严格模式下执行",
          "      // 模块不共享全局命名空间",
          "      // 模块顶级this的值是undefined，一般都是window",
          "      // 模块中的var声明不会添加到window对象",
          "    </script>",
          "    <script src=\"./测试.js\"></script>"
        ]
    ```

- **模块导入**

  - 呼出关键字： `module` `模块`

  - Snipped 代码

    ```javascript
    "body": [
          "// 如果是脚手架等构建工具。导入模块路径后缀不需要添加js,如果从浏览器导入，需要添加js",
          "// 导入模块语句写在最顶",
          "// 普通模块导入：import { 模块1, 模块2 as 重命名的模块2 } from '@${1:模块js文件路径}'",
          "// 导出默认模块时，建议没有其他需要设置的模块下",
          "// 默认模块导入：import 默认模块 from '@${1:模块js文件路径}'",
          "// js文件中直接通过路径加载文件执行文件代码：import '文件路径'",
          "import $1 from '@"
        ]
    ```

- **定义导出的模块**

  - 呼出关键字： `module` `模块`

  - Snipped 代码

    ```javascript
    "body": [
          "// export关键字写在最下面",
          "// 方法1：export const 模块的变量名 = 可以是数据值可以是函数等",
          "// 方法2：同时导出多个或一个：export { 变量1, 变量2, 变量3 }",
          "export"
        ]
    ```

- **默认导出**

  - 呼出关键字： `module` `模块`

  - Snipped 代码

    ```javascript
    "body": [
          "// export关键字写在最下面",
          "// 导出这个模块本身就是foo变量的值",
          "// 方法1：const foo= 'foo'  export default foo",
          "// 方法二(推荐)：export { foo as default, 变量2 }",
          "export default"
        ]
    ```



#### 原型链详解

- **原型链详解**

  - 呼出关键字： `原型链`

  - Snipped 代码

    ```javascript
    "body": [
          "// 构造函数、原型链、数据类型、方法之间的关系",
          "// 1.所有的创建的数据类型都是他们的构造函数的实列对象,这些构造函数是原生有的。",
          "// 1.所有的创建的数据类型都是他们的构造函数的实列对象,这些构造函数是原生有的。",
          "// 2.通过数据类型的值.__proto__.constructor就可以知道这个数据类型是哪个构造函数的实列对象。",
          "// 比如：\"yyy\".__proto__.constructor 打印出来是一个String()的构造函数，那么就可以判断出创建出来的字符串都是String构造函数的实列对象,那么就可以使用instanceof关键字来识别出当前的数据是否为自己想要的数据类型",
          "// 3.构造函数可以自己创建，通过new来创建自定义构造函数的实列对象。",
          "// 4.每个构造函数都有自己的属性和方法",
          "// 5.在构造函数中的属性叫静态成员",
          "// 6.构造函数都默认有一个 prototype 属性，prototype本身是个函数,且名字为anonymous,prototype也叫原型对象。",
          "// 7.通过构造函数创建的每个实列对象默认通过__proto__属性可以访问到这个原型对象",
          "// 8.prototype有个属性constructor，通过它可以访问构造函数。",
          "// 9.原型链,也叫构造函数的原型链，原型链分为三层。",
          "// 第一层为 构造函数.prototype === 实列对象.__proto__ 由Function构造函数和实列对象和prototype组成",
          "// 第二层为 构造函数.prototype.__proto__ 或 实列对象.__proto__.__proto__ 除了对象是指向null，其他都是指向第二层的prototype",
          "// 第二层的prototype也有一个属性constructor指向第二层的构造函数一般是一个Object的构造函数",
          "// 第三层为Function.prototype.__proto__.__proto__ 或 实列对象.__proto__.__proto__.__proto__ 这两个都指向第三层的null",
          "// 10.访问实列对象的属性和方法时，比如实列对象.属性名，如果实列对象没有这个属性，则自动执行 实列对象.__proto__.属性名 去找原型对象有没有这个属性,没有就去第二层的原型对象找，第二层没有就找第三层的为null，是一个空对象，没有值，所以就返回undefined未定义的。",
          "// 11.每种数据类型自带的方法就是从这些原型对象上找的。"
        ]
    ```



#### javascript 代码运行机制

- **1.变量预解析**

  - 呼出关键字： `代码执行步骤`

  - Snipped 代码

    ```javascript
    "body": [
          "// 声明一个变量后，当执行js语句前会把所有声明的变量进行拆分",
          "// 列如：声明了一个 var gg = 10 的变量",
          "// js引擎执行语句前，先预解析把 var gg = 10 拆分为：",
          "// var gg",
          "// gg = 10",
          "// 把var gg的位置提升到最高",
          "// 最后才开始执行js语句，所以会出现变量提升"
        ]
    ```

- **1.匿名函数预解析**

  - 呼出关键字： `代码执行步骤`

  - Snipped 代码

    ```javascript
    "body": [
          "//  匿名函数的变量提升",
          "//  列如：声明了一个 var gg = function { ... } 的匿名函数",
          "//  js引擎执行语句前，先预解析把 var gg = function { ... }  拆分为：",
          "//  var gg",
          "//  gg = function {  }",
          "//  把var gg的位置提升到最高",
          "//  最后才开始执行js语句，所以会出现匿名函数提升"
        ]
    ```

- **2.作用域**

  - 呼出关键字： `代码执行步骤`

  - Snipped 代码

    ```javascript
    "body": [
          "// 作用域分为全局作用域和局部作用域和块级作用域",
          "// 全局作用域作用于所有代码执行的环境(整个 script 标签内部)或者一个独立的 js 文件",
          "// 在全局作用域声明的变量，可以在局部作用域中访问和使用,称为作用域链",
          "// 局部作用域（函数作用域）：作用于函数内的代码环境，就是局部作用域。 因为跟函数有关系， 所以也称为函数作用域。",
          "// 在局部作用域声明的完整变量，不能在函数体以外使用，只能在函数体内部使用",
          "// 使用let或const关键字声明的变量具有块级作用域，比如在if{}语句，循环语句,函数内部声明了let变量，只能在里面访问，外面是不能访问的。",
          "// 一般的每个js文件或script标签内比作一个全局作用域，全局作用域内又包括局部和块级作用域",
          "// 代码都是从全局作用域开始执行的"
        ]
    ```

- **3.异步编程**

  - 呼出关键字： `代码执行步骤`

  - Snipped 代码

    ```javascript
        "body": [
          "//  js执行机制是单线程，单线程会形成一个执行栈，(预解析后)从上往下执行。",
          "//  一般来说：完成一件需要长时间的操作，同时又不影响代码从上到下执行(同步编程)就叫异步编程",
          "//  比如定时器是异步的，网络请求资源加载也是异步的,DOM事件是异步的",
          "// 执行栈执行到异步任务就会把异步任务放到对应的异步(宿主环境)进程处理，异步任务完成后，异步进程处理把完成的异步任务插入到任务队列，执行栈执行完全部代码后，查询任务队列，取出一个完成的异步任务，放入执行栈去处理，就这样重复的就叫事件循环",
          "// 如果两个异步任务在异步进程处理中是在同一个时间处理完成的，按照原先在执行栈的从上到下的顺序去执行。",
          "// 哪个异步任务优先在异步进程处理完成，优先被放入执行栈执行。",
          "// js把异步任务又做了一次划分：宏任务：网络请求，定时器，文件读取操作等，微任务：promise.then,.catch和.finally和process.nextTick,其他微任务",
          "// 每个宏任务执行完，都会检查宏任务内是否存在待执行的微任务,如果有，则执行完所有微任务之后，再执行下一次的宏任务",
          "// 不管是在全局作用域还是局部作用域还是块级作用域，同步任务优先执行，再执行没有宏任务的微任务，再执行其他宏任务",
          "// 没有宏任务的微任务根据不同的微任务也有不同的执行顺序，process.nextTick(() => { console.log('1'); })这个微任务会比 .then(function () { console.log(\"9\"); }) 要先执行",
          "// 也就是说 同步任务第一执行，没有异步任务的微任务 process.nextTick 先执行 再到 .then执行，再执行宏任务也就是异步任务，异步任务里面也可能有同步任务，异步任务等也会按照第一层级的执行顺序执行。",
          "// 作用域决定了这些任务的执行顺序和执行的范围",
          "// 如下面代码执行的输出顺序为 1 5 10 6 2 3 4 7 8 9",
          "// 同步任务",
          "console.log(\"1\");",
          "",
          "// 异步任务",
          "setTimeout(function () {",
          "  console.log(\"2\");",
          "  new Promise(function (resolve) {",
          "    console.log(\"3\");",
          "    resolve();",
          "  }).then(function () {",
          "    console.log(\"4\");",
          "  });",
          "});",
          "",
          "// 同步任务",
          "new Promise(function (resolve) {",
          "  console.log(\"5\");",
          "  resolve();",
          "  // 没有异步任务的微任务",
          "}).then(function () {",
          "  console.log(\"6\");",
          "});",
          "",
          "// 异步任务",
          "setTimeout(function () {",
          "  console.log(\"7\");",
          "  new Promise(function (resolve) {",
          "    console.log(\"8\");",
          "    resolve();",
          "  }).then(function () {",
          "    console.log(\"9\");",
          "  });",
          "});",
          "",
          "// 没有异步任务的微任务process.nextTick()",
          "process.nextTick(function () {",
          "  console.log(\"10\");",
          "});"
        ]
    ```



#### DOM 文档对象模型

- **DOM 介绍**

  - 呼出关键字： `DOM介绍`

  - Snipped 代码

    ```javascript
    "body": [
          "// 提供与网页内容交互的方法和接口",
          "// 简单来说就是整个html页面就是一个对象，这个对象的名字浏览器设定好了叫document，有了这个对象就可以通过这个对象操控document包括document里面的内容",
          "// 在网页中导入js或使用js语句就可以在控制台打印输出这个对象就是打印出这个html的页面结构",
          "// 在js中调用这个document默认设定好的一些函数就可以获取我们想要的标签(标签也是一个对象)",
          "// 在html文件中，想要使用js语句可以在html标签内起个script标签，在这个标签内使用js语法。",
          "// 还有一种使用js语句的方法就是在head标签内起个script标签，设置一个scr属性导入js文件。",
          "// 由于html也是从上到下解析的原因，那么在这个js文件中语句也要必须等html标签加载完，才能执行js语句。",
          "// 所以需要在这个js文件中添加一个BOM浏览器对象模型的加载事件：",
          "// window.addEventListener('load', function () { 在这里写js语句 })",
          "// 当浏览器从上到下解析html标签时，执行到这上面的函数相当于浏览器开启了一个加载事件load，监听到所有html标签加载完后才会执行上面函数里面的js语句",
          "// 解决等dom渲染完再执行js脚本还有一种方法就是在script标签中添加defer这个属性",
          "// 解决等dom渲染完再执行js脚本还有一种方法就是把script标签放在body的最下面，等渲染完dom后再执行js文件",
          "// 解决等dom渲染完再执行js脚本还有一种方法就是把script标签设置为es6的模块导入，设置type=\"module\"",
          "",
          "// 使用script加载js文件有一个好处就是只要加载过一次就会缓存到浏览器中，其他页面加载同个js文件时，直接从缓存里加载。"
        ]
    ```



#### DOM 文档对象模型-获取元素

- **获取标签属性**

  - 呼出关键字： `ge` `获取元素`

  - Snipped 代码

    ```javascript
    "body": ["// .attributes属性是一个数组 为当前标签节点绑定的属性得集合,每个数组成员通过 .nodeName 属性可以获取到当前节点对象的绑定的属性名，通过.nodeValue 属性可以获取到当前节点对象的绑定的属性值", "const attrs = ${1:获取到得标签}.attributes", "attrs.forEach(function (value, index, array) {", "  // forEach 方法遍历数组", "  // value为当前成员，index为当前成员索引号，arra代表这个数组本身", "  console.log(value.nodeValue)", "  console.log(value.nodeNam)", "})"]
    ```

- **根据节点对象判断是否为标签**

  - 呼出关键字： `ge` `获取元素`

  - Snipped 代码

    ```javascript
    "body": ["// nodeType为1为元素节点", "// 根据节点成员的nodeType属性可以判断当前节点是否为text节点，1则表示不是text节点。", "${1:节点对象}.nodeType"]
    ```

- **根据id获取元素内所有节点**

  - 呼出关键字： `ge` `获取元素`

  - Snipped 代码

    ```javascript
    "body": ["// .childNodes方法可以获取到id为app标签内所有节点，并合并为一个数组。", "// 所有的节点都是一个对象，每个对象都有名字为app标签内的标签名与标签之间有空格的统一叫text", "const nodes = ${1:根据id获取到得元素}.childNodes"]
    ```

- **根据 id 获取元素**

  - 呼出关键字： `ge` `获取元素`

  - Snipped 代码

    ```javascript
    "body": ["  var $1 = document.getElementById('${0:id名}')"]
    ```

- **根据标签名获取元素(获取到是一个数组)**

  - 呼出关键字： `ge` `获取元素`

  - Snipped 代码

    ```javascript
    "body": ["  var $1 = document.getElementsByTagName('${0:标签名}')"]
    ```

- **获取标签内的标签**

  - 呼出关键字： `ge` `获取元素`

  - Snipped 代码

    ```javascript
    "body": [
          "  var ol = document.getElementById('父标签的id名')",
          "  var ool = ol.getElementsByTagName('子标签名')"
        ]
    ```

- **根据标签名或类名获取元素(获取到的变量是一个数组)**

  - 呼出关键字： `ge` `获取元素`

  - Snipped 代码

    ```javascript
       "body": [
          "// 类名或者标签可以作为css选择器去使用",
          "var $1 = document.querySelectorAll('${0:类名要加.或标签名}')"
        ],
    ```

- **根据类名获取元素(获取到的变量是一个数组)**

  - 呼出关键字： `ge` `获取元素`

  - Snipped 代码

    ```javascript
    "body": [
          "var $1 = document.getElementsByClassName('${0:类名要加.或标签名}')"
        ]
    ```

- **节点操作~根据获取到的元素获取父级元素**

  - 呼出关键字： `ge` `获取元素`

  - Snipped 代码

    ```javascript
    "body": ["${0:获取到的元素}.parentNode"]
    ```

- **节点操作~根据获取到的元素获取子代元素(获取到的变量是一个数组)**

  - 呼出关键字： `ge` `获取元素`

  - Snipped 代码

    ```javascript
    "body": ["${0:获取到的元素}.childNodes"]
    ```

- **节点操作~根据获取到的元素获取兄弟元素**

  - 呼出关键字： `ge` `获取元素`

  - Snipped 代码

    ```javascript
    "body": ["${0:获取到的元素}.nextElementSibling"]
    ```

- **获取 body 标签**

  - 呼出关键字： `ge` `获取元素`

  - Snipped 代码

    ```javascript
    "body": ["var $1 = document.body"]
    ```

- **获取 html 标签**

  - 呼出关键字： `ge` `获取元素`

  - Snipped 代码

    ```javascript
    "body": ["var $1 = document.documentElement;"]
    ```



#### DOM 文档对象模型-生成元素

- **根据获取到的元素向这个元素内生成元素(推荐性能最高)**

  - 呼出关键字： `ge` `获取元素`

  - Snipped 代码

    ```javascript
    "body": [
          "  var 空数组 = []",
          "  for (let i = 0; i <= 100000; i++) {",
          "    空数组.push('<a></a>')",
          "  }",
          "  空数组 = 空数组.join('')",
          "获取到的元素.innerHTML = dd"
        ]
    ```

- **节点操作~在页面生成虚拟元素(根据获取到的元素向这个元素内最下面添加虚拟元素)**

  - 呼出关键字： `ga` `生成元素`

  - Snipped 代码

    ```javascript
     "body": [
          "// 创建虚拟元素",
          "var $1 = document.createElement('${2:标签}')",
          "// 向页面某个元素内最下面添加虚拟元素",
          "${3:获取到的元素}.appendChild(${4:创建的虚拟元素})"
        ]
    ```

- **节点操作~在页面生成虚拟元素(根据获取到的元素向这个元素内最上面添加虚拟元素)**

  - 呼出关键字： `ga` `生成元素`

  - Snipped 代码

    ```javascript
    "body": [
          "// 创建虚拟元素",
          "var $1 = document.createElement('${2:标签}')",
          "// 向页面某个元素内最上面添加虚拟元素",
          "${3:获取到的元素}.insertBefore(${4:创建的虚拟元素}, ${3:获取到的元素}.children[1]);"
        ]
    ```



#### DOM 文档对象模型-删除元素

- **节点操作~根据获取到的元素删除子元素**

  - 呼出关键字： `re` `删除元素`

  - Snipped 代码

    ```javascript
    "body": ["${1:获取到的元素}.removeChild(${1:获取到的元素}.children[0])"]
    ```



#### DOM 文档对象模型-复制元素

- **节点操作~根据获取到的元素轻度复制元素(只复制标签不复制里面的内容)**

  - 呼出关键字： `cte` `删除元素`

  - Snipped 代码

    ```javascript
    "body": ["${0:获取到的元素}.cloneNode()"]
    ```

- **节点操作~根据获取到的元素深度复制元素(复制标签和标签里面的内容)**

  - 呼出关键字： `cte` `删除元素`

  - Snipped 代码

    ```javascript
    "body": ["${0:获取到的元素}.cloneNode(true)"]
    ```



#### DOM 文档对象模型-事件

- **什么是事件**

  - 呼出关键字： `te` `事件`

  - Snipped 代码

    ```javascript
    "body": [
          "//  想要实现鼠标或键盘与页面交互，比如点击移动滚动等需要这样做：",
          "//  先获取元素--给这个元素绑定事件--再执行触发事件后的操作",
          "",
          "//  onclick类型的事件同一个元素只能绑定一个不同事件类型的事件，如果绑定多个不同事件类型事件或同个事件类型事件，只有最后绑定的那个事件生效。",
          "//  onclick类型的事件：",
          "//  获取到的元素.onclick = function () {",
          "// 触发事件后的操作，此时可以修改元素对象的属性值也就是修改这个元素的样式内容等。",
          "// 解除元素已绑定的事件：获取到的元素.onclick = null;",
          "//  }",
          "",
          "// addEventListener方法的事件onclick不需要添加on可以绑定多个不同事件类型事件或同个事件类型事件",
          "// addEventListener方法有三个实参第一个为字符串，值为事件类型，第二个为函数，触发事件时就会执行这个函数里面的代码，第三个为布尔值，值为false时或省略表示当前事件为冒泡阶段，值为true时表示当前事件为捕获阶段。",
          "// 当调用事件时，addEventListener方法中实参函数会接受一个形参叫事件对象，这个对象包含了当前元素所有的信息,一般取名e(event)",
          "// 实参函数中可以用this表示e",
          "",
          "// 事件可以给window也就是浏览器对象绑定事件(只给windoe绑定后才生效的事件)：加载事件，窗口大小变化事件等",
          "// 事件可以给document也就是文档对象绑定(包括从最大的文档这个对象以及文档里面的标签对象)事件",
          "",
          "// 文档对象绑定的事件会有捕获(从顶层开始触发)和冒泡阶段(从当前元素以底层开始触发)",
          "// 假如给document对象和body元素绑定了点击事件并在两个事件中都设置了捕获阶段会有这样的现象：点击body元素区域时，首先会触发document对象的事件，然后再触发body元素的事件，这个就叫捕获阶段。",
          "// 假如给document对象和body元素绑定了点击事件并在两个事件中都设置了冒泡阶段会有这样的现象：点击body元素区域时，首先会触发body元素的事件，然后再触发document对象的事件，这个就叫冒泡阶段。",
          "// 给addEventListener方法添加实参false或省略设置为冒泡阶段",
          "// 给addEventListener方法添加实参true设置为捕获阶段",
          "// 触发事件后调用事件对象stopPropagation()方法可以阻止冒泡行为"
        ]
    ```

- **事件对象常用的属性或方法(函数)**

  - 呼出关键字： `te` `事件`

  - Snipped 代码

    ```javascript
    "body": [
          "// 返回元素对象：e.target",
          "// 返回事件类型：e.type",
          "// 阻止默认行为(如阻止选中元素内容设置为selectstart事件才有效果，阻止鼠标呼出右键菜单等设置为contextmenu事件才有效果,阻止鼠标点击链接地址设置为click事件才有效果)：e.preventDefault()",
          "// 获取焦点：e.focus()",
          "// 阻止冒泡：e.stopPropagation()",
          "// 鼠标与页面最左边的距离或最上边的距离：e.pageX/e.pageY",
          "// 鼠标与body最左边的距离或最上边的距离：e.clientX/e.clientY",
          "// 鼠标与电脑屏幕最左边的距离或最上边的距离：e.screenX/e.screenY",
          "// 获取当前按键的十进制的ASCLL码值(https://cdn.jsdelivr.net/gh/learnguos/figure-bed/ASCLL码表.jpg)(每个按键都有对应的十进制的ASCLL码值只有设置了键盘事件才有效)：e.keyCode",
          "",
          "// 正在触摸屏幕的所有手指的一个列表：e.touches(设置手指触摸事件才生效)",
          "// 正在触摸当前DOM元素上的手指的一个列表：e.targetTouches(设置手指触摸事件才生效)",
          "// 手指状态发生了改变的列表，从无到有，从有到无变化：e.changedTouches(设置手指触摸事件才生效,这个事件对象可以获取当前手指的偏移量)",
          "// 阻止手指触摸滑动时屏幕滑动：e.preventDefault()"
        ]
    ```

- **图片加载事件**

  - 呼出关键字： `te` `事件`

  - Snipped 代码

    ```javascript
        "body": [
          "// loadend事件表示无论加载失败还是成功",
          "${1:获取到的元素}.removeEventListener('load', ${0:这里填写绑定事件的回调函数名})"
        ]
    ```

- **解除元素已绑定的事件**

  - 呼出关键字： `te` `事件`

  - Snipped 代码

    ```javascript
    "body": [
          "// 声明的事件的回调函数不需要加()号",
          "${1:获取到的元素}.removeEventListener('${2:已绑定的事件名如click}', ${0:这里填写绑定事件的回调函数名})"
        ]
    ```

- **自动触发设置的事件**

  - 呼出关键字： `te` `事件`

  - Snipped 代码

    ```javascript
    "body": ["${1:获取到的元素}.click()"]
    ```
  
- **手指触摸到一个DOM元素时触发**

  - 呼出关键字： `te` `事件`

  - Snipped 代码

    ```javascript
    "body": [
          "${0:获取到的元素}.addEventListener('touchstart', function () {",
          "  // 手指一触摸到就会触发",
          "})"
        ]
    ```

- **手指在一个DOM元素上滑动时触发**

  - 呼出关键字： `te` `事件`

  - Snipped 代码

    ```javascript
    "body": [
          "${0:获取到的元素}.addEventListener('touchmove', function () {",
          "  // 手指一滑动到就会触发",
          "})"
        ]
    ```

- **手指从一个DOM元素上触摸了移开时触发**

  - 呼出关键字： `te` `事件`

  - Snipped 代码

    ```javascript
    "body": [
          "${0:获取到的元素}.addEventListener('touchend', function () {",
          "  // 类属于鼠标点击了元素再松开触发",
          "})"
        ]
    ```

- **鼠标滚动事件或滚动条滑动事件**

  - 呼出关键字： `te` `事件`

  - Snipped 代码

    ```javascript
    "body": [
          "// 浏览器默认滚动条的document的滚动事件",
          "${0:获取到的元素}.addEventListener('scroll', function () {",
          "  // 触发事件后的操作",
          "})"
        ]
    ```

- **鼠标点击元素事件**

  - 呼出关键字： `te` `事件`

  - Snipped 代码

    ```javascript
    "body": [
          "${0:获取到的元素}.addEventListener('click', function () {",
          "  // 触发事件后的操作",
          "})"
        ]
    ```

- **鼠标经过元素事件**

  - 呼出关键字： `te` `事件`

  - Snipped 代码

    ```javascript
    "body": [
          "${0:获取到的元素}.addEventListener('mouseover', function () {",
          "  // 触发事件后的操作",
          "})"
        ]
    ```

- **鼠标离开元素事件**

  - 呼出关键字： `te` `事件`

  - Snipped 代码

    ```javascript
    "body": [
          "${0:获取到的元素}.addEventListener('mouseout', function () {",
          "  // 触发事件后的操作",
          "})"
        ]
    ```

- **鼠标在元素内移动事件(每移动一个像素点都会触发)**

  - 呼出关键字： `te` `事件`

  - Snipped 代码

    ```javascript
    "body": [
          "${0:获取到的元素}.addEventListener('mousemove', function () {",
          "  // 触发事件后的操作",
          "})"
        ]
    ```

- **表单元素获得焦点时触发**

  - 呼出关键字： `te` `事件`

  - Snipped 代码

    ```javascript
    "body": [
          "${0:获取到的元素}.addEventListener('focus', function () {",
          "  // 触发事件后的操作",
          "})"
        ]
    ```

- **表单元素失去焦点时触发**

  - 呼出关键字： `te` `事件`

  - Snipped 代码

    ```javascript
    "body": [
          "${0:获取到的元素}.addEventListener('blur', function () {",
          "  // 触发事件后的操作",
          "})"
        ]
    ```

- **表单元素提交时触发**

  - 呼出关键字： `te` `事件`

  - Snipped 代码

    ```javascript
    "body": [
          "${0:获取到的元素}.addEventListener('submit', function () {",
          "  // 触发事件后的操作",
          "})"
        ]
    ```

- **表单元素重置时触发**

  - 呼出关键字： `te` `事件`

  - Snipped 代码

    ```javascript
    "body": [
          "${0:获取到的元素}.addEventListener('reset', function () {",
          "  // 触发事件后的操作",
          "})"
        ]
    ```

- **表单元素失去焦点并且元素内容发生改变时触发此事件**

  - 呼出关键字： `te` `事件`

  - Snipped 代码

    ```javascript
    "body": [
          "${0:获取到的元素}.addEventListener('change', function () {",
          "  // 触发事件后的操作，此时可以修改元素对象的属性值也就是修改这个元素的样式内容等。",
          "})"
        ]
    ```

- **表单元素发生改变时触发**

  - 呼出关键字： `te` `事件`

  - Snipped 代码

    ```javascript
    "body": [
          "${0:获取到的元素}.addEventListener('input', function () {",
          "  // 触发事件后的操作，此时可以修改元素对象的属性值也就是修改这个元素的样式内容等。",
          "})"
        ]
    ```

- **鼠标在弹起时触发**

  - 呼出关键字： `te` `事件`

  - Snipped 代码

    ```javascript
    "body": [
          "${0:获取到的元素}.addEventListener('mouseup', function () {",
          "  // 触发事件后的操作，此时可以修改元素对象的属性值也就是修改这个元素的样式内容等。",
          "})"
        ]
    ```

- **鼠标在按下时触发**

  - 呼出关键字： `te` `事件`

  - Snipped 代码

    ```javascript
    "body": [
          "${0:获取到的元素}.addEventListener('mousedown', function () {",
          " ",
          "})"
        ]
    ```

- **鼠标在右键呼出菜单事件~禁止鼠标右键呼出菜单**

  - 呼出关键字： `te` `事件`

  - Snipped 代码

    ```javascript
    "body": [
          "document.addEventListener('contextmenu', function (e) {",
          "// 禁止鼠标右键呼出菜单",
          "  e.preventDefault()",
          "})"
        ]
    ```

- **鼠标选中元素内容(相当于按下鼠标左键)~禁止选中**

  - 呼出关键字： `te` `事件`

  - Snipped 代码

    ```javascript
     "body": [
          "${0:获取到的元素}.addEventListener('selectstart', function (e) {",
          "// 禁止选中",
          "  e.preventDefault()",
          "})"
        ]
    ```

- **按下键盘时触发~不区分字母大小写**

  - 呼出关键字： `te` `事件`

  - Snipped 代码

    ```javascript
    "body": ["document.addEventListener('keydown', function (e) {", "", "})"]
    ```

- **松开键盘时触发~不区分字母大小写**

  - 呼出关键字： `te` `事件`

  - Snipped 代码

    ```javascript
     "body": ["document.addEventListener('keyup', function (e) {", "", "})"]
    ```

- **松开键盘时触发~区分字母大小写不识别功能键,比如左右箭头,shift 等**

  - 呼出关键字： `te` `事件`

  - Snipped 代码

    ```javascript
    "body": ["document.addEventListener('onkeypress', function (e) {", "", "})"]
    ```

- **另外一个页面执行本地存储数据变化语句时触发**

  - 呼出关键字： `te` `事件`

  - Snipped 代码

    ```javascript
    "body": [
          "// 事件对象有e.key表示设置存储的名称或删除数据的名称 ",
          "//  e.newValue 被设置的新值，如果是删除的值则为null",
          "//  e.oldValue 数据改变前的值",
          "// 改变数值的语句必须在另外一个页面执行，本页面设置事件才会被自动触发。",
          "window.addEventListener('onkeypress', function (e) {",
          "",
          "})"
        ]
    ```



#### DOM 文档对象模型-获取元素属性

- **获取元素内容-获取图片原始宽高分辨率**

  - 呼出关键字： `me` `获取元素属性`

  - Snipped 代码

    ```javascript
    "body": [
          "// 获取高度分辨率",
          "${1:获取到的图片元素}.naturalHeight",
          "// 获取宽度分辨率",
          "${1:获取到的图片元素}.naturalWidth"
        ]
    ```

- **获取元素内容-保留修改内容的空格与换行**

  - 呼出关键字： `me` `获取元素属性`

  - Snipped 代码

    ```javascript
    "body": ["${1:获取到的元素}.innerHTML"]
    ```

- **获取元素内容-去除空格和换行**

  - 呼出关键字： `me` `获取元素属性`

  - Snipped 代码

    ```javascript
    "body": ["${1:获取到的元素或this}.innerText"]
    ```

- **获取元素本身自带的属性的属性值**

  - 呼出关键字： `me` `获取元素属性`

  - Snipped 代码

    ```javascript
    "body": ["${1:获取到的元素或this}.${2:自带属性名}"]
    ```

- **获取表单元素自带属性的属性值**

  - 呼出关键字： `me` `获取元素属性`

  - Snipped 代码

    ```javascript
    "body": [
          "${1:获取到的元素或this}.${2:自带属性范围type,value,checked,selected,disabled}"
        ]
    ```

- **获取元素 css 样式的属性值(只能获取行内样式)**

  - 呼出关键字： `me` `获取元素属性`

  - Snipped 代码

    ```javascript
    "body": ["${1:获取到的元素或this}.style.${2:css属性-号换成大写}'"]
    ```

- **获取元素类名**

  - 呼出关键字： `me` `获取元素属性`

  - Snipped 代码

    ```javascript
    "body": ["${1:获取到的元素或this}.className"]
    ```

- **获取自定义元素属性的属性值**

  - 呼出关键字： `me` `获取元素属性`

  - Snipped 代码

    ```javascript
    "body": ["${1:获取到的元素或this}.getAttribute('${2:属性名}')"]
    ```

- **获取元素的偏移量等**

  - 呼出关键字： `me` `获取元素属性`

  - Snipped 代码

    ```javascript
    "body": [
          "// 获取当前元素带有定位的父级元素，如果父级都没有定位则返回body",
          "// ${1:获取到的元素或this}.offsetParent)",
          "// 获取当前元素与带有定位父元素上边框的距离",
          "// ${1:获取到的元素或this}.offsetTop)",
          "// 获取当前元素与带有定位父元素左边框的距离",
          "// ${1:获取到的元素或this}.offsetLeft)",
          "// 获取当前元素包括padding，边框，内容区的宽度，返回数值不带单位",
          "// ${1:获取到的元素或this}.offsetWidth)",
          "// 获取当前元素包括padding，边框，内容区的高度，返回数值不带单位",
          "// ${1:获取到的元素或this}.offsetHeight)"
        ]
    ```

- **获取元素的边框大小等**

  - 呼出关键字： `me` `获取元素属性`

  - Snipped 代码

    ```javascript
    "body": [
          "// 获取当前元素上边框大小",
          "// ${1:获取到的元素或this}.clientTop)",
          "// 获取当前元素左边框大小",
          "// ${1:获取到的元素或this}.clientLeft)",
          "// 获取当前元素包括padding，内容区，不含边框的宽度返回数值不带单位",
          "// ${1:获取到的元素或this}.clientWidth)",
          "// 获取当前元素包括padding，内容区，不含边框的高度，返回数值不带单位",
          "// ${1:获取到的元素或this}.clientHeight)"
        ]
    ```

- **获取元素的滚动距离等**

  - 呼出关键字： `me` `获取元素属性`

  - Snipped 代码

    ```javascript
    "body": [
          "// 开启滚动容器后获取被卷去的上侧距离(body没有效果)，返回数值不带单位",
          "// ${1:获取到的元素或this}.scrollTop)",
          "// 开启滚动容器后获取被卷去的左侧距离(body没有效果)，返回数值不带单位",
          "// ${1:获取到的元素或this}.scrollLeft)",
          "// 获取当前元素的宽度，含内容区域，不含边框，不含padding，返回数值不带单位",
          "// ${1:获取到的元素或this}.scrollWidth)",
          "// 获取当前元素的高度，含内容区域，不含边框，不含padding，返回数值不带单位",
          "// ${1:获取到的元素或this}.scrollHeight)"
        ]
    ```

- **获取元素的与浏览器可视窗口顶部的距离**

  - 呼出关键字： `me` `获取元素属性`

  - Snipped 代码

    ```javascript
    "body": ["var divvd = ${1:获取到的元素}.getBoundingClientRect().top"]
    ```



#### DOM 文档对象模型-修改元素属性

- **修改元素内容-保留修改内容的空格与换行**

  - 呼出关键字： `mea` `修改元素属性`

  - Snipped 代码

    ```javascript
    "body": ["${1:获取到的元素或this}.innerHTML = '${0:触发事件后修改的内容}'"]
    ```

- **修改元素内容-去除空格和换行**

  - 呼出关键字： `mea` `修改元素属性`

  - Snipped 代码

    ```javascript
    "body": ["${1:获取到的元素或this}.innerText = '${0:触发事件后修改的内容}'"]
    ```

- **修改元素元素本身自带的属性的属性值**

  - 呼出关键字： `mea` `修改元素属性`

  - Snipped 代码

    ```javascript
    "body": ["${1:获取到的元素或this}.${2:自带属性名} = '${0:属性值}'"]
    ```

- **修改表单元素自带属性的属性值**

  - 呼出关键字： `mea` `修改元素属性`

  - Snipped 代码

    ```javascript
    "body": [
          "${1:获取到的元素或this}.${2:自带属性范围type,value,checked,selected,disabled} = '${0:属性值}'"
        ]
    ```

- **修改元素 css 样式的属性值(不能直接修改 css 样式属性值,而是添加到标签的行内样式中。)**

  - 呼出关键字： `mea` `修改元素属性`

  - Snipped 代码

    ```javascript
    "body": [
          "${1:获取到的元素或this}.className = '${2:元素类名1}  ${0:元素类名2}'"
        ]
    ```

- **自定义元素属性和属性值**

  - 呼出关键字： `mea` `修改元素属性`

  - Snipped 代码

    ```javascript
    "body": [
          "${1:获取到的元素或this}.setAttribute('${2:属性名}', '${0:属性值}')"
        ]
    ```



#### BOM 浏览器对象模型

- **BOM 浏览器对象模型~BOM 介绍**

  - 呼出关键字： `bom`

  - Snipped 代码

    ```javascript
        "body": [
          "// 提供与浏览器交互的方法和接口",
          "// 简单来说就是整个浏览器就是一个对象，这个对象的名字浏览器设定好了叫window，主要用来操控页面之外的部分",
          "// window是一个全局对象,js语句里面的变量、函数都会变成全局对象的一个属性和方法",
          "// window包含了document这个对象，相当于window对象里面有个属性是document",
          "",
          "// window包含了navigator这个对象，相当于window对象里面有个属性是navigator",
          "// 这个对象与浏览器信息有关,主要用来判断页面是在pc端浏览器中打开还是在移动端浏览器打开window.navigator.userAgent记录了浏览器的版本名称信息",
          "//navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i这个结果为true则判断用户使用手机端浏览器浏览，结果为假则判断用户是在pc端浏览器浏览，移动端和pc端设置两个不同的网站，如果用户在移动端打开了pc端的网站，那么就强制跳转到移动端的网站，如果用户在pc端打开了移动端的网站，那么就强制跳转到pc端的网站",
          "",
          "// window包含了location这个对象，相当于window对象里面有个属性是location,这个对象用来或设置窗体的URL，并且可以用于解析URL",
          "// 获取或修改url(修改窗口地址window.location.href = '',记录浏览历史(缓存了页面)有前进后退功能)地址：window.location.href",
          "// 返回域名或修改域名：window.location.host 返回端口号或修改端口号：window.location.port",
          "// 返回路径或修改路径(页面文件在主机的路径)：window.location.pathname",
          "// 返回参数或修改参数：window.location.search",
          "// 返回片段或修改片段：window.location.hash",
          "// 修改url窗口地址(记录浏览历史(缓存了页面)所以有前进后退功能)：window.location.assign('url地址')",
          "// 修改url窗口地址(不浏览历史没有前进后退功能)：window.location.replace('url地址')",
          "// 重新刷新页面：window.location.reload(这里填true表示强制刷新)",
          "",
          "// window包含了screen这个对象，相当于window对象里面有个属性是screen,这个对象与用户屏幕分辨率有关",
          " // 当前屏幕宽度分辨率：window.screen.availWidth 当前屏幕高度分辨率：window.screen.availHeight",
          "",
          "// window包含了history这个对象，相当于window对象里面有个属性是history,history里面的属性存放着页面的跳转记录与浏览器历史记录进行交互等",
          "// 页面前进功能(跳转缓存的页面)：window.history.forward()",
          "// 页面后退功能(跳转缓存的页面)：window.history.back()",
          "// 前进后退功能(跳转缓存的页面)：window.go.(这里填数字，如果是1就前进一个页面，-1就后退一个页面)",
          "",
          "// window包含了performance这个对象，相当于window对象里面有个属性是performance,这个对象与浏览器内存占用，导航行为和时间统计的信息前端性能有关",
          "// 获取从跳转页面这一刻开始到调用这个方法的时间(页面加载完成的时间)返回的是毫秒数：window.performance.now()",
          "",
          "// window.innerWidth查看当前的窗口宽度，window.innerHeight查看当前的窗口高度",
          "",
          "// 获取默认滚动条被卷去的上部分: window.scrollY",
          "// 获取默认滚动条被卷去的左部分: window.scrollX"
        ]
    ```

- **load 窗口加载事件~只调用一次**

  - 呼出关键字： `bom`

  - Snipped 代码

    ```javascript
     "body": ["window.addEventListener('load', function () {", "  $0", "})"]
    ```

- **load 窗口宽高变化事件~每一像素的变化都会触发此事件**

  - 呼出关键字： `bom`

  - Snipped 代码

    ```javascript
    "body": [
          "window.addEventListener('resize', function () {",
          "  // window.innerWidth查看当前的窗口宽度，window.innerHeight查看当前的窗口高度",
          "})"
        ]
    ```



#### 网络请求

- **1.前置知识**

  - 呼出关键字： `网络请求`

  - Snipped 代码

    ```javascript
    "body": [
          "// 网页窗口的URL地址叫统一资源定位符",
          "// url用来定位网络中某个资源的位置",
          "// url地址的不同就表示网络中不同资源的位置",
          "// 存放这些网络资源的就叫服务器",
          "// url地址就是定位到这些服务器的地址",
          "// 在浏览器窗口输入url地址按下回车键那一刻浏览器就会通过内置的网络请求api根据url地址定位到这台服务器",
          "// 向这台服务器发起获取网页文件的请求",
          "// 服务器接收到到请求则处理这次请求，再响应给客户端",
          "// 客户端接收到服务器响应回来的网页文件开始解析，然后再显示到页面中。"
        ]
    ```

- **网络请求~2.解读 url 地址**

  - 呼出关键字： `网络请求`

  - Snipped 代码

    ```javascript
    "body": [
          "// 网页窗口的URL地址叫统一资源定位符",
          "// url用来定位网络中某个资源的位置",
          "// url地址的不同就表示网络中不同资源的位置",
          "// 存放这些网络资源的就叫服务器",
          "// url地址就是定位到这些服务器的地址",
          "// 在浏览器窗口输入url地址按下回车键那一刻浏览器就会通过内置的网络请求api根据url地址定位到这台服务器",
          "// 向这台服务器发起获取网页文件的请求",
          "// 服务器接收到到请求则处理这次请求，再响应给客户端",
          "// 客户端接收到服务器响应回来的网页文件开始解析，然后再显示到页面中。"
        ]
    ```

- **3.客户端可以自定义发送的数据**

  - 呼出关键字： `网络请求`

  - Snipped 代码

    ```javascript
    "body": ["// 1.请求参数query", "// 2.请求体body", "// 2.根据请求标头的值"]
    ```

- **4.网络请求 api~XMLHttpRequest**

  - 呼出关键字： `网络请求`

  - Snipped 代码

    ```javascript
    "body": [
          "// 1. 创建 XHR 对象",
          "var xhr = new XMLHttpRequest()",
          "// 2. 调用 open 函数 GET 为请求方式",
          "// 查询字符串（URL 参数）是指在 URL 的末尾加上用于向服务器发送信息的字符串（变量）。",
          "// 将英文的 ? 放在URL 的末尾，然后再加上 参数＝值 ，想加上多个参数的话，使用 & 符号进行分隔。以这个形式，可以将想要发送给服务器的数据添加到 URL 中。",
          "// URL 地址中，只允许出现英文相关的字母、标点符号、数字，因此，在 URL 地址中不允许出现中文字符。",
          "// 由于浏览器会自动对 URL 地址进行编码操作，因此，大多数情况下，程序员不需要关心 URL 地址的编码与解码操作。更多关于 URL 编码的知识",
          "xhr.open('GET', 'http://127.0.0.1:4523/mock/851286/ceshi?23')",
          "// 发送body请求体时需要配置请求头Content-Type",
          "xhr.setRequestHeader('Content-Type', 'application/json')",
          "// 发送FormData对象时需要配置请求头Content-Type",
          "xhr.setRequestHeader('Content-Type', 'multipart/form-data')",
          "// 创建 FormData对象",
          "var ff = new FormData()",
          "// 向 FormData 中追加文件,可以多次调用这个append方法添加多个图片一起上传，字段名要求不重复",
          "ff.append('后端要求的字段名', 已经转换为files的文件)",
          "// 3. 调用 send 函数开始发起请求--异步任务开始",
          "xhr.send(这里填已经转化为json格式的请求体或FormData对象)",
          "// 4. 监听 onreadystatechange 事件 --异步任务开始",
          "xhr.onreadystatechange = function () {",
          "  // xhr.readyState返回4个数字",
          "  // 数字为0时表示未初始化，但是已经创建了XHR实例",
          "  // 数字为1时调用了open()函数",
          "  // 数字为2时已经调用了send()函数，发起了请求，但还未收到服务器回应",
          "  // 数字为3时正在接受服务器返回的数据",
          "  // 数字为4时完成响应",
          "  if (xhr.readyState === 4 && xhr.status === 200) {",
          "    // xhr.responseText 获取服务器响应的数据",
          "    console.log(xhr.responseText)",
          "    // xhr.status为服务器设置的响应状态码",
          "    console.log(xhr.status)",
          "    // xhr.responseURL为这次请求的url地址",
          "    console.log(xhr.responseURL)",
          "  }",
          "}"
        ]
    ```

- **5.XMLHttpRequest 设置请求超时函数(调用该函数后中断请求)**

  - 呼出关键字： `网络请求`

  - Snipped 代码

    ```javascript
    "body": [
          "// 设置 超时时间",
          "xhr.timeout = 4000 // 设置超时以后的处理函数",
          "xhr.ontimeout = function () {",
          "console.log('请求超时了！')",
          "}"
        ]
    ```

- **6.XMLHttpRequest 显示文件上传进度**

  - 呼出关键字： `网络请求`

  - Snipped 代码

    ```javascript
    "body": [
          "// 通过监听xhr.upload.progress事件",
          "// e.lengthComputable是一个布尔值，表示当前上传的资源是否具有可计算长度",
          "// e.loaded 已传输的字节",
          "// e.total 需传输的字节",
          "// progress事件每50毫秒触发一次，每次触发可以计算当前的剩余进度",
          "// 使用Math.ceil()方法返回大于或等于给定浮点数的最小整数。取计算的数值"
        ]
    ```

- **7.跨域**

  - 呼出关键字： `网络请求`

  - Snipped 代码

    ```javascript
    "body": [
          "// 如果两个页面的协议，域名和端口都相同就叫同源，则两个页面具有相同的源。",
          "// 同源策略（英文全称Sameorigin policy）是浏览器提供的一个安全功能。",
          "// 同源策略限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互",
          "// 简单理解就是如果网络请求的url地址于当前网页所在的url地址不同，当请求发出时，浏览器会接收，但是最先激活的是浏览器同源策略，判断不是同源就决绝接收，并在控制台提示用户。",
          "// 实现跨域的方式有两种(跨域就是解决同源策略的问题)",
          "// 基于Script标签实现跨域（JSONP方案）简单来说就是srcipt标签的src属性支持http地址访问获取文件，默认为get请求",
          "// 想要实现jsonp方案需要在html中定义两个script标签",
          "<script>",
          "// 第二步定义abc回调函数",
          "function abc(data) {",
          "console.log(data) // data就是响应回来的数据",
          " }",
          "</script>",
          "<!-- 第一步：?callback=abc表示请求回来后，触发abc回调函数 -->",
          "<script src=\"请求的url地址可以填服务器或文件地址?callback=abc\"></script>",
          "",
          "// 实现跨域的方法二，当客户端发出请求时，服务器需要配置CORS响应头才能实现跨域",
          "// CORS跨域请求分为两类",
          "// 简单请求：请求方法是HEAD，GET，POST之一。HTTP请求头必须是下面几种字段之一：Accept，Accept-Language，Content-Language，Last-Event-ID，Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain",
          "// 需要添加HTTP请求头Origin字段，http://api.bob.com //本次请求来自于哪个域（协议 + 域名 + 端口）服务器根据这个值，决定是否同意这次请求,一般这个字段是浏览器自动添加的。",
          "// 服务器端需要设置响应字段1：Access-Control-Allow-Origin：该字段得值要么是请求时Origin字段的值，要么是一个*，表示接受任意域名的请求,这个字段是服务器必须要设置的",
          "// 服务器端需要设置响应字段2：Access-Control-Allow-Credentials: 该字段的值是一个布尔值，表示是否允许发送cookie，默认情况下，Cookie不包括在CORS请求中，设置为true表示服务器明确许可,浏览器可以把Cookie包含在请求中，一起发送给服务器,这个值也只能设置为true，如果服务器不要浏览器发送Cookie,不发送该字段即可.，这个字段是服务器可选的。",
          "// 服务器端需要设置响应字段3：Access-Control-Expose-Headers: 该字段可选.CORS请求时，XMLHttpRequest对象的getResponseHeader()方法只能拿到6个服务器返回的基本字段：Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma。如果想拿到其他字段，就必须在Access-Control-Expose-Headers里面指定。上面的例子指定，getResponseHeader('FooBar')可以返回FooBar字段的值这个字段是服务器可选的。",
          "// 非简单请求: 凡是不同时满足上面两个条件，就属于非简单请求，非简单请求是对服务器提出特殊的要求,比如请求方法是PUT或DELETE，或者Content-Type字段是application/json.非简单请求的CORS请求，会在正式通信之前增加一次http查询请求,称为\"预检\"请求，浏览器先询问服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用哪些 HTTP 动词和头信息字段。只有得到肯定答复，浏览器才会发出正式的XMLHttpRequest请求，否则就报错。这是为了防止这些新增的请求，对传统的没有 CORS 支持的服务器形成压力，给服务器一个提前拒绝的机会，这样可以防止服务器大量收到DELETE和PUT请求，这些传统的表单不可能跨域发出的请求。",
          "// \"预检\"请求用的请求方法是OPTIONS，表示这个请求是用来询问的。头信息里面，关键字段是Origin，表示请求来自哪个源。",
          "// 除了Origin字段，“预检”请求的头信息包括两个特殊字段。",
          "// 1.Access-Control-Request-Method",
          "// 该字段是必须的，用来列出浏览器的 CORS 请求会用到哪些 HTTP 方法，上例是PUT。",
          "// 2.Access-Control-Request-Headers",
          "// 该字段是一个逗号分隔的字符串，指定浏览器 CORS 请求会额外发送的头信息字段，上例是X-Custom-Header",
          "// 服务器收到“预检”请求以后，检查了Origin、Access-Control-Request-Method和Access-Control-Request-Headers字段以后，确认允许跨源请求，就可以做出回应。"
        ]
    ```

- **8.回调地狱**

  - 呼出关键字： `网络请求`

  - Snipped 代码

    ```javascript
    "body": [
          "// 当使用xhr同时发起多个请求时，我们不能确认哪个请求先响应回来，所以导致了需要嵌套请求",
          "// xhr.onreadystatechange = function () { 这里先获取我们想要的第一个响应，再次执行xhr.onreadystatechange获取我们想要的第二个响应 }",
          "// 这种就叫回调地狱"
        ]
    ```

- **9.使用 Promise 对象解决回调地狱**

  - 呼出关键字： `网络请求`

  - Snipped 代码

    ```javascript
    "body": [
          "// Promise是一个构造函数,需要创建Promise的实列对象",
          "// new出来的Promise实列对象，代表一个异步操作",
          "  function gg(qq, dz) {",
          "    return new Promise(function (resolve, reject) {",
          "      // 在这里执行异步的任务,比如定时器，事件，网络请求等",
          "      var xhr = new XMLHttpRequest()",
          "      xhr.open(qq, dz)",
          "      xhr.send()",
          "      xhr.onreadystatechange = () => {",
          "        if (xhr.readyState === 4 && xhr.status === 200) {",
          "          // 成功后，调用resolve()函数,进行成功操作",
          "          resolve(xhr.responseText)",
          "        } else if (xhr.readyState === 4 && xhr.status !== 200) {",
          "          reject('失败')",
          "        }",
          "      }",
          "    })",
          "  }",
          "// 这里是声明resolve或reject函数的操作",
          "  gg('POST', 'http://127.0.0.1:4523/mock/851286/ceshi')",
          "    // then()第一个函数为成功resolve,第二个函数为失败reject",
          "    .then(",
          "      function (data) {",
          "        console.log(data)",
          "        // 发起第二次请求，如果返回Promise实列对象，则继续调用下一个then",
          "        // 返回的是new Promise(...),继续执行Promise()里面的函数，then里面的成功函数接收的值是new Promise(...)里面成功的实参",
          "        // 返回值如果是普通值，也会继续调用下一个then，then里面的成功函数接收的值是普通值",
          "        return gg('GET', 'http://127.0.0.1:4523/mock/851286/ceshi')",
          "      },",
          "      function (data) {",
          "        console.log(data)",
          "      }",
          "    )",
          "    .then(function (data) {",
          "      console.log(data)",
          "    })",
          "    // 这个相当于then()中,失败的reject函数",
          "    .catch(function (data) {",
          "      console.log(data)",
          "    })",
          "    // 这个相当于then()中,不管失败或成功都会触发的函数",
          "    .finally(function () {",
          "      console.log('不管每个then失败还是成功都会触发')",
          "    })"
        ]
    ```

- **10.Promise 并发处理多个异步任务，所有任务都完成后才能得到结果**

  - 呼出关键字： `网络请求`

  - Snipped 代码

    ```javascript
    "body": [
          "  function gg(qq, dz) {",
          "    return new Promise(function (resolve, reject) {",
          "      // 在这里执行异步的任务,比如定时器，事件，网络请求等",
          "      var xhr = new XMLHttpRequest()",
          "      xhr.open(qq, dz)",
          "      xhr.send()",
          "      xhr.onreadystatechange = () => {",
          "        if (xhr.readyState === 4 && xhr.status === 200) {",
          "          // 成功后，调用resolve()函数,进行成功操作",
          "          resolve(xhr.responseText)",
          "        } else if (xhr.readyState === 4 && xhr.status !== 200) {",
          "          reject('失败')",
          "        }",
          "      }",
          "    })",
          "  }",
          "  var ww = gg('POST', 'http://127.0.0.1:4523/mock/851286/ceshi')",
          "  var kk = gg('POST', 'http://127.0.0.1:4523/mock/851286/ceshi')",
          "  var jj = gg('POST', 'http://127.0.0.1:4523/mock/851286/ceshi')",
          "  // 所有Promise网络请求完成才会执行",
          "  Promise.all([jj, ww, kk]).then(function (result) {",
          "    // result的输出结果为一个数组，成员为成功resolve函数的实参数或失败reject函数实参",
          "    // 输入的结果顺序按照[jj, ww, kk]顺序来",
          "    console.log(result)",
          "  })"
        ]
    ```

- **11.Promise 并发处理多个异步任务，只要有一个任务完成就能得到结果**

  - 呼出关键字： `网络请求`

  - Snipped 代码

    ```javascript
    "body": [
          "  function gg(qq, dz) {",
          "    return new Promise(function (resolve, reject) {",
          "      // 在这里执行异步的任务,比如定时器，事件，网络请求等",
          "      var xhr = new XMLHttpRequest()",
          "      xhr.open(qq, dz)",
          "      xhr.send()",
          "      xhr.onreadystatechange = () => {",
          "        if (xhr.readyState === 4 && xhr.status === 200) {",
          "          // 成功后，调用resolve()函数,进行成功操作",
          "          resolve(xhr.responseText)",
          "        } else if (xhr.readyState === 4 && xhr.status !== 200) {",
          "          reject('失败')",
          "        }",
          "      }",
          "    })",
          "  }",
          "  var ww = gg('POST', 'http://127.0.0.1:4523/mock/851286/ceshi')",
          "  var kk = gg('POST', 'http://127.0.0.1:4523/mock/851286/ceshi')",
          "  var jj = gg('POST', 'http://127.0.0.1:4523/mock/851286/ceshi')",
          "  // 主要有一个响应回来就执行",
          "  Promise.race([jj, ww, kk]).then(function (result) {",
          "    // result的输出结果为成功resolve函数的实参数或失败reject函数实参",
          "    console.log(result)",
          "  })"
        ]
    ```

- **12.xhr 升级版-fetch(基于 Promise 实现的，可以使用 Promise 语法)**

  - 呼出关键字： `网络请求`

  - Snipped 代码

    ```javascript
    "body": [
          "  // method表示请求类型, body表示请求体，headers表示请求标头,mode的属性值为cors表示遵循cors跨域请求协议",
          "  // mode的属性值为same-origin时，表示任何跨域请求都不循序",
          "      fetch('http://127.0.0.1:4523/mock/851286/ceshi', { method: 'post', mode: 'cors', body: '', headers: { ",
          "'Content-Type': 'multipart/form-data' } })",
          "    .then(function (data) {",
          "      // 不能直接拿到响应回来的数据data，需要执行下面操作",
          "      // text()返回一个实列对象，这个方法属于fetch的一部分",
          "      // text将返回体处理成字符串类型json类型",
          "      // text()方法可以换成json()方法",
          "      // json方法可以返回体的json数据格式换成原始类型数据",
          "      return data.text()",
          "    },",
          "// 服务器未响应或地址错误，返回err描述错误的信息",
          "(err) => {",
          "            console.log(err)",
          "          }",
          ")",
          "    .then(function (data) {",
          "      // 这里是接受最终的数据",
          "      console.log(data)",
          "    })"
        ]
    ```

- **13.xhr 升级版-fetch 设置请求超时时间或手动取消正在的网络请求**

  - 呼出关键字： `网络请求`

  - Snipped 代码

    ```javascript
    "body": [
          "var abortController = new AbortController()",
          "// 在fetch的init对象(请求体所在的对象)中添加signal: abortController.signal",
          "// 设置超时时间： 在一个定时器函数中添加abortController.abort()",
          "// 在触发的事件里手动取消直接添加abortController.abort()"
        ]
    ```

- **14.使用 async/await 来简化 Promise 的.then 操作**

  - 呼出关键字： `网络请求`

  - Snipped 代码

    ```javascript
     "body": [
          "  function gg(qq, dz) {",
          "    return new Promise(function (resolve, reject) {",
          "      // 执行到fetch自动发起请求",
          "      fetch(dz, { method: qq, body: 'ss' })",
          "        .then(",
          "          function (data) {",
          "            return data.text()",
          "          },",
          "          // 服务器未响应或地址错误，返回err描述错误的信息",
          "          (err) => {",
          "            console.log(err)",
          "          }",
          "        )",
          "        .then(function (data) {",
          "          resolve(data)",
          "        })",
          "    })",
          "  }",
          "  async function pp() {",
          "    // 开始执行一个网络请求,直到Promise的成功函数被调用，才执行输出响应数据",
          "    const ht = await gg('POST', 'http://127.0.0.1:4523/mock/851286/ceshi')",
          "    console.log(ht)",
          "    // 等第一个请求响应回来后，再执行第二个请求，注意",
          "    // 如果第一个请求执行了Promise的reject错误函数那么不会执行第二个请求",
          "    const tt = await gg('POST', 'http://127.0.0.1:4523/mock/851286/ceshi')",
          "    console.log(tt)",
          "  }",
          "  pp()"
        ]
    ```

- **15.fetch 中 Request 对象的使用以及设置 Request 对象的请求头**

  - 呼出关键字： `网络请求`

  - Snipped 代码

    ```javascript
     "body": [
          "window.addEventListener('load', async function () {",
          "  // 创建第一个Request对象等价于return()",
          "  var request1 = new Request('http://127.0.0.1:4523/mock/851286/cesh', { method: 'get' })",
          "  // 创建第二个Request对象等价于return()",
          "  var request2 = new Request('http://127.0.0.1:4523/mock/851286/ceshi', { method: 'post' })",
          "  function gg(qq) {",
          "    return new Promise(function (resolve, reject) {",
          "      // 执行到fetch自动发起请求",
          "      fetch(qq)",
          "        .then(",
          "          function (data) {",
          "            return data.text()",
          "          },",
          "          // 服务器未响应或地址错误，返回err描述错误的信息",
          "          (err) => {",
          "            console.log(err)",
          "          }",
          "        )",
          "        .then(function (data) {",
          "          resolve(data)",
          "        })",
          "    })",
          "  }",
          "  // 修改request2请求的标头",
          "  request2.headers.set('Content-Type', 'application/json')",
          "  request2.headers.get('Content-Type')",
          "  // 开始执行一个网络请求",
          "  const ht = await gg(request2)",
          "  console.log(ht + '1')",
          "  // 等第一个请求响应回来后，再执行第二个请求，注意",
          "  // 如果第一个请求执行了Promise的reject错误函数那么不会执行第二个请求",
          "  const tt = await gg(request1)",
          "  console.log(tt)",
          "  // 同个网络请求同时发送",
          "  let j1 = gg(request2.clone())",
          "  let j2 = gg(request2.clone())",
          "  let j3 = gg(request2)",
          "  Promise.all([j1, j2, j3]).then(function (result) {",
          "    console.log(result)",
          "  })",
          "})"
        ]
    ```

files api

- **获取本地文件大小(字节为单位)**

  - 呼出关键字：`files`

  - Snipped 代码

    ```javascript
    "body": ["获取到的文件上传表单元素.files[0].size"]
    ```

- **获取本地文件的格式类型(只能识别 image 或 text 类型文件格式)**

  - 呼出关键字：`files`

  - Snipped 代码

    ```javascript
    "body": ["获取到的文件上传表单元素.files[0].type"]
    ```

- **获取本地文件名(包括后缀)**

  - 呼出关键字：`files`

  - Snipped 代码

    ```javascript
    "body": ["获取到的文件上传表单元素.files[0].name"]
    ```

- **获取本地文件大小(字节为单位)**

  - 呼出关键字：`files`

  - Snipped 代码

    ```javascript
    "body": ["获取到的文件上传表单元素.files[0].name"]
    ```

- **获取本地文件 URL 路径**

  - 呼出关键字：`files`

  - Snipped 代码

    ```javascript
    "body": [
          "const data = window.URL.createObjectURL(获取到的文件上传表单元素.files[0])"
        ]
    ```

- **获取到文件中的内容**

  - 呼出关键字：`files`

  - Snipped 代码

    ```javascript
    "body": [
          "// 使用读取文件的构造函数FileReader()创建FileReader对象访问用户明确选择的文件的内容",
          "var reader = new FileReader()",
          "// 此时如果 reader.readyState返回0，就证明创建读取文件的实列对象成功,但还未调用读取方法",
          "获取到的文件上传表单元素.addEventListener('change', function () {",
          "// 调用readAsText方法开始异步读取文件内容 this.files[0]为提供有关文件的信息并允许网页中的 JavaScript 访问其内容",
          "  reader.readAsText(this.files[0],这里可选编码格式iso-8859-1或UTF-8也可不选)",
          "// 此时如果 reader.readyState返回1，就证明调用读取方法成功",
          "})",
          "// 当readAsText方法异步读取完成后，无论成功与否都会自动触发FileReader对象的loadend事件",
          "// 设置load事件为读取完成后触发",
          "reader.addEventListener('loadend', () => {",
          "// 此时如果 reader.readyState返回2，就证明读取文件成功完成",
          "// reader.result为读取完成的文本数据",
          "console.log(reader.result)",
          "})"
        ]
    ```

- **将获取到的图片或其他文件的 base64 格式的二进制数据**

  - 呼出关键字：`files`

  - Snipped 代码

    ```javascript
    "body": [
          "// 使用读取文件的构造函数FileReader()创建FileReader对象访问用户明确选择的文件的内容",
          "var reader = new FileReader()",
          "// 此时如果 reader.readyState返回0，就证明创建读取文件的实列对象成功,但还未调用读取方法",
          "获取到的文件上传表单元素.addEventListener('change', function () {",
          "// 调用readAsText方法开始异步读取文件内容 this.files[0]为提供有关文件的信息并允许网页中的 JavaScript 访问其内容",
          "  reader.readAsDataURL(this.files[0],'这里可选编码格式iso-8859-1或UTF-8也可不选')",
          "// 此时如果 reader.readyState返回1，就证明调用读取方法成功",
          "// 为了提高用户体验可以把 可以把上传文件的表单 value 值 清空，表示已经上传成功",
          "//  this.value;",
          "})",
          "// 当readAsDataURL方法异步读取完成后，无论成功与否都会自动触发FileReader对象的loadend事件",
          "// 设置load事件为读取完成后触发",
          "reader.addEventListener('loadend', () => {",
          "// 此时如果 reader.readyState返回2，就证明读取文件成功完成",
          "// reader.result为读取完成的文本数据",
          "console.log(reader.result)",
          "  // 读取完数据，也要清空下 reader内存",
          "  reader = null;",
          "})"
        ]
    ```

- **将 file 转化为 blob 数据 url**

  - 呼出关键字：`files`

  - Snipped 代码

    ```javascript
    "body": ["window.URL.createObjectURL(获取到的文件上传表单元素.files[0])"]
    ```



#### Proxy api

- **监听拦截对象属性的访问与赋值**

  - 呼出关键字：`proxy`

  - Snipped 代码

    ```javascript
    "body": [
          "      // 定义一个对象",
          "      let target = {",
          "        name: 'Tom',",
          "        age: 24",
          "      }",
          "      // 定义监控获取对象值的函数和对象赋值的函数",
          "      let handler = {",
          "        // 第一个函数监听对象一个属性的赋值或读取",
          "        get: function (target, key) {",
          "          console.log(key) // key 为第一个属性名",
          "          return target[key] // 表示proxy.name的值为key属性名的属性值",
          "        },",
          "        //  第二个函数监听对象一个属性的赋值或读取",
          "        set: function (target, key, value) {",
          "          console.log(key) // key 为第一个属性名",
          "          console.log(value) // value 为 25",
          "          target[key] = value // 重新赋值",
          "        }",
          "      }",
          "      let proxy = new Proxy(target, handler)",
          "      proxy.name // 实际执行 handler.get",
          "      proxy.age = 25 // 实际执行 handler.set"
        ]
    ```

- **监听拦截调用函数时，进行监听拦截传入的实参**

  - 呼出关键字：`proxy`

  - Snipped 代码

    ```javascript
    "body": [
          "      // 定义一个要调用的函数",
          "      function sub(a, b) {",
          "        return a - b",
          "      }",
          "      let handler = {",
          "        // 这个函数可以拦截调用函数时的实参数",
          "        apply: function (target, ctx, args) {",
          "          console.log(args) // args为调用函数时的实参，可以进行更改",
          "          args[0] = 10",
          "          console.log(args)",
          "          return Reflect.apply(...arguments)",
          "        }",
          "      }",
          "      let proxy = new Proxy(sub, handler)",
          "      proxy(2, 1) // 输出 proxy(2, 1) 结果为9"
        ]
    ```



#### try/catch语句

- **try/catch语句**

  - 呼出关键字：`try/catch语句`

  - Snipped 代码

    ```javascript
    "body": ["// try/catch语句是用来处理可能会出错的语句上面的", "// 最典型的应用就是处理网络请求出现的错误", "// 在promise实列对象中，调用reject错误函数会有catch中的err事件接收到。", "try {", "  // 网络操作等", "  // 可以使用theow操作符主动抛出错误", "  throw \"324\";", "} catch (err) {", "  // err为错误的事件,接受throw抛出的数据或promise实列对象中，调用reject错误函数中的实参。", "  console.log(err);", "}"]
    ```