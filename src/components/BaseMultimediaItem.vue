<!-- Image with caption and copyright -->
<template v-if="media">
  <VLayout row>
    <!-- do not stretch image container -->
    <VFlex :style="{ flex: '0 1 auto' }">
      <VImg
        :src="media.url"
        :alt="media.caption"
        :width="media.width"
      />
      <p class="copyright-text grey--text">
        {{ media.copyright }}
      </p>
      <p class="hidden-sm-and-up caption grey--text">
        {{ media.caption }}
      </p>
    </VFlex>
    <VFlex class="hidden-xs-only">
      <p class="caption grey--text">
        {{ media.caption }}
      </p>
    </VFlex>
  </VLayout>
</template>

<script>
  export default {
    props: {
      media: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>
  .copyright-text {
    font-size: 10px;
  }
</style>
