<script setup lang="ts">
import { onMounted } from 'vue'
import { useCanvas } from '../model/useCanvas'

const {
    canvasRef,
    initCanvas,
    start,
    move,
    stop,
} = useCanvas()

onMounted(() => {
    initCanvas()
    window.addEventListener('mouseup', stop)
})

onUnmounted(() => {
    window.removeEventListener('mouseup', stop)
})
</script>

<template>
    <canvas ref="canvasRef" class="border border-black bg-white" @mousedown="start" @mousemove="move" />
</template>