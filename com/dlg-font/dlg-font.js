var $dlgFont =(function(){
    var $dlg = $(''
        +'<div class="notepad-dlg-font">'
            +'<div class="dialogbox">'
                +'<div class="titlebar">'
                    +'<p class="title">字体</p>'
                    +'<span class="close-btn" title="关闭">✖</span>'
                +'</div>'
                +'<div class="main">'
                    +'<div class="font-family"><p>字体(F):</p></div>'
                    +'<div class="font-style"><p>字形(Y):</p></div>'
                    +'<div class="font-size"><p>大小(S):</p></div>'
                    +'<fieldset class="sample">'
                        +'<legend>示例</legend>'
                        +'<p class="sample-txt">AaBbYyZz</p>'
                    +'</fieldset>'
                    +'<div class="script">'
                        +'<label>'
                            +'脚本(R):<br>'
                            +'<select>'
                                +'<option value="西欧语言">西欧语言</option>'
                                +'<option value="中文 GB2312">中文 GB2312</option>'
                            +'</select>'
                        +'</label>'
                    +'</div>'
                    +'<input class="ok" type="button" value="确定">'
                    +'<input class="cancel" type="button" value="取消">'
                +'</div>'
            +'</div>'
        +'</div>');
    var $close = $dlg.find('.close-btn'),
        $cancel = $dlg.find('.cancel'),
        $ok = $dlg.find('.ok'),
        $sample = $dlg.find('.sample-txt'),
        $titlebar = $dlg.find('.titlebar');
    
    var fonts = ['Agency FB','Algerian','Arial','Arial Rounded MT','Axure Handwriting','Bahnschrift','Baskerville Old Face','Bauhaus 93', 'Bell MT', 'Berlin Sans FB', 'Bernard MT', 'BlackAdder ITC'],
        styles = ['常规','斜体','粗体','粗偏斜体'],
        sizes = ['8','9','10','11','12','14','16','18','20','22','24','26','28','36','48','72'];
    
    var cfg = {
        family: 'Arial',
        style: '常规',
        size: '16',
        okHandler: null
    };

    function close(){ 
        $dlg.remove();
    }
    //设置示例文字样式
    function sample(){
        $sample.css({ 
            'font-family':cfg.family, 
            'font-size':cfg.size+'pt' 
        });
    
        if(cfg.style == '斜体'){
            $sample.css({'font-style':'italic'});
            return;
        }
        if(cfg.style == '粗体'){
            $sample.css({'font-weight':'bold'});
            return;
        }
        if(cfg.style == '粗偏斜体'){
            $sample.css({
                'font-weight':'bold', 
                'font-style':'italic'
            });
            return;
        }
    }
    
    function init(){
        var listFamily = new comList();
        listFamily.show({
            container: '.font-family',
            width: '175px',
            list: fonts,
            select: fonts.indexOf(cfg.family),
            isFont: true,
            selectHandler: function(e){
                cfg.family = fonts[e];
                sample();
            }
        });
    
        var listStyle = new comList();
        listStyle.show({
            container: '.font-style',
            width: '135px',
            list: styles,
            select: styles.indexOf(cfg.style),
            isFontStyle: true,
            selectHandler: function(e){
                cfg.style = styles[e];
                sample();
            }
        });
    
        var listSize = new comList();
        listSize.show({
            container: '.font-size',
            width: '65px',
            list: sizes,
            select: sizes.indexOf(cfg.size),
            selectHandler: function(e) {
                cfg.size = sizes[e];
                sample();
            }
        });
    
        sample();
    }

    function show(conf){
        $.extend(cfg,conf);
        $('body').append($dlg);
        init();
        $dlg.find('.dialogbox').draggable({handle: $titlebar});
        
        $close.click(close);
        $cancel.click(close);
        
        $ok.click(function(){
            cfg.okHandler({
                family: cfg.family,
                style: cfg.style,
                size: cfg.size
            });
            close();
        });
        $dlg.click(function(e){
            e.stopPropagation();
        });
    }

    return{
        show:show
    }
}());
