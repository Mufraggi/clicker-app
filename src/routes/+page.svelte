<script lang="ts">
	import FlyingBubble from '../components/FlyingBubble.svelte';
	import { useVoting } from '$lib/hooks/voting';
	import CounterVote from '../components/CounterVote.svelte';
	import VotingCard from '../components/VotingCard.svelte';

	const { votes, flyingImages, handleVote } = useVoting();
</script>

<div class="min-h-screen bg-gradient-to-br from-background to-muted flex flex-col items-center justify-center p-4 relative overflow-hidden">
	{#each $flyingImages as img (img.id)}
		<FlyingBubble
			x={img.x}
			y={img.y}
			imageSrc={img.imageSrc}
			on:animationend={() => {
			flyingImages.update(imgs => imgs.filter(i => i.id !== img.id));
		}}
		/>
	{/each}

	<div class="text-center space-y-8 max-w-4xl mx-auto">
		<div class="space-y-4">
			<h1 class="text-4xl md:text-6xl font-bold text-foreground text-balance">Qui est le plus fort ?</h1>
			<p class="text-lg md:text-xl text-muted-foreground">Cliquez sur votre champion pour voter !</p>
		</div>

		<CounterVote votes={$votes} />

		<div class="grid md:grid-cols-2 gap-8 md:gap-12">
			<VotingCard
				id="chuck"
				name="Chuck Norris"
				description="Légende des arts martiaux"
				imageSrc="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS1nDOsmj28MsHgvUOdkEkJAmHRcasdXzYx51A2f-y0E2G7mz2E-NImAu7jwkrjpDDjV8Y_Ocmp0rOHAKpsxqaHckQW-h-Adnaip8pKUAi4IA"
				onVote={handleVote}
			/>
			<VotingCard
				id="jackie"
				name="Jackie Chan"
				description="Maître du kung-fu"
				imageSrc="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQvpWix847pTIuO3_HOEX_zyHmG3gJUDpkhieKAwxxK6rxgg3rmnw9EZ-3DXknWmHJEggcf-UDVFag2adw4hb7chk1B6zzIdaM_4_kTg0YQlg"
				onVote={handleVote}
			/>
		</div>

		<p class="text-muted-foreground text-sm max-w-md mx-auto">
			Cliquez sur l'image de votre héros préféré pour voter. Regardez les têtes s'envoler à chaque vote !
		</p>
	</div>
</div>

