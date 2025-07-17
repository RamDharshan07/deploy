/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'picsum.photos',       // For random placeholder images
      'example.com',         // Your custom domain
      'images.unsplash.com',  // Unsplash images
      'via.placeholder.com', // Placeholder.com
    ],
    
  },
};

export default nextConfig;