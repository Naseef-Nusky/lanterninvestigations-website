const API_BASE = import.meta.env.VITE_API_URL || '';

/**
 * Sends a contact form enquiry through the shared SendGrid API.
 * @param {{ name: string, email: string, phone: string, message: string, source?: string }} data
 */
export async function sendContactEnquiry(data) {
  const response = await fetch(`${API_BASE}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  let payload = null;
  try {
    payload = await response.json();
  } catch {
    payload = null;
  }

  if (!response.ok || !payload?.ok) {
    throw new Error(payload?.error || 'Failed to send message.');
  }

  return payload;
}
