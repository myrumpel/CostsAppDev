import { useState } from 'react'
import Costs from './components/Costs/Costs'
import NewCost from './components/NewCost/NewCost'
const initialCosts = [
	{
		id: 'c1',
		date: new Date(2020, 2, 10),
		name: 'MacBook',
		amount: 399.99,
	},
	{
		id: 'c2',
		date: new Date(2023, 10, 24),
		name: 'IPhone 12 Pro Max',
		amount: 600.99,
	},
	{
		id: 'c34',
		date: new Date(2023, 2, 11),
		name: 'Apple Watch',
		amount: 249.99,
	},
	{
		id: 'c33',
		date: new Date(2019, 2, 11),
		name: 'Applh',
		amount: 249.99,
	},
	{
		id: 'c32',
		date: new Date(2023, 2, 11),
		name: 'Apple Watch',
		amount: 249.99,
	},
	{
		id: 'c31',
		date: new Date(2022, 2, 11),
		name: 'Apple Watch',
		amount: 249.99,
	},
]
function App() {
	const [costs, setCosts] = useState(initialCosts)
	const addCostHandler = cost => {
		console.log(cost)
		setCosts(prevCosts => {
			return [cost, ...prevCosts]
		})
	}
	return (
		<div className='App'>
			<NewCost onAddCost={addCostHandler} />
			<Costs costs={costs} />
		</div>
	)
}

export default App
