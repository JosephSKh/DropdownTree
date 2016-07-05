$('.dropdown-tree').each(function(){
	//protos inits
    $(this).init.prototype.title = "Dropdown";
    $(this).init.prototype.data = [];
    $(this).init.prototype.clickedElement = null;
    $(this).init.prototype.clickHandler = function(target){
    	console.log(target);
    };

	var tree = $(this);

    //handlers binders
    $(this).on("click","li",function(){
    	tree.init.prototype.clickedElement = this;
    	tree.clickHandler(tree.clickedElement);
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
    	}
        $(this).append('<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">'+$(this).title+'<span class="caret"></span></button>');
        $(this).append('<ul class="dropdown-menu" aria-labelledby="dropdownMenu1"></ul>');
        for(var i = 0 ; i< $(this).data.length ; i++){
        	var dataAttrs = "";
        	if(typeof $(this).data[i].dataAttrs != "undefined"){
        		for(var d = 0 ; d<$(this).data[i].dataAttrs.length ; d++){
        			dataAttrs += " data-"+$(this).data[i].dataAttrs[d].title+"='"+$(this).data[i].dataAttrs[d].data+"' ";
        		}
        	}
        $(this).find(".dropdown-menu").append('<li'+dataAttrs+'><a href="#">'+$(this).data[i].title+'</a></li>');
        }
    };
});