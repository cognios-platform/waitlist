import { Resend } from "resend";

const emailFrom =
  process.env.EMAIL_FROM ??
  process.env.NOREPLY_EMAIL ??
  "onboarding@resend.dev";

function welcomeEmailHtml(): string {
  return `
  <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #010101;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #010101; padding: 40px 20px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color: #1e2736; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.45);">
              <tr>
                <td style="background: linear-gradient(180deg, #14939e 0%, #0f141b 100%); padding: 24px 0px 24px; text-align: center;">
                  <h1 style="color: #ffffff; font-size: 28px; font-weight: 700; margin: 0;">You're on the list</h1>
                </td>
              </tr>
              
              <tr>
                <td style="padding: 20px;">
                  <p style="color: #a5b4c3; font-size: 14px; line-height: 1.6; margin: 0 0 16px 0; text-align: center">
                    Thanks for signing up for early access to Cognios.
                  </p>
                  <p style="color: #a5b4c3; font-size: 14px; line-height: 1.6; text-align: center">
                    Cognios is building agentic tutors for adaptive, token-powered learning with on-chain milestone rewards. We'll email you when we're ready to launch.
                  </p>
                  <p style="color: #a5b4c3; font-size: 14px; line-height: 1.6; margin: 10px 0 0 0; text-align: center">
                    In the meantime, feel free to reach out if you have questions.
                  </p>
                </td>
              </tr>
              
              <tr>
                <td style="padding: 24px 0px; text-align: center; border-top: 1px solid #394558;">
                  <p style="color: #728396; font-size: 12px; margin: 0 0 8px 0;">
                    Need help? Contact us at <a href="mailto:support@cognios.io" style="color: #1cb9c7; text-decoration: none;">support@cognios.io</a>
                  </p>
                  <p style="color: #728396; font-size: 12px; margin: 0;">
                    © ${new Date().getFullYear()} Cognios. All rights reserved.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

export async function sendWelcomeEmail(to: string): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY not set; skipping welcome email");
    return false;
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: emailFrom,
    to,
    subject: "You're on the Cognios early access list",
    html: welcomeEmailHtml(),
  });

  if (error) {
    console.error("Resend error:", error);
    return false;
  }

  return true;
}
