!(function () {
  let e = document.createElement("script"),
      t = document.head || document.getElementsByTagName("head")[0];
  (e.src =
      "https://cdn.jsdelivr.net/npm/rasa-webchat@1.x.x/lib/index.js"),
      // Replace 1.x.x with the version that you want
      (e.async = !0),
      (e.onload = () => {
          sessionStorage.clear();
          window.WebChat.default(
              {
                  customData: { language: "pt" },
                  socketUrl: "rasa-server-phcsouza.cloud.okteto.net",
                  // add other props here
                  initPayload: "/boas_vindas",
                  title: 'Chatbot Retorno Seguro',
                  inputTextFieldHint: 'Digite sua mensagem...',
                  mainColor: '#014341',
                  conversationBackgroundColor: '#FFFFFF',
                  userTextColor: '',
                  userBackgroundColor: '#6E7F6D',
                  assistTextColor: '',
                  assistBackgoundColor: '#DCDCDC',
                  params: {
                      storage: 'session'
                  },
                  // autoClearCache: false,
                  // displayUnreadCount: false,
                  // onWidgetEvent: {
                  //     onChatOpen: () => { },
                  //     onChatClose: () => { },
                  //     onChatVisible: () => { },
                  //     onChatHidden: () => { }
                  // },
              },
              null
          );
      }),
      t.insertBefore(e, t.firstChild);
})();