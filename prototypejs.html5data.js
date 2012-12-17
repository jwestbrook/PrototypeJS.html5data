/*
http://github.com/jwestbrook/PrototypeJS.html5data
*/
if((typeof Prototype =='undefined') || (typeof Element == 'undefined') || (typeof Element.Methods == 'undefined'))
{
	throw("this gethtml5data/sethtml5data method requires the Prototype JavaScript framework. http://prototypejs.org/download");
}
else
{
	Element.addMethods({
		_testnativedataset: function(){
			var testelement = new Element("input",{"data-test-this-thing":"test"});
			if(typeof testelement.dataset != 'undefined' && typeof testelement.dataset.testThisThing != 'undefined')
			{
				return true;
			}
			else
			{
				return false;
			}
		},
		gethtml5data: function(element,datalabel){
			var returnobject = {};
			if(element._testnativedataset())
			{
				if(datalabel !== undefined)
				{
					returnobject[datalable.camelize()] = element.dataset[datalabel];
				}
				else
				{
					returnobject = element.dataset;
				}
			}
			else
			{
				if(datalabel !== undefined)
				{
					returnobject[datalabel.camelize()] = element.readAttribute("data-"+datalabel);
				}
				else
				{
					var label = "";
					var numberattributes = element.attributes.length;
					for(var t = 0; t < numberattributes ; t++)
					{
						if(element.attributes[t].name.match(/^data-.+/))
						{
							label = element.attributes[t].name.replace(/^data-/,'').camelize();
							returnobject[label] = element.attributes[t].value;
						}
					}
				}
			}
			return returnobject;
		},
		sethtml5data: function(element,datalabel,value){
			if(typeof value != undefined)
			{
				if(element._testnativedataset())
				{
					element.dataset[datalabel.camelize()] = value;
				}
				element.writeAttribute("data-"+datalabel.underscore().dasherize(),value);
			}
			else
			{
				delete element.dataset[datalabel.camelize()];
				element.writeAttribute("data-"+datalabel.underscore().dasherize(),null);
			}
		}
	});
}​