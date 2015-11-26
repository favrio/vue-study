const key = "harris";
module.exports = {

	fetch() {
			return JSON.parse(localStorage.getItem(key));
		},

		save(store) {
			localStorage.setItem(key, JSON.stringify(store));
		}

};