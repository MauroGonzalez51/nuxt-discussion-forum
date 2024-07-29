// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	modules: ["@prisma/nuxt", "@sidebase/nuxt-auth"],
	prisma: {
		autoSetupPrisma: true,
		generateClient: true,
		installStudio: true,
	},
	runtimeConfig: {
		GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
		GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
		AUTH_SECRET: process.env.AUTH_SECRET,
	},
});
