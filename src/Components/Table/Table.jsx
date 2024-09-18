import './Table.scss'

function Table({table}){
	return (
		<div className="table">
			<div className="table__head">
				<p className="table__head-text">№</p>
				<p className="table__head-text">Username</p>
				<p className="table__head-text">RP</p>
			</div>
			<ul className="table__body">
				{
					table.map(item=>
						<li className="table__body-item" key={item.id}>
							<p className="table__body-text">{item.id}</p>
							<p className={`table__body-text ${item.active ? 'table__body-name' : ''}`}>{item.username}</p>
							<p className="table__body-rp">{item.RP}</p>
						</li>

					)
				}
			</ul>
		</div>
	)
}

export default Table