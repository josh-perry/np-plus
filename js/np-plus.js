$(document).ready(() => {
	var waitInterval = null

	const tooltipTargets = [
		{
			selector: 'div.widget.icon-compass.icon_button',
			tooltip: 'Show Galaxy'
		},
		{
			selector: 'div.widget.icon-zoom-in.icon_button',
			tooltip: 'Zoom In'
		},
		{
			selector: 'div.widget.icon-zoom-out.icon_button',
			tooltip: 'Zoom Out'
		},
		{
			selector: 'div.widget.icon-home.icon_button',
			tooltip: 'View Empire'
		},
		{
			selector: 'div.widget.icon-myspace.icon_button',
			tooltip: 'Ruler'
		},
		{
			selector: 'div.widget.icon-flash.icon_button',
			tooltip: 'Quick Upgrade'
		},
		{
			selector: 'div.widget.icon-dollar.icon_button',
			tooltip: 'Bulk Infrastructure Upgrade'
		}
	]

	function addTooltips() {
		tooltipTargets.forEach((element, index, array) => {
			const button = $(element.selector)
			button.wrap(`<a npplus-tooltip='${element.tooltip}'></a>`)
		});
	}

	function canGetFirstTarget() {
		return $(tooltipTargets[0].selector).length > 0
	}

	waitInterval = setInterval(() => {
		if(canGetFirstTarget()) {
			addTooltips()
			clearInterval(waitInterval)
		}
	}, 100)
})