function bp_ps_clear_form_elements(e){var e=jQuery(e).closest("form"),a=new Event("change");e.find(":input").each(function(){switch(this.type){case"password":case"select-multiple":case"select-one":case"text":case"email":case"date":case"url":case"search":case"textarea":jQuery(this).val("");break;case"checkbox":case"radio":this.checked=!1,this.dispatchEvent(a)}}),jQuery.removeCookie("bp_ps_request",{path:"/"}),e.find(".submit").trigger("click")}jQuery(document).ready(function(i){function n(){var o,s,c=[];"1"==BP_SEARCH.enable_ajax_search&&(o=i(document).height(),s=i("body").hasClass("rtl"),i(BP_SEARCH.autocomplete_selector).each(function(){var e,a,t,n=i(this),s=n.find('input[name="s"], input[type=search]');0<s.length&&(t={},a=(e=s.offset()).top+s.outerHeight(),t=(a=o-a)<400&&e.top>a?{collision:"flip flip"}:{my:"left top",at:"left bottom",collision:"none"},c.push(s),i(s).autocomplete({source:function(e,a){var t=e.term;t in BP_SEARCH.cache?a(BP_SEARCH.cache[t]):(e={action:BP_SEARCH.action,nonce:BP_SEARCH.nonce,search_term:e.term,per_page:BP_SEARCH.per_page},a({value:'<div class="loading-msg"><span class="bb_global_search_spinner"></span>'+BP_SEARCH.loading_msg+"</div>"}),i.ajax({url:BP_SEARCH.ajaxurl,dataType:"json",data:e,success:function(e){BP_SEARCH.cache[t]=e,a(e)}}))},minLength:2,delay:500,select:function(e,a){a=i(a.item.value).find("a").attr("href");return a&&(window.location=a),!1},focus:function(){return i(".ui-autocomplete li").removeClass("ui-state-hover"),i(".ui-autocomplete").find("li:has(a.ui-state-focus)").addClass("ui-state-hover"),!1},open:function(){i(".bp-search-ac").outerWidth(i(this).outerWidth())},position:t}).data("ui-autocomplete")._renderItem=function(e,a){return e.addClass("bp-search-ac"),0!=n.parents("header").length&&e.addClass("bp-search-ac-header"),""!=a.type_label?(i(e).data("current_cat",a.type),i("<li>").attr("class","bbls-"+a.type+"-type bbls-category").append("<div>"+a.value+"</div>").appendTo(e)):i("<li>").attr("class","bbls-"+a.type+"-type bbls-sub-item").append('<a class="x">'+a.value+"</a>").appendTo(e)})}),BP_SEARCH.forums_autocomplete&&i("#bbp-search-form, #bbp-search-index-form").each(function(){var e,a,t,n=i(this).find("#bbp_search");0<n.length&&(t={},a=(e=n.offset()).top+n.outerHeight(),t=s?{my:"right top",at:"right bottom",collision:"none"}:{my:"left top",at:"left bottom",collision:"none"},(a=o-a)<400&&e.top>a&&(t.collision="none flipfit"),i(n).autocomplete({source:function(e,a){var t=e.term;t in BP_SEARCH.cache?a(BP_SEARCH.cache[t]):(e={action:BP_SEARCH.action,nonce:BP_SEARCH.nonce,search_term:e.term,forum_search_term:!0,per_page:15},a({value:'<div class="loading-msg"><span class="bb_global_search_spinner"></span><span>'+BP_SEARCH.loading_msg+"</span></div>"}),i.ajax({url:BP_SEARCH.ajaxurl,dataType:"json",data:e,success:function(e){BP_SEARCH.cache[t]=e,a(e)}}))},minLength:2,select:function(e,a){return window.location=i(a.item.value).find("a").attr("href"),!1},focus:function(){return i(".ui-autocomplete li").removeClass("ui-state-hover"),i(".ui-autocomplete").find("li:has(a.ui-state-focus)").addClass("ui-state-hover"),!1},open:function(){i(".bp-search-ac").outerWidth(i(this).outerWidth())},position:t}).data("ui-autocomplete")._renderItem=function(e,a){return e.addClass("bp-search-ac"),i("body.forum-archive").length&&e.addClass("bp-forum-search-ac-header"),i("#bbp_search").length&&e.addClass("bp-forum-search-ac-header"),i("body.bbp-search.forum-search").length&&e.addClass("bp-forum-search-ac-header"),""!=a.type_label?(i(e).data("current_cat",a.type),i("<li>").attr("class","bbls-"+a.type+"-type bbls-category").append('<span class="bb-cat-title">'+a.value+"</span>").appendTo(e)):i("<li>").attr("class","bbls-"+a.type+"-type bbls-sub-item").append('<a class="x">'+a.value+"</a>").appendTo(e)})}))}BP_SEARCH.cache=[],n(),i([BP_SEARCH.autocomplete_selector,BP_SEARCH.form_selector].filter(Boolean).join(",")).each(function(){var e=i(this);i('input[name="bp_search"]',e).length||(i("<input>").attr({type:"hidden",name:"bp_search",value:"1"}).appendTo(e),i("<input>").attr({type:"hidden",name:"view",value:"content"}).appendTo(e))}),i(document).on("click",".bp-search-results-wrapper .item-list-tabs li a",function(e){e.preventDefault();var t=this;i(this).addClass("loading");e=i.post(BP_SEARCH.ajaxurl,{action:BP_SEARCH.action,nonce:BP_SEARCH.nonce,subset:i(this).parent().data("item"),s:BP_SEARCH.search_term,view:"content"});return e.done(function(e){var a;i(t).removeClass("loading"),""!=e&&((a=i(".bp-search-page")).after(e),a.remove()),n()}),e.fail(function(){i(t).removeClass("loading")}),!1}),i(document).on("click",".bp-search-results-wrapper .pagination-links a",function(e){e.preventDefault();var t=this;i(this).addClass("loading");var a={action:BP_SEARCH.action,nonce:BP_SEARCH.nonce,subset:i(this).parent().data("item"),s:BP_SEARCH.search_term,view:"content",list:i(this).data("pagenumber")},e=i(".bp-search-results-wrapper .item-list-tabs li.active").data("item");a.subset=e;a=i.post(BP_SEARCH.ajaxurl,a);return a.done(function(e){var a;i(t).removeClass("loading"),""!=e&&((a=i(".bp-search-page")).after(e),a.remove())}),a.fail(function(){i(t).removeClass("loading")}),!1}),i("body.bp-nouveau").on("click",".bp-search-page button.friendship-button, .bp-search-page button.group-button",function(){window.location=this.getAttribute("data-bp-nonce")})});