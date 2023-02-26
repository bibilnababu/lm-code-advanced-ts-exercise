import { User } from "../types/posts.types";
export let users: { name: string }[] = [];
export function getAllUsers(): User[] {
	// in the absence of a true Model layer, our service can simply return a hard-coded array of users

	return [
		{
			id: "1",
			name: "Spicy Hotfish",
			creationDate: new Date(),
		},
		{
			id: "2",
			name: "Sally-Anne Writerperson",
			creationDate: new Date(),
		},
		{
			id: "3",
			name: "Jimmy Alias",
			creationDate: new Date(),
		},
		{
			id: "4",
			name: 'Steve "The Hoop" Hooper',
			creationDate: new Date(),
		},
	];


	





}
