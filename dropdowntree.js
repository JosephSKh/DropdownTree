var dropDownOptions = {
    title : "Dropdown",
    data : [],
    closedArrow : '<i class="fa fa-caret-right" aria-hidden="true"></i>',
    openedArrow : '<i class="fa fa-caret-down" aria-hidden="true"></i>',
    maxHeight : 300,
    multiSelect : false,
    clickHandler : function(target){},
};

(function($) {

    //data inits from options
    $.fn.DropDownTree = function(options){
    //helpers
    function RenderData(data, element){
        for(var i = 0 ; i< data.length ; i++){
            $(options.element).init.prototype.globalIdCounter = $(options.element).globalIdCounter+1;
            var dataAttrs = "";
            if(typeof data[i].dataAttrs != "undefined" && data[i].dataAttrs != null){
                for(var d = 0 ; d<data[i].dataAttrs.length ; d++){
                    dataAttrs += " data-"+data[i].dataAttrs[d].title+"='"+data[i].dataAttrs[d].data+"' ";
                }
            }
            if(!element.is("li")){
                element.append('<li id="TreeElement'+$(options.element).globalIdCounter+'"'+dataAttrs+'>'+(options.multiSelect?'<i class="fa fa-square-o select-box" aria-hidden="true"></i>':'')+'<a href="'+((typeof data[i].href != "undefined" && data[i].href!=null)?data[i].href:'#')+'">'+data[i].title+'</a></li>');
                if(data[i].data != null && typeof data[i].data !="undefined"){
                    $("#TreeElement"+$(options.element).globalIdCounter).append("<ul style='display:none'></ul>");
                    $("#TreeElement"+$(options.element).globalIdCounter).find("a").first().prepend(options.closedArrow);
                    RenderData(data[i].data, $("#TreeElement"+$(options.element).globalIdCounter).find("ul").first());
                 }
            }
            else{
                element.find("ul").append('<li id="TreeElement'+$(options.element).globalIdCounter+'"'+dataAttrs+'>'+(options.multiSelect?'<i class="fa fa-square-o select-box" aria-hidden="true"></i>':'')+'<a href="'+((typeof data[i].href != "undefined" && data[i].href!=null)?data[i].href:'#')+'">'+data[i].title+'</a></li>');
                if(data[i].data != null && typeof data[i].data !="undefined"){
                    $("#TreeElement"+$(options.element).globalIdCounter).append("<ul style='display:none'></ul>");
                    $("#TreeElement"+$(options.element).globalIdCounter).find("a").first().prepend(options.closedArrow);
                    RenderData(data[i].data, $("#TreeElement"+$(options.element).globalIdCounter).find("ul").first());
                }
            }
        }
    }

    options = $.extend({}, dropDownOptions, options, {element:this});

    options.closedArrow = '<span class="arrow">'+options.closedArrow+'</span>';
    options.openedArrow = '<span class="arrow">'+options.openedArrow+'</span>';


    //protos inits
    $(options.element).init.prototype.globalIdCounter = 0;
    $(options.element).init.prototype.clickedElement = null;

	var tree = $(options.element);

    //handlers binders
    //element click handler
    $(options.element).on("click","li",function(e){
    	tree.init.prototype.clickedElement = this;
    	options.clickHandler(tree.clickedElement);
        e.stopPropagation();
    });

    //arrow click handler close/open
    $(options.element).on("click",".arrow",function(e){
        e.stopPropagation();
        if($(this).parents("li").first().find("ul").first().is(":visible")){
            $(this).parents("li").first().find("a").first().prepend(options.closedArrow);
            $(this).parents("li").first().find("ul").first().hide();
        }else{
            $(this).parents("li").first().find("a").first().prepend(options.openedArrow);
            $(this).parents("li").first().find("ul").first().show();
        }
        $(this).remove();
    });


    //select box click handler
    $(options.element).on("click",".select-box",function(e){
        tree.init.prototype.clickedElement = this;
        e.stopPropagation();
        if($(this).hasClass("fa-square-o")){
            $(this).removeClass("fa-square-o");
            $(this).addClass("fa-check-square-o");
        }else{
            $(this).addClass("fa-square-o");
            $(this).removeClass("fa-check-square-o");
        }
    });

        $(options.element).append('<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="dropdowntree-name">'+options.title+'</span><span class="caret"></span></button>');
        $(options.element).append('<ul style="max-height: '+options.maxHeight+'px" class="dropdown-menu" aria-labelledby="dropdownMenu1"></ul>');

        RenderData(options.data,$(options.element).find("ul").first());
    


    //protos inits
    $(options.element).init.prototype.GetParents = function(){
        var jqueryClickedElement = $(options.element).clickedElement;
        return $(jqueryClickedElement).parents("li");
    };

    $(options.element).init.prototype.SetTitle = function(title){
        $(this).find(".dropdowntree-name").text(title);
    };

    $(options.element).init.prototype.GetSelected = function(title){
        var selectedElements = [];
        $(this).find(".fa-check-square-o").each(function(){
            selectedElements.push($(this).parents("li").first());
        });
        return selectedElements;
    };

};
})(jQuery);