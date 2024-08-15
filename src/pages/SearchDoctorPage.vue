<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import myAXios from "../plugins/myAXios.ts";
import {Toast} from "vant";
import {dockerType} from "../models/docker";
import qs from "qs";

const route = useRoute();
const {sectionList} = route.query;


const doctorList=ref([] as dockerType[]);


onMounted(async () => {
    const doctorListT= await myAXios.get('/user/findDoctorBySection', {
    params: {
      dSection: sectionList[1]
    },
      // 序列化
      paramsSerializer: {
        serialize: params => qs.stringify(params, {indices: false}),
      }
  })
      .then((response) => {
        // console.log(response);
        Toast.success('请求成功');

        return response.data?.data;
      })
      .catch((error) => {
        console.log(error);
        Toast.fail('请求失败');
      })
  // console.info(userListData);
  // console.info(doctorListT);
  //   doctorListT.forEach((doctor:any) => {
  //     console.log(doctor);
  //   })
   if(doctorListT!=null)
    doctorList.value=doctorListT;
})

// doctorList.forEach(doctor => {
//   console.info(doctor);
// })
// console.info(doctorList)
</script>

<template>
  <van-card
      v-for="doctor in doctorList"
      :desc="doctor.dInstroduction"
      :title="`${doctor.dName}（${doctor.dGender}）`"
      :thumb="doctor.avatarUrl"
  >
    <template #footer>
      <van-button size="mini">挂号</van-button>
    </template>
  </van-card>

<!--  <li v-for="doctor in doctorList">-->
<!--    {{doctor}}}-->
<!--    <br>-->
<!--  </li>-->
<!--  <user-card-list :user-list="doctorList"/>-->
</template>

<style scoped>

</style>