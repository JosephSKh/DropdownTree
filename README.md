#***STILL UNDER CONSTRUCTION***
# DropdownTree
Dropdown Tree is a dynamic dropdown menu based on bootstrap and jquerywidth click handlers, data handlers. With single and multi item select and ajax request for getting data

#### [DEMO](https://josephskh.github.io/)

![Dropdown Tree Screenshot](http://i.imgur.com/xWIEmyz.png){:target="_blank"}

# Getting Started:
##### Include JQuery, Bootstrap and FontAwesome
Download the `dropdowntree.js` and `dropdowntree.css`
##### please refer to `DropdownTree.html` for full example
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

    $("#firstDropDownTree").DropDownTree(options);
    
#Options Description:
- `title` is the text of the dropdown
- `data` is the array of values will be passed to the `ul li`
- `clickHandler` is a function which will be passed and handle an element click, pass a `target` variable and this will return the clicked element
- `maxHeight` is the maximum height of the dropdown `ul` .. if `undefined` or `null` will defult to `300`
- `closedArrow` if a `li` has a sub menu this will be the icon of the closed arrow when closed .. defaults to font awesome `<i class="fa fa-caret-right" aria-hidden="true"></i>`
- `openedArrow` if a `li` has a sub menu this will be the icon of the opened arrow when opened .. defaults `<i class="fa fa-caret-down" aria-hidden="true"></i>`


#Arr Description:
- `title` is the text of the element
- `dataAttrs` an array of object which will add data attributes for each `li` element
- `data` is an another arraay of sub elements with the same attributes
- `href` is the HREF of the `a` element inside the `li` current element


#DataAttrs Description:
DataAttrs is an array of objects
- `title` is the title of the data attribute .. if it's "xx" ,, then the data attribute will be `data-xx`
- `data` is the data attribute value


#Functions:
- `GetParents()` returns an `array` of the full tree of the clicked element down to up


#CDNs:
##CSS:
###Bootstrap:
    `<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">`
###FontAwesome:
`<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1" crossorigin="anonymous">`

##JS:
###JQuery:
`<script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>`
###Bootstrap
`<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>`
