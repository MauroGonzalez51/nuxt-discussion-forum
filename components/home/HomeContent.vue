<script setup lang="ts">
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage } from '@/components/ui/avatar'

const { data: session } = useAuth();
const imageSrc = computed(() => session.value?.user?.image || "/default.png");
</script>

<template>
	<div class="">
		<!-- HomeForumCard -->
		<div class="flex flex-col bg-gray-800 rounded-md p-4">
			<!-- HomeForumCardHeader -->
			<div class="flex justify-between items-center">
				<div class="font-bold text-3xl capitalize">forum.title</div>

				<!-- HomeForumCardProfileInfo -->
				<DropdownMenu>
					<DropdownMenuTrigger
						class="inline-flex items-center gap-3 my-2"
					>
						<div class="flex flex-col w-60 items-end">
							<span class="italic text-sm">Published by</span>
							<span class="line-clamp-1">forum.publishedBy</span>
						</div>
						<NuxtImg :src="imageSrc" class="size-14" />
					</DropdownMenuTrigger>
					<DropdownMenuContent class="w-52">
						<DropdownMenuItem>
							<Icon name="mdi:user" class="text-2xl mr-2" />
							See profile
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Icon name="mdi:invite" class="text-2xl mr-2" />
							Invite to forum
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>

			<!-- HomeForumCardSeparator-->
			<div
				class="h-[0.125rem] bg-gradient-to-r from-gray-600 to-gray-800 my-2 w-4/5"
			></div>

			<!-- HomeForumCardContent -->
			<div>
				<span class="block italic text-sm my-2">Description</span>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
				perferendis voluptatem doloremque error, ipsam fugit quis
				aliquam dolore, dolores sint architecto, quibusdam magnam? Ad
				error harum fuga veritatis quisquam iusto!
			</div>

			<!-- HomeForumCardReplies -->
			<div class="my-2">
				<Textarea
					class="resize-y"
					placeholder="Type your reply here ..."
				/>
				<div class="my-2">
					<span class="italic text-sm">Replies</span>
					<div class="my-2">
						<!-- HomeForumCardReply -->
						<div class="flex flex-col gap-2">
                            <div class="flex items-center gap-2">
                                <Avatar>
                                    <AvatarImage src="/default.png" />
                                </Avatar>
                                <div class="flex flex-col">
                                    <span class="font-bold">reply.publishedBy.name</span>
                                    <span class="text-sm">reply.publishedBy.email</span>
                                </div>
                            </div>
                            <Textarea class="resize-none bg-gray-900" defaultValue="reply.content" />
                        </div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
