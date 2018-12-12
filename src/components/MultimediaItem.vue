<template>
  <v-img v-if="media"
    :src="media.url"
    :alt="media.caption"
    :width="media.width"
  >
  </v-img>
</template>

<script>
  export default {
    data: function() {
      return {}
    },
    props: ['media']
  }
</script>
