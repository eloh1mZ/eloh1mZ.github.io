(document.querySelector("#e7 .info__text") || document.getElementById("e7")).innerHTML = `<button type="button" class="btn btn--favoriteStatus" onclick="changeFavoriteStatus(this, 'e7')" data-id="e7" area-label="Добавить в избранное"><svg viewBox="0 0 100 100"><use xlink:href="#star" /></svg></button><div class="dot__title"><h2 class="dot__title_heading">Портал в энд</h2></div><div class="coords dot__coords"><h3 class="coords__header">Координаты</h3><p class="coords__paragraph">Ад - <span class="red">657 1412</span></p><p class="coords__paragraph">Обычный мир - <span class="gray">5290 45 11321</span></p></div>`