import listIcon1 from '../../assets/icon_item1.svg'
import listIcon2 from '../../assets/icon_item2.svg'
import listIcon3 from '../../assets/icon_item3.svg'
import listIcon4 from '../../assets/icon_item4.svg'
import question from '../../assets/question.svg'
import './PromoList.scss'


function PromoList(){
	return (
		<ul className="promoList">
			<li className="promoList__item">
				<img src={listIcon1} alt="icon table" />
				<span>Таблица предсказаний</span>
			</li>
			<li className="promoList__item">
				<img src={listIcon2} alt="icon precision" />
				<span>Мои предсказания (0)</span>
			</li>
			<li className="promoList__item">
				<img src={listIcon3} alt="icon table liders" />
				<span>Таблица лидеров</span>
			</li>
			<li className="promoList__item">
				<img src={listIcon4} alt="icon share" />
				<span>Распылить</span>
				<img src={question} alt="icon question" className="promoList__question" />
				<p className="promoList__help promoList-help">Нужна помощь?</p>
			</li>
		</ul>
	)
}

export default PromoList