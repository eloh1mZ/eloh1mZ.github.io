(document.querySelector("#bvTwinsly .info__text") || document.getElementById("bvTwinsly")).innerHTML = `<button type="button" class="btn btn--favoriteStatus" onclick="changeFavoriteStatus(this, 'bvTwinsly')" data-id="bvTwinsly" area-label="Добавить в избранное"><svg viewBox="0 0 100 100"><use xlink:href="#star" /></svg></button><div class="dot__title"><h2 class="dot__title_heading">База vTwinsly</h2></div><div class="coords dot__coords"><h3 class="coords__header">Координаты</h3><p class="coords__paragraph">Ад - <span class="yellow">4 -127</span></p><p class="coords__paragraph">Обычный мир - <span class="gray">267 65 -1013</span></p></div><p><span class="red">Вход воспрещен</span></p>`