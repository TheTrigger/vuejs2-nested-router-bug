<template>
  <div>
    <h1>User Main View</h1>

    <code>child router-view:</code>

    <section class="section">
      <transition :name="$route.meta.transition" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </section>
  </div>
</template>

<script>
export default {
  name: 'view-user-main',
  components: {},
  data() {
    return {};
  },
};
</script>
