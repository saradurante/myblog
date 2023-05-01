import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'Do It Fit',
  subtitle: 'Do it fit',
  lang: 'it-IT',
  description: 'Blog di ricette healthy e fit, ma con gusto',
  author: {
    name: 'Sara Durante',
    status: '👩🏽‍🍳',
    bio: 'Professional Chef, in the free time Nurse.'
  },
  themeColor: '#3D4451'
}
