export function getConfig() {
  return {
    domain: import.meta.env.VITE_AUTH0_DOMAIN || 'dev-yukinissie.jp.auth0.com',
    clientId:
      import.meta.env.VITE_AUTH0_CLIENT_ID ||
      'veQ0Z78xSFHcg0rsoDcumKF3XkvTcOaY',
  }
}
