<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const { data: session } = useAuth();

const imageURL = computed(() => session.value?.user?.image || "/default.png");
const avatarFallback = computed(() =>
	session.value?.user?.name
		?.split(" ")
		.map((word) => word[0])
		.slice(0, 2)
		.join(""),
);
</script>

<template>
	<div class="flex items-center gap-2">
		<Avatar>
			<AvatarImage
				:src="imageURL"
				class="border border-slate-50 rounded-full"
			/>
			<AvatarFallback>{{ avatarFallback }}</AvatarFallback>
		</Avatar>
		<span class="font-semibold">{{ session?.user?.name }}</span>
	</div>
	<Icon name="mdi:dots-horizontal" />
</template>
