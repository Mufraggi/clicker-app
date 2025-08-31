<script lang="ts">
	export let id: string;
	export let name: string;
	export let description: string;
	export let imageSrc: string;
	export let borderColor: string = "";   // valeur par défaut
	export let overlayColor: string = "";  // valeur par défaut
	export let onVote: (id: string, imageSrc: string, event: MouseEvent) => void;
</script>

<div class="space-y-4">
	<button
		on:click={(e) => onVote(id, imageSrc, e)}
		class="group relative overflow-hidden rounded-2xl p-0 h-auto bg-transparent hover:bg-transparent border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl {borderColor}"
	>
		<div class="aspect-square w-full max-w-xs mx-auto relative">
			<img
				src={imageSrc || "/placeholder.svg"}
				alt={name}
				class="w-full h-full object-cover rounded-xl"
			/>
			<div
				class="absolute inset-0 transition-colors rounded-xl {overlayColor}"
			></div></div>
	</button>

	<h2 class="text-2xl font-bold text-foreground">{name}</h2>
	<p class="text-muted-foreground text-sm">{description}</p>
</div>
