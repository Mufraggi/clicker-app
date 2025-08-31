// useVoting.ts
import { writable } from "svelte/store";

export interface FlyingImage {
	id: number;
	x: number;
	y: number;
	imageSrc: string;
}

export function useVoting() {
	const votes = writable<Record<string, { name: string; votes: number }>>({});
	const flyingImages = writable<FlyingImage[]>([]);
	let nextId = 0;

	const handleVote = (id: string, imageSrc: string, event: MouseEvent) => {
		// Met à jour les votes
		votes.update((v) => {
			if (!v[id]) {
				v[id] = { votes: 0, name: id };
			}
			v[id].votes++;
			return { ...v };
		});

		// Centre du bouton cliqué
		const button = event.currentTarget as HTMLElement;
		const rect = button.getBoundingClientRect();
		const x = rect.left + rect.width / 2;
		const y = rect.top + rect.height / 2;

		// Ajoute la bulle
		const newImage: FlyingImage = { id: nextId++, x, y, imageSrc };
		flyingImages.update((imgs) => [...imgs, newImage]);
	};

	return {
		votes,
		flyingImages,
		handleVote,
	};
}
