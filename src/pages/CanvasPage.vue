<script setup lang="ts">
import { Canvas, CanvasControls } from '../features/Canvas';
</script>

<template>
    <div class="flex h-screen overflow-hidden justify-center gap-4 py-6 px-4">
        <Canvas class="flex-1" />
        <div class="shrink-0">
            <CanvasControls />
        </div>
    </div>
</template>
