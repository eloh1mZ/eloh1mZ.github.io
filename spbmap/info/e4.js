(document.querySelector("#e4 .info__text") || document.getElementById("e4")).innerHTML = `<button type="button" class="btn btn--favoriteStatus" onclick="changeFavoriteStatus(this, 'e4')" data-id="e4" area-label="Добавить в избранное"><svg viewBox="0 0 100 100"><use xlink:href="#star" /></svg></button><div class="dot__title"><h2 class="dot__title_heading">Портал в энд</h2><p class="dot__title_paragraph">Владелец <b>Kalarkson</b></p></div><div class="coords dot__coords"><h3 class="coords__header">Координаты</h3><p class="coords__paragraph">Ад - <span class="yellow">129 -699</span></p><p class="coords__paragraph">Обычный мир - <span class="gray">1019 27 -5614</span></p></div>`