const {env: _, cwd} = process;

export const vars = {
  port: Number(_.PORT ?? 3000),
  zoneinfo: _.TZ ?? 'GMT',
  path: cwd(),
  hostname: _.HOSTNAME ?? 'http://localhost:3000',
  jwt: {
    publicKey: _.JWT_PUBLIC_KEY ?? 'secret',
    privateKey: _.JWT_PRIVATE_KEY ?? 'secret',
    algorithm: _.JWT_ALGORITHM ?? 'HS256',
    maxAge: Number(_.JWT_MAX_AGE ?? 24 * 60 * 60),
  },
};
