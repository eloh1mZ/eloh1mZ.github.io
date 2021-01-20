(document.querySelector("#lightearth .info__text") || document.getElementById("lightearth")).innerHTML = `<button type="button" class="btn btn--favoriteStatus" onclick="changeFavoriteStatus(this, 'lightearth')" data-id="lightearth" area-label="Добавить в избранное"><svg viewBox="0 0 100 100"><use xlink:href="#star" /></svg></button><div class="dot__title"><h2 class="dot__title_heading">Light Earth</h2><p class="dot__title_paragraph">Мэр: <b>xGlek</b></p></div><div class="dot__marks_wrapper"><h3 style="margin: 0">В городе есть</h3><ul class="marks dot__marks"><li class="marks__item">отель</li><li class="marks__item">бар</li><li class="marks__item">церковь</li><li class="marks__item">здание суда</li></ul></div><div class="coords dot__coords"><h3 class="coords__header">Координаты</h3><p class="coords__paragraph">Ад - <span class="blue">233 167</span></p></div><p><span class="red">Церквь Святого Дениса</span><br><span class="gray">Крещение СПБ</span><br><span class="gray">23 января, 15:00 МСК</span></p><div class="api__item spoiler"><button class="spoiler__btn" onclick="updateSpoiler(this)">Описание</button><main class="spoiler__content"><p class="dot__description">Light Earth - это футуристический город, который нацелен на туризм. У нас есть большое количество различных строений, парков, арт-обьектов и прочего. Город находится на грибном острове и имеет большое количество ферм.</p></main></div><div class="residents dot__residents"><h3>Жители</h3><ul class="residents__list"><li class="residents__item">xGlek - мэр</li><li class="residents__item">Ululeshechka - зам. мэра</li><li class="residents__item">LNColors</li><li class="residents__item">Asshaiy</li><li class="residents__item">Somedum</li><li class="residents__item">Euphoria</li><li class="residents__item">Nikoid2228</li><li class="residents__item">GUSloh</li><li class="residents__item">Edotl</li><li class="residents__item">MatveySG</li><li class="residents__item">Antikapusta</li><li class="residents__item">pirogtopgg</li><li class="residents__item">KRUSALOV</li><li class="residents__item">XxX_CRAZYBOY_41</li><li class="residents__item">justliltr1p</li></ul></div>`