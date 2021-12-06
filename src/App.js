import React, {useState, useEffect} from 'react';
import Layout from 'components/Layout';
import Menu from 'components/Menu';
import List from 'components/List';
import Modal from 'components/Modal';
import Details from 'components/Details';
import {getUsers} from 'adapters';
import './App.scss';

const GlobalContext = React.createContext(null);
function App() {
	const [state, setState] = useState({
		selected: 'a',
		list: {},
		currentContact: {}
	});

	const fetchData = async () => {
		const response = await getUsers();
		console.log(response);
		setState(prevState => ({
			...prevState,
			list: response
		}))
	}

	const handleSelect = (value) => {
		setState(prevState => ({
			...prevState,
			selected: value
		}))
	}

	const handleContact = (value) => {
		setState(prevState => ({
			...prevState,
			currentContact: value
		}))
	}

	const closeContact = () => {
		setState(prevState => ({
			...prevState,
			currentContact: {}
		}))
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<GlobalContext.Provider value={state}>
			<Layout>
				{
					Object.keys(state.list).length > 0 && <>
						<Menu list={Object.keys(state.list)} handleSelect={handleSelect}/>
						<List list={state.list[state.selected]} handleContact={handleContact}/>
					</> 
				}
			</Layout>
			<Modal isOpen={Object.keys(state.currentContact).length > 0}>
				<Details
					data={state?.currentContact}
					handleClose={closeContact}
				/>
			</Modal>
		</GlobalContext.Provider>
	);
}

export {GlobalContext};
export default App;
