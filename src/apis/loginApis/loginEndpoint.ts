export default async function loginUser(payload: any) {
  try {
    const url = "http://18.170.48.122/api/v1/user/login";
    const headers = {
      "Content-Type": "application/json",
    };
    const body = JSON.stringify(payload);

    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: body,
    });

    // if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    // }

    return await response.json();
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}
