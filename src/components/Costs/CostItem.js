import Card from '../UI/Card'
import CostDate from './CostDate'
import './CostItem.css'
function CostItem(props) {
	return (
		<Card className='cost-item'>
			<CostDate date={props.date} />
			<li className='cost-item__desc'>
				<h2>{props.description}</h2>
				<div className='cost-item__price'>${props.amount}</div>
			</li>
		</Card>
	)
}
export default CostItem
