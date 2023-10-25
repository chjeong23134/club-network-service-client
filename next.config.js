/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	async rewrites() {
		return [
			{
				source: "/auth/:path*",
				destination: "http://localhost:8080/auth/:path*",
			},
			{
				source: "/rooms/:path*",
				destination: "http://localhost:8080/rooms/:path*",
			},
		];
	},
};

module.exports = nextConfig
