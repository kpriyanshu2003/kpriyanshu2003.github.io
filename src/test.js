// Function to fetch the list of articles
async function fetchArticles() {
  try {
    const API_KEY = "179314fc-e414-4993-85ed-cc337aa0e319"; // Replace 'YOUR_API_KEY' with your actual Hashnode API key

    const query = `
      query {
        user(username: "kpriyanshu") {
          publication {
            posts {
              _id
              title
              brief
              slug
              dateAdded
              totalReactions
              responseCount
            
            }
          }
        }
      }
    `;

    const response = await fetch("https://api.hashnode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: API_KEY,
      },
      body: JSON.stringify({ query }),
    });

    if (response.ok) {
      const data = await response.json();
      return data.data.user.publication.posts;
    } else {
      throw new Error("Failed to fetch articles");
    }
  } catch (error) {
    throw new Error("Error while fetching articles: " + error.message);
  }
}

// Example usage
fetchArticles()
  .then((articles) => {
    console.log("List of articles:", articles);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
