jQuery(document).ready(function($) {


	$('[data-toggle="offcanvas"]').click(function(event) {
		/* Act on the event */
		$('#side-menu').toggleClass('hidden-xs');
	});

	/* SideMenu Accordion - Starts */
	$('.collapseable').on('show.bs.collapse', function (e) {
    	//alert('Event fired on #' + e.currentTarget.id);
    	var ele = $('#'+e.currentTarget.id).parent().find('.fa-chevron-left');
    	ele.removeClass('fa-chevron-left');
		ele.addClass('fa-chevron-down');
	});
	$('.collapseable').on('hide.bs.collapse', function (e) {
    	//alert('Event fired on #' + e.currentTarget.id);
    	var ele = $('#'+e.currentTarget.id).parent().find('.fa-chevron-down');
    	ele.removeClass('fa-chevron-down');
		ele.addClass('fa-chevron-left');
	});
	/* SideMenu Accordion  - Ends */

	/* rightside config panel  - Starts */
	var ifConfigPanelShown = false;
	$('.spin-icon').on('click',function(e){
		ifConfigPanelShown = !ifConfigPanelShown;
		if(ifConfigPanelShown == false){
			$('.theme-config').css({'right':'0px'});
		}
		else{
			$('.theme-config').css({'right':'-220px'});
		}
	});
	/* rightside config panel  - Ends */
	/* small chat btn  - starts */
	var ifChatPanelShown = false;
	$('#small-chat').on('click',function(event){
		ifChatPanelShown = !ifChatPanelShown;
		if(ifChatPanelShown == false){
			$('#chat-box').css({'visibility':'hidden'});
		}
		else{
			$('#chat-box').css({'visibility':'visible'});
		}		
	});
	/* small chat btn  - ends */

	/* proj panel tool bar - starts */
		$('#close-link').on('click', function(event) {
			/* Act on the event */
			$('#prj-panel').hide('slow', function() {
				
			});
		});;
	/* proj panel tool bar - ends */

	/* feed panel tool bar - starts */
		$('#close-link-feed').on('click', function(event) {
			/* Act on the event */
			$('#feed-panel').hide('slow', function() {
				
			});
		});;
	/* feed panel tool bar - ends */

	/* wizard panel  - starts */
		$('#close-link-wizard').on('click', function(event) {
			/* Act on the event */
			$('#wizard-panel').hide('slow', function() {
				
			});
		});;
		$('#rootwizard').bootstrapWizard(
			{
				'nextSelector': '.button-next', 
				'previousSelector': '.button-previous',
				'tabClass': 'tab-customized'
			}
		);
	/* wizard panel  - ends */

	/* Echart - Starts */
	renderChartOne();
	window.onresize = function() {
		var msg_panel = document.getElementById('msg-panel');
		renderChartOne('100%', msg_panel.clientHeight + 'px')
	};

	function renderChartOne(width, height) {
		var local_width = null;
		var local_height = null;
		if ((width!=null) & (height!=null)) {
			local_width = width;
			local_height = height;
		} else {
			local_width = '100%';
			local_height = '268px';
		}
		document.getElementById('chart_one').style.width = local_width;
		document.getElementById('chart_one').style.height = local_height;
		var chart_one = echarts.init(document.getElementById('chart_one'));
		option = {
			title: {
				text: ''
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data: ['Mail', 'Ads Alliance', 'Video Ads', 'Direct Access', 'Search Engine'],
				textStyle:{
					fontWeight:'200',
					fontSize:10
				}
			},
			toolbox: {
				feature: {
					saveAsImage: {
						title: 'Save As Image'
					}
				}
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				boundaryGap: false,
				data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
				axisLabel:{
					textStyle:{
						fontWeight:'200',
						fontSize:10
					}
				}
			}],
			yAxis: [{
				type: 'value',
				axisLabel:{
					textStyle:{
						fontWeight:'200',
						fontSize:10
					}
				}
			}],
			series: [{
				name: 'Mail',
				type: 'line',
				stack: 'Amount',
				areaStyle: {
					normal: {}
				},
				data: [120, 132, 101, 134, 90, 230, 210]
			}, {
				name: 'Ads Alliance',
				type: 'line',
				stack: 'Amount',
				areaStyle: {
					normal: {}
				},
				data: [220, 182, 191, 234, 290, 330, 310]
			}, {
				name: 'Video Ads',
				type: 'line',
				stack: 'Amount',
				areaStyle: {
					normal: {}
				},
				data: [150, 232, 201, 154, 190, 330, 410]
			}, {
				name: 'Direct Access',
				type: 'line',
				stack: 'Amount',
				areaStyle: {
					normal: {}
				},
				data: [320, 332, 301, 334, 390, 330, 320]
			}, {
				name: 'Search Engine',
				type: 'line',
				stack: 'Amount',
				label: {
					normal: {
						show: true,
						position: 'top'
					}
				},
				areaStyle: {
					normal: {}
				},
				data: [820, 932, 901, 934, 1290, 1330, 1320]
			}]
		};

		chart_one.setOption(option);
	}
	/* Echart - Ends */


});