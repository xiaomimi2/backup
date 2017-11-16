const Home = resolve => {
	require.ensure('../App.vue', () => {
		resolve(require('../App.vue'))
	})
}

const routers = [{
	path: '/',
	component: Home,
	children: [{
		path: '/',
		name: 'enter',
		component(resolve) {
			require.ensure(['../views/enter.vue'], () => {
				resolve(require('../views/enter.vue'))
			})
		}
	}, {
		path: 'device',
		name: 'device',
		component(resolve) {
			require.ensure(['../views/device.vue'], () => {
				resolve(require('../views/device.vue'))
			})
		}
	}, {
		path: 'device-index',
		name: 'device-index',
		component(resolve) {
			require.ensure(['../views/deviceIndex.vue'], () => {
				resolve(require('../views/deviceIndex.vue'))
			})
		}
	}, 
	// {
	// 	path: 'error-device',
	// 	name: 'error-device',
	// 	component(resolve) {
	// 		require.ensure(['../views/errorDevice.vue'], () => {
	// 			resolve(require('../views/errorDevice.vue'))
	// 		})
	// 	}
	// }, 
	{
		path: 'error-list',
		name: 'error-list',
		component(resolve) {
			require.ensure(['../views/otherError.vue'], () => {
				resolve(require('../views/otherError.vue'))
			})
		}
	}, {
		path: 'project',
		name: 'project',
		component(resolve) {
			require.ensure(['../views/project.vue'], () => {
				resolve(require('../views/project.vue'))
			})
		}
	}]
}, {
	path: '*',
	component: Home
}]


export default routers