<template>

<div class="container">
  <div class="col-md-12">
    <!--Encabezado-->
      <EncabezadoApp />
    <!--fin Encabezado-->
    <!--Balance-->
      <BalanceApp :total="total" :numeroTransacciones="numeroTransacciones" />
    <!--fin Balance-->
    <!--Border-->
      <Border />
    <!--fin border-->
    <!--Resumen-->
      <ResumenApp :ingresos="ingresos" :gastos="gastos" />
    <!--/Resumen-->
    <!--HistorialTransacciones-->
      <HistorialTransacciones  :transacciones="transacciones" />
    <!--/HistorialTransacciones-->
    <!--AgregarTransaccion-->
      <AgregaTransaccionApp />
    <!--/AgregarTransaccion-->
  </div>
</div>

</template>

<script setup lang="ts">
import EncabezadoApp from './EncabezadoApp.vue'
import BalanceApp from './BalanceApp.vue'
import ResumenApp from './ResumenApp.vue';
import HistorialTransacciones from './HistorialTransacciones.vue';
import AgregaTransaccionApp from './AgregaTransaccionApp.vue';
import Border from './Border.vue';
import { ref, computed } from 'vue';


type Transaccion = {
  id: number;
  nombre: string;
  monto: number;
}



//declarar un arreglo reactivo de tipo transaccion
const transacciones = ref<Transaccion[]>([
  {
    id: 1,
    nombre: 'Salario',
    monto: 2000000
  },
  {
    id: 2,
    nombre: 'Segunda transacción',
    monto: 600000
  },
  {
    id: 3,
    nombre: 'Tercera transacción',
    monto: -20000
  },
  {
    id: 4,
    nombre: 'Cuarta transacción',
    monto: -100000
  }
]);

const total = computed(() => {
  return transacciones.value.reduce((acc, item) => acc + item.monto, 0);
});

const numeroTransacciones = computed(() => {
  return transacciones.value.length;
});

const ingresos = computed(() => {
  return transacciones.value.filter(item => item.monto > 0).reduce((acc, item) => acc + item.monto, 0);
});

const gastos = computed(() => {
  return transacciones.value.filter(item => item.monto < 0).reduce((acc, item) => acc + item.monto, 0);
});




</script>