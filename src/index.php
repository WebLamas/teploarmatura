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
		</div>
		<div class="page__scroll"></div>
	</main>


	<?php WeblamasTemplate::loadTemplate($templates); ?>

	<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
</body>
<?php wp_footer(); ?>

</html>