import _ from 'lodash'


export function mapObjectValues(obj) {
	return _.values(obj)
}

/**获得今天和明天
 * [getTodayAndTomorrow description]
 * @return {[type]} [description]
 */
export function getTodayAndTomorrow() {
	var month = new Date().getMonth()
	var day = new Date().getDate()
	var year = new Date().getFullYear()
	return {
		today: new Date(year, month, day).getTime(),
		tomorrow: new Date(year, month, day + 1).getTime()
	}
}