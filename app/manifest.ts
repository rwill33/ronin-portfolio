import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ronin Williams-Young | AI Engineer & Full-Stack Developer',
    short_name: 'Ronin Williams-Young',
    description:
      'AI Engineer at Bond Brand Loyalty and Software Engineering student at Western University. Expert in React, TypeScript, Python, AI/ML, and enterprise software development.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '16x16 32x32',
        type: 'image/x-icon',
      },
      {
        src: '/sf_pic3.jpeg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: '/sf_pic3.jpeg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
    categories: ['business', 'developer-tools', 'education', 'productivity'],
    lang: 'en',
    dir: 'ltr',
  };
}
