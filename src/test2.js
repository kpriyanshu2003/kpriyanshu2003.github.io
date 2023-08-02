// Function to fetch the content of a specific article by slug
async function fetchArticleContent(slug) {
  try {
    const API_KEY = "179314fc-e414-4993-85ed-cc337aa0e319"; // Replace 'YOUR_API_KEY' with your actual Hashnode API key

    const query = `
       {
            post(
                    slug: "a-beginners-guide-to-api-types-understanding-and-building-different-apis"
                    hostname: "124"
                ) {
                    dateAdded
                    title
                    coverImage
                    cuid
                    contentMarkdown
  }
}
    `;

    const response = await fetch("https://api.hashnode.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: API_KEY,
      },
      body: JSON.stringify({ query }),
    });

    if (response.ok) {
      const data = await response.json();
      const post = data.data.post;

      if (post && post.contentMarkdown) {
        return post.contentMarkdown;
      } else {
        throw new Error("Article not found or has no content");
      }
    } else {
      throw new Error("Failed to fetch article content");
    }
  } catch (error) {
    throw new Error("Error while fetching article content: " + error.message);
  }
}

// Example usage: Replace 'ARTICLE_SLUG' with the actual slug of the article you want to fetch
const articleSlug =
  "a-beginners-guide-to-api-types-understanding-and-building-different-apis-64c79557db286c6507d02ae4";
fetchArticleContent(articleSlug)
  .then((content) => {
    console.log("Article content:", content);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
