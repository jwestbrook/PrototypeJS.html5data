if(
   (typeof Prototype=='undefined') ||
   (typeof Element == 'undefined') ||
   (typeof Element.Methods=='undefined')
   )
        throw("this html5data method requires the Prototype JavaScript framework");
else
{
    Element.addMethods({
        html5data: function(element,datalabel){
            var returnobject = {};
            if(datalabel != undefined)
            {
                eval("returnobject."+datalabel.camelize()+" = '"+element.readAttribute("data-"+datalabel)+"'");
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
                        eval("returnobject."+label+" = '"+element.attributes[t].value+"'");
                    }
                }
            }
            return returnobject;
        }
    });
}