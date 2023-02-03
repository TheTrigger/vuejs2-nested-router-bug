<template>
  <div>
    <h1>The EDIT view</h1>
    <div class="buttons">
      <b-button type="is-primary" @click="counter++">
        <span>Count is {{ counter }}</span>
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'view-user-edit',
  components: {},
  data() {
    return { counter: 0 };
  },
};
</script>
