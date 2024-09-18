import listIcon2 from '../../assets/icon_item2.svg'
import listIcon3 from '../../assets/icon_item3.svg'
import './PromoLittleList.scss'

function PromoLittleList(){
	return (
		<ul className="promoListLittle">
			<li className="promoListLittle__item">
				<img src={listIcon2} alt="icon precision" />
				<span>Мои предсказания (0)</span>
			</li>
			<li className="promoListLittle__item">
				<img src={listIcon3} alt="icon table liders" />
				<span>Таблица лидеров</span>
			</li>
		</ul>
	)
}

export default PromoLittleList