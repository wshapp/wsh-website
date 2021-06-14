/* eslint-disable no-undef */
module.exports = {
  future: {
    webpack5: true,
  },
  async redirects() {
    return [
      {
        source: "/register",
        destination: "/auth/register",
        permanent: true,
      },
      {
        source: "/login",
        destination: "/auth",
        permanent: true,
      },
    ];
  },
};
