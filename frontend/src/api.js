export const API_BASE_URL = 'https://blackcube-mern-tasks.onrender.com';

export const apiUrl = (path) => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${API_BASE_URL}${cleanPath}`;
};