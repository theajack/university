<template>
    <div>
        <div class='title'>
            <div class='title-bg'></div>
            <div class='title-text'>大学查询</div>
            <input @input='oninput' class='query-input' type='text' v-model='query' placeholder='请输入学校名称'>
        </div>
        <div style='max-width: 1200px;margin: 0 auto;'>
            <!-- 野鸡大学 -->
            <div v-if='fakeName!==""' class='fake-wrapper'>
                <div class='fake-title-text'>该学校可能为野鸡大学，请注意甄别</div>
                <div class='fake-name'><a target='_blank' :href='`https://www.baidu.com/s?wd=${fakeName}`'>{{fakeName}}</a></div>
            </div>
            <!-- 正规学校 -->
            <div v-if='list.length > 0'>
                <div class='uni-title-text'>正规学校名单</div>
                <div class='uni-item uni-title'>
                    <span>学校名称</span><span>学校标识码</span><span>主管部门</span><span>所在地</span><span>办学层次</span><span>备注</span>
                </div>
                <div class='uni-item' v-for='(item, index) in list' :key='index'>
                    <span v-for='(value, index) in item' v-html='valueFilter(value, index)' :key='index'></span>
                </div>
            </div>
            <div class='no-data' v-else>
                <span v-show='showNoData'>暂无查询结果</span>
            </div>
        </div>
    </div>
</template>
<script>
    // 名称 学校标识码 主管部门 所在地 办学层次 备注
    import {findFakeUniversity, queryUniversity} from '../university-query';
    export default {
        name: 'main-list',
        data () {
            return {
                query: '',
                timer: null,
                list: [],
                fakeList: [],
                showNoData: false,
                fakeName: '',
            };
        },
        mounted () {
            if (location.hash) {
                this.query = decodeURIComponent(location.hash).substring(1);
            }
            this.oninput();
        },
        methods: {
            oninput () {
                clearTimeout(this.timer);
                this.showNoData = false;

                this.timer = setTimeout(() => {
                    this.list = queryUniversity(this.query);
                    this.fakeName = findFakeUniversity(this.query);
                    this.showNoData = this.list.length === 0 && !this.fakeName;
                    location.hash = this.query;
                }, 500);
            },
            valueFilter (v, index) {
                if (index === 0) {
                    return `<a target="_blank" class="name-a" href="https://www.baidu.com/s?wd=${v}">${v.replace(this.query, `<span class="highlight">${this.query}</span>`)}`;
                }
                return v;
            }
        }
    };
</script>
<style>
    * {
        box-sizing: border-box;
    }
    body{
        margin: 0;
        padding: 0;
    }
    ::-webkit-scrollbar {
        width: 5px;
        cursor: pointer;
        height: 5px;
    }
    ::-webkit-scrollbar-button {
        display: none;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #88888866;
        cursor: pointer;
    }
    ::-webkit-scrollbar-track {
        display: none;
    }
    ::-webkit-scrollbar-track-piece {
        background-color: #88888811;
    }
    .title{
        width: 100%;
        height: 200px;
        position: relative;
        text-align: center;
    }
    .title-bg{
        width: 100%;
        height: 100%;
        position: absolute;
        background-image: url('https://fastly.jsdelivr.net/gh/theajack/university/docs/images/bg.jpg');
        background-size: cover;
        background-position: center;
        filter: blur(3px);
    }
    .title-text{
        position: relative;
        font-size: 40px;
        font-weight: bold;
        color: rgb(0, 132, 255);
        top: 50px;
    }
    .query-input{
        position: relative;
        width: 50%;
        height: 40px;
        padding-left: 5px;
        outline: none;
        border: 1px solid #aaa;
        border-radius: 3px;
        top: 70px;
        font-size: 16px;
        max-width: 400px;
        min-width: 300px;
        text-align: center;
    }
    .uni-item{
        padding: 10px;
        display: flex;
    }
    .uni-item:nth-child(odd){
        background-color: #f8f8f8;
    }
    .uni-item.uni-title{
        font-weight: bold;
        color: #fff;
        background-color: rgb(94 178 255);
    }
    .uni-item span{
        flex: 1;
        text-align: center;
    }
    .uni-item span .highlight{
        color: rgb(0, 132, 255);
    }
    .uni-title-text, .no-data{
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        padding: 10px 0;
    }
    .uni-title-text, .fake-title-text{
        color: rgb(0, 132, 255);
    }
    .fake-wrapper{
        text-align: center;
        padding: 50px;
    }
    .fake-name{
        margin-top: 20px;
        font-size: 30px;
        font-weight: bold;
    }
    .fake-name a{
        color: red;
        margin-top: 20px;
    }
    .name-a{
        color: #222;
    }
</style>