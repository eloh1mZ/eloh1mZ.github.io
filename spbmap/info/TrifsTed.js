(document.querySelector("#TrifsTed .info__text") || document.getElementById("TrifsTed")).innerHTML = `<button type="button" class="btn btn--favoriteStatus" onclick="changeFavoriteStatus(this, 'TrifsTed')" data-id="TrifsTed" area-label="Добавить в избранное"><svg viewBox="0 0 100 100"><use xlink:href="#star" /></svg></button><div class="dot__title"><h2 class="dot__title_heading">ТрифсТэд</h2><p class="dot__title_paragraph">Мэр: <b>pumpkin199915</b></p></div><div class="coords dot__coords"><h3 class="coords__header">Координаты</h3><p class="coords__paragraph">Ад - <span class="green">-500 -450</span></p><p class="coords__paragraph">Обычный мир - <span class="gray">-3962 68 -3581</span></p></div>`