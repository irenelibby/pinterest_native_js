<?php
header("Content-type: text/xml"); 
echo file_get_contents('http://pinterest.com/'.$_GET["u"].'/feed.rss');



