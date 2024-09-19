// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@uploadthing/nuxt"],
	uploadthing: {
		/**
		 * Path to your router definition file
		 * @default `~/server/uploadthing.ts`
		 */
		routerPath: "./server/uploadthing",
	},
	compatibilityDate: "2024-04-03",
	devtools: {enabled: true},
})
