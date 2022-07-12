<?php $templates = WeblamasTemplate::get_subtemplates(); ?>

<!DOCTYPE html>
<html lang="ru">

<head>
	<link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
	<?php wp_head(); ?>
</head>

<body>

	<main class="page page-swiper">
		<div class="page__wrapper">
			<div class="page__screen screen">
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
			<div class="page__screen screen">
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
			<div class="page__screen screen page__screen--blue">
				<div class="screen__content">
					<?php require(THEMEPATH . 'template/footer.html'); ?>
				</div>
			</div>
		</div>
		<div class="page__scroll"></div>
	</main>

	<div id="form-callme" class="form-callme">
		<div data-fancybox-close class="close">
			<span></span>
			<span></span>
		</div>
		<div class="form-callme__body">
			<div class="form-callme__content">
				<div class="form-callme__title">Замовлення виклику</div>
				<div class="form-callme__text">Оберіть регіон, залиште номер телефону, і ми Вам зателефонуємо.</div>
			</div>
			<?php echo do_shortcode('[contact-form-7 id="form-popup"]'); ?>
		</div>
	</div>

	<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
</body>
<?php wp_footer(); ?>

</html>