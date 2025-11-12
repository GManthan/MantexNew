// Minimal JS for interactivity; extend as needed.
document.addEventListener('DOMContentLoaded', () => {
	// placeholder: log that portfolio loaded
	console.log('Portfolio loaded');
	// Example: load projects dynamically (replace with real data later)
	const projects = [
		{ title: 'Project A', desc: 'Short description' },
		{ title: 'Project B', desc: 'Short description' }
	];
	const list = document.getElementById('project-list');
	if (list) {
		list.innerHTML = projects.map(p => `<li><strong>${p.title}</strong> — ${p.desc}</li>`).join('');
	}
});
