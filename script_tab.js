const targets = document.querySelectorAll('[data-target]')
const panels = document.querySelectorAll('[panel-content]')

targets.forEach(target => {
	target.addEventListener('click', () => {
		panels.forEach(c => {
			c.classList.remove('active')
		})
		const t = document.querySelector(target.dataset.target)
		t.classList.add('active')
	})
})