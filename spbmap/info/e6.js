(document.querySelector("#e6 .info__text") || document.getElementById("e6")).innerHTML = `<button type="button" class="btn btn--favoriteStatus" onclick="changeFavoriteStatus(this, 'e6')" data-id="e6" area-label="Добавить в избранное"><svg viewBox="0 0 100 100"><use xlink:href="#star" /></svg></button><div class="dot__title"><h2 class="dot__title_heading">Портал в энд</h2></div><div class="coords dot__coords"><h3 class="coords__header">Координаты</h3><p class="coords__paragraph">Ад - <span class="green">-1069 -231</span></p><p class="coords__paragraph">Обычный мир - <span class="gray">-8609 42 -1956</span></p></div>`