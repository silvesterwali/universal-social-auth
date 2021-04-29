interface ProderT {
  [x: string]: Record<string, unknown>;
}

const Providers: ProderT = {
  apple: {
    name: 'apple',
    url: '/auth/apple',
    authorizationEndpoint: 'https://appleid.apple.com/auth/authorize',
    redirectUri: window.location.origin + '/',
    responseType: ['code'],
    requiredUrlParams: ['scope'],
    scope: ['name', 'email'],
    scopeDelimiter: '%20',
    display: 'popup',
    usePopup: true,
    oauthType: '2.0',
    popupOptions: { width: 580, height: 400 }
  },
  facebook: {
    name: 'facebook',
    url: '/auth/facebook',
    authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
    redirectUri: window.location.origin + '/',
    responseMode: ['form_post'],
    requiredUrlParams: ['scope'],
    scope: ['email'],
    scopeDelimiter: ',',
    display: 'popup',
    oauthType: '2.0',
    popupOptions: { width: 580, height: 400 }
  },

  google: {
    name: 'google',
    url: '/auth/google',
    authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
    redirectUri: window.location.origin,
    requiredUrlParams: ['scope'],
    optionalUrlParams: ['display'],
    scope: ['profile', 'email'],
    scopePrefix: 'openid',
    scopeDelimiter: ' ',
    display: 'popup',
    oauthType: '2.0',
    popupOptions: { width: 452, height: 633 }
  },

  github: {
    name: 'github',
    url: '/auth/github',
    authorizationEndpoint: 'https://github.com/login/oauth/authorize',
    redirectUri: window.location.origin,
    optionalUrlParams: ['scope'],
    scope: ['user:email'],
    scopeDelimiter: ' ',
    oauthType: '2.0',
    popupOptions: { width: 1020, height: 618 }
  },

  instagram: {
    name: 'instagram',
    url: '/auth/instagram',
    authorizationEndpoint: 'https://api.instagram.com/oauth/authorize',
    redirectUri: window.location.origin,
    requiredUrlParams: ['scope'],
    scope: ['basic'],
    scopeDelimiter: '+',
    oauthType: '2.0',
    popupOptions: { width: null, height: null }
  },

  twitter: {
    name: 'twitter',
    url: '/auth/twitter',
    authorizationEndpoint: 'https://api.twitter.com/oauth/authenticate',
    redirectUri: window.location.origin,
    oauthType: '2.0',
    popupOptions: { width: 495, height: 645 }
  },
  twitter2: {
    name: 'twitter',
    url: '/auth/twitter',
    authorizationEndpoint: 'https://api.twitter.com/oauth/authenticate',
    tokenURL: 'https://api.twitter.com/oauth2/token',
    redirectUri: window.location.origin,
    scopeDelimiter: ',',
    sessionKey: 'oauth:twitter',
    userProfileURL:
      'https://api.twitter.com/1.1/account/verify_credentials.json',
    oauthType: '2.0',
    popupOptions: { width: 495, height: 645 }
  },

  bitbucket: {
    name: 'bitbucket',
    url: '/auth/bitbucket',
    authorizationEndpoint: 'https://bitbucket.org/site/oauth2/authorize',
    redirectUri: window.location.origin + '/',
    optionalUrlParams: ['scope'],
    scope: ['email'],
    scopeDelimiter: ' ',
    oauthType: '2.0',
    popupOptions: { width: 1020, height: 618 }
  },

  linkedin: {
    name: 'linkedin',
    url: '/auth/linkedin',
    authorizationEndpoint: 'https://www.linkedin.com/oauth/v2/authorization',
    redirectUri: window.location.origin,
    requiredUrlParams: ['state', 'scope'],
    scope: ['r_emailaddress'],
    scopeDelimiter: ' ',
    state: 'STATE',
    oauthType: '2.0',
    popupOptions: { width: 527, height: 582 }
  },

  vkontakte: {
    name: 'vkontakte',
    url: '/auth/vkontakte',
    authorizationEndpoint: 'https://oauth.vk.com/authorize',
    redirectUri: window.location.origin + '/',
    requiredUrlParams: ['scope'],
    scope: ['email'],
    scopeDelimiter: ',',
    display: 'popup',
    oauthType: '2.0',
    popupOptions: { width: 580, height: 400 }
  },

  live: {
    name: 'live',
    url: '/auth/live',
    authorizationEndpoint: 'https://login.live.com/oauth20_authorize.srf',
    redirectUri: window.location.origin,
    requiredUrlParams: ['display', 'scope'],
    scope: ['wl.emails'],
    scopeDelimiter: ' ',
    display: 'popup',
    oauthType: '2.0',
    popupOptions: { width: 500, height: 560 }
  },

  oauth1: {
    name: null,
    url: '/auth/oauth1',
    authorizationEndpoint: null,
    redirectUri: window.location.origin,
    oauthType: '1.0',
    popupOptions: null
  },

  oauth2: {
    name: null,
    url: '/auth/oauth2',
    clientId: null,
    redirectUri: window.location.origin,
    authorizationEndpoint: null,
    defaultUrlParams: ['response_type', 'client_id', 'redirect_uri'],
    requiredUrlParams: null,
    optionalUrlParams: null,
    scope: null,
    scopePrefix: null,
    scopeDelimiter: null,
    state: null,
    oauthType: '2.0',
    popupOptions: null,
    responseType: 'code',
    responseParams: {
      code: 'code',
      clientId: 'clientId',
      redirectUri: 'redirectUri'
    }
  }
};

const Apple = Providers.apple;
const Facebook = Providers.facebook;
const Google = Providers.google;
const Github = Providers.github;
const Instagram = Providers.instagram;
const Twitter = Providers.twitter;
const Bitbucket = Providers.bitbucket;
const Linkedin = Providers.linkedin;
const Vkontakte = Providers.vkontakte;
const Live = Providers.live;
const Oauth1 = Providers.oauth1;
const Oauth2 = Providers.oauth2;
export {
  Providers,
  Apple,
  Facebook,
  Google,
  Github,
  Instagram,
  Bitbucket,
  Twitter,
  Vkontakte,
  Live,
  Linkedin,
  Oauth2,
  Oauth1,
  ProderT
};
