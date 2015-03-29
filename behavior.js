/*
	Created by: Tim Crowe aka timmyfury
	http://timmyfury.com/resume
*/

(function($){

	/*
		jQuery
	**********************************************************************/
	$.extend({

		distinct: function(array) {
			var distinct = [];

			$.each(array, function(i, v){
				if($.inArray(v, distinct) == -1){
					distinct.push(v);
				};
			});

			return distinct.sort();
		}

	});

	$.fn.extend({

		getClasses: function(){
			var classes = [];
			this.each(function(i, e){
				var classStr = $(e).attr('class');
				if(classStr != '' && classStr != null && typeof classStr != 'undefined'){
					var classList = classStr.split(/\s+/);
					for(var c = 0; c < classList.length; c++){
						classes.push(classList[c]);
					}
				}
			});
			return $.distinct(classes);
		}

	});

	/*
		Filtering
	**********************************************************************/
	$(function(){

		var addCompetencyFilter = function(target, filters, activeFilters){
				target.addClass('active-filter');
				var _activeFilters = _.flatten([activeFilters, filters]);
				return filterCompetencies(_activeFilters);
			},

			removeCompetencyFilter = function(target, filters, activeFilters){
				target.removeClass('active-filter');
				var _activeFilters = _.filter(activeFilters, function(f){ return _.indexOf(filters, f) == -1; });
				return filterCompetencies(_activeFilters);
			},

			filterCompetencies = function(activeFilters){
				console.log(activeFilters);

				var skillsListNode = $('#skills ul'),
					hideFilters = _.map(activeFilters, function(f){ return "." + f; }),
					hideSelector = ".competency:not(" + hideFilters.join(",") + ")",
					showFilters = _.map(activeFilters, function(f){ return ".competency." + f; }),
					showSelector = showFilters.join(","),
					experiences = $(".experience"),
					projects = $(".project"),
					sections = $('#work, #other');

				if(activeFilters.length){
					skillsListNode.addClass('filtering');
					$(hideSelector).hide();
					$(showSelector).show();

					experiences.hide().has(showSelector).show();
					projects.hide().has(showSelector).show();
					sections.hide().has(showSelector).show();

					clearNode.show();
				} else {
					skillsListNode.removeClass('filtering');
					$('.competency').show();
					experiences.show();
					projects.show();
					sections.show();
					clearNode.hide();
				}

				return activeFilters;
			};

		var skillsNode = $('#skills'),
			filterNodes = skillsNode.find(".filter"),
			activeFilters = [],
			instructionsNode = $('<p>Click or tap skills to filter experience. <a href="#" style="display: none;">Clear all filters.</a></p>'),
			clearNode = instructionsNode.find('a'),
			headerNode = skillsNode.find('h2')
			contentNode = skillsNode.find('.content');

		skillsNode.find('ul').before(instructionsNode);

		headerNode.on('click', function(evt){
			if ($(window).width() <= 640) {
				skillsNode.toggleClass("open");
				contentNode.slideToggle(200);
			}
		});

		clearNode.click(function(evt){
			evt.preventDefault();
			activeFilters = removeCompetencyFilter(filterNodes, activeFilters, activeFilters);
		});

		filterNodes.click(function(evt){
			var target = $(this),
				filters = target.data('filters').split(' ');

			if(target.hasClass('active-filter')){
				activeFilters = removeCompetencyFilter(target, filters, activeFilters);
			} else {
				activeFilters = addCompetencyFilter(target, filters, activeFilters);
			}
		});

		$(window).on('resize', function() {
			if ($(window).width >= 640) {
				skillsNode.addClass("open");
				contentNode.not(':visible').show();
			}
		});

	});
}(jQuery));
