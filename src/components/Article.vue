<!-- Display single article as a card -->
<template>
  <a
    :href="article.url"
    target="_blank"
    class="wrap-link"
  >
    <VCard>
      <VCardTitle>
        <h4>
          {{ article.title }}
        </h4>
      </VCardTitle>
      <VDivider />
      <VCardText>
        <p class="grey--text mb-0">
          {{ timeUpdated() }} ago
        </p>
        <p class="green--text mt-0 mb-2 text-xs-right">
          {{ label }}
        </p>
        <p class="mb-0">
          {{ article.abstract }}
        </p>
        <BaseMultimediaItem
          v-if="media"
          :media="media"
        />
      </VCardText>
    </VCard>
  </a>
</template>


<script>
  import BaseMultimediaItem from './BaseMultimediaItem';

  export default {
    components: {
      BaseMultimediaItem
    },
    props: {
      article: {
        type: Object,
        required: true
      }
    },
    computed: {
      // Get an image of the best size:
      // width of 210px is better than 190px > 150px > 75px > jumbo-size
      media () {
        let multimedia = this.article.multimedia;
        if (multimedia.length === 0) return null;
        let priorities = new Map([ // type to priority map
          ['mediumThreeByTwo210', 1],
          ['Normal', 2],
          ['thumbLarge', 3],
          ['Standard Thumbnail', 4],
          ['superJumbo', 5]
        ]);
        // sort by priorities and get the best one
        multimedia.sort((media1, media2) => {
          return priorities.get(media1.format) - priorities.get(media2.format);
        });
        return multimedia[0];
      },
      // get a topic/organization/location label for article
      label () {
        return (this.article.des_facet[0] ||
          this.article.org_facet[0] ||
          this.article.geo_facet[0] ||
          null);
      }
    },
    methods: {
      // Calculate how long ago the article was updated
      // Done as method cause new Date() needs to be updated every time
      timeUpdated: function() {
        // updated_date is in UTC-5 time zone
        let updatedAt = new Date(this.article.updated_date);
        let millisec = new Date() - updatedAt;
        let time = millisec/1000/60; // in minutes
        let unit = 'm';
        if (time >= 60) {
          time = time/60; // in hours
          unit = 'h';
          if (time >= 24) {
            time = time/24; //in days
            unit = 'd';
          }
        }
        return Math.round(time) + unit;
      }
    }
  }
</script>


<style scoped>
  .v-card {
    height: 100%;
  }
  .v-card__title {
    font-family: 'Cardo', serif;
    font-size: 16px;
  }
  .wrap-link {
    text-decoration: none;
  }
  .wrap-link .v-card {
    transition: 0.5s ease-in-out;
  }
  .wrap-link:hover .v-card {
    filter: contrast(120%);
    box-shadow: 0px 3px 2px 1px rgba(0, 0, 0, 0.2),
      0px 2px 3px 1px rgba(0, 0, 0, 0.2),
      0px 2px 4px 1px rgba(0, 0, 0, 0.2);
  }
</style>
