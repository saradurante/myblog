import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'Urara',
  subtitle: 'Sweet & Powerful SvelteKit Blog Template',
  lang: 'it-IT',
  description: 'Powered by SvelteKit/Urara',
  author: {
    name: 'Sara Durante',
    status: '👩🏽‍🍳',
    bio: 'Blog di ricette healthy e fit, ma con gusto!'
  },
  themeColor: '#3D4451'
}
