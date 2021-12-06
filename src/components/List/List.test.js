import {render, screen, cleanup} from '@testing-library/react';
import List from './List';

afterEach(() => {
	cleanup()
})

const dummyData = [{"gender":"male","name":{"title":"Mr","first":"Finn","last":"Green"},"location":{"street":{"number":5007,"name":"Lake Road"},"city":"Taupo","state":"West Coast","country":"New Zealand","postcode":23838,"coordinates":{"latitude":"60.8092","longitude":"-44.0323"},"timezone":{"offset":"-3:30","description":"Newfoundland"}},"email":"finn.green@example.com","login":{"uuid":"53587bf2-9f73-4f62-8256-6c3772cdac90","username":"goldengorilla487","password":"billybob","salt":"L8Em0zjU","md5":"2b511b64863b10ca596ee91d3a1334c9","sha1":"f770288e8bd82006c0059aa35c62e31377b8179b","sha256":"2e367e5b8c50e8469abd669dce6a468d4cc439a6ebaa696b866166dddb3bacfa"},"dob":{"date":"1985-08-28T09:41:31.786Z","age":36},"registered":{"date":"2005-09-01T00:40:26.144Z","age":16},"phone":"(417)-867-6069","cell":"(373)-206-6761","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/48.jpg","medium":"https://randomuser.me/api/portraits/med/men/48.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/48.jpg"},"nat":"NZ"},{"gender":"male","name":{"title":"Mr","first":"Özkan","last":"Ertepınar"},"location":{"street":{"number":8982,"name":"Tunalı Hilmi Cd"},"city":"Kastamonu","state":"Nevşehir","country":"Turkey","postcode":88831,"coordinates":{"latitude":"31.9159","longitude":"177.4537"},"timezone":{"offset":"+1:00","description":"Brussels, Copenhagen, Madrid, Paris"}},"email":"ozkan.ertepinar@example.com","login":{"uuid":"5c6419ab-a1e5-4e67-aa79-e8175b88268e","username":"orangewolf203","password":"galaxy","salt":"IgEvQFGi","md5":"302e340174f7ef42b358cdf48835038f","sha1":"ecf3d48afd73be6ac86c45925d42d524124663b2","sha256":"217134c83c9e8627bdbe4a8f9f8aff4aefa3e960d5d46ba6829de5e9498fa0f4"},"dob":{"date":"1960-04-29T04:38:46.395Z","age":61},"registered":{"date":"2017-01-17T01:23:41.140Z","age":4},"phone":"(081)-231-7464","cell":"(329)-418-1789","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/31.jpg","medium":"https://randomuser.me/api/portraits/med/men/31.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/31.jpg"},"nat":"TR"}];
test('Should render List Component', () => {
	render(	<List list={dummyData} />);
	const listElement = screen.getByTestId("list-id");
	expect(listElement).toBeInTheDocument();
});

test('Should display list if list is not empty', () => {
	render(	<List list={dummyData} />);
	const headerElement = screen.getByTestId("list-id");
	expect(headerElement).toHaveTextContent("Finn");
	expect(headerElement).toHaveTextContent("Özkan");
});

test('Should display list if list is empty', () => {
	const emptyData = [];
	render(	<List list={emptyData} />);
	const headerElement = screen.getByTestId("list-id");
	expect(headerElement).not.toHaveTextContent("Finn");
	expect(headerElement).not.toHaveTextContent("Özkan");
});