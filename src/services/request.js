import axios from 'axios';

//Should be in .env file
const DOMAIN_URL = 'https://randomuser.me/api/?results=120';

const getService = async (url) => {
	try {
		const response = await axios.get(
			`${DOMAIN_URL}`
		);
		return response;
	} catch (err) {
		console.log(err);
	}
};

export default getService;
