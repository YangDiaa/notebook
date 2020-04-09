var $menuBar =(function(){
    var $bar = $('<div class="notepad-menubar"></div>'),
        menuData,           // 所有菜单数据
        menus = [];         // 存放五个下拉菜单
    /* 
        下拉菜单是否展开，没有展开为：-1
        展开为：n，n代表展开的是第几个菜单
        0是文件菜单，1是编辑菜单，2是格式菜单
        3是查看菜单，4是帮助菜单 
    */
    var active = -1;

    function createMenuTitle(){
        var $titles = $('<ul class="menu-title"></ul>');

        for(var i=0; i<menuData.length; i++){
            var $title = $('<li class="title"></li>');
            $title.html(menuData[i].title);
            $title.attr('data-id', i);
            $titles.append($title);
            $title.click(function(e){
                var i = Number(this.dataset.id);
                if(active == -1){
                    menus[i].css({ display:'inline-block' });
                    active = i;
                } 
                else if(active != i){
                    menus[active].css({ display: 'none' });
                    menus[i].css({ display:'inline-block' });
                    active = i;
                } 
                else{
                    menus[active].css({ display:'none' });
                    active = -1;
                }
                e.stopPropagation();
            });

            $title.hover(function(){
                if(active != -1){
                    var i = Number(this.dataset.id);
                    menus[active].css({ display:'none' });
                    menus[i].css({ display:'inline-block' });
                    active = i;
                }
            });
        }
        $bar.append($titles);
    }

    function createMenus(){
        for(var i=0; i<menuData.length; i++){
            var $menus = $('<ul class="menus"></ul>'),
                items = menuData[i].menuItems;

            for(var j=0; j<items.length; j++){
                if(items[j].title == 'hr'){
                    var $hr = $('<li class="menu-hr"></li>');
                    $menus.append($hr);
                    continue;
                }
                var $menu = $('<li class="menu-item"></li>');
                $menu.html(items[j].title);
                $menu.attr('data-x', i);
                $menu.attr('data-y', j);
                if(items[j].shortcut != ''){
                    var $shorcut = $('<span class="shortcut"></span>');
                    $shorcut.html(items[j].shortcut);
                    $menu.append($shorcut);
                }
                if(!items[j].enabled){
                    $menu.addClass('disabled');
                }
                $menus.append($menu);
                $menu.click(function(e){
                    e.stopPropagation();
                    if($(this).hasClass('disabled')) 
                        return;
                    var i = this.dataset.x, 
                        j = this.dataset.y;

                    menus[i].css({ display:'none' });
                    active = -1;
                    menuData[i].menuItems[j].handler();
                });
            }

            $menus.css({
                width: menuData[i].width,
                left: menuData[i].left,
                display: 'none'
            });
            $bar.append($menus);
            menus.push($menus);
        }
    }

/*
    设置菜单项为启用或禁用状态
    row[0-4] 代表文件、编辑、格式、查看、帮助五个菜单栏
    col 代表第几个下拉菜单项
    isEnabled true 为启用，false 为禁用
*/
    function enabled(row,col,isEnabled){
        var menuItem = menus[row].find('.menu-item')[col];
        if(isEnabled){
            $(menuItem).removeClass('disabled');
        } 
        else{
            $(menuItem).addClass('disabled');
        }
    }

    function hideMenu(){
        if(active === -1) {
            return;
        }
    
        menus[active].css({display:'none'});
        active = -1;
    }

    function show(data){
        menuData = data;
        createMenuTitle();
        createMenus();
        $('body').append($bar);
    }

    return{
        show: show,
        enabled: enabled,
        hideMenu: hideMenu
    };
}());
