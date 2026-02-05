<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useCanvas } from '../model/useCanvas'

const {
    canvasRef,
    initCanvas,
    start,
    move,
    stop,
} = useCanvas()
const wrapperRef = ref<HTMLElement | null>(null)

function resizeCanvas() {
    if (!canvasRef.value || !wrapperRef.value)
        return
    canvasRef.value.width = wrapperRef.value.clientWidth - 100
    canvasRef.value.height = wrapperRef.value.clientHeight - 50
    initCanvas()
}

onMounted(() => {
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mouseup', stop)
})

onUnmounted(() => {
    window.removeEventListener('resize', resizeCanvas)
    window.removeEventListener('mouseup', stop)
})
</script>

<template>
    <div ref="wrapperRef" class="size-full flex items-center justify-center">
        <canvas ref="canvasRef" class="border-4 border-cyan-600 bg-white rounded-2xl" @mousedown="start"
            @mousemove="move" />
    </div>
</template>
