<script setup lang="ts">
import {ref} from 'vue';
import {useRouter} from "vue-router";
import {PickerInstance, Toast} from "vant";
import myAXios from "../plugins/myAXios.ts";

const picker = ref<PickerInstance>();
const route = useRouter();

const cities = {
  '内科': ['神经内科', '呼吸与危重症医学科', '内分泌科', '消化内科', '心血管内科', '肾内科', '发热门诊'],
  '外科': ['手足外科', '普通外壳', '肛肠外科', '神经外科', '泌尿外壳', '骨科', '烧伤整形外科'],
  '妇产科': ['妇科', '产科'],
  '儿科': ['儿科', '儿童保健科'],
  '五官科': ['耳鼻咽喉科', '眼科', '口腔科'],
  '中医科': ['中医科'],
  '其他': ['康复医学科', '急诊科', '皮肤性病科', '功能科'],
};
const columns = [
  {values: Object.keys(cities)},
  {values: cities['五官科']},
];

//动态显示科室
const onChange = (values) => {
  picker.value.setColumnValues(1, cities[values[0]]);
};


//回调函数
const Change = async (value) => {
  console.log(value);
  route.push({
    path: '/search/doctor',
    query: {
      sectionList:value
    }
  })
}

</script>

<template>
  <van-picker title="科室挂号查询" ref="picker" :columns="columns" @change="onChange"
              @confirm="Change" confirm-button-text="查询排班医生"/>
</template>

<style scoped>

</style>