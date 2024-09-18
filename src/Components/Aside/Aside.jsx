import './Aside.scss'

function Aside({data, activeItem, setActiveItem}) {
	
	return (
		<aside className="aside">
			<ul className="aside__list">
				{data.map(item=>
					<li key={item.id} className={`aside__item ${activeItem.id === item.id ? 'active' : ''}`} onClick={() => setActiveItem(item)}>{item.text}</li>
				)}
			</ul>
		</aside>
	)
}

export default Aside