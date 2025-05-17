function searchVideos() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const videos = document.querySelectorAll(".video-card");
  let matchFound = false;

  videos.forEach(video => {
    const title = video.querySelector("h4").innerText.toLowerCase();
    if (title.includes(query)) {
      video.style.display = "block";
      matchFound = true;
    } else {
      video.style.display = "none";
    }
  });

  document.getElementById("notFound").style.display = matchFound ? "none" : "block";
}

function openModal() {
  document.getElementById("accountModal").style.display = "block";
}

function closeModal() {
  document.getElementById("accountModal").style.display = "none";
}

function handleCreateAccount(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (name && email && password) {
    document.getElementById("accountMessage").innerText = `✅ Account created for ${name}!`;
    setTimeout(closeModal, 2000);
  } else {
    document.getElementById("accountMessage").innerText = "⚠️ All fields are required.";
  }
}
