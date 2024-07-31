<template>
	<div class="min-h-screen flex flex-col">
		<LayoutNavbar class="sm:hidden fixed top-0 left-0 z-10 h-14" />
		<div class="flex-grow flex sm:mt-0 mt-14">
			<LayoutSidebar
				class="hidden sm:block fixed top-0 left-0 h-full w-64 z-10"
			/>
			<main class="flex-grow sm:ml-64 overflow-y-auto p-4">
				<slot />
			</main>
		</div>
	</div>
</template>
