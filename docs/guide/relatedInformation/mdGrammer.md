# Markdown基本语法

## 标题语法

- 1. '#' 号
```
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

- 2. '=' 或 '-' 号
```
一级标题
=================

二级标题
-----------------
```


## 格式语法
- 1. 字体
```
*斜体文本*
_斜体文本_
**粗体文本**
__粗体文本__
***粗斜体文本***
___粗斜体文本___
```

- 2. 分隔线
```
***

* * *

*****

- - -

----------
```

- 3. 删除线
```
GOOGLE.COM
~~BAIDU.COM~~
```

- 4. 下划线
```
<u>带下划线文本</u>
```

## 列表语法
- 1. 无序列表
```
* 第一项
* 第二项
* 第三项

+ 第一项
+ 第二项
+ 第三项


- 第一项
- 第二项
- 第三项
```

- 2. 有序列表
```
1. 第一项
2. 第二项
3. 第三项
```

## 区块语法
- 1. 普通区块
```
> 区块引用
> 区块语法
```

- 2. 嵌套区块
```
> 最外层
> > 第一层嵌套
> > > 第二层嵌套
```

## 代码语法

- 1. 代码块
```
\```javaScript
function deepClone(originValue) {
  if (!isObject(originValue)) {
    return originValue
  }

  const newObject = {}
  for (const key in originValue) {
    newObject[key] = deepClone(originValue[key])
  }
  return newObject
}
\```
```

- 2. 代码词
```
`vigor.js`
```

## 链接语法
```
[链接名称](链接地址)

或者

<链接地址>
```

## 图片语法
```
![alt 属性文本](图片地址)

![alt 属性文本](图片地址 "可选标题")
```

## 表格语法
```
|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |
```