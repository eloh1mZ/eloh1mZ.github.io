(document.querySelector("#gaymalumba .info__text") || document.getElementById("gaymalumba")).innerHTML = `<button type="button" class="btn btn--favoriteStatus" onclick="changeFavoriteStatus(this, 'gaymalumba')" data-id="gaymalumba" area-label="Добавить в избранное"><svg viewBox="0 0 100 100"><use xlink:href="#star" /></svg></button><div class="dot__title"><h2 class="dot__title_heading">Геймалумба</h2><p class="dot__title_paragraph">Мэр: <b>EcHooZz</b></p></div><div class="coords dot__coords"><h3 class="coords__header">Координаты</h3><p class="coords__paragraph">Ад - <span class="green">-410 -100</span></p><p class="coords__paragraph">Обычный мир - <span class="gray">-3303 70 -774</span></p></div>`