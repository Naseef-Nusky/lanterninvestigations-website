import { useEffect } from 'react';

const SEO = ({ title, description, keywords, url, structuredData, image, robots }) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      if (!content) return;
      
      const attribute = isProperty ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Helper to update or create link tags
    const updateLinkTag = (rel, href) => {
      if (!href) return;
      
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // Update description
    if (description) {
      updateMetaTag('description', description);
    }

    // Update keywords
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Update canonical URL
    if (url) {
      const canonicalUrl = `${window.location.origin}${url}`;
      updateLinkTag('canonical', canonicalUrl);
    }

    // Update Open Graph tags
    updateMetaTag('og:type', 'website', true);
    if (url) {
      updateMetaTag('og:url', `${window.location.origin}${url}`, true);
    }
    if (title) {
      updateMetaTag('og:title', title, true);
    }
    if (description) {
      updateMetaTag('og:description', description, true);
    }
    if (image) {
      updateMetaTag('og:image', image, true);
    } else {
      updateMetaTag('og:image', `${window.location.origin}/logo-new.png`, true);
    }
    updateMetaTag('og:site_name', 'Lantern Investigations', true);
    updateMetaTag('og:locale', 'en_GB', true);

    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', true);
    if (url) {
      updateMetaTag('twitter:url', `${window.location.origin}${url}`, true);
    }
    if (title) {
      updateMetaTag('twitter:title', title, true);
    }
    if (description) {
      updateMetaTag('twitter:description', description, true);
    }
    if (image) {
      updateMetaTag('twitter:image', image, true);
    } else {
      updateMetaTag('twitter:image', `${window.location.origin}/logo-new.png`, true);
    }

    // Update author
    updateMetaTag('author', 'Lantern Investigations');
    
    // Update robots (allow override)
    updateMetaTag('robots', robots || 'index, follow');
  }, [title, description, keywords, url, image, robots]);

  // Add structured data as a script tag
  useEffect(() => {
    if (!structuredData) return;

    const scriptId = 'structured-data';
    let script = document.getElementById(scriptId);
    
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(structuredData);
  }, [structuredData]);

  return null;
};

export default SEO;
