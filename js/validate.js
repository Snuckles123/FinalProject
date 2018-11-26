function checkPassword(str) {
	var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
	return re.test(str);
}

function validatePassword() {
	p1 = document.getElementById('password');
	p2 = document.getElementById('confirmpassword');

	if (p1.value != "" && p1.value == p2.value) {
		if (!checkPassword(p1.value)) {
			alert("The password you have entered is not valid!");
			document.getElementById('password').focus();
			return false;
		}
	} else {
		alert("Error: Please check that you've entered and confirmed your password!");
		document.getElementById('password').focus();
		return false;
	}
	return true;
}
