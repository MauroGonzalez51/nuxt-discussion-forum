export const navigationLinks: NavigationLink[] = [
	{
		to: "/",
		icon: "material-symbols:home",
		label: "Home",
	},
	{
		to: "/search",
		icon: "material-symbols:search",
		label: "Search",
		subpath: [
			{
				to: "/search",
				icon: "material-symbols:forum-outline",
				label: "Forum",
			},
			{
				to: "/search/categories",
				icon: "material-symbols:category",
				label: "Categories",
			},
		],
	},
	{
		to: "/dashboard/notifications",
		icon: "material-symbols:notifications",
		label: "Notifications",
	},
];

export default navigationLinks;
