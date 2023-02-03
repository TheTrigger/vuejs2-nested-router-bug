<template>
  <div class="content container hero is-fullheight">
    <div class="section">
      <!-- TO FIX: bug when select: home > user edit > home > user dashboard -->

      <h1>home view</h1>
      <ol>
        <li><router-link :to="{ name: 'home' }">Home</router-link></li>
        <li>
          <router-link :to="{ name: 'notifications' }">
            Notifications
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'user-dashboard' }">
            User Dashboard
          </router-link>
          <ul>
            <li>
              <router-link :to="{ name: 'user-edit' }">User Edit</router-link>
            </li>
          </ul>
        </li>
      </ol>

      <!-- ROUTER -->
      <section class="section">
        <pre>Routing: [{{ $route.name }}] KA:{{ !!$route.meta.keepAlive }} - {{ $route.fullPath }} with transition <i>{{ $route.meta.transition }}</i></pre>
        <code>app router-view:</code>

        <transition :name="$route.meta.transition" mode="out-in">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </section>
    </div>
    <!-- FOOTER -->
    <footer class="has-text-right is-flex-align-items-flex-end mt-auto">
      <div class="block is-size-7 mb-1 is-family-monospace">
        <b-icon pack="fas" icon="code" size="is-small" type="is-success" />
        with
        <b-icon pack="fas" icon="heart" size="is-small" type="is-danger" />
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {
    $route(to, from) {
      const keepAlive = !!this.$route.meta.keepAlive;
      const toDepth = to.fullPath.split('/').filter((n) => n).length;
      const fromDepth = from.fullPath.split('/').filter((n) => n).length;
      const componentName = this.$router.getMatchedComponents().pop().name;

      this.$route.meta.transition =
        toDepth < fromDepth ? 'slide-left' : 'slide-right';
      //this.transitionName = toDepth < fromDepth ? 'slide-left' : 'slide-right';
      console.log(
        'navigating',
        from.fullPath,
        'to',
        to.fullPath,
        'transition',
        this.$route.meta.transition,
        componentName
      );
    },
  },
};
</script>
