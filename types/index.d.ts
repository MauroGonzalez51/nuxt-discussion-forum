export {};

declare global {
	interface NavigationLink {
		label: string;
		icon: string;
		to: string;
		subpath?: navigationLink[];
	}
}
