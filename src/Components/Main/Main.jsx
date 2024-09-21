import './Main.scss'


import BeforePromo from '../BeforePromo/BeforePromo'
import BeginPromo from '../BeginPromo/BeginPromo'
import PromoList from '../PromoList/PromoList'
import EndingPromo from '../EndingPromo/EndingPromo'
import Table from '../Table/Table'
import EndPromo from '../EndPromo/EndPromo'
import PromoLittleList from '../PromoLittleList/PromoLittleList'
import Item from '../Item/Item'

function Main({table}) {
	
	return (
		<main className="main">
			<div className="main__box">
				<Item title="До начала промо">
					<BeforePromo />
				</Item>
				<Item title="Акция началась" SubMenu={BeginPromo}>
					<PromoList />
				</Item>
				<Item title="Акция завершается" SubMenu={EndingPromo}>
					<Table table={table} />
					<PromoList />
				</Item>
				<Item title="Акция завершена" SubMenu={EndPromo}>
					<Table table={table} />
					<PromoLittleList />
				</Item>
			</div>
			
		</main>
	)
}

export default Main