<main class="page page-swiper">
    <div class="page__wrapper">
        <div class="page__screen screen screen-main">
            <div class="screen__content">
                <?php require(THEMEPATH . 'template/header.html'); ?>
                <?php require(THEMEPATH . 'template/segment-main.html'); ?>
                <?php require(THEMEPATH . 'template/segment-categories.html'); ?>
            </div>
        </div>
        <div class="page__screen screen page__screen--blue">
            <div class="screen__content">
                <?php require(THEMEPATH . 'template/segment-systems.html'); ?>
            </div>
        </div>
        <div class="page__screen screen screen-advantages">
            <div class="screen__content">
                <?php require(THEMEPATH . 'template/segment-advantages.html'); ?>
                <?php require(THEMEPATH . 'template/segment-partners.html'); ?>
            </div>
        </div>
        <div class="page__screen screen">
            <div class="screen__content">
                <?php require(THEMEPATH . 'template/segment-sales.html'); ?>
            </div>
        </div>
        <div class="page__screen screen page__screen--blue">
            <div class="screen__content">
                <?php require(THEMEPATH . 'template/segment-projects.html'); ?>
            </div>
        </div>
        <div class="page__screen screen">
            <div class="screen__content">
                <?php require(THEMEPATH . 'template/segment-news.html'); ?>
            </div>
        </div>
        <div class="page__screen screen page__screen--blue screen-footer">
            <div class="screen__content">
                <?php require(THEMEPATH . 'template/footer.html'); ?>
            </div>
        </div>
    </div>
    <div class="page__scroll"></div>
</main>



