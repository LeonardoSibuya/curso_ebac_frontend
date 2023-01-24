document.addEventListener('DOMContentLoaded', function() {
    const photo = document.getElementById('foto-avatar');
    const name = document.getElementById('nome');
    const userName = document.getElementById('nome-usuario');
    const repository = document.getElementById('repositorio');
    const followers = document.getElementById('seguidores');
    const following = document.getElementById('seguindo')
    const link = document.getElementById('link')
    const endpoint = 'https://api.github.com/users/leonardoSibuya'

    fetch(endpoint)
    .then(function(resposta) {
        return resposta.json()
    })
    .then(function(json) {
        photo.src = json.avatar_url;
        name.innerText = json.name;
        userName.innerText = json.login;
        repository.innerText = json.public_repos;
        followers.innerText = json.followers;
        following.innerText = json.following;
        link.href = json.html_url;
    })
})







