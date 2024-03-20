import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'AstroWind',
      href: '#AstroWind'
    },
    {
      text: 'Use cases',
      href: '#use-case'
    },
    {
      text: 'faq',
      href: '#faq'
    },
    {
      text: 'contact',
      href: '#contact',
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
};
