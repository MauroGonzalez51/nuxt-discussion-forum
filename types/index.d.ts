export {};

declare global {
	interface NavbarLink {
		label?: string;
		icon?: string;
		to: string;
	}
}
