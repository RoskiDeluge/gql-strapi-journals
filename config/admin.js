module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4541099fed6b8ff68a8827fff2fd5536'),
  },
});
