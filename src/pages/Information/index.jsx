import React from 'react'
import classes from './Information.module.css'

const Information = () => {
	return (
		<div className={classes.Information}>
			<div className={classes.InformationItem}>
				<h3>Информация о проекте</h3>
				<p>Для входа в систему и просмотра вкладки "Профиль" используйте логин <strong>max@test.com</strong> и пароль <strong>12345</strong>. 
				<br /> 
				Это пробное тестовое задание. Данные для входа предоставленны его автором, данные в разделах "Профиль" и "Новости" получены через предоставленный им API.
				<br />
				<br />
				При разработке данного проекта я использовал следующие инструменты:
				</p>
				<ul>
					<li><strong>React</strong> (требовалось по ТЗ)</li>
					<li><strong>Redux</strong> (требовалось по ТЗ)</li>
					<li><strong>Formik</strong></li>
					<li><strong>Material-ui</strong></li>
				</ul>
			</div>
		</div>
	)
}

export default Information