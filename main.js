const linksSocialMedia = {

  github: "gAlbuquerque028",
  youtube: "channel/UCsF3oeB7IarMd4vT5VGsMSA",
  instagram: "g_albuquerque28",
  facebook: "g_albuquerque28",
  twitter: "G_alb28"
}

changeSocialMediaLinks = () => {
  for (let li of socialLinks.children) {
    const social = (li.getAttribute('class'))

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

getGithubProfileInfos = () => {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userId.textContent = data.login
    })
}

getGithubProfileInfos()