type Web3FormsPayload = Record<string, string | boolean | number | undefined>;

/**
 * Submit a form via Web3Forms (works with static hosting / output: "export").
 * Requires NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.
 */
export async function submitWeb3Form(
  payload: Web3FormsPayload,
  subject: string,
): Promise<void> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error(
      "Form delivery is not configured. Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.",
    );
  }

  // Honeypot — silent success for bots
  if (payload.website) {
    return;
  }

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject,
      from_name: "SN Factory Website",
      ...payload,
      website: undefined,
    }),
  });

  const data = (await res.json()) as { success?: boolean; message?: string };

  if (!res.ok || !data.success) {
    throw new Error(data.message || "Failed to send message");
  }
}
