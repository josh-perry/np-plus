const battleCalculatorHtml = `
<div class="widget button button_up" tabindex="0" style="left: 128px; top: 56px; width: 32px; height: 32px;">
   <a class="npplus-tooltip" npplus-tooltip="Combat Calculator">
      <div class="widget icon-doc-text txt_center icon_button" style="left: 0px; top: 16px; width: 32px;"></div>
   </a>
</div>`

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
		},
		{
			selector: 'div.widget.icon-mail.icon_button',
			tooltip: 'Diplomacy & Events',
		},
		{
			selector: 'div.widget.icon-plus-circled.icon_button',
			tooltip: 'Waypoints',
		},
		{
			selector: 'div.widget.icon-down-open.icon_button',
			tooltip: 'Ship Transfer',
		},
		{
			selector: 'div.widget.icon-up-open.icon_button',
			tooltip: 'Transfer All Ships To Star',
		},
		{
			selector: 'div.widget.icon-help.icon_button',
			tooltip: 'Help',
		},
		{
			selector: 'div.widget.icon-doc-text.icon_button',
			tooltip: 'Combat Calculator',
		},
		{
			selector: 'div.widget.icon-eye.icon_button',
			tooltip: 'View Player\'s Empire',
		},
		{
			selector: 'div.widget.icon-chart-line.icon_button',
			tooltip: 'Intel',
		}
	]

	function addTooltips() {
		for (var i = tooltipTargets.length - 1; i >= 0; i--) {
			var t = tooltipTargets[i]
			const button = $(t.selector)

			if(button.length == 0) {
				continue
			}

			button.each(function() {
				if(!$(this).parent().hasClass('npplus-tooltip')) {
					$(this).wrap(`<a class='npplus-tooltip' npplus-tooltip='${t.tooltip}'></a>`)
				}
			})
		}
	}

	waitInterval = setInterval(() => {
		addTooltips()
	}, 100)
})