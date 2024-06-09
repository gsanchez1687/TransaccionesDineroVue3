<template>
  <div class="row mt-3">
    <!--Balance-->
    <div class="col-4">
      <h2>Tu balance:</h2>
      <h3 class="text-end">{{ formatNumber(total) }}</h3>
    </div>
     <!--NumeroTransacciones-->
     <div class="col-8">
      <h2 class="text-end"># Transacciones:</h2>
      <h3 class="text-end">{{ numeroTransacciones }}</h3>
    </div>
    <!--/NumeroTransacciones-->
    <!--/Balance-->
  </div>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from 'vue';

type propTypes = {
  total: number;
  numeroTransacciones: number;
};

defineProps<propTypes>();


const formatNumber = (value: number) => {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(value);
}


</script>