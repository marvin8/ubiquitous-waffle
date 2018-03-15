var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) { 
  var element = elements[i];

  for (var j = 0; j < element.childNodes.length; j++) {
    var node = element.childNodes[j];

    if (node.nodeType === 3) {
      var text = node.nodeValue;
      var replacedText1 = text.replace(/money laundering/g, 'financial freedom');
      var replacedText2 = replacedText1.replace(/Money laundering/g, 'Financial freedom');
      var replacedText3 = replacedText2.replace(/Money Laundering/g, 'Financial Freedom');

      if (replacedText3 !== text) {
          element.replaceChild(document.createTextNode(replacedText3), node);
      }
    }
  } 
}
