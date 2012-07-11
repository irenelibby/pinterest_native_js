function Pinterest()
{	
	var self = this;
	var container_id = '';

    this.initialize = function (search_field_id, button_field_id, container_id){
      var button =  document.getElementById(button_field_id) ;
      button.onclick = function() {
      	self.search(document.getElementById(search_field_id).value);
      }
      self.container_id = container_id;
    }

    this.search = function(user){
    	if(self.validate){
			xmlhttp = new XMLHttpRequest(); // TODO: check IE
    		xmlhttp.onreadystatechange=function(){
				if (xmlhttp.readyState==4 && xmlhttp.status==200){
		    		self.constructPinsList(xmlhttp.responseXML);
		    	}
			}
    		xmlhttp.open("GET",'feed.php?u=' + user,true);
			xmlhttp.send();	
    	}
    }	

    this.constructPinsList = function(response) {
    	var nodes = response.childNodes[0].childNodes[0].childNodes;
    	var pinsContainer =  document.getElementById(self.container_id); 
    	 
    	for(var i = 0; i < nodes.length; i++){
    		if(nodes[i].nodeName == 'item'){
    			var pinDiv = document.createElement("div");
    			pinDiv.innerHTML = nodes[i].childNodes[2].firstChild.nodeValue ;
    			pinsContainer.appendChild(pinDiv);
    		}	
    	}
	    	
	}

    this.validate = function() {
    	//TODO: validate text fields for proper text
    	return true;
    }
}