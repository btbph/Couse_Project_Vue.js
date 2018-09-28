<template>
  <div>
    <v-app>
      <layout-golden class="hscreen">
        <template slot="center">
          Center
        </template>
        <template slot="right">
          Right
        </template>
        <gl-row :closable="false">
          <gl-col>
            <gl-component title="Exchage">
              <TheExchange/>
            </gl-component>
          </gl-col>
          <gl-col>
            <gl-component title="Pair">
              <ThePair/>
            </gl-component>
          </gl-col>
          <gl-col>
            <gl-component title="Trades" class="trades">
              <TheTrades/>
            </gl-component>
          </gl-col>
        </gl-row>
      </layout-golden>
    </v-app>
  </div>
</template>

<script>
import TheExchange from '@/components/TheExchange'
import ThePair from '@/components/ThePair'
import TheTrades from '@/components/TheTrades'

import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    TheExchange,
    ThePair,
    TheTrades
  },
  methods: {
    ...mapActions({ setStocks: 'setAllStocks' })
  },
  created() {
    this.setStocks()
  }
}
</script>

<style>
  .hscreen {
    width: 100vw;
    min-height: 100vh;
  }
  .trades {
    overflow: scroll;
  }
  .glComponent {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
</style>