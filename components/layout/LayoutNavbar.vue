<script setup lang="ts">
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationLinks } from "@/lib/navigationLinks";
</script>

<template>
	<header
		class="sm:hidden fixed bg-slate-50 backdrop-opacity-5 border-b border-primary/10 px-4 h-14 w-full inline-flex items-center"
	>
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem
					v-for="item in navigationLinks"
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
</template>
