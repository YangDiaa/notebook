var np = {}; // 主程序对象
np.config = {
  'appContainer': '.notepad-app'
};

np.fontFamily = 'Arial'; // 默认字体
np.fontStype = '常规';  // 默认字体样式
np.fontSize = '16';    // 默认字体大小：16pt

np.fontHandler = function(e) {
  np.fontFamily = e.family;
  np.fontStype = e.style;
  np.fontSize = e.size;
  $editor.setFont(e);
};

$(function() {
  $menuBar.show(np.menuData);
  $editor.show({
    contentHandler: function(isEmpty) {
      $menuBar.enabled(1,6,isEmpty);
    }
  });
  $editor.setFont({
    family: np.fontFamily,
    style: np.fontStype,
    size: np.fontSize
  });
  
  $('body').click(function() {
    $menuBar.hideMenu();
    $editor.focus();
  });
});
