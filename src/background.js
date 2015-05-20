chrome.contextMenus.create({
  title: 'Redmine のチケットを開く',
  contexts: ['selection'],
  onclick: function(info, tab) {
    ticketId = info.selectionText;
    if (!isNaN(ticketId)) {
      chrome.tabs.create({url : 'http://redmine.example.com/issues/' + ticketId});
    } else {
      alert('選択範囲がチケット番号ではありません。');
    }
  }
});
