(document.querySelector("#berlin .info__text") || document.getElementById("berlin")).innerHTML = `<button type="button" class="btn btn--favoriteStatus" onclick="changeFavoriteStatus(this, 'berlin')" data-id="berlin" area-label="Добавить в избранное"><svg viewBox="0 0 100 100"><use xlink:href="#star" /></svg></button><div class="dot__title"><h2 class="dot__title_heading">Берлин</h2><p class="dot__title_paragraph">Мэр: <b>whoamitimka</b></p></div><div class="coords dot__coords"><h3 class="coords__header">Координаты</h3><p class="coords__paragraph">Ад - <span class="yellow">-59 -1023</span></p></div>`