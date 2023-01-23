# 设计Gecko渐变

## 案例一 最简单的线性渐变
```HTML
<style type="text/css">
    div{
        width:(dight);
        height:(dight);
        border:(dight 1-6) solid #FCF;
        padding:(dight);
        background:-moz-linear-gradient((color),(color))
    }
</style>
<div></div>
```
## 案例二 从左上到右下的线性渐变
```HTML
<style type="text/css">
    div{
        width:(dight);
        height:(dight);
        border:(dight 1-6) solid #FCF;
        background:-moz-linear-gradient(top left,(color),(color))
    }
</style>
<div></div>
```
## 案例三 从左到右的五彩渐变
```HTML
<style type="text/css">
    div{
        width:(dight);
        height:(dight);
        border:(dight 1-6) solid #FCF;
        padding:(dight);
        background:-moz-linear-gradient(left,(color),(color),(color),(color),(color),indigo,violet);
    }
</style>
<div></div>
```
::: tip
(color) =你想填什么颜色都行
:::
::: warning
注意，(color)的提示只是蓝色括号才被标记
:::
::: tip
(dight) =你想填什么数字都行
:::