(document.querySelector("#aksu .info__text") || document.getElementById("aksu")).innerHTML = `<button type="button" class="btn btn--favoriteStatus" onclick="changeFavoriteStatus(this, 'aksu')" data-id="aksu" area-label="Добавить в избранное"><svg viewBox="0 0 100 100"><use xlink:href="#star" /></svg></button><div class="dot__title"><h2 class="dot__title_heading">Аксу</h2><p class="dot__title_paragraph">Мэр: <b>MoonXLebyshek</b></p></div><div class="coords dot__coords"><h3 class="coords__header">Координаты</h3><p class="coords__paragraph">Ад - <span class="red">-210 1390</span></p><p class="coords__paragraph">Обычный мир - <span class="gray">-1628 66 11120</span></p></div><p class="dot__description">современная Япония с элементами средневековой. Наш город - это огромная и дружная семья, в которой всегда очень лампово и атмосферно &lt;3</p>`