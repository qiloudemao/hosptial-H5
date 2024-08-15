<script setup lang="ts">
import {onMounted, ref} from "vue";
import myAXios from "../plugins/myAXios.ts";
import {Toast} from "vant";
import {getPatienId} from "../plugins/patient.ts";


// console.info("pId:"+getPatienId());

const user =ref();
// const router = useRouter();


onMounted(async () =>{
  console.log("执行了")
  const res = await myAXios.get('/user/findPatientById',{
    params: {
      pId: getPatienId()
    }
  });
  if (res.status === 200){
    user.value = res.data.data;
    // Toast.success('获取用户信息成功');
  } else {
    Toast.fail('获取用户信息失败，请重新登录');
    // router.push('/user/login');
  }
})


// const toEdit = (editKey: string, editName: string, currentValue: string) => {
//   router.push({
//     path: '/user/edit',
//     query: {
//       editKey,
//       editName,
//       currentValue,
//     }
//   })
// }

</script>

<template>
  <template v-if="user">
    <van-cell-group inset>
      <van-cell title="姓名"  :value="user.pName" />
      <van-cell title="账户" :value="user.pId"/>
      <van-cell title="性别"  :value="user.pGender"/>
      <van-cell title="电话" :value="user.pPhone"/>
      <van-cell title="邮箱" :value="user.pEmail"/>
      <van-cell title="既往病历" :value="user.pType"/>
    </van-cell-group>

  </template>
</template>

<style scoped>

</style>

