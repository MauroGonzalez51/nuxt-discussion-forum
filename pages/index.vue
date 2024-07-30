<script setup lang="ts">
useHead({
	title: "Home",
});

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navbarLinks: NavbarLink[] = [
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

const openDropdowns = ref<{ [key: string]: boolean }>({});

const toggleDropdown = (label: string) =>
	(openDropdowns.value[label] = !openDropdowns.value[label]);
</script>

<template>
	<header
		class="sm:hidden border-b border-primary/10 px-4 h-14 w-full inline-flex items-center"
	>
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem
					v-for="item in navbarLinks"
					:key="item.label"
				>
					<template v-if="item.subpath">
						<NavigationMenuTrigger
							class="inline-flex items-center gap-1"
						>
							<span class="font-normal text-base">{{
								item.label
							}}</span>
						</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul
								class="p-4 w-96 grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] gap-4"
							>
								<li
									v-for="subItem in item.subpath"
									:key="subItem.label"
								>
									<NavigationMenuLink>
										<NuxtLink
											:to="subItem.to"
											class="w-full h-full flex items-center justify-start gap-2 select-none"
										>
											<Icon :name="subItem.icon" />
											<span>{{ subItem.label }}</span>
										</NuxtLink>
									</NavigationMenuLink>
								</li>
							</ul>
						</NavigationMenuContent>
					</template>
					<template v-else>
						<NavigationMenuLink>
							<NuxtLink
								:to="item.to"
								class="w-full h-full inline-flex items-center gap-1 select-none"
							>
								<span>{{ item.label }}</span>
							</NuxtLink>
						</NavigationMenuLink>
					</template>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	</header>

	<aside
		class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
		aria-label="Sidebar"
	>
		<div
			class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 border-r border-gray-500/20"
		>
			<ul class="space-y-2 font-medium">
				<li v-for="item in navbarLinks">
					<template v-if="item.subpath">
						<button
							type="button"
							class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
							:aria-controls="`dropdown-${item.label}`"
							@click="toggleDropdown(item.label)"
						>
							<Icon :name="item.icon" class="text-2xl" />
							<span
								class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap"
							>
								{{ item.label }}
							</span>

							<Icon
								v-if="!openDropdowns[item.label]"
								name="material-symbols:keyboard-arrow-down-rounded"
								class="text-2xl"
							/>

							<Icon
								v-else
								name="material-symbols:keyboard-arrow-up-rounded"
								class="text-2xl"
							/>
						</button>

						<ul
							:id="`dropdown-${item.label}`"
							:class="{ hidden: !openDropdowns[item.label] }"
							class="py-2 space-y-2"
						>
							<li
								v-for="subItem in item.subpath"
								:key="subItem.label"
							>
								<NuxtLink
									:to="subItem.to"
									class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
								>
									<Icon
										:name="subItem.icon"
										class="text-2xl"
									/>
									<span
										class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap"
									>
										{{ subItem.label }}
									</span>
								</NuxtLink>
							</li>
						</ul>
					</template>

					<template v-else>
						<NuxtLink
							:to="item.to"
							class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
						>
							<Icon :name="item.icon" class="text-2xl" />
							<span class="ms-3">{{ item.label }}</span>
						</NuxtLink>
					</template>
				</li>
			</ul>
		</div>
	</aside>
</template>
