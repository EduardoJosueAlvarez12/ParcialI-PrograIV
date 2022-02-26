<template>
    <div>
        <h1>Opciones de almuerzos</h1>
        <almuerzo/>
    </div>
</template>

<script>
import Almuerzo from '../components/almuerzo.vue'

export default {
    name: 'almuerzoView',
    components: { Almuerzo }
}
</script>