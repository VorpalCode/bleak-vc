jQuery(function(a){function b(a){k?(a.removeClass("active"),i.removeClass("menu-active"),setTimeout(function(){a.removeClass("initial"),i.removeClass("menu-initial")},300),k=!1):(i.addClass("menu-initial"),a.addClass("initial"),setTimeout(function(){i.addClass("menu-active"),a.addClass("active")},1),k=!0)}function c(){var b=a(".post-list").masonry({itemSelector:".post",isAnimated:!1,gutter:0,columnWidth:1,transitionDuration:0}).imagesLoaded().progress(function(){b.masonry("layout")})}function d(){a("pre code").each(function(b,c){hljs.highlightBlock(c);var d=a(this),e=d.html().split(/\n/).length,f=[];for(b=1;e>b;b++)f+='<span class="line">'+b+"</span>";d.parent().addClass("codeblock").append('<div class="lines">'+f+"</div>")})}function e(){a("#wrapper").fitVids()}function f(){a('a[href^="'+window.location.origin+'"], .post-meta a, .post-tags a, #pagination a').each(function(){var b=a(this);b.hasClass("rss")||(b.addClass("js-ajax-link"),b.attr("href").indexOf("page")>-1?b.addClass("js-archive-index"):b.addClass("js-show-index"),b.attr("href").indexOf("tag")>-1&&b.addClass("js-tag-index"),b.attr("href").indexOf("author")>-1&&b.addClass("js-author-index"))})}function g(){"undefined"==typeof disqus?a(".post-comments").css({display:"none"}):a.ajax({type:"GET",url:"//"+disqus+".disqus.com/embed.js",dataType:"script",cache:!0})}function h(){c(),f(),d(),e(),g()}var i=a("html"),j=a("body");j.on("click",'[data-action="menu"]',function(){var c=(a(this).data("action"),a('[data-target="'+a(this).data("target")+'"]').not("[data-action]"));b(c)});var k=!1;j.on("click",".overlay, #menu a",function(){if(i.hasClass("menu-active")){var c=a('[data-target="menu"]').not("[data-action]");b(c)}});var j=a("body");c(),d(),e(),f(),g();var l=window.History,m=!1,n=a("#ajax-container");return l.enabled?(l.Adapter.bind(window,"statechange",function(){i.addClass("loading");var b=l.getState();a.get(b.url,function(b){var c=a(b),d=a("#ajax-container",c).contents(),e=b.match(/<title>(.*?)<\/title>/)[1];n.fadeOut(500,function(){document.title=e,n.html(d),j.removeClass(),j.addClass(a("#body-class").attr("class")),NProgress.done(),n.fadeIn(500),a(document).scrollTop(0),h(),setTimeout(function(){i.removeClass("loading")},50),m=!1})})}),a("body").on("click",".js-ajax-link",function(b){if(b.preventDefault(),m===!1){var c=l.getState(),d=a(this).prop("href"),e=a(this).attr("title")||null;d.replace(/\/$/,"")!==c.url.replace(/\/$/,"")&&(m=!0,i.addClass("loading"),NProgress.start(),l.pushState({},e,d))}}),void a("body").on("click",".js-show-post",function(){var b=a(this).parents(".post");b.addClass("initial"),setTimeout(function(){b.addClass("active")},1)})):!1});