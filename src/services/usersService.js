import getService from "./request";

const getUsersList = async (keyword) => {
	const url = `/news?keyword=${keyword}`;
	const data = await getService(url);
	return data
}

export {getUsersList}