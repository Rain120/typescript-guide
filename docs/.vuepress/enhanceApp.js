/*
 * @Author: Rainy
 * @Date: 2020-02-27 16:38:27
 * @LastEditors: Rainy
 * @LastEditTime: 2021-03-12 16:16:16
 */

// import copy from './utils/copy';

export default ({ Vue, options, router, siteData, isServer }) => {
	if (typeof process === 'undefined' || process.env.VUE_ENV !== 'server') {
		router.onReady(() => {
			const { app } = router;

			app.$once('hook:mounted', () => {
				setTimeout(() => {
					const { hash } = document.location;
					if (hash.length > 1) {
						const id = decodeURIComponent(hash.substring(1));
						const element = document.getElementById(id);
						element && element.scrollIntoView();
					}
				}, 500);
			});
		});
	}

	setTimeout(() => {
		try {
			//对document的判断是防止编译的时候报错
			document &&
				(() => {
					// copy();
				})();
		} catch (e) {
			console.error(e.message);
		}
	}, 500);
};
