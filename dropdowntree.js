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
                element.append('<li id="TreeElement'+$(this).globalIdCounter+'"'+dataAttrs+'><a href="'+((typeof data[i].href != "undefined" && data[i].href!=null)?data[i].href:'#')+'">'+data[i].title+'</a></li>');
                if(data[i].data != null && typeof data[i].data !="undefined"){
                    $("#TreeElement"+$(this).globalIdCounter).append("<ul></ul>");
                    RenderData(data[i].data, $("#TreeElement"+$(this).globalIdCounter).find("ul").first());
                 }
            }
            else{
                element.find("ul").append('<li id="TreeElement'+$(this).globalIdCounter+'"'+dataAttrs+'><a href="'+((typeof data[i].href != "undefined" && data[i].href!=null)?data[i].href:'#')+'">'+data[i].title+'</a></li>');
                if(data[i].data != null && typeof data[i].data !="undefined"){
                    $("#TreeElement"+$(this).globalIdCounter).append("<ul></ul>");
                    debugger;
                    RenderData(data[i].data, $("#TreeElement"+$(this).globalIdCounter).find("ul").first());
                }
            }
        }
    }

	//protos inits
    $(this).init.prototype.globalIdCounter = 0;
    $(this).init.prototype.title = "Dropdown";
    $(this).init.prototype.data = [];
    $(this).init.prototype.maxHeight = 300;
    $(this).init.prototype.clickedElement = null;
    $(this).init.prototype.clickHandler = function(target){
    	console.log(target);
    };

	var tree = $(this);

    //handlers binders
    $(this).on("click","li",function(e){
    	tree.init.prototype.clickedElement = this;
    	tree.clickHandler(tree.clickedElement);
        e.stopPropagation();
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
    	}
        $(this).append('<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">'+$(this).title+'<span class="caret"></span></button>');
        $(this).append('<ul style="max-height: '+$(this).maxHeight+'px" class="dropdown-menu" aria-labelledby="dropdownMenu1"></ul>');

        RenderData($(this).data,$(this).find("ul").first());
    };
});