(document.querySelector("#gnomgorod .info__text") || document.getElementById("gnomgorod")).innerHTML = `<button type="button" class="btn btn--favoriteStatus" onclick="changeFavoriteStatus(this, 'gnomgorod')" data-id="gnomgorod" area-label="Добавить в избранное"><svg viewBox="0 0 100 100"><use xlink:href="#star" /></svg></button><div class="dot__title"><h2 class="dot__title_heading">База Гномгород</h2></div><ul class="marks dot__marks"><li class="marks__item">бар</li></ul><div class="coords dot__coords"><h3 class="coords__header">Координаты</h3><p class="coords__paragraph">Ад - <span class="red">7 286</span></p><p class="coords__paragraph">Обычный мир - <span class="gray">568 63 2296</span></p></div><p class="dot__description">Полностью подземный город в котором живут гномы</p><div class="residents dot__residents"><h3>Жители</h3><ul class="residents__list"><li class="residents__item">SFEZ Mr Fox - мэр</li></ul></div>`