<template>
<v-app>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <span>科跃物联</span>
    <v-spacer></v-spacer>
    <v-btn
      @click="$vuetify.theme.dark = !$vuetify.theme.dark">
      {{$vuetify.theme.dark===false?'dark':'light'}}
    </v-btn>
    <router-link to="/dl"><v-btn class="ml-2">登录</v-btn></router-link>
  </v-app-bar>
  <v-navigation-drawer app v-model="drawer">
    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>科跃</v-list-item-title>
      </v-list-item>

      <v-list-group
        :value="true"
        no-action
        sub-group
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>设备管理</v-list-item-title>
          </v-list-item-content>
        </template>
        <router-link to="/dsas">
          <v-list-item
            v-for="([title, icon], i) in admins"
            :key="i"
            link
          >
            <v-list-item-title v-text="title"></v-list-item-title>
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </router-link>
      </v-list-group>
      <v-list-group
        :value="true"
        no-action
        sub-group
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>生产管理</v-list-item-title>
          </v-list-item-content>
        </template>

        <router-link to="/dsas">
          <v-list-item
            v-for="([title, icon], i) in admins"
            :key="i"
            link
          >
            <v-list-item-title v-text="title"></v-list-item-title>
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </router-link>
      </v-list-group>
      <v-list-group
        :value="true"
        no-action
        sub-group
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>销售管理</v-list-item-title>
          </v-list-item-content>
        </template>

        <router-link to="/dsas">
          <v-list-item
            v-for="([title, icon], i) in admins"
            :key="i"
            link
          >
            <v-list-item-title v-text="title"></v-list-item-title>
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </router-link>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
  <v-main style="background: aqua">
    <router-view></router-view>
  </v-main>
  <v-footer app class="d-flex justify-center">科跃物联
  </v-footer>
  </v-app>
</template>
<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      drawer: true,
      admins: [
        ['设备数据', 'mdi-account-multiple-outline'],
        ['安全管理', 'mdi-cog-outline']
      ]
    }
  },
  mounted () {
    console.log(this.$store.getters['user/getTest1'])
  }
}
</script>
