const API_BASE = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api';

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });
  if (!res.ok) throw new Error(`API error ${res.status}`);
  return res.json();
}

export const api = {
  getCategories: () => request('/categories/'),
  getProducts: (params = '') => request(`/products/${params}`),
  getProduct: (id) => request(`/products/${id}/`),
  createOrder: (payload) => request('/orders/', { method: 'POST', body: JSON.stringify(payload) }),
};
