import CostItem from './CostItem'
import './CostList.css'
function CostList(props) {
	if (props.costs.length === 0) {
		return (
			<h2 className='costs-list__fallback'>В этом году расходов не было</h2>
		)
	}
	return props.costs.map(cost => (
		<ul className='costs-list'>
			<CostItem
				key={cost.id}
				date={cost.date}
				description={cost.name}
				amount={cost.amount}
			/>
		</ul>
	))
}
export default CostList
