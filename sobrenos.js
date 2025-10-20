let nome = localStorage.getItem("armazem");
    document.getElementById('fav-eduarda').innerText = localStorage.getItem('favEdu') || document.getElementById('fav-eduarda').innerText;
    document.getElementById('fav-mariana').innerText = localStorage.getItem('favMar') || document.getElementById('fav-mariana').innerText;