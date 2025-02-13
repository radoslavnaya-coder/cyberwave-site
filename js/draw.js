let cont = $('.js--text-cont'),
	text = 'Разработка сайтов',
	p = 0;

function printSmbl() {
	let timeout = Math.round(Math.random() * 100);
	cont.html(cont.html()+text[p]);
	p++;
	if (p < text.length) {
		setTimeout(printSmbl, timeout);
	}
}
setTimeout(printSmbl, 100);