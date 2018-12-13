<template>
    <div class="pages-tables " id="pages-tables">
        <div class="waterMask" id="watermark"></div>
        <div class="rolling-table meal-table" ref="tableBox" :style="{height: maxHeight + 'px'}">
            <table class="table" id="table" cellpadding="0" cellspacing="0" ref="rollingTable">
                <tr v-for="(x,i) in xList" :key="i">
                    <th class="rows " :class="{'cross': index == 0 && i == 0}" v-for="(l,index) in x" :key="index" :colspan="l.colspan" :rowspan="l.rowspan">{{l.name}}</th>
                </tr>
                <tr v-for="(l,i) in yList" :key="i + 'a'">
                    <template v-for="(x, xKey) in xField">
                        <td v-for="(ll,yKey) in l" :key="yKey" v-if="x === yKey" :class="{'cols': yKey == xField[0]}">
                            {{ yList[i][yKey]}}
                        </td>
                    </template>
                </tr>
                <tr></tr>
            </table>
        </div>
    </div>
</template>
<script>
	import { createIScroller, refreshScroller } from "./iscrollTable";
	export default {
		data() {
			return {
				maxHeight:'100%',
				scroll: {
					scroller: null
				},
				xList: [
					[
						{
							field_name: "statis_date",
							name: "第一行合并3行1列",
							colspan: 1, //指定单元格 横向 跨越的 列数
							rowspan: 3, //指定单元格 纵向 跨越的 行数
						},
						{
							field_name: "custom_field",
							name: "第一行合并2列",
							colspan: 2,
							rowspan: 1,
						},
						{
							field_name: "custom_field",
							name: "第一行合并2列",
							colspan: 2,
							rowspan: 1,
						},
						{
							field_name: "custom_field",
							name: "第一行合并3列",
							colspan: 3,
							rowspan: 1,
						},
					],
					[
						{
							field_name: "custom_field",
							name: "第二行日期",
							colspan: 1, //指定单元格 横向 跨越的 列数
							rowspan: 1, //指定单元格 纵向 跨越的 行数
						},
						{
							field_name: "custom_field",
							name: "第二行日期合并2列",
							colspan: 2,
							rowspan: 1,
						},
						{
							field_name: "custom_field",
							name: "第二行日期合并2列",
							colspan: 2,
							rowspan: 1,
						},
						{
							field_name: "custom_field",
							name: "第二行日期合并3列",
							colspan: 3,
							rowspan: 1,
						},
					],
					[
						{
							field_name: "area_name",
							name: "第三行当月新增",
							colspan: 1,  //指定单元格 横向 跨越的 列数
							rowspan: 1, //指定单元格 纵向 跨越的 行数
						},
						{
							field_name: "area_name1",
							name: "第三行当月新增1",
							colspan: 1,
							rowspan: 1,
						},
						{
							field_name: "area_name2",
							name: "第三行当月新增2",
							colspan: 1,
							rowspan: 1,
						},
						{
							field_name: "area_name3",
							name: "第三行当月新增3",
							colspan: 1,
							rowspan: 1,
						},
						{
							field_name: "area_name4",
							name: "第三行当月新增4",
							colspan: 1,
							rowspan: 1,
						},
						{
							field_name: "area_name5",
							name: "第三行当月新增5",
							colspan: 1,
							rowspan: 1,
						},
						{
							field_name: "area_name6",
							name: "第三行当月新增6",
							colspan: 1,
							rowspan: 1,
						},
					],
				],
				xField: ['statis_date', 'area_name', "area_name1", "area_name2", "area_name3", "area_name4", "area_name5", "area_name6",],
				yList: [
					{
						area_name: "新增数据开始",
						area_name1: "新增数据开始1",
						area_name2: "新增数据开始2",
						area_name3: "新增数据开始3",
						area_name4: "新增数据开始4",
						area_name5: "新增数据开始5",
						area_name6: "新增数据开始6",
						statis_date: 100007,
					},
					{
						area_name: "新增数据",
						area_name1: "新增数据1",
						area_name2: "新增数据2",
						area_name3: "新增数据3",
						area_name4: "新增数据4",
						area_name5: "新增数据5",
						area_name6: "新增数据6",
						statis_date: 201807,
					},
					{
						area_name: "新增数据",
						area_name1: "新增数据1",
						area_name2: "新增数据2",
						area_name3: "新增数据3",
						area_name4: "新增数据4",
						area_name5: "新增数据5",
						area_name6: "新增数据6",
						statis_date: 201807,
					},
					{
						area_name: "新增数据",
						area_name1: "新增数据1",
						area_name2: "新增数据2",
						area_name3: "新增数据3",
						area_name4: "新增数据4",
						area_name5: "新增数据5",
						area_name6: "新增数据6",
						statis_date: 201807,
					},
					{
						area_name: "新增数据",
						area_name1: "新增数据1",
						area_name2: "新增数据2",
						area_name3: "新增数据3",
						area_name4: "新增数据4",
						area_name5: "新增数据5",
						area_name6: "新增数据6",
						statis_date: 201807,
					},
					{
						area_name: "新增数据",
						area_name1: "新增数据1",
						area_name2: "新增数据2",
						area_name3: "新增数据3",
						area_name4: "新增数据4",
						area_name5: "新增数据5",
						area_name6: "新增数据6",
						statis_date: 201807,
					},
					{
						area_name: "新增数据",
						area_name1: "新增数据1",
						area_name2: "新增数据2",
						area_name3: "新增数据3",
						area_name4: "新增数据4",
						area_name5: "新增数据5",
						area_name6: "新增数据6",
						statis_date: 201807,
					},
					{
						area_name: "新增数据",
						area_name1: "新增数据1",
						area_name2: "新增数据2",
						area_name3: "新增数据3",
						area_name4: "新增数据4",
						area_name5: "新增数据5",
						area_name6: "新增数据6",
						statis_date: 201807,
					},
					{
						area_name: "新增数据",
						area_name1: "新增数据1",
						area_name2: "新增数据2",
						area_name3: "新增数据3",
						area_name4: "新增数据4",
						area_name5: "新增数据5",
						area_name6: "新增数据6",
						statis_date: 201807,
					},
					{
						area_name: "新增数据",
						area_name1: "新增数据1",
						area_name2: "新增数据2",
						area_name3: "新增数据3",
						area_name4: "新增数据4",
						area_name5: "新增数据5",
						area_name6: "新增数据6",
						statis_date: 201807,
					},
					{
						area_name: "新增数据",
						area_name1: "新增数据1",
						area_name2: "新增数据2",
						area_name3: "新增数据3",
						area_name4: "新增数据4",
						area_name5: "新增数据5",
						area_name6: "新增数据6",
						statis_date: 201807,
					},
					{
						area_name: "新增数据",
						area_name1: "新增数据1",
						area_name2: "新增数据2",
						area_name3: "新增数据3",
						area_name4: "新增数据4",
						area_name5: "新增数据5",
						area_name6: "新增数据6",
						statis_date: 201807,
					},
					{
						area_name: "新增数据",
						area_name1: "新增数据1",
						area_name2: "新增数据2",
						area_name3: "新增数据3",
						area_name4: "新增数据4",
						area_name5: "新增数据5",
						area_name6: "新增数据6",
						statis_date: 201807,
					},
					{
						area_name: "新增数据",
						area_name1: "新增数据1",
						area_name2: "新增数据2",
						area_name3: "新增数据3",
						area_name4: "新增数据4",
						area_name5: "新增数据5",
						area_name6: "新增数据6",
						statis_date: 201807,
					},
					{
						area_name: "新增数据",
						area_name1: "新增数据1",
						area_name2: "新增数据2",
						area_name3: "新增数据3",
						area_name4: "新增数据4",
						area_name5: "新增数据5",
						area_name6: "新增数据6",
						statis_date: 201807,
					},
					{
						area_name: "新增数据",
						area_name1: "新增数据1",
						area_name2: "新增数据2",
						area_name3: "新增数据3",
						area_name4: "新增数据4",
						area_name5: "新增数据5",
						area_name6: "新增数据6",
						statis_date: 201807,
					},
					{
						area_name: "新增数据",
						area_name1: "新增数据1",
						area_name2: "新增数据2",
						area_name3: "新增数据3",
						area_name4: "新增数据4",
						area_name5: "新增数据5",
						area_name6: "新增数据6",
						statis_date: 201807,
					},
					{
						area_name: "新增数据",
						area_name1: "新增数据1",
						area_name2: "新增数据2",
						area_name3: "新增数据3",
						area_name4: "新增数据4",
						area_name5: "新增数据5",
						area_name6: "新增数据6",
						statis_date: 201807,
					},
					{
						area_name: "新增数据",
						area_name1: "新增数据1",
						area_name2: "新增数据2",
						area_name3: "新增数据3",
						area_name4: "新增数据4",
						area_name5: "新增数据5",
						area_name6: "新增数据6",
						statis_date: 201807,
					},
					{
						area_name: "新增数据最后",
						area_name1: "新增数据最后1",
						area_name2: "新增数据最后2",
						area_name3: "新增数据最后3",
						area_name4: "新增数据最后4",
						area_name5: "新增数据最后5",
						area_name6: "新增数据最后6",
						statis_date: 222222,
					}
				]
			}
		},
		mounted() {
			this.maxHeight = window.screen.height
			this.scroll.scroller = createIScroller(".meal-table");
			// addWaterMarker(document.getElementById('watermark'))
		}
	}

