<script setup lang="ts">
const { data, status } = useAuth();
</script>

<template>
	<pre>
        {{ data }}
    </pre>
	{{ status }}
</template>
