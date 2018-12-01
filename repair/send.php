<?php
mail(
		"dimatu9645@gmail.com",
		"TextAjax",
		$_REQUEST["name"] . " " . $_REQUEST["phone"]
);
