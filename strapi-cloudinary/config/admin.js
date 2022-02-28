module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '772ac17e8a8591089c51bd12d0d0853e'),
  },
});
