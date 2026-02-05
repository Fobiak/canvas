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
    <div
        class="flex flex-col gap-2 p-3 rounded-lg items-center min-h-36 bg-white shadow-xl hover:shadow-2xl transition-all duration-200">
        <div class="flex flex-col gap-2">

            <div class="flex flex-row gap-2 justify-center">
                <ComButton @click="setDrawMode">
                    <BrushIcon />
                </ComButton>

                <ComButton :type="'secondary'" @click="setEraseMode">
                    <EraserIcon />
                </ComButton>
            </div>

            <input type="range" class="max-w-25 cursor-pointer accent-blue-500" min="1" max="10" v-model="brushSize"
                @input="setBrushSize(+brushSize)" />
        </div>

        <div class="flex gap-1">
            <ComButton v-for="color in BrushColors" :key="color" :style="{ backgroundColor: color }"
                @click="setBrushColor(color)" class="w-6 h-6 rounded border border-black" />
        </div>

        <div class="rounded-full border" :style="{
            width: brushSize * 2 + 'px', height: brushSize * 2 + 'px',
            backgroundColor: brushColor
        }" />
    </div>
</template>