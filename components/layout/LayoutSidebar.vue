<script setup lang="ts">
import { navigationLinks } from "@/lib/navigationLinks";

const openDropdowns = ref<{ [key: string]: boolean }>({});

const toggleDropdown = (label: string) =>
	(openDropdowns.value[label] = !openDropdowns.value[label]);
</script>

<template>
	<aside
		class="z-40 h-screen transition-transform -translate-x-full sm:translate-x-0"
		aria-label="Sidebar"
	>
		<div
			class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 border-r border-gray-500/20 flex flex-col justify-between"
		>
			<ul class="space-y-2 font-medium">
				<li v-for="item in navigationLinks">
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

			<div class="w-full h-16">
				<SidebarUserCard />
			</div>
		</div>
	</aside>
</template>
