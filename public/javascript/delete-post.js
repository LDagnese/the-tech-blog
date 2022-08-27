async function deleteFormHandler(event) {
  event.preventDefault();

  const postId = document.querySelector(".edit-post-article").dataset.id;

  const response = await fetch(`/api/posts/${postId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

document.querySelector(".delete-post-btn").addEventListener("click", deleteFormHandler);
