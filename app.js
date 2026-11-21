< !DOCTYPE html >
  <html lang="ru">
    <head>
      <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Глобал Детейлинг (GLBL) | Премиальный детейлинг и автостёкла в Краснодаре</title>
          <meta name="description" content="Студия «Глобал Детейлинг»: ремонт сколов и трещин автостёкол без замены, восстановительная полировка кузова, бронирование антигравийной плёнкой PPF и керамика. Краснодар, пр-т Чекистов, 46Б.">

            <link rel="icon" type="image/jpeg" href="assets/logo.jpg">

              <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Unbounded:wght@400;600;700;800;900&display=swap" rel="stylesheet">

                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
                      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

                      <link rel="stylesheet" href="style.css">
                      </head>
                      <body>

                        <!-- Top Scroll Progress Indicator -->
                        <div id="scrollProgress" aria-hidden="true"></div>

                        <!-- FIXED 3D BMW BACKGROUND -->
                        <div class="fixed-3d-viewport" id="fixed3DViewport" aria-hidden="true">
                          <canvas id="bmw3DCanvas"></canvas>
                        </div>

                        <!-- Ambient Light Atmosphere Layers -->
                        <div class="ambient-glow glow-red" aria-hidden="true"></div>
                        <div class="ambient-glow glow-graphite" aria-hidden="true"></div>
                        <div class="technical-grid-overlay" aria-hidden="true"></div>

                        <!-- HEADER -->
                        <header class="site-header" id="header">
                          <div class="container header-container">
                            <a href="index.html" class="brand-logo-wrap">
                              <img src="assets/logo.jpg" alt="GLBL Detailing Логотип" class="brand-logo-img">
                                <div class="brand-text">
                                  <span class="brand-name">ГЛОБАЛ</span>
                                  <span class="brand-sub">ДЕТЕЙЛИНГ</span>
                                </div>
                            </a>

                            <nav class="nav-links" id="navLinks">
                              <a href="#welcome" class="nav-link active">Главная</a>
                              <a href="#about" class="nav-link">О студии</a>
                              <a href="#packages" class="nav-link">Услуги</a>
                              <a href="#transformation" class="nav-link">До / После</a>
                              <a href="calculator.html" class="nav-link">Калькулятор</a>
                              <a href="gallery.html" class="nav-link">Портфолио</a>
                              <a href="booking.html" class="nav-link">Бронирование</a>
                              <a href="#contacts" class="nav-link">Контакты</a>
                            </nav>

                            <div class="header-actions">
                              <a href="tel:+79528222243" class="phone-link">
                                <i class="fa-solid fa-phone"></i>
                                <span>+7 (952) 822-22-43</span>
                              </a>
                              <a href="booking.html" class="btn btn-sm btn-brand">
                                <i class="fa-solid fa-calendar-check"></i> Запись онлайн
                              </a>
                              <button class="mobile-toggle" id="mobileToggle" aria-label="Меню навигации" aria-expanded="false">
                                <span></span><span></span><span></span>
                              </button>
                            </div>
                          </div>
                        </header>

                        <!-- 3D Studio Transformation HUD -->
                        <div class="hero-3d-hud" aria-live="polite">
                          <div class="hud-phase-pill">
                            <span class="hud-status-dot"></span>
                            <span id="hudPhaseLabel">BMW M5 — Дорожная пыль, сколы на стекле, тусклый лак</span>
                            <span class="hud-pct-badge" id="hudPhasePct">0%</span>
                          </div>
                        </div>

                        <!-- ========================================================
                        SECTION 1: HERO
       ======================================================== -->
                        <section class="page-section section-welcome" id="welcome">
                          <div class="container">
                            <div class="hero-content-centered">

                              <div class="status-pill">
                                <span class="live-pulse"></span>
                                <span>Краснодар, Юбилейный мкр, пр-т Чекистов, 46Б</span>
                              </div>

                              <h1 class="hero-title">
                                СПЕЦИАЛИЗИРОВАННЫЙ <br>
                                  <span class="glbl-gradient-text">ДЕТЕЙЛИНГ И АВТОСТЁКЛА</span>
                              </h1>

                              <p class="hero-subtitle">
                                Ювелирный ремонт трещин и сколов с сохранением заводского стекла и датчиков. Восстановительная полировка кузова, защита антигравийной плёнкой и оптики от южного солнца.
                              </p>

                              <!-- Trust Signals -->
                              <div class="trust-metrics-grid">
                                <div class="metric-card">
                                  <div class="metric-val">5.0</div>
                                  <div class="metric-stars">
                                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                  </div>
                                  <span class="metric-desc">45+ отзывов на Яндекс Картах</span>
                                </div>

                                <div class="metric-card">
                                  <div class="metric-icon-wrap"><i class="fa-solid fa-award"></i></div>
                                  <span class="metric-strong">«Хорошее место»</span>
                                  <span class="metric-desc">Официальная награда Яндекса</span>
                                </div>

                                <div class="metric-card">
                                  <div class="metric-icon-wrap"><i class="fa-solid fa-shield-halved"></i></div>
                                  <span class="metric-strong">100% Сохранение</span>
                                  <span class="metric-desc">Оригинальных датчиков и камер</span>
                                </div>
                              </div>

                              <div class="hero-actions-row">
                                <a href="calculator.html" class="btn btn-lg btn-brand">
                                  <i class="fa-solid fa-calculator"></i> Рассчитать стоимость
                                </a>
                                <a href="#transformation" class="btn btn-lg btn-outline">
                                  <i class="fa-solid fa-sliders"></i> Смотреть До / После
                                </a>
                                <a href="https://wa.me/79528222243?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!+%D0%A5%D0%BE%D1%87%D1%83+%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F+%D0%B2+%D0%93%D0%BB%D0%BE%D0%B1%D0%B0%D0%BB+%D0%94%D0%B5%D1%82%D0%B5%D0%B9%D0%BB%D0%B8%D0%BD%D0%B3+%D0%BD%D0%B0+%D0%A7%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%BE%D0%B2,+46%D0%91" target="_blank" rel="noopener noreferrer" class="btn btn-lg btn-wa">
                                  <i class="fa-brands fa-whatsapp"></i> Написать в WhatsApp
                                </a>
                              </div>

                              <div class="scroll-prompt">
                                <span>Листайте страницу — автомобиль преображается на глазах</span>
                                <i class="fa-solid fa-chevron-down scroll-arrow"></i>
                              </div>
                            </div>
                          </div>
                        </section>

                        <!-- ========================================================
                        SECTION 2: О СТУДИИ & МАСТЕРЕ НИКИТЕ
       ======================================================== -->
                        <section class="page-section section-about" id="about">
                          <div class="container">
                            <div class="glass-section-card">
                              <div class="section-badge">О нас</div>
                              <h2 class="section-title">СПЕЦИАЛИЗИРОВАННЫЙ ЦЕНТР <br><span class="glbl-gradient-text">В ЮБИЛЕЙНОМ РАЙОНЕ КРАСНОДАРА</span></h2>
                              <p class="section-subtitle">
                                В отличие от обычных потоковых моек, мы совмещаем ювелирную работу со стёклами и деликатный уход за ЛКП по стандартам детейлинга.
                              </p>

                              <div class="features-grid">
                                <div class="feature-card">
                                  <div class="feature-icon"><i class="fa-solid fa-microscope"></i></div>
                                  <h3>Ремонт без замены стекла</h3>
                                  <p>
                                    Мастер Никита профессионально останавливает лучи трещин и заливает сколы оптическим полимером. Вам не придётся ставить дубликаты и заново калибровать датчики дождя и удержания полосы.
                                  </p>
                                </div>

                                <div class="feature-card">
                                  <div class="feature-icon"><i class="fa-solid fa-sun"></i></div>
                                  <h3>Защита от южного климата</h3>
                                  <p>
                                    В Краснодаре солнце и гравий с трассы выжигают фары и лак за 1–2 сезона. Мы восстанавливаем оптику до кристальной прозрачности и бронируем полиуретаном с эффектом самозаживления.
                                  </p>
                                </div>

                                <div class="feature-card">
                                  <div class="feature-icon"><i class="fa-solid fa-gem"></i></div>
                                  <h3>Зеркальная полировка кузова</h3>
                                  <p>
                                    Мягкое восстановительное снятие риски и микроцарапин без истончения заводского лака. Наносим гидрофобные защитные покрытия для глубокого мокрого глянца.
                                  </p>
                                </div>

                                <div class="feature-card">
                                  <div class="feature-icon"><i class="fa-solid fa-paw"></i></div>
                                  <h3>Pet-Friendly атмосфера</h3>
                                  <p>
                                    В нашей студии всегда чисто, сухо и комфортно. Мы рады четвероногим друзьям: к нам можно свободно приезжать с питомцами любых пород.
                                  </p>
                                </div>

                                <div class="feature-card">
                                  <div class="feature-icon"><i class="fa-solid fa-clock"></i></div>
                                  <h3>Удобно для вашего дня</h3>
                                  <p>
                                    Работаем с 10:00 до 21:00 ежедневно. Принимаем авто строго по предварительной записи — без очередей и ожидания.
                                  </p>
                                </div>

                                <div class="feature-card">
                                  <div class="feature-icon"><i class="fa-solid fa-gift"></i></div>
                                  <h3>Подарочные сертификаты</h3>
                                  <p>
                                    Практичный подарок для любого автолюбителя на фиксированную сумму или на конкретный комплекс (полировка, химчистка, бронирование).
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>

                        <!-- ========================================================
                        SECTION 3: УСЛУГИ И ПАКЕТЫ
       ======================================================== -->
                        <section class="page-section section-packages" id="packages">
                          <div class="container">
                            <div class="glass-section-card">
                              <div class="section-badge">Услуги и пакеты</div>
                              <h2 class="section-title">ГОТОВЫЕ КОМПЛЕКСЫ <br><span class="glbl-gradient-text">ДЛЯ ЗАЩИТЫ И БЛЕСКА</span></h2>
                              <p class="section-subtitle">
                                Комплексные пакеты позволяют сэкономить до 20% по сравнению с отдельными работами и комплексно защитить ключевые элементы автомобиля.
                              </p>

                              <div class="packages-grid">

                                <!-- Package 1 -->
                                <div class="package-card">
                                  <div class="package-header">
                                    <span class="pack-tag">Хит для трассы</span>
                                    <h3>Бронирование «Зоны риска»</h3>
                                    <p>Надёжная защита от сколов и гравия полиуретановой плёнкой</p>
                                  </div>
                                  <ul class="package-features">
                                    <li><i class="fa-solid fa-check"></i> Капот полностью и передний бампер</li>
                                    <li><i class="fa-solid fa-check"></i> Передняя оптика и ПТФ</li>
                                    <li><i class="fa-solid fa-check"></i> Корпуса боковых зеркал</li>
                                    <li><i class="fa-solid fa-check"></i> Зоны под ручками и кромки дверей</li>
                                  </ul>
                                  <div class="package-footer">
                                    <div class="package-price">от 35 000 ₽</div>
                                    <a href="booking.html?package=risk_zones" class="btn btn-sm btn-brand">Записаться</a>
                                  </div>
                                </div>

                                <!-- Package 2 (Featured) -->
                                <div class="package-card featured-pack">
                                  <div class="featured-badge">Рекомендуем</div>
                                  <div class="package-header">
                                    <span class="pack-tag">Спецпредложение</span>
                                    <h3>Автостёкла & Оптика</h3>
                                    <p>Устранение дефектов обзорности и защита от южного ультрафиолета</p>
                                  </div>
                                  <ul class="package-features">
                                    <li><i class="fa-solid fa-check"></i> Ремонт сколов и остановка трещин стекла</li>
                                    <li><i class="fa-solid fa-check"></i> Глубокая полировка фар от пожелтения</li>
                                    <li><i class="fa-solid fa-check"></i> Оклейка фар полиуретаном PPF</li>
                                    <li><i class="fa-solid fa-check"></i> Нанесение состава «Антидождь» на лобовое</li>
                                  </ul>
                                  <div class="package-footer">
                                    <div class="package-price">от 6 500 ₽</div>
                                    <a href="booking.html?package=glass_optics" class="btn btn-sm btn-brand">Записаться</a>
                                  </div>
                                </div>

                                <!-- Package 3 -->
                                <div class="package-card">
                                  <div class="package-header">
                                    <span class="pack-tag">Полное преображение</span>
                                    <h3>Восстановление & Глянец</h3>
                                    <p>Возвращение заводского сияния и защита кузова</p>
                                  </div>
                                  <ul class="package-features">
                                    <li><i class="fa-solid fa-check"></i> Деликатная трёхфазная очистка кузова</li>
                                    <li><i class="fa-solid fa-check"></i> Восстановительная полировка ЛКП (85–95%)</li>
                                    <li><i class="fa-solid fa-check"></i> Защитный гидрофобный состав / керамика</li>
                                    <li><i class="fa-solid fa-check"></i> Чернение резины и уход за пластиком</li>
                                  </ul>
                                  <div class="package-footer">
                                    <div class="package-price">от 16 000 ₽</div>
                                    <a href="booking.html?package=polish_gloss" class="btn btn-sm btn-brand">Записаться</a>
                                  </div>
                                </div>

                              </div>

                            </div>
                          </div>
                        </section>

                        <!-- ========================================================
                        SECTION 4: ДО / ПОСЛЕ
       ======================================================== -->
                        <section class="page-section section-transformation" id="transformation">
                          <div class="container">
                            <div class="glass-section-card">
                              <div class="section-badge">Интерактивный результат</div>
                              <h2 class="section-title">ДО И ПОСЛЕ: <br><span class="glbl-gradient-text">РЕЗУЛЬТАТ ДЕТЕЙЛИНГА BMW M5</span></h2>
                              <p class="section-subtitle">
                                Тяните интерактивный ползунок влево и вправо. Слева — автомобиль с повреждениями, дорожной грязью и затёртостями; справа — идеальный зеркальный финиш после студии.
                              </p>

                              <div class="bmw-compare-viewport" id="bmwCompareViewport">

                                <!-- Layer BEFORE: Dirty -->
                                <div class="bmw-layer bmw-layer-before">
                                  <img src="assets/bmw_clean.jpg" alt="BMW До детейлинга" class="bmw-base-photo dirty-filter">
                                    <div class="dirty-overlay-mask">
                                      <div class="mud-splatters"></div>
                                      <div class="windshield-crack-spot">
                                        <div class="stone-chip"></div>
                                        <div class="glass-crack-spider"></div>
                                      </div>
                                      <div class="hood-swirl-marks"></div>
                                      <div class="foggy-headlight-glaze"></div>
                                    </div>
                                    <div class="compare-tag tag-before">
                                      <i class="fa-solid fa-triangle-exclamation"></i> ДО: Дорожная пыль, сколы и тусклые фары
                                    </div>
                                </div>

                                <!-- Layer AFTER: Pristine -->
                                <div class="bmw-layer bmw-layer-after" id="bmwLayerAfter">
                                  <img src="assets/bmw_clean.jpg" alt="BMW После детейлинга" class="bmw-base-photo clean-filter">
                                    <div class="clean-overlay-fx">
                                      <div class="specular-sweep"></div>
                                      <div class="sparkle-star star-1"></div>
                                      <div class="sparkle-star star-2"></div>
                                      <div class="sparkle-star star-3"></div>
                                    </div>
                                    <div class="compare-tag tag-after">
                                      <i class="fa-solid fa-certificate"></i> ПОСЛЕ: Кристальная оптика и глянец PPF
                                    </div>
                                </div>

                                <!-- Draggable Slider Divider -->
                                <div class="bmw-slider-divider" id="bmwSliderDivider">
                                  <div class="divider-line"></div>
                                  <div class="divider-grab-handle">
                                    <i class="fa-solid fa-caret-left"></i>
                                    <i class="fa-solid fa-caret-right"></i>
                                  </div>
                                </div>

                              </div>

                              <div class="slider-hint-box">
                                <i class="fa-solid fa-arrows-left-right"></i> Передвигайте линию ползунка для сравнения результата до и после
                              </div>

                            </div>
                          </div>
                        </section>

                        <!-- ========================================================
                        SECTION 5: ОТЗЫВЫ, КАРТА И КОНТАКТЫ
       ======================================================== -->
                        <section class="page-section section-contacts" id="contacts">
                          <div class="container">

                            <div class="glass-section-card mb-40">
                              <div class="section-badge">Отзывы клиентов</div>
                              <h2 class="section-title">ОЦЕНКА 5.0 НА ЯНДЕКС КАРТАХ <br><span class="glbl-gradient-text">ОТЗЫВЫ АВТОВЛАДЕЛЬЦЕВ КРАСНОДАРА</span></h2>

                              <div class="reviews-grid">
                                <div class="review-card">
                                  <div class="review-header">
                                    <div class="reviewer-avatar">НЧ</div>
                                    <div class="reviewer-meta">
                                      <h4>Никита Черный</h4>
                                      <div class="rating-stars">
                                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                      </div>
                                    </div>
                                    <span class="yandex-verified"><i class="fa-solid fa-circle-check"></i> Яндекс</span>
                                  </div>
                                  <p class="review-body">
                                    «Давно раздражали царапины на боковых стёклах, приехал к ребятам, и мою проблему быстро и грамотно устранили, приятный сервис, специалисты знают свою работу, в боксе чисто и уютная атмосфера. Результатом доволен, такими стёкла не были даже с завода, обязательно вернусь на полировку и оклейку фар!»
                                  </p>
                                </div>

                                <div class="review-card">
                                  <div class="review-header">
                                    <div class="reviewer-avatar">С</div>
                                    <div class="reviewer-meta">
                                      <h4>Софья</h4>
                                      <div class="rating-stars">
                                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                      </div>
                                    </div>
                                    <span class="yandex-verified"><i class="fa-solid fa-circle-check"></i> Яндекс</span>
                                  </div>
                                  <p class="review-body">
                                    «Обратилась за ремонтом сколов и полировкой фар — результат превзошёл ожидания. Сколы аккуратно устранили, покрытие выглядит как заводское, никаких пятен. Фары после полировки стали заметно прозрачнее и ярче, свет теперь гораздо лучше!»
                                  </p>
                                </div>

                                <div class="review-card">
                                  <div class="review-header">
                                    <div class="reviewer-avatar">АН</div>
                                    <div class="reviewer-meta">
                                      <h4>Александр Никандрин</h4>
                                      <div class="rating-stars">
                                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                      </div>
                                    </div>
                                    <span class="yandex-verified"><i class="fa-solid fa-circle-check"></i> Яндекс</span>
                                  </div>
                                  <p class="review-body">
                                    «Никита отличный профессионал своего дела! Обратился с уже большой трещиной на лобовом, сделал всё по высшему разряду, практически не видно. Всё объяснил, дал советы. Очень приятный человек, который делает работу на 100% качественно!»
                                  </p>
                                </div>
                              </div>
                            </div>

                            <!-- Location & Interactive Map -->
                            <div class="glass-section-card">
                              <div class="contacts-grid">
                                <div class="contacts-info">
                                  <div class="section-badge">Контакты</div>
                                  <h2 class="section-title">ЖДЁМ ВАС В СТУДИИ <br><span class="glbl-gradient-text">«ГЛОБАЛ ДЕТЕЙЛИНГ»</span></h2>
                                  <p class="contacts-desc">
                                    Приезжайте на бесплатный осмотр повреждений стекла и расчёт стоимости полировки или оклейки.
                                  </p>

                                  <div class="contacts-list">
                                    <div class="contact-item">
                                      <div class="contact-icon"><i class="fa-solid fa-location-dot"></i></div>
                                      <div>
                                        <strong>Адрес:</strong>
                                        <p>г. Краснодар, микрорайон Юбилейный, проспект Чекистов, 46Б (ПГСК-32)</p>
                                      </div>
                                    </div>

                                    <div class="contact-item">
                                      <div class="contact-icon"><i class="fa-solid fa-phone"></i></div>
                                      <div>
                                        <strong>Телефон для связи:</strong>
                                        <p><a href="tel:+79528222243">+7 (952) 822-22-43</a></p>
                                      </div>