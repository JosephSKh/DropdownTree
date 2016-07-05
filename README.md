# DropdownTree
Dropdown Tree is a dynamic dropdown menu based on bootstrap and jquerywidth click handlers, data handlers. With single and multi item select and ajax request for getting data

# Getting Started:
Download the `dropdowntree.js`
create a div with the class `dropdown-tree`

ex:

`<div class="dropdown dropdown-tree" id="firstDropDownTree">`

Call:

    var arr=[
    {title:1,dataAttrs:[{title:"dataattr1",data:"value1"},{title:"dataattr2",data:"value2"},{title:"dataattr3",data:"value3"}]},
    {title:2,dataAttrs:[{title:"dataattr4",data:"value4"},{title:"dataattr5",data:"value5"},{title:"dataattr6",data:"value6"}]},
    {title:3,dataAttrs:[{title:"dataattr7",data:"value7"},{title:"dataattr8",data:"value8"},{title:"dataattr9",data:"value9"}]}
    ];
    
    var options = {
	    title : "DropDown Tree",
	    data: arr,
	    clickHandler: function(element){
		    console.log(element);
	    },
    }

    $("#firstDropDownTree").HellowWorld(options);
    
#Options Description:

`title` is the text of the dropdown

`data` is the array of values will be passed to the `ul li`

`clickHandler` is a function which will be passed and handle an element click, pass a `target` variable and this will return the clicked element


#Arr Description:
`title` is the text of the element

`dataAttrs` an array of object which will add data attributes for each `li` element


#DataAttrs Description:
DataAttrs is an array of objects

`title` is the title of the data attribute .. if it's "xx" ,, then the data attribute will be `data-xx`

`data` is the data attribute value
