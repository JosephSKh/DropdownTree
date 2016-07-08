$('.dropdown-tree').each(function(){

    //helpers
    function RenderData(data, element){
        for(var i = 0 ; i< data.length ; i++){
            $(this).init.prototype.globalIdCounter = $(this).globalIdCounter+1;
            var dataAttrs = "";
            if(typeof data[i].dataAttrs != "undefined" && data[i].dataAttrs != null){
                for(var d = 0 ; d<data[i].dataAttrs.length ; d++){
                    dataAttrs += " data-"+data[i].dataAttrs[d].title+"='"+data[i].dataAttrs[d].data+"' ";
                }
            }
            if(!element.is("li")){
                element.append('<li id="TreeElement'+$(this).globalIdCounter+'"'+dataAttrs+'>'+($(this).multiSelect?'<i class="fa fa-square-o select-box" aria-hidden="true"></i>':'')+'<a href="'+((typeof data[i].href != "undefined" && data[i].href!=null)?data[i].href:'#')+'">'+data[i].title+'</a></li>');
                if(data[i].data != null && typeof data[i].data !="undefined"){
                    $("#TreeElement"+$(this).globalIdCounter).append("<ul style='display:none'></ul>");
                    $("#TreeElement"+$(this).globalIdCounter).find("a").first().prepend($(this).closedArrow);
                    RenderData(data[i].data, $("#TreeElement"+$(this).globalIdCounter).find("ul").first());
                 }
            }
            else{
                element.find("ul").append('<li id="TreeElement'+$(this).globalIdCounter+'"'+dataAttrs+'>'+($(this).multiSelect?'<i class="fa fa-square-o select-box" aria-hidden="true"></i>':'')+'<a href="'+((typeof data[i].href != "undefined" && data[i].href!=null)?data[i].href:'#')+'">'+data[i].title+'</a></li>');
                if(data[i].data != null && typeof data[i].data !="undefined"){
                    $("#TreeElement"+$(this).globalIdCounter).append("<ul style='display:none'></ul>");
                    $("#TreeElement"+$(this).globalIdCounter).find("a").first().prepend($(this).closedArrow);
                    RenderData(data[i].data, $("#TreeElement"+$(this).globalIdCounter).find("ul").first());
                }
            }
        }
    }

	//protos inits
    $(this).init.prototype.globalIdCounter = 0;
    $(this).init.prototype.title = "Dropdown";
    $(this).init.prototype.data = [];
    $(this).init.prototype.closedArrow = '<i class="fa fa-caret-right arrow" aria-hidden="true"></i>';
    $(this).init.prototype.openedArrow = '<i class="fa fa-caret-down arrow" aria-hidden="true"></i>';
    $(this).init.prototype.maxHeight = 300;
    $(this).init.prototype.multiSelect = false;


    $(this).init.prototype.clickedElement = null;
    $(this).init.prototype.clickHandler = function(target){
    	
    };

	var tree = $(this);

    //handlers binders
    //element click handler
    $(this).on("click","li",function(e){
    	tree.init.prototype.clickedElement = this;
    	tree.clickHandler(tree.clickedElement);
        e.stopPropagation();
    });

    //arrow click handler close/open
    $(this).on("click",".arrow",function(e){
        e.stopPropagation();
        if($(this).parents("li").first().find("ul").first().is(":visible")){
            $(this).parents("li").first().find("a").first().prepend(tree.closedArrow);
            $(this).parents("li").first().find("ul").first().hide();
        }else{
            $(this).parents("li").first().find("a").first().prepend(tree.openedArrow);
            $(this).parents("li").first().find("ul").first().show();
        }
        $(this).remove();
    });


    //select box click handler
    $(this).on("click",".select-box",function(e){
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

    //data inits from options
    $(this).init.prototype.DropDownTree = function(options){
    	if(typeof options != "undefined" && options!=null){
    		if(typeof options.title != "undefined" && options.title != null){
    			$(this).init.prototype.title = options.title;
   		 	}
   		 	if(typeof options.data != "undefined" && options.data != null){
    			$(this).init.prototype.data = options.data;
    		}
            if(typeof options.clickHandler != "undefined" && options.clickHandler != null){
                 $(this).init.prototype.clickHandler=options.clickHandler;
            }
            if(typeof options.maxHeight != "undefined" && options.maxHeight != null){
                 $(this).init.prototype.maxHeight=options.maxHeight;
            }
            if(typeof options.closedArrow != "undefined" && options.closedArrow != null){
                 $(this).init.prototype.closedArrow="<i class='arrow'>"+options.closedArrow+"</i>";
            }
            if(typeof options.openedArrow != "undefined" && options.openedArrow != null){
                 $(this).init.prototype.openedArrow="<i class='arrow'>"+options.openedArrow+"</i>";
            }
            if(typeof options.multiSelect != "undefined" && options.multiSelect != null){
                 $(this).init.prototype.multiSelect=options.multiSelect;
            }
    	}
        $(this).append('<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="dropdowntree-name">'+$(this).title+'</span><span class="caret"></span></button>');
        $(this).append('<ul style="max-height: '+$(this).maxHeight+'px" class="dropdown-menu" aria-labelledby="dropdownMenu1"></ul>');

        RenderData($(this).data,$(this).find("ul").first());
    };


    //protos inits
    $(this).init.prototype.GetParents = function(){
        var jqueryClickedElement = $(this).clickedElement;
        return $(jqueryClickedElement).parents("li");
    };

    $(this).init.prototype.SetTitle = function(title){
        console.log("caller",this);
        $(this).find(".dropdowntree-name").text(title);
    };

    $(this).init.prototype.GetSelected = function(title){
        var selectedElements = [];
        $(this).find(".fa-check-square-o").each(function(){
            selectedElements.push($(this).parents("li").first());
        });
        return selectedElements;
    };


});