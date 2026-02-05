<script setup lang="ts">
const props = defineProps<{
    type?: 'primary' | 'secondary'
}>()

const type = props.type || 'primary'

const baseClasses = 'rounded-md p-2 cursor-pointer transition-transform duration-150 transform active:scale-95'

const typeClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-300 text-gray-800 hover:bg-gray-300',
}

</script>
<template>
    <button :class="[baseClasses, typeClasses[type]]" @click="$emit('click', $event)">
        <slot />
    </button>
</template>
