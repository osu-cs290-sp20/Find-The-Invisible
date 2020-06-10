(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['invisibleThing'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<button class = "
    + alias4(((helper = (helper = lookupProperty(helpers,"iconClass") || (depth0 != null ? lookupProperty(depth0,"iconClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconClass","hash":{},"data":data,"loc":{"start":{"line":1,"column":16},"end":{"line":1,"column":29}}}) : helper)))
    + ">\r\n  	<img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"photo") || (depth0 != null ? lookupProperty(depth0,"photo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photo","hash":{},"data":data,"loc":{"start":{"line":2,"column":12},"end":{"line":2,"column":21}}}) : helper)))
    + " alt="
    + alias4(((helper = (helper = lookupProperty(helpers,"alternate") || (depth0 != null ? lookupProperty(depth0,"alternate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alternate","hash":{},"data":data,"loc":{"start":{"line":2,"column":26},"end":{"line":2,"column":39}}}) : helper)))
    + ">\r\n</button>";
},"useData":true});
templates['hiddenPic'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"photo") || (depth0 != null ? lookupProperty(depth0,"photo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photo","hash":{},"data":data,"loc":{"start":{"line":1,"column":10},"end":{"line":1,"column":19}}}) : helper)))
    + "\" id=\"image\" style=\"position: fixed;\" width = \"50\" height = \"50\">\r\n<audio id=\"breakfast\">\r\n	<source src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"source") || (depth0 != null ? lookupProperty(depth0,"source") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"source","hash":{},"data":data,"loc":{"start":{"line":3,"column":14},"end":{"line":3,"column":24}}}) : helper)))
    + "\" type=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":3,"column":32},"end":{"line":3,"column":40}}}) : helper)))
    + "\">\r\n</audio>";
},"useData":true});
})();