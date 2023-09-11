
export default ({ env }) => ({
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                service: "mail.ru",
              host: env('SMTP_HOST', 'smtp.example.com'),
              port: env('SMTP_PORT', 587),
              auth: {

                user: env('SMTP_USERNAME'),
                pass: env('SMTP_PASSWORD'),
              },
              // ... any custom nodemailer options
            },
            settings: {
              defaultFrom: 'registration_takeframe@mail.ru',
              defaultReplyTo: 'registration_takeframe@mail.ru',
            },
          },
        }

  }); 