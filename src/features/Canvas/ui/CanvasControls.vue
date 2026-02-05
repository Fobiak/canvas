<script setup lang="ts">
import { useCanvas } from '../model/useCanvas'
import { ComButton } from '../../../shared/ComButton';
import BrushIcon from '../../../shared/assets/icons/BrushIcon.vue';
import EraserIcon from '../../../shared/assets/icons/EraserIcon.vue';
import { BrushColors } from '../types/types';

const {
    setDrawMode,
    setEraseMode,
    brushSize,
    setBrushSize,
    brushColor,
    setBrushColor
} = useCanvas()
</script>

<template>
    <div class="flex gap-2">
        <div class="flex gap-2">
            <ComButton class="flex gap-1 items-center" @click="setDrawMode">
                <BrushIcon />
                Рисовать
            </ComButton>

            <ComButton :type="'secondary'" class="flex gap-1 items-center" @click="setEraseMode">
                <EraserIcon />
                Стереть
            </ComButton>
        </div>
        <div class="flex flex-col items-center gap-2">
            <p>Размер: {{ brushSize }}</p>
            <input type="range" min="1" max="10" v-model="brushSize" @input="setBrushSize(+brushSize)" />
        </div>
        <div class="flex flex-col gap-2">
            <div class="flex gap-2 items-center">
                <p>Цвет:</p>
                <button :style="{ backgroundColor: brushColor }" class="w-6 h-6 rounded border border-black" />
            </div>
            <div class="flex gap-1">
                <button v-for="color in BrushColors" :key="color" :style="{ backgroundColor: color }"
                    @click="setBrushColor(color)" class="w-6 h-6 rounded border border-black" />
            </div>
        </div>
    </div>
</template>
