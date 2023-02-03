<template>
  <div>
    Try our notifications!

    <div class="buttons">
      <b-button type="is-primary" @click="snackbar">SnackBar</b-button>
      <b-button type="is-primary" @click="toast">Toast</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-notifications',
  components: {},
  data() {
    return {};
  },
  methods: {
    snackbar() {
      // https://buefy.org/documentation/snackbar
      this.$buefy.snackbar.open({
        queue: false,
        message: 'Nothing here, just press OK',
      });
    },
    toast() {
      // https://buefy.org/documentation/toast/
      this.$buefy.toast.open({
        queue: false,
        message: "Something's not good",
        position: 'is-bottom-right',
        type: 'is-danger',
      });
    },
  },
};
</script>
