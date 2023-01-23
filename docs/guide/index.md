# 单行文本垂直对齐样式代码

## 案例一：垂直对齐底部
```html css
<style type="text/css">
    .cell {
        vertical-align:bottom;
        height:60px;
    }
</style>
<table width="200" border="1">
    <tr>
        <td class="cell">text</td>
    </tr>
    </table>
```
::: tip
这个border我不知道怎么回事,可以删掉
:::
## 案例二：垂直对齐中间
```html css
<style type="text/css">
    div {
        line-height:6em;
        width:12em;
        height:6em;
        border:solid 1px red;}
</style>
<div>
    This is a text
</div>
```