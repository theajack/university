## [甄别野鸡大学-大学查询](https://github.com/theajack/university)

[开始体验](https://theajack.github.io/university/)

## 0. 前言

帮助高考生和考生家长甄别学校信息

查询结果仅提供参考，数据来源于百度百科及其他媒体发布数据，具体信息请用户自行搜索查询

## 1. npm 使用

支持开发者接入

```
npm i univ-query
```

```js
import UQuery from 'univ-query';
UQuery('北京大学');
```

## 2. cdn

```html
<script src="https://fastly.jsdelivr.net/npm/univ-query/univ-query.min.js"></script>
<script>
    UQuery('北京大学');
</script>
```

## 2. api

```ts
interface IUQuery {
    (query: string): Array<{
        name: string, 
        code: string, 
        department: string, 
        city: string, 
        type: string, 
        info: string, 
    }>;
    version: string;
    isFake(name: string): 'yes' | 'no' | 'unknown';
}

const UQuery: IUQuery;

export default UQuery;
```
