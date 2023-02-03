<template>
  <div>
    <h1>This is the default user view</h1>
    {{ random }}
  </div>
</template>

<script>
export default {
  name: 'view-user-dashboard',
  components: {},
  data() {
    return {
      random: Date.now(),
    };
  },
};
</script>
