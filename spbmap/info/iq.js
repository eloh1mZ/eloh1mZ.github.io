(document.querySelector("#iq .info__text") || document.getElementById("iq")).innerHTML = `<button type="button" class="btn btn--favoriteStatus" onclick="changeFavoriteStatus(this, 'iq')" data-id="iq" area-label="Добавить в избранное"><svg viewBox="0 0 100 100"><use xlink:href="#star" /></svg></button><div class="dot__title"><h2 class="dot__title_heading">IQ</h2><p class="dot__title_paragraph">Владелец <b>AkulaFrench</b></p></div><ul class="marks dot__marks"><li class="marks__item">кафе</li></ul><div class="coords dot__coords"><h3 class="coords__header">Координаты</h3><p class="coords__paragraph">Ад - <span class="red">-15 69</span></p><p class="coords__paragraph">Обычный мир - <span class="gray">0 68 0</span></p></div><p class="dot__description">Кофейня с самым вкусным кофе!</p>`