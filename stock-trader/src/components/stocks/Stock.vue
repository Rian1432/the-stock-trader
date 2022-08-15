<template>
  <v-flex class="pb-3 pr-3" xs12 md6 lg4>
    <v-card class="green darken-3 white--text">
      <v-card-title>
        <strong>{{ stock.name }} <small>(Preço: {{ stock.price | currency }})</small></strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field label="Quantidade" type="number" :error="!haveMoney" v-model.number="quantity" @input="insufficientMoney" />
        <v-btn class="green darken-3 white--text" @click="buyStock" :disabled="quantity <= 0 || !haveMoney || !Number.isInteger(quantity)">
          {{ haveMoney ? 'Comprar' : 'insufciente' }}
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
      quantity: 0,
      haveMoney: true
    }
  },
  computed: {
    funds () {
      return this.$store.getters.funds
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.$store.dispatch('buyStock', order)
      this.quantity = 0
    },
    insufficientMoney() {
      this.quantity * this.stock.price < this.funds ? this.haveMoney = true : this.haveMoney = false
    }
  }
}
</script>

<style>

</style>