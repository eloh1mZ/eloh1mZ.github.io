(document.querySelector("#b1putinburg .info__text") || document.getElementById("b1putinburg")).innerHTML = `<button type="button" class="btn btn--favoriteStatus" onclick="changeFavoriteStatus(this, 'b1putinburg')" data-id="b1putinburg" area-label="Добавить в избранное"><svg viewBox="0 0 100 100"><use xlink:href="#star" /></svg></button><div class="dot__title"><h2 class="dot__title_heading">База Путинбург</h2></div><div class="coords dot__coords"><h3 class="coords__header">Координаты</h3><p class="coords__paragraph">Ад - <span class="blue">855 -1512</span></p><p class="coords__paragraph">Обычный мир - <span class="gray">6855 63 -12105</span></p></div><p class="dot__description">Доступ ко всем друзьям путина</p>`