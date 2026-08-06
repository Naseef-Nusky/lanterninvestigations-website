import { createClient } from 'contentful';

// New Contentful account: set these in .env (local) and Vercel env (production)
const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;
const PREVIEW_ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_PREVIEW_ACCESS_TOKEN;

if (!SPACE_ID || !ACCESS_TOKEN) {
  console.error(
    'Contentful is not configured. Add VITE_CONTENTFUL_SPACE_ID and VITE_CONTENTFUL_ACCESS_TOKEN to your .env file.'
  );
}

// Create Contentful client for published content
export const client =
  SPACE_ID && ACCESS_TOKEN
    ? createClient({
        space: SPACE_ID,
        accessToken: ACCESS_TOKEN,
      })
    : null;

// Create Contentful client for preview/draft content
export const previewClient =
  SPACE_ID && PREVIEW_ACCESS_TOKEN
    ? createClient({
        space: SPACE_ID,
        accessToken: PREVIEW_ACCESS_TOKEN,
        host: 'preview.contentful.com',
      })
    : null;

// Must match the Content Type ID in Contentful (Api Identifier)
const BLOG_POST_CONTENT_TYPE = 'blogPost';

// Fetch all blog posts (published content)
export const getBlogPosts = async () => {
  if (!client) return [];
  try {
    const response = await client.getEntries({
      content_type: BLOG_POST_CONTENT_TYPE,
      order: '-fields.publishedDate',
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

// Fetch all blog posts including drafts (preview content)
export const getBlogPostsPreview = async () => {
  if (!previewClient) return [];
  try {
    const response = await previewClient.getEntries({
      content_type: BLOG_POST_CONTENT_TYPE,
      order: '-fields.publishedDate',
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching blog posts preview:', error);
    return [];
  }
};

// Fetch a single blog post by slug (published content)
export const getBlogPostBySlug = async (slug) => {
  if (!client) return null;
  try {
    const response = await client.getEntries({
      content_type: BLOG_POST_CONTENT_TYPE,
      'fields.slug': slug,
    });
    return response.items[0] || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
};

// Fetch a single blog post by slug including drafts (preview content)
export const getBlogPostBySlugPreview = async (slug) => {
  if (!previewClient) return null;
  try {
    const response = await previewClient.getEntries({
      content_type: BLOG_POST_CONTENT_TYPE,
      'fields.slug': slug,
    });
    return response.items[0] || null;
  } catch (error) {
    console.error('Error fetching blog post preview:', error);
    return null;
  }
};

// Fetch a single blog post by ID
export const getBlogPostById = async (id) => {
  if (!client) return null;
  try {
    const response = await client.getEntry(id);
    return response;
  } catch (error) {
    console.error('Error fetching blog post by ID:', error);
    return null;
  }
};

// Helper function to format blog post data
export const formatBlogPost = (post) => {
  if (!post) return null;

  return {
    id: post.sys.id,
    title: post.fields.title,
    slug: post.fields.slug,
    excerpt: post.fields.excerpt,
    content: post.fields.content,
    featuredImage: post.fields.featuredImage?.fields?.file?.url,
    author: post.fields.author || 'Lantern Investigations',
    publishedDate: post.fields.publishedDate || post.sys.createdAt,
    updatedDate: post.sys.updatedAt,
  };
};

// Helper function to get image URL
export const getImageUrl = (image) => {
  if (!image?.fields?.file?.url) return null;
  return `https:${image.fields.file.url}`;
};
