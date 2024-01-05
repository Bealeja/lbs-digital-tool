const dataBaseUrl = "http://localhost:3001";

async function getRequest(route, params) {
  try {
    const response = await fetch(`${dataBaseUrl}${route}?${params}`);

    if (!response.ok)
      throw new Error(`Request failed with status: ${response.status}`);

    const responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.error(
      `Error in getRequest for route ${route} with params ${params}: ${error.message}`
    );
  }
}

async function postRequest() {
  try {
  } catch (error) {}
}

export { getRequest, postRequest };
