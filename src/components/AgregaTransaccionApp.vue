<template>
  <div class="row mt-3">
    <div class="col">
      <h2 class="border-bottom border-primary pb-2">
        <i class="fa-regular fa-calendar-plus"></i>&nbsp;Agregar transacción
      </h2>
      <form @submit.prevent.stop="agregarTransaccion">
        <div class="mb-3">
          <label for="concepto" class="form-label">Concepto</label>
          <input type="text" v-model="nombre" class="form-control" id="concepto" aria-describedby="conceptoHelp" />
        </div>
        <div class="mb-3">
          <label for="cantidad" class="form-label">Cantidad</label>
          <input type="number" v-model.number="monto" class="form-control" id="cantidad" aria-describedby="cantidadHelp" />
          <div id="cantidadHelp" class="form-text fw-bold">
            Cantidad positiva(+): ingreso, cantidad negativa(-): gasto.
          </div>
        </div>
        <div class="d-grid">
          <button type="submit" class="btn btn-lg btn-primary" aria-label="Agregar"><i
              class="fa-solid fa-plus"></i>&nbsp;Agregar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification';
import { ref } from 'vue';
import type { Transaccion } from '@/types/types';

const nombre = ref('');
const monto = ref(0);
const toast = useToast();
const emit = defineEmits<{
  (e: 'agregar-transaccion', transaccion: Transaccion): void;
}>();
// Función para agregar una transacción
const agregarTransaccion = () => {
  if (nombre.value.trim() === '' || monto.value === 0) {
    toast.error('El concepto y la cantidad son obligatorios');
    return;
  }

  const transaccion = {
    id: 0,
    nombre: nombre.value,
    monto: monto.value,
  };

  //Emitir evento para agregar la transacción
  emit('agregar-transaccion', transaccion);

  //Limpiar campos
  nombre.value = '';
  monto.value = 0;

};

</script>