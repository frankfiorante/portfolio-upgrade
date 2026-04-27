export function emailLayout(content: string): string {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; color: #333; background: #ffffff;">
      <div style="background: linear-gradient(135deg, #6366f1, #818cf8); padding: 28px 32px;">
        <h1 style="color: #ffffff; font-size: 20px; font-weight: 600; letter-spacing: 0.5px; margin: 0;">
          Frank Fiorante
        </h1>
        <p style="color: rgba(255,255,255,0.7); font-size: 13px; margin: 4px 0 0; letter-spacing: 1px; text-transform: uppercase;">
          Full-Stack Engineer · Chicago, IL
        </p>
      </div>

      <div style="padding: 32px;">
        ${content}
      </div>

      <div style="background-color: #f9f9f9; padding: 16px 32px; text-align: center; border-top: 1px solid #eee;">
        <p style="font-size: 12px; color: #aaa; margin: 0;">
          This is an automated message. Please do not reply to this email.
        </p>
      </div>
    </div>
  `;
}
