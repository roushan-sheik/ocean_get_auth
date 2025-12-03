export const API_CONFIG = {
  BASE_URL: "https://reqres.in/api",
  API_KEY: "reqres_5f88a1fddd0c4aaa8a4f6ae6dce2aa3d",
};

// Helper function to get headers with API key
export const getHeaders = (additionalHeaders: Record<string, string> = {}) => {
  return {
    "Content-Type": "application/json",
    "x-api-key": API_CONFIG.API_KEY,
    ...additionalHeaders,
  };
};
