import { ActionTypeEnum, BrushColors, type ActionType, type BrushColor } from "../types/types"

const canvasRef = ref<HTMLCanvasElement | null>(null)
const ctx = ref<CanvasRenderingContext2D | null>(null)

const isDrawing = ref<boolean>(false)
const mode = ref<ActionType>(null)
const brushSize = ref<number>(5)
const brushColor = ref<BrushColor>(BrushColors[0])

export function useCanvas() {
    function initCanvas() {
        if (!canvasRef.value)
            return

        ctx.value = canvasRef.value.getContext('2d')

        if (ctx.value) {
            ctx.value.lineCap = 'round'
            ctx.value.lineWidth = brushSize.value
        }
    }

    function setDrawMode() {
        mode.value = ActionTypeEnum.DRAWING
    }

    function setEraseMode() {
        mode.value = ActionTypeEnum.ERASE
    }

    function setBrushSize(size: number) {
        brushSize.value = size
        if (ctx.value) {
            ctx.value.lineWidth = brushSize.value
        }
    }

    function setBrushColor(color: BrushColor) {
        brushColor.value = color
        if (ctx.value) {
            ctx.value.strokeStyle = brushColor.value
        }
    }

    function start(e: MouseEvent) {
        if (!ctx.value || !mode.value)
            return

        isDrawing.value = true
        ctx.value.beginPath()
        ctx.value.moveTo(e.offsetX, e.offsetY)
    }

    function move(e: MouseEvent) {
        if (!isDrawing.value || !ctx.value)
            return

        if (mode.value === ActionTypeEnum.ERASE) {
            ctx.value.globalCompositeOperation = 'destination-out'
        } else {
            ctx.value.globalCompositeOperation = 'source-over'
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
        setDrawMode,
        setEraseMode,
        setBrushSize,
        setBrushColor,
        start,
        move,
        stop,
        mode,
        isDrawing,
        brushSize,
        brushColor
    }
}