(document.querySelector("#brawldown .info__text") || document.getElementById("brawldown")).innerHTML = `<button type="button" class="btn btn--favoriteStatus" onclick="changeFavoriteStatus(this, 'brawldown')" data-id="brawldown" area-label="Добавить в избранное"><svg viewBox="0 0 100 100"><use xlink:href="#star" /></svg></button><div class="dot__title"><h2 class="dot__title_heading">Бравл Даун</h2><p class="dot__title_paragraph">Мэр: <b>SockSide</b></p></div><p><span class="green">Менее пяти жителей</span></p><div class="coords dot__coords"><h3 class="coords__header">Координаты</h3><p class="coords__paragraph">Ад - <span class="yellow">23 -190</span></p></div>`