(document.querySelector("#DeCave .info__text") || document.getElementById("DeCave")).innerHTML = `<button type="button" class="btn btn--favoriteStatus" onclick="changeFavoriteStatus(this, 'DeCave')" data-id="DeCave" area-label="Добавить в избранное"><svg viewBox="0 0 100 100"><use xlink:href="#star" /></svg></button><div class="dot__title"><h2 class="dot__title_heading">De Cave</h2><p class="dot__title_paragraph">Владелец <b>BORSosnovy</b></p></div><ul class="marks dot__marks"><li class="marks__item">кафе</li></ul><div class="coords dot__coords"><h3 class="coords__header">Координаты</h3><p class="coords__paragraph">Ад - <span class="green">-2113 -2</span></p><p class="coords__paragraph">Обычный мир - <span class="gray">-16909 57 -32</span></p></div><p class="dot__description">Простенькое кафе в пещере</p>`