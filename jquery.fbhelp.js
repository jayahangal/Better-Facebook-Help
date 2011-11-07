(function( $ ){

  // Double Dimensional array containing tab names and the setting names under the tabs.
  var links = new Array();

  // General
  links['General'] = new Array();
  links['General']['username'] = "https://www.facebook.com/settings?tab=account&section=username&t";
  links['General']['password'] = "https://www.facebook.com/settings?tab=account&section=password&t";
  links['General']['email'] = "https://www.facebook.com/settings?tab=account&section=email&t";
  links['General']['netwroks'] = "https://www.facebook.com/settings?tab=account&section=networks&t";
  links['General']['linked'] = "https://www.facebook.com/settings?tab=account&section=linked&t";
  links['General']['accounts'] = "https://www.facebook.com/settings?tab=account&section=linked&t";
  links['General']['language'] = "https://www.facebook.com/settings?tab=account&section=language&t";
  links['General']['download'] = "https://www.facebook.com/settings?tab=account";

  links['Basic Information'] = new Array();
  var basic = "http://www.facebook.com/editprofile.php?sk=basic";
  links['Basic Information']['basic'] = basic;
  links['Basic Information']['information'] = basic;  links['Basic Information']['city'] = basic;
  links['Basic Information']['hometown'] = basic; links['Basic Information']['gender'] = basic;
  links['Basic Information']['birthday'] = basic;  links['Basic Information']['interested'] = basic;
  links['Basic Information']['in'] = basic; links['Basic Information']['languages'] = basic; 
  links['Basic Information']['about'] = basic;  links['Basic Information']['me'] =  basic;

  links['Profile Picture'] = new Array();
  links['Profile Picture']['profile'] = "http://www.facebook.com/editprofile.php?sk=picture";
  links['Profile Picture']['picture'] = "http://www.facebook.com/editprofile.php?sk=picture";

  // Family and Friends
  // family, friends, relationship, children, cousin, father, mother, brother, sibling, anniversary
  links['Friends and Family'] = new Array();
  links['Friends and Family']['boy friend'] = links['Friends and Family']['girl friend'] =
  links['Friends and Family']['wife'] = links['Friends and Family']['husband'] =
  links['Friends and Family']['friends'] = links['Friends and Family']['family'] =
  links['Friends and Family']['relationship'] =  links['Friends and Family']['children'] =
  links['Friends and Family']['cousin'] = links['Friends and Family']['father'] =
  links['Friends and Family']['mother'] = links['Friends and Family']['brother'] =
  links['Friends and Family']['sister'] = links['Friends and Family']['sibling'] =
  links['Friends and Family']['anniversary'] = "http://www.facebook.com/editprofile.php?sk=relationships";

  //employer, college, university, high school, class
  links['Eduction and Work'] = new Array();
  links['Eduction and Work']['employer'] =  links['Eduction and Work']['college'] =
   links['Eduction and Work']['university'] =  links['Eduction and Work']['high school'] =
    links['Eduction and Work']['class'] = "http://www.facebook.com/editprofile.php?sk=eduwork";  

  // IM, im, chat, phone, mobile, address, website
  links['Contact Information'] = new Array();
  links['Contact Information']['IM'] = links['Contact Information']['im'] = links['Contact Information']['chat'] =
  links['Contact Information']['phone'] = links['Contact Information']['mobile'] = links['Contact Information']['address'] =
  links['Contact Information']['website'] = "http://www.facebook.com/editprofile.php?sk=contact";

  //privacy, tags, friend, requests, messages, contact, lookup, check, apps, games, websites, search, restrict, block, invites, event
  links['Privacy'] = new Array();
  links['Privacy']['privacy'] = links['Privacy']['tags'] =  links['Privacy']['friend'] =  links['Privacy']['requests'] =
   links['Privacy']['messages'] =  links['Privacy']['contact'] =  links['Privacy']['check'] =  links['Privacy']['apps']=
   links['Privacy']['games'] = links['Privacy']['websites'] =  links['Privacy']['search'] =  links['Privacy']['restrict'] =
  links['Privacy']['block'] =  links['Privacy']['invites'] =  links['Privacy']['event'] = "https://www.facebook.com/settings/?tab=privacy";


  // Security
  links['Security'] = new Array();
  links['Security']['secure'] = "https://www.facebook.com/settings?tab=security&section=browsing&t";
  links['Security']['browsing'] = "https://www.facebook.com/settings?tab=security&section=browsing&t";
  links['Security']['ssl'] =  "https://www.facebook.com/settings?tab=security&section=browsing&t";
  links['Security']['https'] = "https://www.facebook.com/settings?tab=security&section=browsing&t";
  links['Security']['login'] = "https://www.facebook.com/settings?tab=security&section=notifications&t";
  links['Security']['approvals'] = "https://www.facebook.com/settings?tab=security&section=approvals&t";
  links['Security']['password'] = "https://www.facebook.com/settings?tab=security&section=per_app_passwords&t";
  links['Security']['apps'] = "https://www.facebook.com/settings?tab=security&section=per_app_passwords&t";
  links['Security']['devices'] = "https://www.facebook.com/settings?tab=security&section=devices&t";
  links['Security']['sessions'] = "https://www.facebook.com/settings?tab=security&section=sessions&t";

  //Notifications
  links['Notifications'] = new Array();
  links['Notifications']['facebook'] = "http://www.facebook.com/settings?tab=notifications&section=Facebook&t";
  links['Notifications']['photos'] = "http://www.facebook.com/settings?tab=notifications&section=Photos&t";
  links['Notifications']['group'] = "http://www.facebook.com/settings?tab=notifications&section=Groups&t";
  links['Notifications']['pages'] = "http://www.facebook.com/settings?tab=notifications&section=Pages&t";
  links['Notifications']['events'] = "http://www.facebook.com/settings?tab=notifications&section=Events&t";
  links['Notifications']['questions'] = "http://www.facebook.com/settings?tab=notifications&section=Questions&t";
  links['Notifications']['notes'] = "http://www.facebook.com/settings?tab=notifications&section=Notes&t";
  links['Notifications']['links'] = "http://www.facebook.com/settings?tab=notifications&section=Links&t";
  links['Notifications']['video'] = "http://www.facebook.com/settings?tab=notifications&section=Video&t";
  links['Notifications']['center'] = "http://www.facebook.com/settings?tab=notifications&section=Help%20Center&t";
  links['Notifications']['wall'] = "http://www.facebook.com/settings?tab=notifications&section=Feed%20Comments&t";
  links['Notifications']['places'] = "http://www.facebook.com/settings?tab=notifications&section=Places&t";
  links['Notifications']['deals'] = "http://www.facebook.com/settings?tab=notifications&section=Deals&t";
  links['Notifications']['updates'] = "http://www.facebook.com/settings?tab=notifications&section=Other%20updates%20from%20Facebook&t";
  links['Notifications']['credits'] = "http://www.facebook.com/settings?tab=notifications&section=Credits&t";
  links['Notifications']['applications'] = "http://www.facebook.com/settings?tab=notifications&section=ext&t";
  links['Notifications']['apps'] = "http://www.facebook.com/settings?tab=notifications&section=ext&t";


 // Applications
  links['Apps'] = new Array();
  links['Apps']['applications'] = "http://www.facebook.com/settings?tab=applications";
  links['Apps']['apps'] = "http://www.facebook.com/settings?tab=applications"; 

    //Mobile
   
    links['Mobile'] = new Array();
    links['Mobile']['mobile'] = "https://www.facebook.com/settings?tab=mobile";

    // Payments
    links['Payments'] = new Array();
    links['Payments']['payments'] = "https://secure.facebook.com/settings?tab=payments";
    links['Payments']['balance'] = "https://secure.facebook.com/settings?tab=payments";
    links['Payments']['credits'] = "https://secure.facebook.com/settings?tab=payments";
    links['Payments']['methods'] = "https://www.facebook.com/login/reauth.php?next=http%3A%2F%2Fsecure.facebook.com%2Fsettings%3Ftab%3Dpayments%26section%3Dmethods";
    links['Payments']['card'] = "https://www.facebook.com/login/reauth.php?next=http%3A%2F%2Fsecure.facebook.com%2Fsettings%3Ftab%3Dpayments%26section%3Dmethods";
    links['Payments']['visa'] = "https://www.facebook.com/login/reauth.php?next=http%3A%2F%2Fsecure.facebook.com%2Fsettings%3Ftab%3Dpayments%26section%3Dmethods";
    links['Payments']['currency'] = "https://secure.facebook.com/settings?tab=payments&section=currency&t";


   // Ads
   links['Facebook Ads'] = new Array();
   links['Facebook Ads']['ads'] = "http://www.facebook.com/settings?tab=ads";
   links['Facebook Ads']['advertisement'] = "http://www.facebook.com/settings?tab=ads";
   links['Facebook Ads']['socialads'] = "http://www.facebook.com/settings?tab=ads&section=social";
   links['Facebook Ads']['thirdparty'] = "http://www.facebook.com/settings?tab=ads&section=platform";
   links['Facebook Ads']['third'] = "http://www.facebook.com/settings?tab=ads&section=platform";
   links['Facebook Ads']['party'] = "http://www.facebook.com/settings?tab=ads&section=platform";

  $.fn.limelight = function(options) {  
	 var defaults = {
		searchItem: '#search',
		width:100,
		height:100,	
    		background: '#8BB381',
  	};

  	// Extend our default options with those provided.
  	var opts = $.extend(defaults, options);

    this.each(function() {        
	var $this = $(this);
	//console.log("Limelight html:" + $this.html());
	var term = $(opts.searchItem).val();
	console.log("term:" + term);

	if (!term) {
	    $(".itemsarea").css('backgroundColor', '#8BB381'); 		
	    $this.css({
			backgroundColor:'#8BB381',
        		opacity: '1.0',
			MozBorderRadius: '0%',
    			WebkitBorderRadius: '0%',
    			KhtmlBorderRadius: '0%',
    			borderRadius: '0%'
		});
	    return;
	}
        var text = $this.text();
	console.log("text:" + text);
	var pos = 0;
	var patt = term.toLowerCase(); 
	if ((pos = text.search(patt)) >= 0) {
	    $this.css({
        	backgroundColor: 'white',
        	border: opts.border,
        	opacity: '1.0',
                        opacity: '1.0',
                        MozBorderRadius: '50%',
                        WebkitBorderRadius: '50%',
                        KhtmlBorderRadius: '50%',
                        borderRadius: '50%'
      	    });
	    $(".itemsarea").css('backgroundColor', '#617C58');	

	    var tablink = $this.find('a');
	    //console.log("href:" + tablink.attr("href"));
	    var tab = tablink.text();
	    console.log("tab:" + tab);
	    
	    // Extract the whole keyword that the term matchess
	    var keyword_array = new Array();
	    var i = pos;
	    var j = 0;
	    while(((text.charAt(i) != '\n') && (text.charAt(i) != ',')) && (i < text.length)) {
		keyword_array[j++] = text.charAt(i);
		i = i + 1;
		console.log("i: " + i + ", j:" + j);
	    }
	    var keyword = keyword_array.join(""); 
	    keyword = jQuery.trim(keyword);
	    tab = jQuery.trim(tab);

	    console.log("matched keyword:"  + keyword);
	    console.log("link:"  + links[tab][keyword]);
	    selected_link = links[tab][keyword];

	    // set the link of the tab tothe selected link
	    tablink.attr("href", selected_link);
	} else {
		var b = $(".itemsarea").css('backgroundColor');
		$this.css({
			backgroundColor: b,	
        		opacity: '0.7',
			MozBorderRadius: '0%',
                        WebkitBorderRadius: '0%',
                        KhtmlBorderRadius: '0%',
                        borderRadius: '0%'

		});
		
	}
    });
  };
})( jQuery );
