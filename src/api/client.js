// Automatically use local proxy in development, or the live backend server in production.
// TODO: Replace the placeholder URL below with your actual Render/Heroku backend URL!
const API_BASE = import.meta.env.PROD 
  ? 'https://miltafs-api.onrender.com/api' 
  : '/api';

export const getBlogs = async (params = {}) => {
  try {
    const query = new URLSearchParams(params).toString();
    const url = `${API_BASE}/blogs${query ? `?${query}` : ''}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch blogs');
    return await response.json();
  } catch (error) {
    console.error('getBlogs error:', error);
    return [];
  }
};

export const getBlogBySlug = async (slug) => {
  try {
    const response = await fetch(`${API_BASE}/blogs/${slug}`);
    if (!response.ok) throw new Error('Failed to fetch blog');
    return await response.json();
  } catch (error) {
    console.error('getBlogBySlug error:', error);
    return null;
  }
};

export const updateBlogContent = async (id, content, table = "blogs") => {
  try {
    const response = await fetch(`${API_BASE}/blogs/${id}/update`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content, table }),
    });
    if (!response.ok) throw new Error('Failed to update blog content');
    return await response.json();
  } catch (error) {
    console.error('updateBlogContent error:', error);
    return { error };
  }
};

export const submitContactForm = async (formData) => {
  try {
    const response = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (!response.ok) throw new Error('Failed to submit contact');
    return await response.json();
  } catch (error) {
    console.error('submitContactForm error:', error);
    return { error };
  }
};

export const submitApplicationForm = async (formData) => {
  try {
    const response = await fetch(`${API_BASE}/apply`, {
      method: 'POST',
      body: formData, // FormData directly
    });
    if (!response.ok) throw new Error('Failed to submit application');
    return await response.json();
  } catch (error) {
    console.error('submitApplicationForm error:', error);
    return { error };
  }
};
