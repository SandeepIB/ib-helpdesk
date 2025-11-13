<?php

if (isset($_GET['account_error']) && !empty($_GET['account_error'])) {
	if (is_numeric($_GET['account_error'])) {
		if ($_GET['account_error'] == 1) {
			$errors['err'] = _("Invalid Email ID");
		}
	}
}

if (isset($_GET['signup_error']) && !empty($_GET['signup_error'])) {
	if (is_numeric($_GET['signup_error'])) {
		if ($_GET['signup_error'] == 1) {
			$errors['err'] = _("Please Sign UP using the Google OAuth");
		}
	}
}