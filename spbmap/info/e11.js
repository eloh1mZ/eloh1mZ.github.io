(document.querySelector("#e11 .info__text") || document.getElementById("e11")).innerHTML = `<button type="button" class="btn btn--favoriteStatus" onclick="changeFavoriteStatus(this, 'e11')" data-id="e11" area-label="Добавить в избранное"><svg viewBox="0 0 100 100"><use xlink:href="#star" /></svg></button><div class="dot__title"><h2 class="dot__title_heading">Портал в энд</h2></div><div class="coords dot__coords"><h3 class="coords__header">Координаты</h3><p class="coords__paragraph">Ад - <span class="blue">2186 236</span></p><p class="coords__paragraph">Обычный мир - <span class="gray">17496 49 1901</span></p></div><p class="dot__description"><b style="font-size: 1.1em"><a href="tf">Войти в энд</a></b></p>`