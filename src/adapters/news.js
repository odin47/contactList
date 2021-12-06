import {getUsersList} from "services";

const ALPHABETS = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const getUsers = async () => {
	const {data} = await getUsersList();
	const result = {};
	ALPHABETS.forEach(item => {
		const usersList = [];
		data.results.forEach(childItem => {
			if(childItem.name.last[0].toLowerCase() === item){
				usersList.push(childItem);
			}
		});		
		result[item] = usersList.sort((a, b) => {
			if(a < b) return -1
			if(a > b) return 1
			return 0;
		});
	});
	return result
}

export {getUsers}