</script>
<style lang="less" scoped>
    .pages-tables {
        -webkit-overflow-scrolling: touch; // ios滑动顺畅
        position: relative;
    }
    .rolling-table {
        height: 100%;
        font-size: 0.28rem;
        color: #86939a;
        background-color: #fff;
        width: 100%;
        -webkit-overflow-scrolling: touch;
        position: relative;
        top: 0;
        overflow: hidden;
    }
    .rows {
        position: relative;
        z-index: 3;
    }
    .cross {
        position: relative;
        z-index: 5;
    }
    table td {
        border: 0px solid #000;
        font-size: 0.32rem;
        background: #fff;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    .table {
        //   border-collapse: collapse; //去掉重复的border
        color: #86939e;
        font-size: 0.32rem;
        border: 0px solid #000;
        min-height: 100%;
        text-align: center;
        td {
            border-bottom: 0.02rem solid #eee;
            white-space: nowrap;
            height: 0.86rem;
            line-height: 0.86rem;
            padding: 0 0.2rem;
        }
        th {
            color: #43484d;
            white-space: nowrap;
            height: 0.74rem;
            line-height: 0.74rem;
            padding: 0rem 0.3rem;
            background-color: #f3f4f6;
            font-weight: normal;
            padding-bottom: 0;
            padding-top: 0;
            border: 0.02rem solid red;
        }
    }
    tr{
        position: relative;
        background-color: #fff;
        &:nth-of-type(odd){
            td{
                // background-color: pink;
            }
        }
    }
</style>
