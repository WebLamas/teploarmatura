<?php $templates = WeblamasTemplate::get_subtemplates(); ?>

<!DOCTYPE html>
<html lang="ru">

<head>
	<?php wp_head(); ?>
</head>

<body>

	<?php WeblamasTemplate::loadTemplate();?>

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

</body>
<?php wp_footer(); ?>

</html>