<script setup lang="ts">
import { Canvas, CanvasControls } from '../features/Canvas';
</script>

<template>
    <div class="flex flex-col h-screen overflow-hidden items-center justify-center">
        <Canvas class="flex-1 pt-5" />
        <div class="shrink-0 p-2">
            <CanvasControls />
        </div>
    </div>
</template>
