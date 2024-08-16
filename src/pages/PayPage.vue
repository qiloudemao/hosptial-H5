<script setup lang="ts">
import {onMounted, ref} from "vue";
import myAXios from "../plugins/myAXios.ts";
import {getPatienId} from "../plugins/patient.ts";

const active = ref(3);

const  itemsAndPrice=ref("B超*201(元)肝功能*543(元)项目总价744元");
const drugsAndPrice=ref("青霉素*23(元)*1氨苄西林*13(元)*1药物总价36元");
const totolPrice = ref(780);


onMounted(async () =>{
    const res=await myAXios.get('user/getPay',{
      params:{
        pId:getPatienId()
      }
    })
    if (res.status === 200){
      itemsAndPrice.value=res.data.data.itemsAndPrice;
      drugsAndPrice.value=res.data.data.drugsAndPrice;
      totolPrice.value=res.data.data.totolPrice;
    }
})

const submit=async ()=>{

}

</script>

<template>
  <van-steps :active="active">
    <van-step>挂号</van-step>
    <van-step>就诊</van-step>
    <van-step>缴费</van-step>
  </van-steps>

  <div class="title">
    检查项目及总价
  </div>
  <div class="description">
    {{itemsAndPrice}}
  </div>
  <div class="title">
    药物及价钱
  </div>
  <div class="description">
    {{drugsAndPrice}}
  </div>
  <div class="title">
    总价如下:
  </div>
  <div class="total-price">
    {{totolPrice}}元
  </div>

  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit" @click="submit">
      缴费
    </van-button>
  </div>
</template>

<style scoped>
.title {
  font-size: 20px;
  font-weight: bold;
  margin-top: 16px;
  color: #333;
}
.description {
  font-size: 16px;
  color: #666;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.total-price {
  font-size: 18px;
  color: #ff4d4f;
  margin-bottom: 16px;
}
</style>

