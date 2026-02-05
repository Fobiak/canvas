import { ActionTypeEnum, type ActionType } from "../types/types"

const canvasRef = ref<HTMLCanvasElement | null>(null)
const ctx = ref<CanvasRenderingContext2D | null>(null)

/** Флаг , рисуем ли мы */
const isDrawing = ref(false)
/** Текущий режим рисования */
const mode = ref<ActionType>(null)

export function useCanvas() {
    function initCanvas() {
        if (!canvasRef.value)
            return

        ctx.value = canvasRef.value.getContext('2d')

        if (ctx.value) {
            ctx.value.lineCap = 'round'
        }
    }

    function setDrawMode() {
        mode.value = ActionTypeEnum.DRAWING
    }

    function setEraseMode() {
        mode.value = ActionTypeEnum.ERASE
    }

    function start(e: MouseEvent) {
        if (!ctx.value || !mode.value)
            return

        isDrawing.value = true
        ctx.value.beginPath()
        ctx.value.moveTo(e.offsetX, e.offsetY)
    }

    function move(e: MouseEvent) {
        if (!isDrawing.value || !ctx.value) return

        if (mode.value === ActionTypeEnum.ERASE) {
            ctx.value.globalCompositeOperation = 'destination-out'
            ctx.value.lineWidth = 20
        } else {
            ctx.value.globalCompositeOperation = 'source-over'
            ctx.value.strokeStyle = '#000'
            ctx.value.lineWidth = 5
        }

        ctx.value.lineTo(e.offsetX, e.offsetY)
        ctx.value.stroke()
    }

    function stop() {
        isDrawing.value = false
    }

    return {
        canvasRef,
        initCanvas,
        start,
        move,
        stop,
        setDrawMode,
        setEraseMode,
        mode,
        isDrawing,
    }
}