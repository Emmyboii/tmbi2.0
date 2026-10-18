const API_BASE_URL =
    process.env.REACT_APP_API_URL || 'https://thorne-be.onrender.com';

const STRAPI_BASE_URL =
    process.env.REACT_APP_STRAPI_URL || 'https://tmbis-strapi-backend.onrender.com';

export const ENDPOINTS = {
    apply: `${API_BASE_URL}/api/apply`,
    checkoutApply: (applicantId) =>
        `${API_BASE_URL}/api/apply/${applicantId}/checkout-apply`,
    checkoutCourse: (applicantId) =>
        `${API_BASE_URL}/api/apply/${applicantId}/checkout-course`,
    articles: (query = 'populate=*') =>
        `${STRAPI_BASE_URL}/api/tmbiss?${query}`,
};
