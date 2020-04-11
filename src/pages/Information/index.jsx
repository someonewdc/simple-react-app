import React from 'react'
import classes from './Information.module.css'

const Information = () => {
	return (
		<div className={classes.Information}>
			<div className={classes.InformationItem}>
				<h3>Информация о проекте</h3>
				<p>Для входа в систему и просмотра вкладки "Профиль" используйте логин <strong>max@test.com</strong> и пароль <strong>12345</strong>. 
				<br /> 
				Это пробное тестовое задание, поэтому данные для входа предоставленны его автором, а данные в разделах "Профиль" и "Новости" получены через предоставленный им API.
				<br />
				<br />
				При разработке данного проекта я использовал следующие инструменты:
				</p>
				<ul>
					<li><strong>React</strong></li>
					<li><strong>Redux</strong></li>
					<li><strong>Formik</strong></li>
					<li><strong>Material-ui</strong></li>
				</ul>
			</div>
		</div>
	)
}

export default Information