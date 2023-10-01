import { useState } from 'react'
import CostFilter from '../CostFilter/CostFilter'
import Card from '../UI/Card'
import CostList from './CostList'
import './Costs.css'
import CostsDiagram from './CostsDiagram'
function Costs(props) {
	const [selectedYear, setSelectedYear] = useState('2020')
	const addYearFilter = year => {
		setSelectedYear(year)
	}
	const filteredCosts = props.costs.filter(cost => {
		return cost.date.getFullYear().toString() === selectedYear
	})

	return (
		<>
			<Card className='costs'>
				<CostFilter
					onAddYearFilter={addYearFilter}
					isSelectedYear={selectedYear}
				/>
				<CostsDiagram costs={filteredCosts} />
				<CostList costs={filteredCosts} />
			</Card>
		</>
	)
}
export default Costs
