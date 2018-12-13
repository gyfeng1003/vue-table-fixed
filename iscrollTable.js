// 统一使用
const iScollProbe = require('./iscroll-probe');
let scroller = null;
let Selector = "";
export function createIScroller(selector) {
	Selector = selector;
	scroller = new IScroll(Selector, {
		preventDefault: false,  // 阻止浏览器滑动默认行为
		probeType: 3, //需要使用 iscroll-probe.js 才能生效 probeType ： 1 滚动不繁忙的时候触发 probeType ： 2 滚动时每隔一定时间触发 probeType ： 3   每滚动一像素触发一次
		mouseWheel: true, //是否监听鼠标滚轮事件。
		scrollX: true,  // 启动x轴滑动
		scrollY: true,  // 启动y轴滑动
		// momentum: false,
		lockDirection: false,
		snap: false, //自动分割容器，用于制作走马灯效果等。Options.snap:true// 根据容器尺寸自动分割
		//snapSpeed: 400,
		scrollbars: false, //是否显示默认滚动条
		freeScroll: false, //主要在上下左右滚动都生效时使用，可以向任意方向滚动。
		deceleration: 0.0001, //滚动动量减速越大越快，建议不大于 0.01,默认:0.0006
		disableMouse: true, //是否关闭鼠标事件探测。如知道运行在哪个平台，可以开启它来加速。
		disablePointer: true, //是否关闭指针事件探测。如知道运行在哪个平台，可以开启它来加速。
		disableTouch: false, //是否关闭触摸事件探测。如知道运行在哪个平台，可以开启它来加速。
		eventPassthrough: false, //使用 IScroll 的横轴滚动时，如想使用系统立轴滚动并在横轴上生效，请开启。
		bounce: true //是否启用弹力动画效果，关掉可以加速
	});
	scroller.on('scroll', updatePosition);
	scroller.on('scrollEnd', updatePosition);
	scroller.on('beforeScrollStart', function () {
		scroller.refresh();
	});

	function updatePosition() {
		let frozenCols = document.querySelectorAll(selector + ' table tr td.cols');
		let frozenRows = document.querySelectorAll(selector + ' table tr th.rows');
		let frozenCrosses = document.querySelectorAll(selector + ' table tr th.cross');
		for (let i = 0; i < frozenCols.length; i++) {
			frozenCols[i].style.transform = 'translate(' + -1 * this.x + 'px, 0px) translateZ(0px)';
		}
		for (let i = 0; i < frozenRows.length; i++) {
			frozenRows[i].style.transform = 'translate(0px, ' + -1 * this.y + 'px) translateZ(0px)';
		}
		for (let i = 0; i < frozenCrosses.length; i++) {
			frozenCrosses[i].style.transform = 'translate(' + -1 * this.x + 'px,' + -1 * this.y + 'px) translateZ(0px)';
		}
	}

	return scroller;
}

export function refreshScroller() {
	if (scroller === null) {
		console.error("先初始化scroller");
		return;
	}
	setTimeout(() => {
		scroller.refresh();
		scroller.scrollTo(0, 0);
		let frozenCols = document.querySelectorAll(Selector + ' table tr td.cols');
		let frozenRows = document.querySelectorAll(Selector + ' table tr th.rows');
		let frozenCrosses = document.querySelectorAll(Selector + ' table tr th.cross');
		for (let i = 0; i < frozenCols.length; i++) {
			frozenCols[i].style.transform = 'translate(0px, 0px) translateZ(0px)';
		}
		for (let i = 0; i < frozenRows.length; i++) {
			frozenRows[i].style.transform = 'translate(0px, 0px) translateZ(0px)';
		}
		for (let i = 0; i < frozenCrosses.length; i++) {
			frozenCrosses[i].style.transform = 'translate(0px, 0px) translateZ(0px)';
		}
	}, 0);
}
