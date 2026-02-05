<script setup lang="ts">
import { Canvas, CanvasControls } from '../features/Canvas';
</script>

<template>
  <div class="flex flex-col gap-2 h-screen overflow-hidden items-center justify-center">
    <div class="flex-1">
      <Canvas />
    </div>
    <div class="shrink-0 p-2">
      <CanvasControls />
    </div>
  </div>
</template>

