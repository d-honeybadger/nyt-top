<template>
  <v-navigation-drawer permanent class="mt-5">
    <v-list dense class="sidebar-list pt-0">
      <v-list-tile
        v-for="section in sectionNames"
        :key="section"
      >
        <v-list-tile-content>
          <RouterLink
            :to="`/${section.replace(/\s/g, '').toLowerCase()}`"
            class="sidebar-link"
          >
            {{ section }}
          </RouterLink>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import config from '../config';

  export default {
    data () {
      return {
        sectionNames: config.sectionNames
      };
    }
  }
</script>

<style>
  .v-list--dense.sidebar-list {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .v-list--dense.sidebar-list .v-list__tile:not(.v-list__tile--avatar) {
    height: 30px;
    line-height: 30px;
    padding: 0;
  }

  .sidebar-link {
    color: #1b5e20;
    text-decoration: none;
    padding-right: 1rem;
    border-right: solid 2px #fff;
  }
  .sidebar-link:hover {
    color: #00C853;
  }
  .router-link-exact-active {
    color: #00C853;
    border-right: solid 2px #00C853;
  }

</style>
