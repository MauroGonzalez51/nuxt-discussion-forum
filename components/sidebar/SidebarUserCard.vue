<script setup lang="ts">
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const { status, signIn, signOut, getProviders } = useAuth();
const loggedIn = computed(() => status.value === "authenticated");

const providers = await getProviders();

const dropdownItems = computed<
	{ icon: string; text: string; action: () => unknown }[]
>(() => {
	return loggedIn.value
		? [
				{
					icon: "fluent:sign-out-20-regular",
					text: "Sign out",
					action: signOut,
				},
		  ]
		: Object.values(providers).map((provider) => ({
				icon: `mdi:${provider?.name.toLocaleLowerCase()}`,
				text: `Sign in with ${provider?.name}`,
				action: () => signIn(provider?.id),
		  }));
});
</script>

<template>
	<DropdownMenu>
		<DropdownMenuTrigger
			class="w-full h-full bg-rose-500 text-slate-50 rounded-md inline-flex space-x-4 items-center justify-center shadow-lg"
		>
			<LazySidebarLoggedInTrigger v-if="loggedIn" />
			<LazySidebarLoggedOutTrigger v-else />
		</DropdownMenuTrigger>
		<DropdownMenuContent>
			<DropdownMenuItem
				v-for="item in dropdownItems"
				:key="item.text"
				class="w-52"
			>
				<button
					class="inline-flex gap-2 items-center w-full h-full"
					@click="item.action"
				>
					<Icon :name="item.icon" class="text-3xl" />
					<span class="whitespace-normal">{{ item.text }}</span>
				</button>
			</DropdownMenuItem>
		</DropdownMenuContent>
	</DropdownMenu>
</template>
