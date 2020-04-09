var $editor = (function(){
    var $html = $(''
        + '<div class="notepad-editor">'
            + '<textarea spellcheck="false" auto-size="none"></textarea>'
        + '</div>');
  
    var $textArea = $html.find('textarea'),
        cfg = {contentHandler: null};
  
    function focus(){
        $textArea.focus();
    }
  
    $textArea.keyup(function(){
        cfg.contentHandler($textArea.val() != '');
    });
  
    function setFont(e){
        $textArea.css({
            'font-family':e.family, 
            'font-size':e.size + 'pt'
        });
        if(e.style == '斜体'){
            $textArea.css({'font-style':'italic'});
            return;
        }
        if(e.style == '粗体'){
            $textArea.css({'font-weight':'bold'});
            return;
        }
        if(e.style == '粗偏斜体'){
            $textArea.css({
                'font-weight':'bold', 
                'font-style':'italic'
            });
            return;
        }
    }
  
    function show(conf){
        $.extend(cfg,conf);
        $('body').append($html);
        $textArea.trigger('focus');
    }
  
    return{
        show: show,
        focus: focus,
        setFont: setFont
    };
}());