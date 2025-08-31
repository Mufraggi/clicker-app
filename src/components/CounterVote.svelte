<script lang="ts">
	export let votes: Record<string, { name: string; votes: number }>;
</script>

<div class="flex gap-4">
	{#each Object.values(votes) as v (v.name)}
		<div class="p-2 bg-white rounded shadow">
			{v.name}: {v.votes}
		</div>
	{/each}
</div>
