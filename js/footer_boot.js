import { mountSiteFooter } from './footer_ui.js';

const ctx = {
  isM: true,
  root: '',
  assets: 'assets/',
  css: 'css/',
  partials: 'partials/',
  pages: { home: 'https://golmokmaster.com/m/index.html' },
};

document.body.classList.add('gm-shell-loaded', 'gm-shell-auth');
mountSiteFooter(ctx).catch((e) => console.warn('footer', e));
