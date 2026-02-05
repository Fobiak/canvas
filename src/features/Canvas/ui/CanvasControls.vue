<script setup lang="ts">
import { useCanvas } from '../model/useCanvas'
import { ComButton } from '../../../shared/ComButton';
import BrushIcon from '../../../shared/assets/icons/BrushIcon.vue';
import EraserIcon from '../../../shared/assets/icons/EraserIcon.vue';

const {
    setDrawMode,
    setEraseMode,
} = useCanvas()
</script>

<template>
    <div class="flex gap-2">
        <ComButton class="flex gap-1" @click="setDrawMode">
            <BrushIcon />
            Рисовать
        </ComButton>

        <ComButton :type="'secondary'" class="flex gap-1" @click="setEraseMode">
            <EraserIcon />
            Стереть
        </ComButton>
    </div>
</template>
