    jQuery('.cookiesland-close').click(function(){
    document.cookie="user_cookie_check=1";
    jQuery('.cookiesland').slideUp('fast','swing');  
  });

  if(getCookie('user_cookie_check')==1) {
    jQuery('.cookiesland').hide();
  }else{
    jQuery('.cookiesland').show();
  }
  function getCookie(c_name)
  {
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++)
    {
      x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
      y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
      x=x.replace(/^\s+|\s+$/g,"");
      if (x==c_name)
      {
        return unescape(y);
      }
    }
  }
