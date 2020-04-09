np.menuData = [
    { 
        title: '文件(F)',
        menuItems: [  
            {
                title: '新建(N)',
                shortcut: 'Ctrl+N',
                enabled: true,
                handler: function() { 
                    console.log('新建(N) clicked!'); 
                }
            },
            {
                title: '新窗口(W)',
                shortcut: 'Ctrl+Shift+N',
                enabled: true,
                handler: function() { 
                    console.log('新窗口(W) clicked!'); 
                }
            },
            {
                title: '打开(O)...',
                shortcut: 'Ctrl+O',
                enabled: true,
                handler: function() { 
                    console.log('打开(O) clicked!'); 
                }
            },
            {
                title: '保存(S)',
                shortcut: 'Ctrl+S',
                enabled: true,
                handler: function() { 
                    console.log('保存(S) clicked!'); 
                }
            },
            {
                title: '另存为(A)...',
                shortcut: 'Ctrl+Shift+S',
                enabled: true,
                handler: function() { 
                    console.log('另存为(A) clicked!'); 
                }
            },
            {
                title: 'hr',
                shortcut: '',
                enabled: true,
                handler: null
            },
            {
                title: '页面设置(U)...',
                shortcut: '',
                enabled: true,
                handler: function() { 
                    console.log('页面设置(U) clicked!'); 
                }
            },
            {
                title: '打印(P)...',
                shortcut: 'Ctrl+P',
                enabled: true,
                handler: function() { 
                    console.log('打印(P) clicked!'); 
                }
            },
            {
                title: 'hr',
                shortcut: '',
                enabled: true,
                handler: null
            },
            {
                title: '退出(X)',
                shortcut: '',
                enabled: true,
                handler: function() { 
                    console.log('退出(X) clicked!'); 
                }
            }
        ],
        width: '202px',
        left: '0px'
    },
    { 
        title: '编辑(E)',
        menuItems: [
            {
                title: '撤销(U)',
                shortcut: 'Ctrl+Z',
                enabled: false,
                handler: function() { 
                    console.log('撤销(U) clicked!'); 
                }
            },
            {
                title: 'hr',
                shortcut: '',
                enabled: true,
                handler: null
            },
            {
                title: '剪切(T)',
                shortcut: 'Ctrl+X',
                enabled: true,
                handler: function() { 
                    console.log('剪切(X) clicked!'); 
                }
            },
            {
                title: '复制(C)',
                shortcut: 'Ctrl+C',
                enabled: false,
                handler: function() { 
                    console.log('复制(C) clicked!'); 
                }
            },
            {
                title: '粘贴(P)',
                shortcut: 'Ctrl+V',
                enabled: true,
                handler: function() { 
                    console.log('粘贴(P) clicked!'); 
                }
            },
            {
                title: '删除(L)',
                shortcut: 'Del',
                enabled: false,
                handler: function() { 
                    console.log('删除(L) clicked!'); 
                }
            },
            {
                title: 'hr',
                shortcut: '',
                enabled: true,
                handler: null
            },
            {
                title: '使用 Bing 搜索...',
                shortcut: 'Ctrl+E',
                enabled: true,
                handler: function() { 
                    console.log('使用 Bing 搜索 clicked!'); 
                }
            },
            {
                title: '查找(F)...',
                shortcut: 'Ctrl+F',
                enabled: false,
                handler: function() { 
                    console.log('查找(F) clicked!'); 
                }
            },
            {
                title: '查找下一个(N)',
                shortcut: 'F3',
                enabled: false,
                handler: function() { 
                    console.log('查找下一个(N) clicked!'); 
                }
            },
            {
                title: '查找上一个(V)',
                shortcut: 'Shift+F3',
                enabled: false,
                handler: function() { 
                    console.log('查找上一个(V) clicked!'); 
                }
            },
            {
                title: '替换(R)...',
                shortcut: 'Ctrl+H',
                enabled: true,
                handler: function() { 
                    console.log('替换(R) clicked!'); 
                }
            },
            {
                title: '转到(G)...',
                shortcut: 'Ctrl+G',
                enabled: true,
                handler: function() { 
                    console.log('转到(G) clicked!'); 
                }
            },
            {
                title: 'hr',
                shortcut: '',
                enabled: true,
                handler: null
            },
            {
                title: '全选(A)',
                shortcut: 'Ctrl+A',
                enabled: true,
                handler: function() { 
                    console.log('全选(A) clicked!'); 
                }
            },
            {
                title: '时间/日期(D)',
                shortcut: 'F5',
                enabled: true,
                handler: function() { 
                    console.log('时间/日期(D) clicked!'); 
                }
            },
        ],
        width: '218px',
        left: '52px'
    },
    { 
        title: '格式(O)',
        menuItems: [
            {
                title: '自动换行(W)',
                shortcut: '',
                enabled: true,
                handler: function() { 
                    console.log('自动换行(W) clicked!'); 
                }
            },
            {
                title: '字体(F)...',
                shortcut: '',
                enabled: true,
                handler: function() {
                    $dlgFont.show({
                        family: np.fontFamily,
                        style: np.fontStyle,
                        size: np.fontSize,
                        okHandler: np.fontHandler
                    });
                }
            }
        ],
        width: '156px',
        left: '106px'
    },
    { 
        title: '查看(V)',
        menuItems: [
            {
                title: '缩放(Z)',
                shortcut: '',
                enabled: true,
                handler: function() { 
                    console.log('缩放(Z) clicked!'); 
                }
            },
            {
                title: '状态栏(S)',
                shortcut: '',
                enabled: true,
                handler: function() { 
                    console.log('状态栏(S) clicked!'); 
                }
            }
        ],
        width: '138px',
        left: '162px'
    },
    { 
        title: '帮助(H)',
        menuItems: [
            {
                title: '查看帮助(H)',
                shortcut: '',
                enabled: true,
                handler: function() { 
                    console.log('查看帮助(H) clicked!'); 
                }
            },
            {
                title: '发送反馈(F)',
                shortcut: '',
                enabled: true,
                handler: function() { 
                    console.log('发送反馈(F) clicked!'); 
                }
            },
            {
                title: '关于记事本(A)',
                shortcut: '',
                enabled: true,
                handler: function() { 
                    console.log('关于记事本(A) clicked!');
                }
            },
        ],
        width: '166px',
        left: '216px'
    }
  ];