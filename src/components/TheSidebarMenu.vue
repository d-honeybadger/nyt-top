<!-- List menu of all available story sections -->
<template>
  <VList
    dense
    class="sidebar-list pt-0 grey lighten-5"
  >
    <VListTile
      v-for="section in sectionNames"
      :key="section"
      :style="{ height: '30px', lineHeight: '30px', padding: '0', whiteSpace: 'nowrap' }"
    >
      <VListTileContent>
        <RouterLink
          :to="`/${section.replace(/\s/g, '').toLowerCase()}`"
          class="sidebar-link"
        >
          <span>
            {{ section }}
          </span>
        </RouterLink>
      </VListTileContent>
    </VListTile>
  </VList>
</template>


<script>
  import config from '../config';

  export default {
    data () {
      return {
        sectionNames: config.sectionNames
      };
    }
  };
</script>


<style scoped>
  /* Menu list */
  .v-list--dense.sidebar-list {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  /* Link of menu list */
  .sidebar-link {
    color: #1b5e20;
    text-decoration: none;
    border-right: solid 2px #E0E0E0;
    padding-left: 1.5rem;
    padding-right: 0.5rem;
  }
  .sidebar-link > span {
    display: inline-block;
    transition: 0.3s ease-in-out;
  }
  .sidebar-link:hover > span {
    color: #4CAF50;
    transform: translateX(-1rem);
  }
  .router-link-exact-active {
    color: #4CAF50;
    border-right: solid 2px #4CAF50;
  }
</style>
