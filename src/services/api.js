const BASE_URL = 'http://localhost:5173/api'; // Update this to your production URL later

/**
 * Sends text to the backend to get a simplified explanation.
 */
export async function explainText(text, level) {
  try {
    const response = await fetch(`${BASE_URL}/explain`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, level }),
    });

    if (!response.ok) throw new Error('Failed to fetch explanation');
    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}

/**
 * Sends a specific follow-up question regarding the context.
 */
export async function askQuestion(text, question) {
  try {
    const response = await fetch(`${BASE_URL}/ask`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, question }),
    });

    if (!response.ok) throw new Error('Failed to fetch answer');
    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}