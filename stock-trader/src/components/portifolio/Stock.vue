<template>
  <v-flex class="pb-3 pr-3" xs12 md6 lg4>
    <v-card class="blue darken-3 white--text">
      <v-card-title>
        <strong>{{ stock.name }} <small>(Preço: {{ stock.price | currency }} | Quantidade: {{ stock.quantity }})</small></strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field label="Quantidade" :error="saleIsPossible" type="number" v-model.number="quantity" />
        <v-btn class="blue darken-3 white--text" @click="sellStock" :disabled="saleIsPossible">
          {{ saleIsPossible ? 'Insuficiente' : 'vender' }}
        </v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ['stock'],
  data () {
    return {
      quantity: 1
    }
  },
  computed: {
    saleIsPossible() {
      return this.quantity > this.stock.quantity || this.quantity <= 0 || !Number.isInteger(this.quantity)
    }
  },
  methods: {
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.$store.dispatch('sellStock', order)
      this.quantity = 0
    }
  }
}
</script>

<style>

</style>