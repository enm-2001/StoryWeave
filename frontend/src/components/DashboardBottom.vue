<template>
 <div class="stories">
    <div class="col-6">
     <div class="col-text"> Read Story</div>
    </div>
    <div class="col-6">
      <div class="col-text">Contribute Story</div>
    </div>
</div>
<div class="rwcomp">
    <ReadComponent class="rcomp" />
    <WriteComponent class="wcomp" />
</div>
</template>

<script>
import ReadComponent from './ReadComponent.vue';
import WriteComponent from './WriteComponent.vue'

export default {
    name: "DashboardBottom",
    data: () => {
        return {};
    },
    components: {
        ReadComponent,
        WriteComponent,
    },
};
</script>

<style scoped>
.stories{
    display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top:20px;
}


.col-text{
   font-family: Belanosima;
   color:#537188;
   font-size:25px;
   font-weight:bolder;
    display: flex;
    align-items: center;
    justify-content:center;

}
.col-6{
  padding:0px;
  margin:0px;
}

</style>
