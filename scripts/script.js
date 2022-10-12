//window.onload = function() {
//	var images = document.querySelectorAll('.minP'), index, image;
//	for (index = 0; index < images.length; index++) {
//		image = images[index];
//		image.addEventListener('mouseover', function() {
//			document.getElementById('shownImage').src = "../pictures/big/" + this.id + ".png";
//		});
//		image.addEventListener('mouseout', function() {
//			document.getElementById('shownImage').src = "../pictures/big/1.png";
//		});
//	}
//}

//Block 1
window.onload = function() {
	var images = document.querySelectorAll('.minP'), index, image;
	for (let image of images) {
		image.addEventListener('mouseover', function() {
			document.getElementById('shownImage').src = "../pictures/big/" + this.id + ".png";
		});
		image.addEventListener('mouseout', function() {
			document.getElementById('shownImage').src = "../pictures/big/1.png";
		});
	}
	//Block 2
	document.querySelectorAll('input[type=button]')[1].onclick = function() {
		if(document.querySelectorAll('input[type=text]')[0].value < 1) {
			
		}
		else {
			document.querySelectorAll('input[type=text]')[0].value = parseInt(document.querySelectorAll('input[type=text]')[0].value) - 1;
		}
	};
	document.querySelectorAll('input[type=button]')[2].onclick = function() {
		document.querySelectorAll('input[type=text]')[0].value = parseInt(document.querySelectorAll('input[type=text]')[0].value) + 1;
	};

	document.getElementById('firstB').onclick = function() {
		//alert("Hello");
		var X = document.querySelectorAll('input[type=text]')[0].value;
		var text;
		var title;
		if(X > 0) {
			title = "Покупка"
			text = "В корзину добавлено " + X;
			if(X == 1) {
				text = "В корзину добавлен " + X + " товар";
			}
			else if(X == 2 || X == 3 || X == 4) {
				text += " товара";
			}
			else {
				text += " товаров";
			}
			Notifier.success(text, title);
			document.querySelectorAll('input[type=text]')[0].value = 0;
		}
		else {
			text = "Невозможно добавить товары в корзину. Попробуйте указать количество товаров больше 0.";
			title = "Ошибка покупки"
			Notifier.error(text, title);
			document.querySelectorAll('input[type=text]')[0].value = 0;
		}
	}
}