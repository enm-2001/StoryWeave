<template>
  <div class="rwcomp">
    <ReadComponent />
    <WriteComponent />
  </div>
</template>

<script>
import ReadComponent from "./ReadComponent.vue";
import WriteComponent from "./WriteComponent.vue";

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

<style></style>
