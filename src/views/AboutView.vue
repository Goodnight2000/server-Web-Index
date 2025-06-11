<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script setup lang="ts">
import {onMounted} from 'vue';
import { service } from '@/service/service';
service.test({
  "nihao":"nihao"
}).then(data=>{
  console.log(data);
})
onMounted(()=>{

})
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
