<script lang="ts">
	export let x:number;
	export let y:number;
	export let imageSrc:string;
</script>

<div
	class="fixed pointer-events-none z-50 flying-bubble"
	style:left="{x - 30}px"
	style:top="{y - 30}px"
>
	<div class="w-16 h-16 rounded-full overflow-hidden border-2 border-primary shadow-lg">
		<img
			src={imageSrc || "/placeholder.svg"}
			alt="Bulle de vote"
			class="w-full h-full object-cover"
		/>
	</div>
</div>

<style>
    .flying-bubble {
        animation: flyUp 2s ease-out forwards;
    }

    @keyframes flyUp {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        50% {
            transform: translateY(-100px) scale(1.2);
            opacity: 0.8;
        }
        100% {
            transform: translateY(-200px) scale(0.8);
            opacity: 0;
        }
    }
</style>
