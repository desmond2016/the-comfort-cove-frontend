// Helper functions for common tasks

// Format date to locale string
export function formatDate(date) {
  return new Date(date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Truncate text to a specific length with ellipsis
export function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

// Debounce function to limit how often a function can be called
export function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

// Parse markdown content with YAML front matter
export async function parseMarkdownFile(filePath) {
  try {
    // Fetch the markdown file
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${filePath}: ${response.status} ${response.statusText}`);
    }
    
    // Get the text content
    const text = await response.text();
    
    // Find the boundaries of YAML front matter (between --- markers)
    const firstMarkerIndex = text.indexOf('---');
    if (firstMarkerIndex === -1) {
      // No front matter found, return just the content parsed as markdown
      return {
        metadata: {},
        content: marked.parse(text)
      };
    }
    
    const secondMarkerIndex = text.indexOf('---', firstMarkerIndex + 3);
    if (secondMarkerIndex === -1) {
      // Invalid front matter format, return just the content parsed as markdown
      return {
        metadata: {},
        content: marked.parse(text)
      };
    }
    
    // Extract YAML and markdown content
    const yamlString = text.slice(firstMarkerIndex + 3, secondMarkerIndex).trim();
    const markdownString = text.slice(secondMarkerIndex + 3).trim();
    
    // Parse YAML and markdown
    let metadata = {};
    try {
      metadata = jsyaml.load(yamlString) || {};
    } catch (error) {
      console.error('Error parsing YAML front matter:', error);
    }
    
    const content = marked.parse(markdownString);
    
    return { metadata, content };
  } catch (error) {
    console.error('Error parsing markdown file:', error);
    return {
      metadata: {},
      content: `<p>Error loading content: ${error.message}</p>`
    };
  }
}

// Sanitize HTML to prevent XSS attacks
export function sanitizeHtml(html) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  return tempDiv.innerHTML;
}

// Get random item from array
export function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Generate unique ID
export function generateId(prefix = 'id_') {
  return `${prefix}${Math.random().toString(36).substr(2, 9)}`;
}
