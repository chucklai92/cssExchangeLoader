var loaderUtils = require('loader-utils');
var valideOptions = require('schema-utils');

const schema = {
  type: "object",
  properties: {
    target: {
      type: "string"
    },
    alternative: {
    	type: "string"
    }
  }
}

module.exports = function(source){
	let options = loaderUtils.getOptions(this);
	valideOptions(schema,options,{target:'',alternative:''})
	if (options.target && options.alternative){
		source = source.replace(options.target, options.alternative);
	}
	return `${source}`;
} 