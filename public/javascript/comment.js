async function commentFormHandler(event) {
  event.preventDefault();

  const commentText = document.querySelector("textarea[name='comment-content']").value.trim();
  const postId = document.querySelector(".post-article").dataset.id;

  if (commentText) {
    const response = await fetch("/api/comment/", {
      method: "POST",
      body: JSON.stringify({
        postId,
        commentText,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector(".comment-post").addEventListener("submit", commentFormHandler);
