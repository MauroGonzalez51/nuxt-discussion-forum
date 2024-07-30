<script setup lang="ts">
useHead({
	title: "Home",
});

const { data, status } = useAuth();
</script>

<template>
	<pre>
        {{ data }}
    </pre>
	{{ status }}
</template>
