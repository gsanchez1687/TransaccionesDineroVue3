<template>
    <div class="row row-cols-1 row-cols-md-2 g-4 mt-3">
      <div class="col">
        <div class="card border-success">
          <div class="card-header text-bg-success">
            <h3 class="card-title text-center">
              <i class="fa-solid fa-sack-dollar"></i>&nbsp;Entradas
            </h3>
          </div>
          <div class="card-body">
            <p class="card-text h2 text-center text-success">+ {{ formatNumber(ingresos) }}</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card border-danger">
          <div class="card-header text-bg-danger">
            <h3 class="card-title text-center"><i class="fa-solid fa-money-bill-trend-up text-white"></i>&nbsp;Salidas
            </h3>
          </div>
          <div class="card-body">
            <p class="card-text h2 text-center text-danger">ca {{ formatNumber(gastos) }}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">

import { defineProps, type PropType } from 'vue';

type propTypes = {
  ingresos: number;
  gastos: number;
};

defineProps<propTypes>();

const formatNumber = (value: number) => {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(value);
}

</script>