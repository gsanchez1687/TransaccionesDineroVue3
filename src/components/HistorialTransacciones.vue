<template>
    <div class="row mt-3">
      <div class="col">
        <h2 class="border-bottom border-success pb-2">
          <i class="fa-solid fa-timeline"></i>&nbsp;Historial Transacciones
        </h2>
        <div v-for="item in transacciones" :key="item.id" :class="item.monto < 0 ? 'border-danger text-danger' : 'border-success'" class="card mb-1 fw-bold">
          <div class="card-body">
            <div class="row">
              <div class="col-5">
                {{ item.nombre }}
              </div>
              <div class="col-5">
                $ {{ item.monto }}
              </div>
              <div class="col-2">
                <button class="btn btn-danger border" aria-label="Eliminar"><i class="bi bi-trash3"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

type Transaccion = {
  id: number;
  nombre: string;
  monto: number;
};

type propTypes = {
  transacciones: Transaccion[];
};
defineProps<propTypes>();

</script>