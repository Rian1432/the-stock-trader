<template>
  <v-layout row wrap>
    <template v-if="stocks.length > 0">
      <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
    </template>
    <p class="display-1 d-block font-weight-light text-center" v-else>Sem ações no portifólio... <small>compre ações para poder vendê-las</small></p>
  </v-layout>
</template>

<script>
import Stock from './Stock.vue'

export default {
  components: { Stock },
  computed: {
    stocks() {
      return this.$store.getters.stockPortifolio
    }
  }
}
</script>

<style>

</style>