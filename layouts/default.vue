<template>
	<main class="min-h-screen">
		<LayoutNavbar class="sm:hidden" />
		<div class="sm:flex h-full">
			<LayoutSidebar class="hidden sm:block" />
			<slot class="overflow-y-scroll" />
		</div>
	</main>
</template>
