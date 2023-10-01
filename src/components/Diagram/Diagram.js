import './Diagram.css'
import DiagramBar from './DiagramBar'
function Diagram(props) {
	const dataSetsValue = props.dataSets.map(dataSet => dataSet.value)
	const maxMonthCost = Math.max(...dataSetsValue)
	return (
		<div className='diagram'>
			{props.dataSets.map((dataSet, index) => (
				<DiagramBar
					key={dataSet.label + index}
					value={dataSet.value}
					maxValue={maxMonthCost}
					label={dataSet.label}
				/>
			))}
		</div>
	)
}
export default Diagram
