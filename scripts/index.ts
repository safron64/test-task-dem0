document.addEventListener('DOMContentLoaded', () => {
	const modal: HTMLElement | null = document.getElementById('modal')
	const modalBody: HTMLElement | null = document.getElementById('modal-body')
	const openModalButton: HTMLElement | null = document.querySelector(
		'.demo-block__button'
	)
	const closeButton: HTMLElement | null = document.querySelector(
		'.modal__close-button'
	)

	if (!modal || !modalBody || !openModalButton || !closeButton) {
		console.error('Не удалось найти один или несколько элементов')
		return
	}

	openModalButton.addEventListener('click', () => {
		modalBody.innerHTML = `
            <h2 id="modal-title">Вход в систему</h2>
            
            <input type="text" id="email" name="email" aria-required="true" placeholder='Email/Телефон'>
            
            <input type="password" id="password" name="password" aria-required="true" placeholder='Пароль'>
            <div class="checkbox">
                <input type="checkbox" id="remember-me">
                <label for="remember-me">Запомнить пароль</label>
            </div>
            <a class="button button--secondary">Восстановить</a>
            <button class="button button--logIn">Войти</button>
            <button class="button button--signUp">Зарегистрироваться</button>
        `
		modal.style.display = 'block'
		modal.setAttribute('aria-hidden', 'false')
	})

	closeButton.addEventListener('click', () => {
		modal.style.display = 'none'
		modal.setAttribute('aria-hidden', 'true')
	})

	window.addEventListener('click', (event: MouseEvent) => {
		if (event.target === modal) {
			modal.style.display = 'none'
			modal.setAttribute('aria-hidden', 'true')
		}
	})
})
