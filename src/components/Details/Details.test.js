import {render, screen, cleanup} from '@testing-library/react';
import Details from './Details';

afterEach(() => {
	cleanup()
})
const dummyData = {"gender":"male","name":{"title":"Mr","first":"Finn","last":"Green"},"location":{"street":{"number":5007,"name":"Lake Road"},"city":"Taupo","state":"West Coast","country":"New Zealand","postcode":23838,"coordinates":{"latitude":"60.8092","longitude":"-44.0323"},"timezone":{"offset":"-3:30","description":"Newfoundland"}},"email":"finn.green@example.com","login":{"uuid":"53587bf2-9f73-4f62-8256-6c3772cdac90","username":"goldengorilla487","password":"billybob","salt":"L8Em0zjU","md5":"2b511b64863b10ca596ee91d3a1334c9","sha1":"f770288e8bd82006c0059aa35c62e31377b8179b","sha256":"2e367e5b8c50e8469abd669dce6a468d4cc439a6ebaa696b866166dddb3bacfa"},"dob":{"date":"1985-08-28T09:41:31.786Z","age":36},"registered":{"date":"2005-09-01T00:40:26.144Z","age":16},"phone":"(417)-867-6069","cell":"(373)-206-6761","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/48.jpg","medium":"https://randomuser.me/api/portraits/med/men/48.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/48.jpg"},"nat":"NZ"}
test('Should render Details Component', () => {
	render(	<Details data={dummyData} />);
	const detailsElement = screen.getByTestId("details-id");
	expect(detailsElement).toBeInTheDocument();
});

test('Should render Details Text', () => {
	render(	<Details data={dummyData} />);
	const detailsElement = screen.getByTestId("details-id");
	expect(detailsElement).toHaveTextContent("male");
	expect(detailsElement).toHaveTextContent("Finn");
	expect(detailsElement).toHaveTextContent("Green");
	expect(detailsElement).toHaveTextContent("Taupo");
	expect(detailsElement).toHaveTextContent("West Coast");
	expect(detailsElement).toHaveTextContent("New Zealand");
	expect(detailsElement).toHaveTextContent("finn.green@example.com");
	expect(detailsElement).toHaveTextContent("(417)-867-6069");
	expect(detailsElement).toHaveTextContent("36");
});